import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Car Vetting" className="h-10 mr-3" />
          <span className="font-bold text-xl text-primary">Car Vetting</span>
        </Link>

        {/* desktop links */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="font-medium text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-primary">
            About
          </Link>
        </nav>

        {/* mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* mobile links */}
      {open && (
        <nav className="md:hidden bg-white shadow-inner">
          <Link
            to="/"
            className="block px-6 py-3 text-gray-700 hover:bg-background"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 text-gray-700 hover:bg-background"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
