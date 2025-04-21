// Home.tsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import PremiumTeaser from '../components/PremiumTeaser';

const Home: React.FC = () => (
  <main>
    <HeroSection />
    <Features />
    <HowItWorks />
    <PremiumTeaser />
  </main>
);

export default Home;
