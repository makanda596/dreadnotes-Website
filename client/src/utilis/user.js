import { create } from "zustand";
import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL;

export const userAuthStore = create((set) => ({
    isCheckingAuth: false,
    isAuthenticated: false,
    isVerified: false,
    error: null,
    user: null,
    isLoading: false,
    products: [],
    product:[],

    signup: async (fullName, email, phoneNumber, password) => {
        try {
            const res = await axios.post(`${API}/auth/userSignup`, {
                fullName,
                email,
                phoneNumber,
                password,
            });
            set({
                user: res.data.user,
                isAuthenticated: true,
                isCheckingAuth: false,
                error: null,
            });
            console.log(res.data);
        } catch (error) {
            set({
                error: error.response?.data?.message || "Error signing up",
                isLoading: false,
            });
            throw error;
        }
    },

    login: async (email, password) => {
        set({ isCheckingAuth: true, error: null });
        try {

            const res = await axios.post(`${API}/auth/userLogin`, { email, password });
            localStorage.setItem("token", res.data.token);

            // Update auth store
            set({
                user: res.data.user || null,
                isCheckingAuth: false,
                isAuthenticated: true,
                error: null,
            });
            console.log(res.data.user);
           
        } catch (error) {
            const message =
                error.response?.data?.message || error.response?.data || "Error logging in";

            set({
                error: message,
                isCheckingAuth: false,
                isAuthenticated: false,
            });

            console.log("Login failed:", message);
            throw new Error(message);
        }
          
    },
      
    profile: async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) {
                set({ error: true })
                console.log("no token")
            }
            const response = await axios.get(`${API}/auth/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            set({ user: response.data.user })
            console.log(response.data.user)
        } catch (error) {
            console.error(error)
        }
    },
    Logout:async()=>{
        try{
            await axios.post(`${API}/auth/logout`,{},{withCredentials:true})
            localStorage.removeItem("token")
            set({
                user:null,
                isAuthenticated:false,
                error:null
            })
            console.log("user logged out succesfully")
        }catch(error){
            set({error:error.response?.data?.message || "Error logging out"})
        }
    },
    getProducts: async () => {
        try {
            const res = await axios.get(`${API}/auth/getProducts`);
            set({ products: res.data || [] });
            console.log( res.data)
        } catch (error) {  
            set({ error: error.response?.data?.message || "Failed to fetch products" });
            throw error;
        }
    },
    getOneProduct:async (id)=>{
        try{
            const res = await axios.get(`${API}/user/oneProduct/${id}`);
            set({ product: res.data || [] });
            console.log(res.data)
        }catch(error){
            set({ error: error.response?.data?.message || "Failed to fetch products" });
            throw error;
        }
    },
    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                set({ isAuthenticated: false, isCheckingAuth: false });
                return;
            }

            const response = await axios.get(`${API}/auth/check-auth`, {
                headers: { Authorization: `Bearer ${token}` },
                withCredentials: true
            });

            set({
                user: response.data.user,
                isAuthenticated: response.data.user,
                isCheckingAuth: false
            });

          
        } catch (error) {
            localStorage.removeItem("token");
            set({
                isAuthenticated: false,
                isCheckingAuth: false,
                error: error.response?.data?.message || "Failed to authenticate",
            });
        }
    },
}));
