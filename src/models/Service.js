import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, },
    type: { type: String, enum: ["lab", "care"], required: true, },
    category: { type: String, required: true },
    description: { type: String, required: true, },
},
{ timestamps: true }
);

serviceSchema.index({ name: 'text' });
serviceSchema.index({ type: 1, category: 1, });

const Service = mongoose.model('Service', serviceSchema);

export default Service;
