import React from 'react';
import TipCard from '../components/TipCard';
import { securityTips } from '../data/securityTips';
import { Shield } from 'lucide-react';

const TopTen = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Shield className="h-12 w-12 text-cyan-400" />
            <h1 className="text-4xl font-bold">Top 10 Ways to Stay Safe Online</h1>
          </div>
          <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg">
            Follow these essential cybersecurity practices to protect yourself and your data
            in today's digital world.
          </p>
        </div>
      </div>

      {/* Tips Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityTips.map((tip, index) => (
            <TipCard
              key={index}
              icon={tip.icon}
              title={tip.title}
              description={tip.description}
              index={index + 1}
            />
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-600 mb-6">
            These tips are just the beginning. For more detailed information and
            personalized security recommendations, contact our team of experts.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
          >
            Get Expert Advice
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopTen;