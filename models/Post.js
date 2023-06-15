// models / Post.js;
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Types.ObjectId, ref: "User" },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
