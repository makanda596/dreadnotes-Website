import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import express from "express";
import cookieParser from "cookie-parser";
import adminAllRoutes from './routes/Admin/adminAllRoutes.js'
import adminRoutes from "./routes/Admin/adminRoutes.js";
import userauthRoutes from './routes/User/userauthRoutes.js'
import userRoutes from './routes/User/userRoutes.js'

dotenv.config();

const app = express();
const Mongo_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 6000;

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
);

app.use(helmet());

app.use(express.json({ limit: "10mb" }));

app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cookieParser());

app.use("/admin", adminRoutes);
app.use('/admin',adminAllRoutes)

app.use('/auth',userauthRoutes)
app.use('/user', userRoutes)

mongoose
    .connect(Mongo_URL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
