// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

async function getOptions() {
  let client;
  try {
    client = await clientPromise;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }

  return {
    providers: [
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      }),
    ],
    adapter: MongoDBAdapter(client, {
      databaseName: "portfolio",
      collections: {
        user: "users",
      },
    }),
    callbacks: {
      async signIn({ user, account, profile }) {
        // if (user.email !== "filipemartins.business@gmail.com") {
        //   return false;
        // }

        const db = client.db("portfolio");
        const usersCollection = db.collection("users");
        let existingUser;
        try {
          existingUser = await usersCollection.findOne({ email: user.email });
        } catch (error) {
          console.error("Failed to fetch user", error);
          throw error;
        }

        try {
          if (existingUser) {
            await usersCollection.updateOne(
              { email: user.email },
              {
                $set: {
                  access_token: account.access_token,
                  refresh_token: account.refresh_token,
                  id_token: account.id_token,
                },
              }
            );
          } else {
            await usersCollection.insertOne({
              name: profile.name,
              email: user.email,
              access_token: account.access_token,
              refresh_token: account.refresh_token,
              id_token: account.id_token,
            });
          }
        } catch (error) {
          console.error("Failed to update or insert user", error);
          throw error;
        }

        return true;
      },
    },
    debug: true,
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  let options;
  try {
    options = await getOptions();
  } catch (error) {
    console.error("Failed to get options", error);
    throw error;
  }
  return NextAuth(req, res, options);
};
