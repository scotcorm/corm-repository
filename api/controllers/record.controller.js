import Record from '../models/record.model.js';
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create a Record'));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newRecord = new Record({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    next(error);
  }
};

export const getrecords = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const records = await Record.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.recordId && { _id: req.query.recordId }),
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

    const totalRecords = await Record.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthRecords = await Record.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      records,
      totalRecords,
      lastMonthRecords,
    });
  } catch (error) {
    next(error);
  }
};

export const deleterecord = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this record'));
  }
  try {
    await Record.findByIdAndDelete(req.params.recordId);
    res.status(200).json('The record has been deleted');
  } catch (error) {
    next(error);
  }
};

export const updaterecord = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this record'));
  }
  try {
    const updatedRecord = await Record.findByIdAndUpdate(
      req.params.recordId,
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,
          image: req.body.image,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedRecord);
  } catch (error) {
    next(error);
  }
};
