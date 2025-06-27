import Admin from "../../Schema/Admin/Admin.js"
import bcrypt from "bcryptjs"
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()
export const AdminSignup = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters long" });
        }

        const existingUser = await Admin.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = new Admin({
            username,
            password: hashedPassword,
        });

        await admin.save();

        return res.status(201).json({ message: "Admin created successfully" }, console.log(admin));
    } catch (error) {
        console.error("AdminSignup error:", error);
        return res.status(500).json({
            message: "Error signing up the Admin",
            error: error.message,
        });
    }
};


export const AdminLogin = async (req,res)=>{
    const {username,password}=req.body
    const generateToken = (id)=>{
        try {
            const token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1m" })
            res.cookie("token",token,{
                httpOnly:true,
                sameSite:"strict",
                maxAge:15*60*1000,
                secure:true,
            })
            return token
        } catch (error) {
            console.error("Token generation failed:", error.message);
            throw new Error("Token generation failed");
        }
    } 
    try {
        const admin = await Admin.findOne({username})
        if(!admin){
          return  res.json({message:"no admin with this username found"})
        }
        const comparePassword = await bcrypt.compare(password,admin.password)
        if(!comparePassword){
            admin.limit+=1;
            console.log(+1)
                 return      res.json({message:"invalid password"})
                  
        }
        if (admin.limit >= 2) {
            console.log("too many atempts")
            admin.timeLimit = new Date(Date.now() + "15*60*1000")
        }
        admin.limit = 0,
        admin.timeLimit = null
        res.json({message:"user succesfully logged in",
            token: generateToken(admin._id)
        })
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export const logout = async (req,res)=>{
    try {
        res.clearCookies("token",
            {
                httpOnly:true,
                sameSite:none
            }
        )
        res.json({message:"admin logged out succesfully"})
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });

    }
}