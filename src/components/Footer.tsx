import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="bg-white border-t mt-20">
    <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
      <span className="text-gray-600">&copy; {new Date().getFullYear()} Car Vetting</span>
      <div className="space-x-4">
        <Link to="/privacy" className="text-gray-600 hover:text-primary">
          Privacy
        </Link>
        <Link to="/terms" className="text-gray-600 hover:text-primary">
          Terms
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
