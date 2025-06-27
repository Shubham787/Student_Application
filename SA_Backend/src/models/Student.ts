import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

export default model("Student", studentSchema);
