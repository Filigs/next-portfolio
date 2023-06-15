// lib/mongodb.js
import { MongoClient } from "mongodb";

if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
  throw new Error('Missing environment variable: "NEXT_PUBLIC_DATABASE_URL"');
}

const client = new MongoClient(process.env.NEXT_PUBLIC_DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
