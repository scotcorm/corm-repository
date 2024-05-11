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
      default: 'null',
    },
    content: {
      type: String,
      default: 'null',
    },
    month: {
      type: String,
    },
    agent: {
      type: String,
    },
    completed: {
      type: Number,
    },
    cohort: {
      type: Number,
    },
    overlaps: {
      type: Number,
    },
    qapassed: {
      type: Number,
    },
    qafailed: {
      type: Number,
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
