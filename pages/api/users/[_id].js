import nextConnect from "next-connect";
import middleware from "../../lib/dbConnect";
import User from "../../../models/User";

const handler = nextConnect();

handler.use(middleware);

handler.put(async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.query._id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: `Unable to update user: ${error.message}` });
  }
});

handler.delete(async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.query._id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: `Unable to delete user: ${error.message}` });
  }
});

export default handler;
