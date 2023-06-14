import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Types.ObjectId, ref: "User" },
});

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
