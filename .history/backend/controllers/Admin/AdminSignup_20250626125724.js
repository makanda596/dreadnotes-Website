import Admin from "../../Schema/Admin/Admin.js"
import bcrypt from "bcryptjs"

export const AdminSignup= async (req,res)=>{
    const {username,password}=req.body

    try {
        const alreadyUser = await Admin.findOne({username})
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
    try {
        const existingAdmin = await Admin.find({username})
        if(!existingAdmin){
            res.json({message:"no admin with this username found"})
        }
        const comparePassword = await bcrypt.compare(password,existingAdmin.password)
        if(comparePassword){
            res.json({message:"invalid password"})
        }
        res.json({message:"user succesfully logged in"})
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}