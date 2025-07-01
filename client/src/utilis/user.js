import {create}from 'zustand'
import axios from "axios"
const API = import.meta.env.BACKEND_URL
export const userAuthStore = create((set)=>({
    isCheckingAuth:true,
    isAuthenticated:false,
    error:false,
    user:null,
    isLoading:false,

    signup:async(fullName,email,phoneNumber,password)=>{
        set({isLoading:true,error:false})
        try {
            const res = await axios.post('http://localhost:5000/auth/userSignup', { fullName, email, phoneNumber, password })
            set({user:res.data.user,isAuthenticated:true})
            console.log(res.data)
        } catch (error) {
            set({ error: error.response?.data?.message || "Error signing up", isLoading: false });
            throw error;
        }
    }
}))