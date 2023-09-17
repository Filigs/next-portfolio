import nextConnect from "next-connect";
import middleware from "../../../lib/dbConnect";
import Post from "../../../models/Post";

const handler = nextConnect();

handler.use(middleware);

handler.put(async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.query._id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: `Unable to update post: ${error.message}` });
  }
});

handler.delete(async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.query._id);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: `Unable to delete post: ${error.message}` });
  }
});

export default handler;
