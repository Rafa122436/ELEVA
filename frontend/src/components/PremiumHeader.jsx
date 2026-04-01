import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PremiumHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', path: '/services' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Resultados', path: '/#resultados' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-[10px] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <img
                src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/e8xk7pen_Captura%20de%20ecr%C3%A3%202026-03-31%20170113.png"
                alt="ELEVA"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="group relative text-white/70 hover:text-white font-medium text-[15px] tracking-wide transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/qualify"
                className="relative group overflow-hidden bg-white text-black px-8 py-3 rounded-md font-semibold text-[14px] tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                <span className="relative z-10">Falar Connosco</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white z-50 relative"
            >
              <div className="space-y-[6px]">
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 8 : 0,
                    width: mobileMenuOpen ? '28px' : '28px',
                  }}
                  className="block h-[2px] w-7 bg-white transition-all"
                />
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -8 : 0,
                    width: mobileMenuOpen ? '28px' : '20px',
                  }}
                  className="block h-[3px] bg-white transition-all"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-3xl font-semibold hover:text-white/70 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/qualify"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-white text-black px-12 py-4 rounded-md font-semibold text-lg"
                >
                  Falar Connosco
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PremiumHeader;
