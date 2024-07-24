import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    month: {
      type: String,
      required: true,
    },
    agent: {
      type: String,
      required: true,
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
        'https://firebasestorage.googleapis.com/v0/b/corm-repository.appspot.com/o/1721773366520-NMNH-03826631_screen.jpg?alt=media&token=04da8184-e7f7-4950-8e97-16078ff40453',
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
