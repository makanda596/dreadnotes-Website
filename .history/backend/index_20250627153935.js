import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import express from "express";
import cookieParser from "cookie-parser";
import adminRoutes from "./routes/Admin/adminRoutes.js";

dotenv.config();

const app = express();
const Mongo_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 6000;

// Set CORS origin to your frontend URL or use "*" for development only
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000", // <-- replace with your frontend URL
  })
);

app.use(helmet());

// Parse JSON bodies (limit set to 10mb)
app.use(express.json({ limit: "10mb" }));

// Parse URL-encoded bodies (limit set to 10mb)
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cookieParser());

// Routes
app.use("/admin", adminRoutes);

// Connect to MongoDB with proper error handling
mongoose
  .connect(Mongo_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
