// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import User from "../../../models/User";
import clientPromise from "../../../lib/mongodb";

async function getOptions() {
  const client = await clientPromise;

  return {
    providers: [
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      }),
    ],
    adapter: MongoDBAdapter(client),
    callbacks: {
      async signIn(user, account, profile) {
        const db = client.db();

        if (user.email === process.env.NEXT_PUBLIC_LOGIN_EMAIL) {
          const usersCollection = db.collection("users");
          const existingUser = await usersCollection.findOne({
            email: user.email,
          });

          if (existingUser) {
            await usersCollection.updateOne(
              { email: user.email },
              {
                $set: {
                  access_token: account.accessToken,
                  refresh_token: account.refreshToken,
                  id_token: account.idToken,
                },
              }
            );
          } else {
            await usersCollection.insertOne({
              name: user.name,
              email: user.email,
              access_token: account.accessToken,
              refresh_token: account.refreshToken,
              id_token: account.idToken,
            });
          }

          return true;
        } else {
          return false;
        }
      },
    },
    debug: true,
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const options = await getOptions();
  return NextAuth(req, res, options);
};
