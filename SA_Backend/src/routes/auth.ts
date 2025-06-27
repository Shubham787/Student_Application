import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

const router = express.Router();

router.post("/register", async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      res.status(400).json({ error: "Email already registered" });
      return;
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });
    await user.save();

    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
