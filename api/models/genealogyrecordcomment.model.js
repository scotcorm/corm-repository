import mongoose from 'mongoose';

const genealogyrecordcommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    genealogyrecordId: {
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

const GenealogyrecordComment = mongoose.model(
  'GenealogyrecordComment',
  genealogyrecordcommentSchema
);

export default GenealogyrecordComment;
