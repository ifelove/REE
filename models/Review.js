import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    review_date: { type: Date, default: Date.now() },
    title: { type: String },
    detail: { type: String },
    rating: { type: Number, default: 0 },
    reviewer: { type: mongoose.Types.ObjectId, ref: "User" },
    product_reviewed: { type: mongoose.Types.ObjectId, ref: "Product" },
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);

//ReviewSchema.index({ product_reviewed: 1, reviewer: 1 }, { unique: true });
