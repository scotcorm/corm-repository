import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    month: {
      type: Date,
      required: true,
      unique: true,
    },
    agent: {
      type: String,
      required: true,
    },
    completed: {
      type: Number,
      required: true,
      unique: true,
    },
    cohort: {
      type: Number,
      required: true,
      unique: true,
    },
    overlaps: {
      type: Number,
      required: true,
      unique: true,
    },
    qapassed: {
      type: Number,
      required: true,
      unique: true,
    },
    qafailed: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Record = mongoose.model('Record', recordSchema);

export default Record;
