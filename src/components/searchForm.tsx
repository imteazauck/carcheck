import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm: React.FC = () => {
  const [reg, setReg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reg.trim()) {
      navigate(`/results/${reg.trim().toUpperCase()}`);
    }
  };

   return (
  //   <form onSubmit={handleSubmit} classNameNameName="flex flex-col md:flex-row gap-4 justify-center">
  //     <input
  //       type="text"
  //       placeholder="Enter Registration (e.g. AB12CDE)"
  //       value={reg}
  //       onChange={(e) => setReg(e.target.value)}
  //       classNameNameName="px-4 py-3 text-lg rounded-md shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none w-72 md:w-80 text-center"
  //     />
  //     <button
  //       type="submit"
  //       classNameNameName="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition"
  //     >
  //       Check Vehicle
  //     </button>
  //   </form>
  <div className="w-full bg-gradient-to-r from-blue-700 to-blue-500 py-20">
    <div className="max-w-3xl mx-auto px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Check a Vehicle</h2>
        <p className="text-gray-600 mb-6">Enter your number plate below to get started</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="text"
            placeholder="Enter Registration (e.g. AB12CDE)"
            value={reg}
            onChange={(e) => setReg(e.target.value)}
            className="w-full sm:w-64 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Check Now
          </button>
        </form>
      </div>
    </div>
  </div>
  

  );
};

export default SearchForm;
