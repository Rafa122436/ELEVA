import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import ShinyText from '../components/ShinyText';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    'Home',
    'About Us',
    'Courses',
    'Instructors',
    'Testimonials',
    'Blog',
  ];

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation Bar */}
        <nav className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white"></div>
              </div>
              <span className="text-white font-medium text-lg md:text-xl">
                DesignPro
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 border border-gray-700 rounded-full px-4 py-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
              >
                Contact us
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
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
                  <a
                    key={index}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact us
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-between px-4 md:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto w-full">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-8 md:mt-12 lg:mt-16">
              {/* Left Column */}
              <div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  We deliver transformative programs that empower emerging
                  product designers with cutting-edge expertise and vision to
                  thrive globally.
                </p>
              </div>

              {/* Right Column */}
              <div className="lg:text-right">
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  8000+ Talented Designers Launched !
                </p>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="max-w-7xl mx-auto w-full text-center">
            <div className="space-y-6 md:space-y-8">
              {/* Small uppercase text */}
              <p className="text-xs md:text-sm text-white/80 uppercase tracking-tight">
                Seats for Next Program Opening Soon
              </p>

              {/* Main Heading */}
              <div className="space-y-0">
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-white tracking-tighter"
                  style={{ lineHeight: '0.85' }}
                >
                  Become
                </h1>
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter"
                  style={{ lineHeight: '0.85' }}
                >
                  <ShinyText text="Product Leader." />
                </h1>
              </div>

              {/* CTA Button */}
              <div className="pt-4 md:pt-6">
                <button className="group bg-black hover:bg-gray-900 text-white rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 mx-auto transition-all duration-300">
                  <span className="text-sm md:text-base">
                    Apply for Next Enrollment
                  </span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Spacer for bottom alignment */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
