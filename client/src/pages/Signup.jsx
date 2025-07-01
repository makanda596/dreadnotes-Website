import { useState } from "react";
import { userAuthStore } from "../utilis/user";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        countryCode: "+254",
    });

    const { signup } = userAuthStore();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleShowPassword = () => setShowPassword((v) => !v);
    const toggleShowConfirmPassword = () => setShowConfirmPassword((v) => !v);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setIsLoading(true);
        const fullPhone = `${formData.countryCode}${formData.phoneNumber}`;

        try {
            await signup(
                formData.fullName,
                formData.email,
                fullPhone,
                formData.password
            );
            // Optionally clear form or redirect here
        } catch (err) {
            setError(err.response?.data?.message || "Signup failed");
        } finally {
            setIsLoading(false);
        }
    };

    // SVG icons for show/hide password
    const EyeIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
        </svg>
    );

    const EyeOffIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.266-3.645m1.43-1.43A9.96 9.96 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.982 9.982 0 01-1.137 2.571M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3l18 18"
            />
        </svg>
    );

    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
            {error && (
                <div className="mb-6 text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow animate-shake">
                    {error}
                </div>
            )}

            <h2 className="text-3xl font-bold mb-8 text-center text-teal-700">
                Create your account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg shadow-sm
            focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    onChange={handleChange}
                    value={formData.fullName}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg shadow-sm
            focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />

                <div className="flex space-x-3">
                    <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-1/3 border border-gray-300 rounded-md px-3 py-3 text-lg shadow-sm
              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    >
                        <option value="+254">🇰🇪 +254</option>
                        <option value="+255">🇹🇿 +255</option>
                        <option value="+256">🇺🇬 +256</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                    </select>

                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="712345678"
                        className="w-2/3 border border-gray-300 rounded-md px-4 py-3 text-lg shadow-sm
              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                        onChange={handleChange}
                        value={formData.phoneNumber}
                        required
                    />
                </div>

                {/* Password field with toggle */}
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg shadow-sm
              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition pr-12"
                        onChange={handleChange}
                        value={formData.password}
                        required
                        minLength={6}
                    />
                    <button
                        type="button"
                        onClick={toggleShowPassword}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                        tabIndex={-1}
                    >
                        {showPassword ? EyeOffIcon : EyeIcon}
                    </button>
                </div>

                {/* Confirm Password field with toggle */}
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg shadow-sm
              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition pr-12"
                        onChange={handleChange}
                        value={formData.confirmPassword}
                        required
                        minLength={6}
                    />
                    <button
                        type="button"
                        onClick={toggleShowConfirmPassword}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                        tabIndex={-1}
                    >
                        {showConfirmPassword ? EyeOffIcon : EyeIcon}
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-700
            text-white py-3 rounded-lg font-semibold text-lg shadow-md
            hover:from-teal-600 hover:to-teal-800 transition disabled:opacity-50"
                >
                    {isLoading ? "Signing up..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
}
