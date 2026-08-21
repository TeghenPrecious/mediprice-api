import mongoose from "mongoose";

const priceSchema = new mongoose.Schema(
  {
    itemType: { 
      type: String, 
      enum: ["medication", "service"], 
      required: true, },
    itemId: { type: mongoose.Schema.Types.ObjectId, 
      required: true, 
      // refPath: doc => doc.itemType === 'medication' ? 'Medication' : 'Service',
      ref: doc => doc.itemType === 'medication' ? "Medication" : "Service",
      // refPath: "Medication",
     },
    providerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Provider", index: "true", },
    amount: { type: Number, required: true, },
    trustBadge: { type: String, 
      enum: ["seed_verified", "provider_verified", "community_reported", "unverified"], 
      default: "unverified", 
      required: true, 
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
}
);

// priceSchema.virtual('itemType').get(function() {
//     return this.itemType === 'medication' ? 'Medication' : 'Service';
// });

priceSchema.index({ itemType: 1, itemId: 1, providerId: 1 }, { unique: true });

// priceSchema.pre('save', function(next) {
//   if (!this.isModified('amount')) {
//     this.lastUpdated = Date.now();
//   }
//   next();
// });

const Price = mongoose.model('Price', priceSchema);

export default Price;
