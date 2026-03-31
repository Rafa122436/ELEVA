import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCardsGrid from '../components/ServiceCardsGrid';
import ServicesFAQ from '../components/ServicesFAQ';
import ServicesCTA from '../components/ServicesCTA';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Início', 'Serviços', 'Resultados', 'FAQ', 'Contato'];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black">
        {/* Navigation Bar */}
        <nav className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6 relative z-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white"></div>
              </div>
              <span className="text-white font-medium text-lg md:text-xl">
                DesignPro
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 border border-gray-700 rounded-full px-4 py-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link === 'Início' ? '/' : `/#${link.toLowerCase()}`}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-black/90 backdrop-blur-lg rounded-2xl border border-gray-700 p-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link === 'Início' ? '/' : `/#${link.toLowerCase()}`}
                    className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-6 md:space-y-8">
              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tighter leading-none">
                  Services Built to Drive:
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#64CEFB] tracking-tighter leading-none">
                  Leads, Sales, and Growth
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                The same systems that run our business are the ones we
                implement for clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <ServiceCardsGrid />

      {/* FAQ Section */}
      <ServicesFAQ />

      {/* CTA Section */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
