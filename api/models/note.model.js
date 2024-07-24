import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    image: {
      type: String,
      default:
        'https://firebasestorage.googleapis.com/v0/b/corm-repository.appspot.com/o/1721773366520-NMNH-03826631_screen.jpg?alt=media&token=04da8184-e7f7-4950-8e97-16078ff40453',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
