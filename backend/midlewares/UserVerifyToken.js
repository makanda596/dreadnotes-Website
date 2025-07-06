import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../Schema/User/Auth.js';

dotenv.config();

export const UserVerifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No or invalid token format" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Confirm user exists and is active (optional but safe)
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User no longer exists" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Unauthorized or token expired" });
    }
};
