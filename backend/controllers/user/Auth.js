import { User } from "../../Schema/User/Auth.js"
import bcrypt from "bcryptjs"

export const UserLogin = async(req,res)=>{
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
        if(password.length <8){
            return res.json({message:"password should be more than 8 characters"})
        }
        const hashPassword = await bcrypt.hash(password,10)
        
        const user = new User({
            fullName,
            phoneNumber,
            email,
            password: hashPassword,
        })
        await user.save()
        res.status(200).json({message:"user created succesfully"})
    } catch (error) {
        res.status(201).json(error.message)
    }
}