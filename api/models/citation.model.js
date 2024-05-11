import mongoose from 'mongoose';

const citationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    creator: {
      type: String,
      required: true,
      unique: true,
    },
    source: {
      type: String,
      required: true,
      unique: true,
    },
    sourceurl: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
      default:
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
    },
    license: {
      type: String,
      default: 'uncategorized',
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Citation = mongoose.model('Citation', citationSchema);

export default Citation;
