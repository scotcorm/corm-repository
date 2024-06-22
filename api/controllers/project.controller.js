import Project from '../models/project.model.js';
import { errorHandler } from '../utils/error.js';

export const createproject = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create a Project'));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newProject = new Project({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    next(error);
  }
};

export const getprojects = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    // add limiters like localhost:3000/api/citation/getcitations?limit=1
    const projects = await Project.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.projectId && { _id: req.query.projectId }),
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

    const totalProjects = await Project.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthProjects = await Project.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      projects,
      totalProjects,
      lastMonthProjects,
    });
  } catch (error) {
    next(error);
  }
};

// export const getallprojects = async (req, res, next) => {
//   try {
//     const startIndex = parseInt(req.query.startIndex) || 0;
//     const limit = parseInt(req.query.limit) || 3;
//     const sortDirection = req.query.order === 'asc' ? 1 : -1;
//     const projects = await Project.find({
//       ...(req.query.userId && { userId: req.query.userId }),
//       ...(req.query.slug && { slug: req.query.slug }),
//       ...(req.query.projectId && { _id: req.query.projectId }),
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

//     const totalProjects = await Project.countDocuments();

//     const now = new Date();

//     const oneMonthAgo = new Date(
//       now.getFullYear(),
//       now.getMonth() - 1,
//       now.getDate()
//     );

//     const lastMonthProjects = await Project.countDocuments({
//       createdAt: { $gte: oneMonthAgo },
//     });

//     res.status(200).json({
//       projects,
//       totalProjects,
//       lastMonthProjects,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// create routes then update the controller
// then set an onClick Event Listener on Dash page for delete button

export const deleteproject = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, 'You are not allowed to delete this project')
    );
  }
  try {
    await Project.findByIdAndDelete(req.params.projectId);
    res.status(200).json('The project has been deleted');
  } catch (error) {
    next(error);
  }
};

export const updateproject = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, 'You are not allowed to update this project')
    );
  }
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.projectId,
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
    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
};
