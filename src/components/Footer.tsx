import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-cyan-500" />
              <span className="font-bold text-lg">StoneMill Security</span>
            </div>
            <p className="text-gray-400">
              Protecting your digital future with expert cybersecurity solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/top-10" className="text-gray-400 hover:text-cyan-400">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>info@stonemillsecurity.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>123 Security Ave, Cyberspace</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest security tips and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-cyan-500"
              />
              <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded transition duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} StoneMill Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;