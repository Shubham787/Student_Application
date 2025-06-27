import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import helmet from "helmet";
import authRoutes from "./routes/auth";
import studentRoutes from "./routes/student";
import { authMiddleware } from "./middleware/auth";

const app = express();

// ✅ CORS must be configured before routes
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Optional but recommended to explicitly handle preflight
app.options("*", cors());

app.use(helmet());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "", { dbName: "student_app" })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", authMiddleware, studentRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
