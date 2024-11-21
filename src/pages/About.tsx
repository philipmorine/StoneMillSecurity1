import React from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About StoneMill Security</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated to protecting businesses and individuals in an increasingly
              complex digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At StoneMill Security, we believe that everyone deserves to feel safe
              in the digital world. Our mission is to provide comprehensive
              cybersecurity solutions that protect our clients' digital assets while
              educating them about best practices in online safety.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We combine cutting-edge technology with expert knowledge to deliver
              security solutions that are both effective and user-friendly,
              ensuring that our clients can focus on their goals while we handle
              their security needs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Target className="h-8 w-8 text-cyan-600" />,
                title: 'Precision',
                description: 'Targeted security solutions',
              },
              {
                icon: <Shield className="h-8 w-8 text-cyan-600" />,
                title: 'Protection',
                description: 'Comprehensive defense systems',
              },
              {
                icon: <Award className="h-8 w-8 text-cyan-600" />,
                title: 'Excellence',
                description: 'Industry-leading expertise',
              },
              {
                icon: <Users className="h-8 w-8 text-cyan-600" />,
                title: 'Partnership',
                description: 'Client-focused approach',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Chief Executive Officer',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
              },
              {
                name: 'Michael Rodriguez',
                role: 'Chief Technology Officer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
              },
              {
                name: 'Emma Thompson',
                role: 'Head of Security Operations',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;