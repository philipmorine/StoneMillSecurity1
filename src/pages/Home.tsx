import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Users, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure Your Digital World
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert cybersecurity solutions to protect your business and personal data
              in an increasingly connected world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/top-10"
                className="bg-transparent border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-900 px-8 py-3 rounded-lg font-semibold transition duration-200"
              >
                View Safety Tips
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose StoneMill Security?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive cybersecurity solutions tailored to your needs,
              ensuring your digital assets remain protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-cyan-600" />,
                title: 'Advanced Protection',
                description:
                  'State-of-the-art security measures to safeguard your systems and data.',
              },
              {
                icon: <Lock className="h-12 w-12 text-cyan-600" />,
                title: 'Proactive Monitoring',
                description:
                  '24/7 threat detection and response to prevent security breaches.',
              },
              {
                icon: <Users className="h-12 w-12 text-cyan-600" />,
                title: 'Expert Consultation',
                description:
                  'Personalized security strategies from industry professionals.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition duration-200"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Secure Your Digital Assets?
              </h2>
              <p className="text-gray-400">
                Contact us today for a free security consultation.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-lg font-semibold transition duration-200"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;