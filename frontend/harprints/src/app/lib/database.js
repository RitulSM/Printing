// import mongoose from "mongoose";

// let isConnected = false;

// export const connectToDB = async () => {
//   mongoose.set("strictQuery", true);
//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }

//   console.log(process.env.MONGODB_URI);

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "share_prompt",
//       serverSelectionTimeoutMS: 30000,
//     });
//     isConnected = true;
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log("MongoDB connection error:", error.message);
//     console.log("MongoDB URI:", process.env.MONGODB_URI);
//   }
// };

// // Call the connectToDB function to initiate the connection
// connectToDB();
// lib/database.js
import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "PrintMasterPro",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};
