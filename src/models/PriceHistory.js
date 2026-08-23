import mongoose from "mongoose";

const priceHistorySchema = new mongoose.Schema(
  {
    price: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Price",
      required: true,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "itemType",
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "XAF",
    },
    createdAt: {
        type: Date,
        required: true,
    },
}
);

const PriceHistory = mongoose.model('PriceHistory', priceHistorySchema);

export default PriceHistory;
