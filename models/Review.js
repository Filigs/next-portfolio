import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Types.ObjectId, ref: "User" },
});

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
