import Genealogyrecord from '../models/genealogyrecord.model.js';
import { errorHandler } from '../utils/error.js';

export const creategenealogyrecord = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(
      errorHandler(403, 'You are not allowed to create a Genealogy Record')
    );
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newGenealogyrecord = new Genealogyrecord({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedGenealogyrecord = await newGenealogyrecord.save();
    res.status(201).json(savedGenealogyrecord);
  } catch (error) {
    next(error);
  }
};

export const getgenealogyrecords = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 3;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const genealogyrecords = await Genealogyrecord.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.genealogyrecordId && { _id: req.query.genealogyrecordId }),
      ...(req.query.searchTerm && {
        $or: [
          { month: { $regex: req.query.searchTerm, $options: 'i' } },
          { agent: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalGenealogyrecords = await Genealogyrecord.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthGenealogyrecords = await Genealogyrecord.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      genealogyrecords,
      totalGenealogyrecords,
      lastMonthGenealogyrecords,
    });
  } catch (error) {
    next(error);
  }
};

// create routes then update the controller
// then set an onClick Event Listener on Dash page for delete button

export const deletegenealogyrecord = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this record'));
  }
  try {
    await Genealogyrecord.findByIdAndDelete(req.params.genealogyrecordId);
    res.status(200).json('The genealogy record has been deleted');
  } catch (error) {
    next(error);
  }
};

export const updategenealogyrecord = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this record'));
  }
  try {
    const updatedGenealogyrecord = await Genealogyrecord.findByIdAndUpdate(
      req.params.genealogyrecordId,
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
    res.status(200).json(updatedGenealogyrecord);
  } catch (error) {
    next(error);
  }
};
