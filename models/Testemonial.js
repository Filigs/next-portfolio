// models / Testemonial.js;
import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Types.ObjectId, ref: "User" },
});

export default mongoose.models.Testemonial ||
  mongoose.model("Testemonial", TestimonialSchema);
