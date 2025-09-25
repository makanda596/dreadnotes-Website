import { useState, useEffect } from "react";
import {
  UserCircle,
  LogOut,
  UserPlus,
  PackageSearch,
  Menu,
  X,
  LogIn,
} from "lucide-react";
import { userAuthStore } from "../utilis/user";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, profile, Logout } = userAuthStore();

  useEffect(() => {
    profile();
  }, [profile]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await Logout();
  };

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${scrolled
      ? "bg-white shadow-lg py-2"
      : "bg-gradient-to-r from-blue-600 to-indigo-700 py-3"
    }`;

  const textClasses = (isHover = false) =>
    scrolled
      ? `text-gray-700 ${isHover ? "hover:text-indigo-600 hover:bg-indigo-50" : ""}`
      : `text-white ${isHover ? "hover:text-blue-200 hover:bg-white/10" : ""}`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className={`rounded-lg p-1 transition-transform group-hover:scale-105 ${scrolled ? "bg-white shadow" : "bg-white/20"
              }`}>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-8 h-8 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">DN</span>
              </div>
            </div>
            <span className={`font-bold text-xl ${textClasses()}`}>
              DreadNotes Merch
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Public Links */}
            <a href="/" className={`px-4 py-2 rounded-lg font-medium ${textClasses(true)}`}>
              Shop
            </a>

            {!user ? (
              <>
                <a href="/about" className={`px-4 py-2 rounded-lg font-medium ${textClasses(true)}`}>
                  About
                </a>
                <a href="/contact" className={`px-4 py-2 rounded-lg font-medium ${textClasses(true)}`}>
                  Contact
                </a>

                {/* Auth Buttons */}
                <div className="flex space-x-3 ml-4">
                  <a href="/login" className={`flex items-center px-4 py-2 rounded-lg font-semibold ${textClasses(true)}`}>
                    <LogIn className="w-5 h-5 mr-2" /> Login
                  </a>
                  <a href="/signup" className={`flex items-center px-4 py-2 rounded-lg font-semibbold shadow-md ${scrolled
                      ? "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white hover:shadow-lg"
                      : "bg-white text-indigo-600 hover:bg-gray-50"
                    } transition-shadow`}>
                    <UserPlus className="w-5 h-5 mr-2" /> Sign Up
                  </a>
                </div>
              </>
            ) : (
              /* User Menu */
              <div className="relative group">
                <button className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {user?.fullName?.charAt(0) || "U"}
                    </span>
                  </div>
                  <span className={`font-medium ${textClasses()}`}>
                    Hi, {user?.fullName?.split(" ")[0]}
                  </span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                  <div className="px-4 py-3 border-b">
                    <p className="font-semibold text-gray-900">{user?.fullName}</p>
                    <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                  </div>

                  <a href="/profile" className="flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 transition-colors">
                    <UserCircle className="w-5 h-5 mr-3" />
                    Profile
                  </a>
                  <a href="/orders" className="flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 transition-colors">
                    <PackageSearch className="w-5 h-5 mr-3" />
                    My Orders
                  </a>

                  <div className="border-t mt-2">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-5 h-5 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <a href="/" className={`py-2 px-4 rounded-lg font-medium ${textClasses(true)}`}>
                Shop
              </a>

              {!user ? (
                <>
                  <a href="/about" className={`py-2 px-4 rounded-lg font-medium ${textClasses(true)}`}>
                    About
                  </a>
                  <a href="/contact" className={`py-2 px-4 rounded-lg font-medium ${textClasses(true)}`}>
                    Contact
                  </a>
                  <a href="/login" className={`py-2 px-4 rounded-lg font-medium ${textClasses(true)}`}>
                    Login
                  </a>
                  <a href="/signup" className="py-2 px-4 rounded-lg font-medium bg-indigo-600 text-white text-center">
                    Sign Up
                  </a>
                </>
              ) : (
                <>
                  <a href="/profile" className={`py-2 px-4 rounded-lg font-medium ${textClasses(true)}`}>
                    Profile
                  </a>
                  <a href="/orders" className={`py-2 px-4 rounded-lg font-medium ${textClasses(true)}`}>
                    My Orders
                  </a>
                  <button
                    onClick={handleLogout}
                    className="py-2 px-4 rounded-lg font-medium text-red-600 text-left hover:bg-red-50"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}