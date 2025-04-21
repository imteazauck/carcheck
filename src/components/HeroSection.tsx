// HeroSection.tsx
import React from 'react';
import SearchForm from './searchForm';

const HeroSection: React.FC = () => (
  <section className="bg-blue-600 text-white py-20 text-center">
    <h1 className="text-4xl font-bold mb-4">Free Car Check</h1>
    <p className="text-lg mb-6">Enter your registration number to get detailed vehicle information.</p>
    <SearchForm />
  </section>

  
);

export default HeroSection;
