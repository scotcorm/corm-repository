import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      unique: true,
    },
    month: {
      type: String,
      required: true,
      unique: false,
    },
    agent: {
      type: String,
      required: true,
      unique: false,
    },
    completed: {
      type: Number,
      unique: false,
    },
    cohort: {
      type: Number,
      unique: false,
    },
    overlaps: {
      type: Number,
      unique: false,
    },
    qapassed: {
      type: Number,
      unique: false,
    },
    qafailed: {
      type: Number,
      unique: false,
    },
    image: {
      type: String,
      default:
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Record = mongoose.model('Record', recordSchema);

export default Record;
