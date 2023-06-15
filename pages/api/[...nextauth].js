import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import middleware from "../../lib/dbConnect";
import User from "../../models/User";

const options = {
  adapter: MongoDBAdapter(middleware),
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      // Check if the email is yours
      if (user.email === process.env.NEXT_PUBLIC_LOGIN_EMAIL) {
        const existingUser = await User.findOne({ email: user.email });

        if (existingUser) {
          // update user
          existingUser.access_token = account.accessToken;
          existingUser.refresh_token = account.refreshToken;
          existingUser.id_token = account.idToken;
          await existingUser.save();
        } else {
          // create user
          const newUser = new User({
            name: user.name,
            email: user.email,
            access_token: account.accessToken,
            refresh_token: account.refreshToken,
            id_token: account.idToken,
          });

          await newUser.save();
        }

        return true;
      } else {
        // If the email is not yours, return false and deny access
        return false;
      }
    },
  },
  debug: true,
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options);
