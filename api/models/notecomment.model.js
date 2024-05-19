import mongoose from 'mongoose';

const notecommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    noteId: {
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

const Notecomment = mongoose.model('Comment', notecommentSchema);

export default Notecomment;
