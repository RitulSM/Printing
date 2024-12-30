import mongoose from "mongoose";
const { Schema } = mongoose;

const ShopSchema = new Schema({
  id: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  shop_image: { type: String, required: true, unique: true },
  shop_Gst: { type: String },
  shop_queue: { type: String },
  Shop_price: { type: String },
  phone_number: { type: String, required: true },
  city: { type: String, required: true },
  location: { type: String, required: true },
  password: { type: String, required: true },
  orders: [{ type: String, ref: "Order" }],
  timing: { type: String, required: true },
});

const Shop = mongoose.models.Shop || mongoose.model("Shop", ShopSchema);
export default Shop;
