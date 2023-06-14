// lib / dbConnect.js;
import mongoose from "mongoose";
import nextConnect from "next-connect";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "portfolio",
};

const connection = {};

async function dbConnect(req, res, next) {
  if (connection.isConnected) {
    return next();
  }

  try {
    const db = await mongoose.connect(
      process.env.NEXT_PUBLIC_DATABASE_URL,
      options
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }

  return next();
}

const middleware = nextConnect();
middleware.use(dbConnect);

export default middleware;
