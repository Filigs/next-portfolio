// pages / api / users.js
import nextConnect from "next-connect";
import clientPromise from "../../lib/mongodb";

const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const users = await db.collection("users").find().toArray();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: `Unable to fetch users: ${error.message}` });
  }
});

handler.post(async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();

    const newUser = await db.collection("users").insertOne(req.body);
    res.status(201).json(newUser.ops[0]); // ops property contains the documents inserted with added _id fields
  } catch (error) {
    res.status(500).json({ error: `Unable to create user: ${error.message}` });
  }
});

export default handler;
