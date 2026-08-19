import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["lab", "care"],
      required: true,
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    }
}
);

const Medication = mongoose.model('Medication', medicationSchema);

export default Medication;
