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
        try {
            const res = await axios.post(`${API}/auth/userLogin`, { email, password });

            if (!res.data.success) {
                throw new Error(res.data.message || "Login failed");
            }

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            } else {
                console.warn("No token received from login");
            }

            set({
                user: res.data.user,
                isCheckingAuth: false,
                isAuthenticated: true,
                error: null,
            });

            console.log(res.data.user);
        } catch (error) {
            set({
                error: error.message || error.response?.data?.message || "Error logging in",
                isLoading: false,
            });
            throw error;
        }
    },

    getProducts: async () => {
        try {
            const res = await axios.get(`${API}/user/getProducts`);
            set({ products: res.data || [] });
            console.log( res.data)
        } catch (error) {
            set({ error: error.response?.data?.message || "Failed to fetch products" });
            throw error;
        }
    },
}));
