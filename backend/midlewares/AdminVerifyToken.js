import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import Admin from '../Schema/Admin/Admin.js';
dotenv.config()
// ll
export const AdminVerifyToken = async (req, res, next) => {
    try {
        let token = req.headers.authorization?.split(" ")[1]; 
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.admin = await Admin.findById(decoded.id).select('-password');

        next();
    } catch (error) {
        res.status(403).json({ message: 'unathorized' });
    }
};

