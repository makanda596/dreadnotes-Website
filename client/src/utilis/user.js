import {create}from 'zustand'
import axios from "axios"
const API = import.meta.env.BACKEND_URL
export const userAuthStore = create((set)=>({
    isCheckingAuth:true,
    isAuthenticated:false,
    isVerified:false,
    error:false,
    user:null,
    isLoading:false,

    signup:async(fullName,email,phoneNumber,password)=>{
        // set({isLoading:true,error:false})
        try {
            const res = await axios.post('http://localhost:5000/auth/userSignup', { fullName, email, phoneNumber, password })
            set({user:res.data.user,isAuthenticated:true,isCheckingAuth:false})
            console.log(res.data)
        } catch (error) {
            set({ error: error.response?.data?.message || "Error signing up", isLoading: false });
            throw error;
        }
    },
    login:async(email,password)=>{
        try{
            const res = await axios.post('http://localhost:5000/auth/userLogin',{email,password})
            localStorage.setItem("token")
            set({ user: res.data.user, isCheckingAuth: false, isAuthenticated:true,error:null})
            console.log(res.data.user)
        }catch(error){
            set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
            throw error;
        }
    },
    emailVerification:async(code)=>{
        set({isCheckingAuth:true})
        try {
            const res = await axios.post('http://localhost:5000/auth/emailVerification',{code})
            localStorage.getItem("email")
            set({user:res.data.user,isVerified:true,isAuthenticated:true,isCheckingAuth:false,error:false})
        } catch (error) {
            set({ error: error.response?.data?.message || "Error verifying the email", isLoading: false });
            throw error;
        }
    },
}))