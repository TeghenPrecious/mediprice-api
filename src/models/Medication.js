import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, trim:true },
    genericName: { type: String, trim: true, },
    category: { type: String, required: true },
    description: { type: String, required: true, },
  },
  { timestamps: true }
);

medicationSchema.index({ name: 'text', genericName: 'text' });

medicationSchema.index({ category: 1 });

const Medication = mongoose.model('Medication', medicationSchema);

export default Medication;

