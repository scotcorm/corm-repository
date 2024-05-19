import mongoose from 'mongoose';

const recordcommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    recordId: {
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

const Recordcomment = mongoose.model('Comment', recordcommentSchema);

export default Recordcomment;
