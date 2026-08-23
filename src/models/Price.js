import mongoose from "mongoose";

const priceSchema = new mongoose.Schema(
  {
    itemType: {
      type: String,
      enum: ["medication", "service"],
      required: true,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "itemType",
    },
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Provider",
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "XAF",
    },
    trustBadge: {
      type: String,
      enum: ["seed_verified", "provider_verified", "community_reported"],
      default: "unverified",
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lastUpdated: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
}
);

const Price = mongoose.model('Price', priceSchema);

export default Price;
