// Features.tsx
import React from 'react';

const features = [
  'Mileage',
  'MOT History',
  'Damages',
  'Internet History',
  'Car Option List',
  '88+ Extra Items',
];

const Features: React.FC = () => (
  <section className="py-12 bg-gray-100">
    <h2 className="text-2xl font-bold text-center mb-8">We Check:</h2>
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
      {features.map((feature) => (
        <div key={feature} className="bg-white p-4 shadow rounded">
          {feature}
        </div>
      ))}
    </div>
  </section>
);

export default Features;
