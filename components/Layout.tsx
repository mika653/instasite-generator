
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useGenerator } from '../context/GeneratorContext';
import PreviewBanner from './PreviewBanner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="serif text-xl font-bold text-stone-900 tracking-tight">InstaSite™ Starter</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 -mt-1 font-medium">Professional Presence</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-salmon-600' : 'text-stone-500 hover:text-salmon-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-salmon-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-salmon-600 transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-500">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-stone-600 hover:text-stone-900"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-salmon-500 text-white text-center py-3 rounded-xl font-medium"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { data } = useGenerator();

  return (
    <footer className="bg-stone-50 border-t border-stone-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="serif text-xl font-bold mb-2">{data.name}</h2>
        <p className="text-stone-400 text-sm mb-6">Professional Services</p>
        <div className="flex justify-center gap-4 mb-6">
          <span className="text-[11px] font-bold text-stone-400 border border-stone-300 px-2 py-1 rounded">InstaSite™ Starter</span>
        </div>
        <p className="text-xs text-stone-400">&copy; 2024 InstaSite™ Platform. All rights reserved. Powered by InstaSite™</p>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-salmon-100 selection:text-salmon-900">
      <PreviewBanner />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
