import nextConnect from "next-connect";
import middleware from "../../lib/dbConnect";
import User from "../../models/User";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: `Unable to fetch users: ${error.message}` });
  }
});

handler.post(async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: `Unable to create user: ${error.message}` });
  }
});

export default handler;
