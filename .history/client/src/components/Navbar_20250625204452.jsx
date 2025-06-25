import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-blue-600">DreeadNotes</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact Us</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">Login</Link>
            <Link to="/register" className="text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition">Register</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      // {isOpen && (
      //   <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
      //     <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600">Home</Link>
      //     <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600">About</Link>
      //     <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600">Contact Us</Link>
      //     <Link to="/login" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600">Login</Link>
      //     <Link to="/register" onClick={() => setIsOpen(false)} className="block text-white bg-blue-600 px-4 py-2 rounded text-center hover:bg-blue-700">Register</Link>
      //   </div>
      // )}
    </nav>
  );
};

export default Navbar;
