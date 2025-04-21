import React from 'react';
import { motion } from 'framer-motion'; // optional for animation

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        
        {/* Animated Branding Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="flex justify-center"
        >
          <div className="bg-blue-600 p-4 rounded-full inline-block relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="36"
              height="36"
            >
              <path d="M5 16v-1a2 2 0 012-2h10a2 2 0 012 2v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a1 1 0 11-2 0v-1H6v1a1 1 0 11-2 0v-1H3a1 1 0 01-1-1v-2a1 1 0 011-1h1zm2 0h10v-1a1 1 0 00-1-1H8a1 1 0 00-1 1v1zM7 5a1 1 0 000 2h10a1 1 0 000-2H7zm2 3a1 1 0 00-1 1v2h8V9a1 1 0 00-1-1H9z" />
            </svg>
          </div>
        </motion.div>

        {/* Branding Title */}
        <h1 className="text-3xl font-bold text-gray-800">CarCheck</h1>
        <p className="text-gray-600">Check your car's history in seconds</p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter registration number"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
