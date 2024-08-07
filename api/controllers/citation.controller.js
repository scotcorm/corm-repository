import Citation from '../models/citation.model.js';
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create a Citation'));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newCitation = new Citation({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedCitation = await newCitation.save();
    res.status(201).json(savedCitation);
  } catch (error) {
    next(error);
  }
};

export const getcitations = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 3;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    // add limiters like localhost:3000/api/citation/getcitations?limit=1
    const citations = await Citation.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.license && { license: req.query.license }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.citationId && { _id: req.query.citationId }),
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

    const totalCitations = await Citation.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthCitations = await Citation.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      citations,
      totalCitations,
      lastMonthCitations,
    });
  } catch (error) {
    next(error);
  }
};

// export const getallcitations = async (req, res, next) => {
//   try {
//     const startIndex = parseInt(req.query.startIndex) || 0;
//     //const limit = parseInt(req.query.limit) || 9;
//     const sortDirection = req.query.order === 'asc' ? 1 : -1;
//     // add limiters like localhost:3000/api/citation/getcitations?limit=1
//     const citations = await Citation.find({
//       ...(req.query.userId && { userId: req.query.userId }),
//       ...(req.query.license && { license: req.query.license }),
//       ...(req.query.slug && { slug: req.query.slug }),
//       ...(req.query.citationId && { _id: req.query.citationId }),
//       ...(req.query.searchTerm && {
//         $or: [
//           { title: { $regex: req.query.searchTerm, $options: 'i' } },
//           { content: { $regex: req.query.searchTerm, $options: 'i' } },
//         ],
//       }),
//     })
//       .sort({ updatedAt: sortDirection })
//       .skip(startIndex)
//       .limit(limit);

//     const totalCitations = await Citation.countDocuments();

//     const now = new Date();

//     const oneMonthAgo = new Date(
//       now.getFullYear(),
//       now.getMonth() - 1,
//       now.getDate()
//     );

//     const lastMonthCitations = await Citation.countDocuments({
//       createdAt: { $gte: oneMonthAgo },
//     });

//     res.status(200).json({
//       citations,
//       totalCitations,
//       lastMonthCitations,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

export const deletecitation = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, 'You are not allowed to delete this citation')
    );
  }
  try {
    await Citation.findByIdAndDelete(req.params.citationId);
    res.status(200).json('The citation has been deleted');
  } catch (error) {
    next(error);
  }
};

export const updatecitation = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, 'You are not allowed to update this citation')
    );
  }
  try {
    const updatedCitation = await Citation.findByIdAndUpdate(
      req.params.citationId,
      {
        $set: {
          title: req.body.title,
          creator: req.body.creator,
          source: req.body.source,
          sourceurl: req.body.sourceurl,
          content: req.body.content,
          license: req.body.license,
          image: req.body.image,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedCitation);
  } catch (error) {
    next(error);
  }
};
