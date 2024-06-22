import mongoose from 'mongoose';

const projectcommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    projectId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    numberOfLikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const ProjectComment = mongoose.model('ProjectComment', projectcommentSchema);

export default ProjectComment;
