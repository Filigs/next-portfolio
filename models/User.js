// models / User.js;
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  user_id: { type: mongoose.Types.ObjectId },
  refresh_token: String,
  access_token: String,
  id_token: String,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
