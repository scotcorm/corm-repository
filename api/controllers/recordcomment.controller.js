import RecordComment from '../models/recordcomment.model.js';

export const createRecordComment = async (req, res, next) => {
  // try {
  //   const { content, recordId, userId } = req.body;
  //   if (userId !== req.user.id) {
  //     return next(
  //       errorHandler(403, 'You are not allowed to create this comment')
  //     );
  //   }

  //   const newRecordComment = new RecordComment({
  //     content,
  //     recordId,
  //     userId,
  //   });
  //   await newRecordComment.save();

  //   res.status(200).json(newRecordComment);
  // } catch (error) {
  //   next(error);
  // }

  try {
    const { content, recordId, userId } = req.body;
    if (userId !== req.user.id) {
      return next(
        errorHandler(403, 'You are not allowed to create this comment')
      );
    }
    const newRecordComment = new RecordComment({
      content,
      recordId,
      userId,
    });
    await newRecordComment.save();
    res.status(200).json(newRecordComment);
  } catch (error) {
    next(error);
  }
};

export const getRecordComments = async (req, res, next) => {
  try {
    const recordcomments = await RecordComment.find({
      recordId: req.params.recordId,
    }).sort({
      createdAt: -1,
    });
    res.status(200).json(recordcomments);
  } catch (error) {
    next(error);
  }
};

// export const likeRecordComment = async (req, res, next) => {
//   try {
//     const recordcomment = await RecordComment.findById(
//       req.params.recordcommentId
//     );
//     if (!recordcomment) {
//       return next(errorHandler(404, 'Comment not found'));
//     }
//     const userIndex = recordcomment.likes.indexOf(req.user.id);
//     if (userIndex === -1) {
//       recordcomment.numberOfLikes += 1;
//       recordcomment.likes.push(req.user.id);
//     } else {
//       recordcomment.numberOfLikes -= 1;
//       recordcomment.likes.splice(userIndex, 1);
//     }
//     await recordcomment.save();
//     res.status(200).json(recordcomment);
//   } catch (error) {
//     next(error);
//   }
// };
// export const editRecordComment = async (req, res, next) => {
//   try {
//     const recordcomment = await RecordComment.findById(
//       req.params.recordcommentId
//     );
//     if (!recordcomment) {
//       return next(errorHandler(404, 'Record Comment not found'));
//     }
//     if (recordcomment.userId !== req.user.id && !req.user.isAdmin) {
//       return next();
//       errorHandler(403, 'You are not allowed to edit this comment');
//     }
//     const editedRecordComment = await RecordComment.findByIdAndUpdate(
//       req.params.recordcommentId,
//       {
//         content: req.body.content,
//       },
//       { new: true }
//     );
//     res.status(200).json(editedRecordComment);
//   } catch (error) {
//     next(error);
//   }
// };
// export const deleteRecordComment = async (req, res, next) => {
//   try {
//     const comment = await Comment.findById(req.params.recordcommentId);
//     if (!comment) {
//       return next(errorHandler(404, 'Comment not found'));
//     }
//     if (comment.userId !== req.user.id && !req.user.isAdmin) {
//       return next(
//         errorHandler(403, 'You are not allowed to delete this comment')
//       );
//     }
//     await Comment.findByIdAndDelete(req.params.recordcommentId);
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
//};
