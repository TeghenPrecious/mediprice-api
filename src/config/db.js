import mongoose from 'mongoose';

/**
 * Connects to MongoDB using the MONGO_URI environment variable.
 * Errors are logged but never crash the process — this lets the API
 * (and its health endpoint) run even when no database is reachable,
 * which matters for sandboxes/CI where MongoDB isn't provisioned.
 *
 * @returns {Promise<void>}
 */
export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
}
