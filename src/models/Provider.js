import mongoose from "mongoose";

const providerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "pharmacy",
      enum: ["pharmacy", "lab", "care"],
      required: true,
    },
    quarter: String,
    address: String,
    city: {
        type: String,
        default: "Bamenda",
        required: true,
    },
    location: {
        lat: { type: Number },
        lng: { type: Number }
    },
    phone:{
        type: String,
        required: true, 
    },
  },
  {
    timestamps: true,
  }
);

// providerSchema.index({ location: '2dsphere'});

const Provider = mongoose.model('Provider', providerSchema);

export default Provider;
