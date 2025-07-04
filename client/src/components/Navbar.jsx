import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Bolt,
  UserCircle,
  LogOut,
  LogIn,
  UserPlus,
  PackageSearch,
  Heart,
  Menu,
  X,
} from "lucide-react";

// Mock auth hook
function useAuth() {
  const [user, setUser] = useState(false); // simulate logged in
  const logout = () => setUser(null);
  return { user, logout };
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-gradient-to-r from-blue-600 to-indigo-700 py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a
              href="/"
              className="flex items-center space-x-2"
            >
              <div className={`bg-white rounded-lg p-1 ${scrolled ? "shadow" : ""}`}>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-8 h-8 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DN</span>
                </div>
              </div>
              <span
                className={`font-bold text-2xl tracking-wide ${scrolled ? "text-indigo-700" : "text-white"
                  }`}
              >
                DreadNotes
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Always show Home */}
            <a
              href="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${scrolled
                  ? "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  : "text-white hover:text-blue-200 hover:bg-white/10"
                }`}
            >
              Home
            </a>

            {/* Only show About and Contact for non-logged in users */}
            {!user && (
              <>
                <a
                  href="/about"
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${scrolled
                      ? "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                      : "text-white hover:text-blue-200 hover:bg-white/10"
                    }`}
                >
                  About
                </a>
                <a
                  href="/contact"
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${scrolled
                      ? "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                      : "text-white hover:text-blue-200 hover:bg-white/10"
                    }`}
                >
                  Contact
                </a>
              </>
            )}

            {/* Separator only when needed */}
            {!user && <div className="mx-2 h-6 w-px bg-gray-300"></div>}

            {!user ? (
              <div className="flex space-x-3">
                <a
                  href="/login"
                  className={`flex items-center px-4 py-2 rounded-lg font-semibold ${scrolled
                      ? "text-indigo-600 hover:bg-indigo-50"
                      : "text-white hover:bg-white/20"
                    }`}
                >
                  <LogIn className="w-5 h-5 mr-2" /> Login
                </a>
                <a
                  href="/register"
                  className={`flex items-center px-4 py-2 rounded-lg font-semibold shadow-md ${scrolled
                      ? "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white"
                      : "bg-white text-indigo-600"
                    } hover:shadow-lg transition-shadow`}
                >
                  <UserPlus className="w-5 h-5 mr-2" /> Register
                </a>
              </div>
            ) : (
              <div className="flex items-center space-x-5">
                <div className="relative group">
                  <a
                    href="/flashsale"
                    className={`flex items-center p-2 rounded-full ${scrolled
                        ? "text-gray-700 hover:bg-indigo-50"
                        : "text-white hover:bg-white/20"
                      }`}
                  >
                    <Bolt className="w-5 h-5" />
                  </a>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Flash Sale
                  </div>
                </div>

                <div className="relative group">
                  <a
                    href="/cart"
                    className={`flex items-center p-2 rounded-full ${scrolled
                        ? "text-gray-700 hover:bg-indigo-50"
                        : "text-white hover:bg-white/20"
                      }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </a>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    5
                  </span>
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Cart
                  </div>
                </div>

                <div className="relative group">
                  <a
                    href="/wishlist"
                    className={`flex items-center p-2 rounded-full ${scrolled
                        ? "text-gray-700 hover:bg-indigo-50"
                        : "text-white hover:bg-white/20"
                      }`}
                  >
                    <Heart className="w-5 h-5" />
                  </a>
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Wishlist
                  </div>
                </div>

                <div className="relative group">
                  <button className="flex items-center space-x-2">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-9 h-9" />
                    <span className={`font-medium ${scrolled ? "text-gray-700" : "text-white"}`}>
                      Hi, User!
                    </span>
                  </button>

                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <a
                      href="/profile"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50"
                    >
                      <UserCircle className="w-4 h-4 mr-2" /> Profile
                    </a>
                    <a
                      href="/orders"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50"
                    >
                      <PackageSearch className="w-4 h-4 mr-2" /> Orders
                    </a>
                    <button
                      onClick={() => logout()}
                      className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 mt-1"
                    >
                      <LogOut className="w-4 h-4 mr-2" /> Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled
                  ? "text-gray-700 hover:bg-indigo-50"
                  : "text-white hover:bg-white/20"
                }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0"
          } ${scrolled ? "bg-white shadow-lg" : "bg-gradient-to-b from-blue-600 to-indigo-700"
          }`}
      >
        <div className="px-4 py-3 space-y-3">
          {/* Always show Home */}
          <a
            href="/"
            className={`block px-4 py-3 rounded-lg font-medium ${scrolled
                ? "text-gray-700 hover:bg-indigo-50"
                : "text-white hover:bg-white/10"
              }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>

          {/* Only show About and Contact for non-logged in users */}
          {!user && (
            <>
              <a
                href="/about"
                className={`block px-4 py-3 rounded-lg font-medium ${scrolled
                    ? "text-gray-700 hover:bg-indigo-50"
                    : "text-white hover:bg-white/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className={`block px-4 py-3 rounded-lg font-medium ${scrolled
                    ? "text-gray-700 hover:bg-indigo-50"
                    : "text-white hover:bg-white/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </>
          )}

          {!user ? (
            <div className="pt-3 space-y-3 border-t border-gray-200">
              <a
                href="/login"
                className={`flex items-center px-4 py-3 rounded-lg font-semibold ${scrolled
                    ? "text-indigo-600 hover:bg-indigo-50"
                    : "text-white hover:bg-white/20"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="w-5 h-5 mr-3" /> Login
              </a>
              <a
                href="/register"
                className={`flex items-center px-4 py-3 rounded-lg font-semibold ${scrolled
                    ? "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white"
                    : "bg-white text-indigo-600"
                  } justify-center`}
                onClick={() => setIsOpen(false)}
              >
                <UserPlus className="w-5 h-5 mr-3" /> Register
              </a>
            </div>
          ) : (
            <div className="pt-3 space-y-3 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-3 py-3">
                <a
                  href="/flashsale"
                  className={`flex flex-col items-center p-3 rounded-lg ${scrolled
                      ? "text-gray-700 hover:bg-indigo-50"
                      : "text-white hover:bg-white/10"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative">
                    <Bolt className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </span>
                  </div>
                  <span className="text-xs mt-1">Sale</span>
                </a>

                <a
                  href="/cart"
                  className={`flex flex-col items-center p-3 rounded-lg ${scrolled
                      ? "text-gray-700 hover:bg-indigo-50"
                      : "text-white hover:bg-white/10"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative">
                    <ShoppingCart className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      5
                    </span>
                  </div>
                  <span className="text-xs mt-1">Cart</span>
                </a>

                <a
                  href="/wishlist"
                  className={`flex flex-col items-center p-3 rounded-lg ${scrolled
                      ? "text-gray-700 hover:bg-indigo-50"
                      : "text-white hover:bg-white/10"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Heart className="w-6 h-6" />
                  <span className="text-xs mt-1">Wishlist</span>
                </a>
              </div>

              <a
                href="/profile"
                className={`flex items-center px-4 py-3 rounded-lg ${scrolled
                    ? "text-gray-700 hover:bg-indigo-50"
                    : "text-white hover:bg-white/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <UserCircle className="w-5 h-5 mr-3" /> Profile
              </a>
              <a
                href="/orders"
                className={`flex items-center px-4 py-3 rounded-lg ${scrolled
                    ? "text-gray-700 hover:bg-indigo-50"
                    : "text-white hover:bg-white/10"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <PackageSearch className="w-5 h-5 mr-3" /> Orders
              </a>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className={`flex items-center w-full px-4 py-3 rounded-lg ${scrolled
                    ? "text-red-600 hover:bg-red-50"
                    : "text-red-300 hover:bg-red-500/20"
                  }`}
              >
                <LogOut className="w-5 h-5 mr-3" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}