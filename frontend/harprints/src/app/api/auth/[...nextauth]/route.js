// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import { connectToDB } from "../../../lib/database.js";
// // import User from "@/lib/models/user";
// import User from "../../../models/user.js";
// // import NextAuth from "next-auth";
// // import GoogleProvider from "next-auth/providers/google";
// // import GitHubProvider from "next-auth/providers/github";
// // import dbConnect from "@/lib/mongoose";
// // import { User } from "@/models/User"
// // import { NextAuthOptions } from "next-auth/react";

// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     async session({ session }) {
//       try {
//         await connectToDB();
//         const sessionUser = await User.findOne({ email: session.user.email });

//         if (sessionUser) {
//           session.user.id = sessionUser._id.toString();
//         } else {
//           console.error("User not found for email:", session.user.email);
//         }

//         return session;
//       } catch (error) {
//         console.error("Error in session callback:", error);
//         return session;
//       }
//     },
//     async signIn({ profile }) {
//       console.log("Signing in user:", profile.email);
//       try {
//         await connectToDB();
//         const userExists = await User.findOne({ email: profile.email });

//         if (userExists) {
//           console.log("User exists:", userExists);
//           return true;
//         } else {
//           console.log("Creating a new user for:", profile.email);
//           await User.create({
//             email: profile.email,
//             name: profile.name,
//             image: profile.image,
//             username: profile.name?.replace(" ", "").toLowerCase(),
//           });
//           return true;
//         }
//       } catch (error) {
//         console.error("Error during sign in:", error);
//         return false;
//       }
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import connectToDB from "@/app/lib/database.js";
import User from "../../../models/user.js";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: false, // Enable debug logs in development
  callbacks: {
    async session({ session }) {
      if (!session?.user?.email) {
        console.error("No email in session");
        return session;
      }

      try {
        await connectToDB();
        const sessionUser = await User.findOne({ email: session.user.email });

        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
        } else {
          console.error("User not found for email:", session.user.email);
        }
        // console.log("session", session);
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
    async signIn({ profile }) {
      if (!profile?.email) {
        console.error("No email in profile");
        return false;
      }

      try {
        await connectToDB();
        const userExists = await User.findOne({ email: profile.email });

        if (userExists) {
          return true;
        }
        console.log("profile", profile);

        const userss = await User.create({
          email: profile.email,
          name: profile.email.split("@")[0],
          image: profile.picture || "",
          id: profile.id || profile.iat,
        });

        // console.log("userss", userss);

        return true;
      } catch (error) {
        console.error("Error during sign in:", error);
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error", // Add this to handle errors
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
