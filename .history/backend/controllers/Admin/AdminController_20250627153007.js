import Admin from "../../Schema/Admin/Admin.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const AdminSignup= async (req,res)=>{
    const {username,password}=req.body

    try {
        const alreadyUser = await Admin.find({username})
        if(alreadyUser){
            return res.json({message:"the user already exist"})
        }
        const hashPassword = await bcrypt.hash(password,10)
       if(hashPassword.length <8){
        res.json({message:"please your password is small"})
       }

       const admin = new Admin({
        password:hashPassword,
        username
       })
      admin.save()

      res.json({message:"admin already created"})
    } catch (error) {
        res.status(500).json({
            message: "Error signing up the Admin",
            error: error.message
        });
    }
}

export const AdminLogin = async (req,res)=>{
    const {username,password}=req.body
    const generateToken = (id)=>{
        try {
            const token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "15m" })
            res.cookies("token",token,{
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
        const admin = await Admin.find({username})
        if(!admin){
            res.json({message:"no admin with this username found"})
        }
        const comparePassword = await bcrypt.compare(password,existingAdmin.password)
        if(!comparePassword){
            admin.limit+=1;
                        res.json({message:"invalid password"})
                        if(admin.limit >=3){
                            admin.timeLimit = new Date(Date.now()+"15*60*1000")
                        }
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