import Note from '../models/note.model.js';
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create a Note'));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newNote = new Note({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    next(error);
  }
};

export const getnotes = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 3;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    // add limiters like localhost:3000/api/citation/getcitations?limit=1
    const notes = await Note.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.noteId && { _id: req.query.noteId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalNotes = await Note.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthNotes = await Note.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      notes,
      totalNotes,
      lastMonthNotes,
    });
  } catch (error) {
    next(error);
  }
};

// export const getallnotes = async (req, res, next) => {
//   try {
//     const startIndex = parseInt(req.query.startIndex) || 0;
//     const limit = parseInt(req.query.limit) || 3;
//     const sortDirection = req.query.order === 'asc' ? 1 : -1;
//     const notes = await Note.find({
//       ...(req.query.userId && { userId: req.query.userId }),
//       ...(req.query.slug && { slug: req.query.slug }),
//       ...(req.query.noteId && { _id: req.query.noteId }),
//       ...(req.query.searchTerm && {
//         $or: [
//           { month: { $regex: req.query.searchTerm, $options: 'i' } },
//           { agent: { $regex: req.query.searchTerm, $options: 'i' } },
//         ],
//       }),
//     })
//       .sort({ updatedAt: sortDirection })
//       .skip(startIndex)
//       .limit(limit);

//     const totalNotes = await Note.countDocuments();

//     const now = new Date();

//     const oneMonthAgo = new Date(
//       now.getFullYear(),
//       now.getMonth() - 1,
//       now.getDate()
//     );

//     const lastMonthNotes = await Note.countDocuments({
//       createdAt: { $gte: oneMonthAgo },
//     });

//     res.status(200).json({
//       notes,
//       totalNotes,
//       lastMonthNotes,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// create routes then update the controller
// then set an onClick Event Listener on Dash page for delete button

export const deletenote = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this note'));
  }
  try {
    await Note.findByIdAndDelete(req.params.noteId);
    res.status(200).json('The note has been deleted');
  } catch (error) {
    next(error);
  }
};

export const updatenote = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this note'));
  }
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.noteId,
      {
        $set: {
          date: req.body.date,
          title: req.body.title,
          category: req.body.category,
          image: req.body.image,
          content: req.body.content,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};
