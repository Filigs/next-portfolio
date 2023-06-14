import nextConnect from "next-connect";
import cors from "cors";
import middleware from "../../lib/dbConnect";
import Post from "../../models/Post";

const handler = nextConnect();

handler.use(middleware).use(cors({ origin: "*" }));

handler.get(async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: "desc" });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: `Unable to fetch posts: ${error.message}` });
  }
});

handler.post(async (req, res) => {
  try {
    const postData = req.body;
    const newPost = new Post(postData);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: `Unable to create post: ${error.message}` });
  }
});

export default handler;
