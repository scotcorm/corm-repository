import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import citationRoutes from './routes/citation.route.js';
import noteRoutes from './routes/note.route.js';
import recordRoutes from './routes/record.route.js';

// add the route.js, import it above and below then add controller
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Mongo Database is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/citation', citationRoutes);
app.use('/api/note', noteRoutes);
app.use('/api/record', recordRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
