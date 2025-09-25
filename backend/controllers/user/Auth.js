import Admin from "../../Schema/Admin/Admin.js"
import { User } from "../../Schema/User/Auth.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const UserSignup = async(req,res)=>{
    const{fullName,phoneNumber,email,password,}=req.body
    try {
        const existingfullName = await User.findOne({fullName})
        if (existingfullName){
            return res.status(400).json({message:"user already exist "})
        }
        const existingEmail = await User.findOne({email})
        if(existingEmail){
            return res.status(400).json({message:"email Already taken"})
        }
        const exsitingphone = await User.findOne({ phoneNumber })
        if (exsitingphone) {
            return res.status(400).json({ message: "PhoneNumber Already taken" })
        }
        
        const phoneRegex = /^\+\d{3}\d{9}$/;
        if (!phoneRegex.test(phoneNumber)) {
            return res.status(400).json({
                message:
                    "Invalid phone number",
            });
        }
        if(password.length <8){
            return res.status(400).json({message:"password should be more than 8 characters"})
        }
        const hashPassword = await bcrypt.hash(password,10)
        
        const user = new User({
            fullName,
            phoneNumber,
            email,
            password: hashPassword,
        })
        console.log(user)
        await user.save()
        res.status(200).json({message:"user created succesfully"        })
    } catch (error) {
        res.status(201).json(error.message)
    }
}

export const UserLogin = async(req,res)=>{
    const{email,password}=req.body

    const generateToken =(id)=>{

        try{
        const token = jwt.sign({id},process.env.SECRET_KEY,{expiresIn:"1d"})
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:24*60*60*1000,
            sameSite:"strict",
            secure:false,
        })
        return token
        }catch(error){
            console.error("Token generation failed:", error.message);
            throw new Error("Token generation failed");
        }
    }
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"email does not exist"})
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.status(401).json({message:"Invalid Password"})
        }

        user.lastLogin = Date.now()
        console.log(user)
        await user.save()

        res.status(200).json({message:"user logged in Succesfully",
            user: {
                id: user._id,
                email: user.email,
                lastLogin: user.lastLogin,
              },
            token:generateToken(user._id)})
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}

 export const logout = async (req, res) => {
    try {
        res.clearCookie("token",
            {
                httpOnly: true,
            }
        )
        res.json({ message: "user logged out succesfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });

    }
}
export const checkAuth = async (req, res) => {

    try {
        const existinguser = await User.findById(req.user.id).select("-password");
        if (!existinguser) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, user: existinguser });
    } catch (error) {
        console.log("Error in checkAuth ", error);
        res.status(400).json({ success: false, message: error.message });
    }
};
export const profile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "No user found" });
        }
        res.status(200).json({ mesage: "user information", user })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};
