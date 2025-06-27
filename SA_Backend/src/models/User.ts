import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default model("User", userSchema);
