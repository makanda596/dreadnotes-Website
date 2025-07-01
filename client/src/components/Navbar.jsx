import { useState } from "react";

// Simulate auth hook or prop
// Replace this with your actual auth store or context
function useAuth() {
  // For demo: user is null if logged out, or an object if logged in
  const [user, setUser] = useState(true);

  const login = () => setUser({ name: "Brian" });
  const logout = () => setUser(null);

  return { user, login, logout };
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-2xl tracking-wide">
              DreadNotes
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="/"
              className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-medium transition"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-medium transition"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-medium transition"
            >
              Contact Us
            </a>

            {!user ? (
              <>
                <a
                  href="/login"
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-medium transition"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="bg-white text-blue-500 px-3 py-2 rounded-md text-lg font-semibold hover:bg-blue-100 transition"
                >
                  Register
                </a>
              </>
            ) : (
              <>
                <a
                  href="/profile"
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-lg font-medium transition"
                >
                  Profile
                </a>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-lg font-semibold transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-400" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>

            {!user ? (
              <>
                <a
                  href="/login"
                  className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="block bg-white text-blue-500 px-3 py-2 rounded-md text-base font-semibold hover:bg-blue-100 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </a>
              </>
            ) : (
              <>
                <a
                  href="/profile"
                  className="block text-white px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </a>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-base font-semibold transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
