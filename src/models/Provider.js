import mongoose from "mongoose";

const providerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["pharmacy", "lab", "care"],
      required: true,
    },
    quarter: {
        type: String,
    },
    city: {
        type: String,
        default: "Bamenda",
        required: true,
    },
    location: {
        lat: Number,
        lng: Number
    },
    phone:{
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

const Provider = mongoose.model('Provider', providerSchema);

export default Provider;
