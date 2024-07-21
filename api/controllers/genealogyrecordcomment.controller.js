import GenealogyrecordComment from '../models/genealogyrecordcomment.model.js';

export const createGenealogyrecordComment = async (req, res, next) => {
  try {
    const { content, genealogyrecordId, userId } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(
          403,
          'You are not allowed to create this Genealogy record comment'
        )
      );
    }

    const newGenealogyrecordComment = new GenealogyrecordComment({
      content,
      genealogyrecordId,
      userId,
    });
    await newGenealogyrecordComment.save();

    res.status(200).json(newGenealogyrecordComment);
  } catch (error) {
    next(error);
  }
};

export const getGenealogyrecordComments = async (req, res, next) => {
  try {
    const genealogyrecordcomments = await GenealogyrecordComment.find({
      genealogyrecordId: req.params.genealogyrecordId,
    }).sort({
      createdAt: -1,
    });
    res.status(200).json(genealogyrecordcomments);
  } catch (error) {
    next(error);
  }
};

export const likeGenealogyrecordComment = async (req, res, next) => {
  try {
    const genealogyrecordcomment = await GenealogyrecordComment.findById(
      req.params.genealogyrecordcommentId
    );
    if (!genealogyrecordcomment) {
      return next(errorHandler(404, 'Comment not found'));
    }
    const userIndex = genealogyrecordcomment.likes.indexOf(req.user.id);
    if (userIndex === -1) {
      genealogyrecordcomment.numberOfLikes += 1;
      genealogyrecordcomment.likes.push(req.user.id);
    } else {
      genealogyrecordcomment.numberOfLikes -= 1;
      genealogyrecordcomment.likes.splice(userIndex, 1);
    }
    await genealogyrecordcomment.save();
    res.status(200).json(genealogyrecordcomment);
  } catch (error) {
    next(error);
  }
};

export const editGenealogyrecordComment = async (req, res, next) => {
  try {
    const genealogyrecordcomment = await GenealogyrecordComment.findById(
      req.params.genealogyrecordcommentId
    );
    if (!genealogyrecordcomment) {
      return next(errorHandler(404, 'Genealogy Record Comment not found'));
    }
    if (genealogyrecordcomment.userId !== req.user.id && !req.user.isAdmin) {
      return next(
        errorHandler(403, 'You are not allowed to edit this comment')
      );
    }

    const editedGenealogyrecordComment =
      await GenealogyrecordComment.findByIdAndUpdate(
        req.params.genealogyrecordcommentId,
        {
          content: req.body.content,
        },
        { new: true }
      );
    res.status(200).json(editedGenealogyrecordComment);
  } catch (error) {
    next(error);
  }
};

export const deleteGenealogyrecordComment = async (req, res, next) => {
  try {
    const comment = await GenealogyrecordComment.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(404, 'Comment not found'));
    }
    if (comment.userId !== req.user.id && !req.user.isAdmin) {
      return next(
        errorHandler(403, 'You are not allowed to delete this comment')
      );
    }
    await GenealogyrecordComment.findByIdAndDelete(req.params.commentId);
    res.status(200).json('Comment has been deleted');
  } catch (error) {
    next(error);
  }
};

export const getallgenealogyrecordcomments = async (req, res, next) => {
  if (!req.user.isAdmin)
    return next(errorHandler(403, 'You are not allowed to get all comments'));
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === 'desc' ? -1 : 1;
    const genealogyrecordcomments = await GenealogyrecordComment.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);
    const totalGenealogyrecordComments =
      await GenealogyrecordComment.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthRecordComments = await GenealogyrecordComment.countDocuments(
      {
        createdAt: { $gte: oneMonthAgo },
      }
    );
    res.status(200).json({
      genealogyrecordcomments,
      totalGenealogyrecordComments,
      lastMonthRecordComments,
    });
  } catch (error) {
    next(error);
  }
};
