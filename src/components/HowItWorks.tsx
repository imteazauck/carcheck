// HowItWorks.tsx
import React from 'react';

const steps = [
  'Enter Registration Number',
  'View Free Vehicle Information',
  'Download Premium Report (Optional)',
];

const HowItWorks: React.FC = () => (
  <section className="py-12">
    <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
    <div className="max-w-3xl mx-auto space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start">
          <span className="text-blue-600 font-bold mr-4">{index + 1}.</span>
          <p>{step}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
