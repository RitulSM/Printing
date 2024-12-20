import mongoose from "mongoose";
// import { model, Schema } from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  orders: [{ type: String, ref: "Order" }],
  createdAt: { type: Date, default: Date.now },
  loyaltyPoints: { type: Number, default: 0 },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
// module.exports = User;
export default User;
