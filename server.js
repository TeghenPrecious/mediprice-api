import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { connectDB } from './src/config/db.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import healthRoutes from './src/routes/health.routes.js';

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.use('/api/health', healthRoutes);

// Fire off the DB connection without blocking server startup — connectDB
// logs its own errors and never throws, so a missing/unreachable Mongo
// instance can never crash the process.
connectDB();

// Centralized error handler — must be the last app.use().
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`MediPrice API listening on port ${PORT}`);
});
