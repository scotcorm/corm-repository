import NoteComment from '../models/notecomment.model.js';

export const createNoteComment = async (req, res, next) => {
  try {
    const { content, noteId, userId } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(403, 'You are not allowed to create this comment')
      );
    }

    const newNoteComment = new NoteComment({
      content,
      noteId,
      userId,
    });
    await newNoteComment.save();

    res.status(200).json(newNoteComment);
  } catch (error) {
    next(error);
  }
};

export const getNoteComments = async (req, res, next) => {
  try {
    const notecomments = await NoteComment.find({
      notecommentId: req.params.noteId,
    }).sort({
      createdAt: -1,
    });
    res.status(200).json(notecomments);
  } catch (error) {
    next(error);
  }
};

// export const likeNoteComment = async (req, res, next) => {
//   try {
//     const notecomment = await NoteComment.findById(req.params.notecommentId);
//     if (!notecomment) {
//       return next(errorHandler(404, 'Comment not found'));
//     }
//     const userIndex = notecomment.likes.indexOf(req.user.id);
//     if (userIndex === -1) {
//       notecomment.numberOfLikes += 1;
//       notecomment.likes.push(req.user.id);
//     } else {
//       notecomment.numberOfLikes -= 1;
//       notecomment.likes.splice(userIndex, 1);
//     }
//     await notecomment.save();
//     res.status(200).json(notecomment);
//   } catch (error) {
//     next(error);
//   }
// };

// export const editNoteComment = async (req, res, next) => {
//   try {
//     const notecomment = await NoteComment.findById(req.params.notecommentId);
//     if (!notecomment) {
//       return next(errorHandler(404, 'Note Comment not found'));
//     }
//     if (notecomment.userId !== req.user.id && !req.user.isAdmin) {
//       return next(
//         errorHandler(403, 'You are not allowed to edit this comment')
//       );
//     }

//     const editedNoteComment = await NoteComment.findByIdAndUpdate(
//       req.params.notecommentId,
//       {
//         content: req.body.content,
//       },
//       { new: true }
//     );
//     res.status(200).json(editedNoteComment);
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteComment = async (req, res, next) => {
//   try {
//     const comment = await Comment.findById(req.params.commentId);
//     if (!comment) {
//       return next(errorHandler(404, 'Comment not found'));
//     }
//     if (comment.userId !== req.user.id && !req.user.isAdmin) {
//       return next(
//         errorHandler(403, 'You are not allowed to delete this comment')
//       );
//     }
//     await Comment.findByIdAndDelete(req.params.commentId);
//     res.status(200).json('Comment has been deleted');
//   } catch (error) {
//     next(error);
//   }
// };

// export const getcomments = async (req, res, next) => {
//   if (!req.user.isAdmin)
//     return next(errorHandler(403, 'You are not allowed to get all comments'));
//   try {
//     const startIndex = parseInt(req.query.startIndex) || 0;
//     const limit = parseInt(req.query.limit) || 9;
//     const sortDirection = req.query.sort === 'desc' ? -1 : 1;
//     const comments = await Comment.find()
//       .sort({ createdAt: sortDirection })
//       .skip(startIndex)
//       .limit(limit);
//     const totalComments = await Comment.countDocuments();
//     const now = new Date();
//     const oneMonthAgo = new Date(
//       now.getFullYear(),
//       now.getMonth() - 1,
//       now.getDate()
//     );
//     const lastMonthComments = await Comment.countDocuments({
//       createdAt: { $gte: oneMonthAgo },
//     });
//     res.status(200).json({ comments, totalComments, lastMonthComments });
//   } catch (error) {
//     next(error);
//   }
// };
