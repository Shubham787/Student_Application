import express from "express";
import Student from "../models/Student";

const router = express.Router();

router.get("/", async (_, res) => {
  const students = await Student.find();
  res.json(students);
});

router.post("/", async (req, res) => {
  const { name, email, course, status } = req.body;
  const student = new Student({ name, email, course, status });
  await student.save();
  res.status(201).json(student);
});

export default router;
