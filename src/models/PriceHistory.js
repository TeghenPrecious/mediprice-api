import mongoose from "mongoose";

const priceHistorySchema = new mongoose.Schema(
  {
    priceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Price",
      required: true,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "itemId",
    },
    amount: {
      type: Number,
      required: true,
    },
    
    },
    {
      timestamps: true
    },

);

priceHistorySchema.index({ price: 1, updatedAt: 1});

const PriceHistory = mongoose.model('PriceHistory', priceHistorySchema);

export default PriceHistory;
