import Admin from "../../Schema/Admin/Admin.js"
import { User } from "../../Schema/User/Auth.js"
import bcrypt from "bcryptjs"

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
            secure:true,
        })
        return token
        }catch(error){
            console.error("Token generation failed:", error.message);
            throw new Error("Token generation failed");
        }
    }
    try{
        const user = await User.findOne({email}).select("-password","-email")
        if(!user){
            return res.status(201).json({message:"email does not exist"})
        }
        const comparePassword = await bcrypt.compare(user.password,password)
        if(!comparePassword){
            return res.status(401).json({message:"Invalid Password"})
        }

        user.lastLogin = Date.now()
        res.status(200).json({message:"user logged in Succesfully"},{
            token:generateToken(user._id)
        })
    }catch(error){
        res.status(400).json(error.message)
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

