import { useState } from "react";
import axios from "axios";
import { userAuthStore } from "../../utilis/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const { login } = userAuthStore();

  axios.defaults.withCredentials = true;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(""); // reset previous errors

    if (!email || !password) {
      setLoginError("Please fill in all fields");
      return;
    }

    try {
      await login(email, password);
      window.location.href = "/home";
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";
      setLoginError(message);
      console.log(message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-blue-600 p-8 rounded-lg shadow-xl w-full max-w-md text-white">
        {/* Branding */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight">UniTradeHub</h1>
        </div>

        {/* Error message */}
        {loginError && (
          <div className="mb-4 text-center bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded bg-opacity-90">
            {loginError}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full py-2 px-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full py-2 px-3 pr-10 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-blue-700 font-semibold py-2 rounded hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center text-sm space-y-2">
          <a
            href="/ForgotPassword"
            className="text-white underline hover:text-blue-200 transition"
          >
            Forgot Password?
          </a>
          <br />
          <span className="text-white">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-black font-medium hover:underline transition"
            >
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
