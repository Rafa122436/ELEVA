import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCardsGrid from '../components/ServiceCardsGrid';
import ServicesFAQ from '../components/ServicesFAQ';
import ServicesCTA from '../components/ServicesCTA';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';

const ServicesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Início', 'Serviços', 'Resultados', 'FAQ', 'Contato'];

  return (
    <div className="bg-black">
      <CustomCursor />
      <FloatingOrbs />
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black">
        {/* Navigation Bar */}
        <nav className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6 relative z-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/e8xk7pen_Captura%20de%20ecr%C3%A3%202026-03-31%20170113.png"
                alt="ELEVA"
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 border border-gray-700 rounded-full px-4 py-2">
              <Link
                to="/"
                className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
              >
                Início
              </Link>
              <Link
                to="/services"
                className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
              >
                Serviços
              </Link>
              <a
                href="/#resultados"
                className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
              >
                Resultados
              </a>
              <a
                href="/#faq"
                className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
              >
                FAQ
              </a>
              <a
                href="/#contato"
                className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
              >
                Contato
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
                <Link
                  to="/"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  to="/services"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Serviços
                </Link>
                <a
                  href="/#resultados"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resultados
                </a>
                <a
                  href="/#faq"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="/#contato"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="flex items-center justify-center min-h-[35vh] px-4 md:px-6 lg:px-8 relative">
          {/* Animated background orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#64CEFB]/20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#64CEFB]/20 rounded-full blur-3xl"
          ></motion.div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2"
            >
              {/* Main Heading */}
              <div className="space-y-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-none"
                >
                  Serviços Criados para Gerar:
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#64CEFB] tracking-tighter leading-none"
                  style={{
                    textShadow: '0 0 30px rgba(100, 206, 251, 0.3)',
                  }}
                >
                  Leads, Vendas e Crescimento
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-6"
              >
                Os mesmos sistemas que usamos no nosso negócio são os que implementamos para os nossos clientes.
              </motion.p>
            </motion.div>
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
