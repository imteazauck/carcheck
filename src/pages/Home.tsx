import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const CarCheckLanding: React.FC = () => {
  const features = [
    "MOT History",
    "Mileage Records",
    "Insurance Write-Offs",
    "Road Tax Status",
    "Stolen Vehicle Check",
    "Basic DVLA Info",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm flex justify-between items-center">
      <div className="flex items-center space-x-2">
  <img src="/logo.png" alt="CarVetting logo" className="w-16 h-16" />
  <span className="text-2xl font-bold text-black-800">Car Vetting</span>
</div>

      </nav>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-3"
        >
          Free UK Car Check
        </motion.h1>
        <p className="text-lg opacity-90 mb-8">
          Enter a reg number for MOT, tax, write-off history & more
        </p>

        {/* Input Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="e.g., AB12 CDE"
            className="w-full sm:w-2/3 px-4 py-3 text-black rounded-md border border-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-bold transition"
          >
            Continue
          </button>
        </form>

        {/* Trust Info */}
        <div className="mt-8 text-sm opacity-90">
          <p>✅ Trusted by 1M+ UK users • Rated 9.1/10 on Trustpilot</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8"
        >
          What’s Included in Your Free Check:
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-4 bg-gray-50 rounded-xl shadow"
            >
              <p className="font-medium text-gray-700">✅ {feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sample Report Preview */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Preview Your Free Report</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Get detailed info on MOT history, mileage anomalies, insurance write-offs and more.
        </p>

        <div className="flex justify-center">
        <img
  src="sample-report-preview.png"
  alt="Sample Car Report"
  className="rounded-lg shadow-lg max-w-full"
/>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-6 mt-12">
        <p className="text-sm">© {new Date().getFullYear()} CarVetting. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CarCheckLanding;
