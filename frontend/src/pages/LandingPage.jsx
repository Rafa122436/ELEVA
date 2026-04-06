import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShinyText from '../components/ShinyText';
import SocialProofBar from '../components/SocialProofBar';
import ResultsSection from '../components/ResultsSection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';
import TextReveal from '../components/TextReveal';
import MagneticButton from '../components/MagneticButton';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const navLinks = ['Início', 'Serviços', 'Resultados', 'FAQ', 'Contato'];

  return (
    <div className="bg-black">
      <CustomCursor />
      <FloatingOrbs />
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        className="relative min-h-[150vh] w-full bg-black overflow-hidden"
      >
        {/* Video Background */}
        <motion.video
          style={{ scale }}
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
        </motion.video>

        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Navigation Bar */}
          <nav className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 md:gap-3">
                <img 
                  src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/e8xk7pen_Captura%20de%20ecr%C3%A3%202026-03-31%20170113.png"
                  alt="ELEVA"
                  className="h-12 md:h-16 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1 border border-gray-700 rounded-full px-4 py-2">
                <Link
                  to="/services"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
                >
                  Serviços
                </Link>
                <Link
                  to="/sobre"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
                >
                  Sobre
                </Link>
                <Link
                  to="/portfolio"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
                >
                  Portfolio
                </Link>
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
                    to="/services"
                    className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Serviços
                  </Link>
                  <Link
                    to="/sobre"
                    className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sobre
                  </Link>
                  <Link
                    to="/portfolio"
                    className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
            )}
          </nav>

          {/* Main Content */}
          <motion.div 
            style={{ opacity }}
            className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 pt-32 md:pt-40 lg:pt-48"
          >
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto w-full text-center">
              <div className="space-y-6 md:space-y-8">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold tracking-widest uppercase">
                    Website Estratégico · SEO · Automação
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-none uppercase">
                    Angarie Clientes de
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none uppercase">
                    <ShinyText text="Alto Valor em" />
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-none uppercase">
                    Piloto Automático
                  </h1>
                </motion.div>

                {/* Sub-headline */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed pt-4 md:pt-6"
                >
                  Transformamos o seu website numa <span className="text-cyan-400 font-semibold">máquina de vendas</span> que atrai,
                  qualifica e converte leads enquanto você dorme.
                </motion.p>

                {/* CTA Button */}
                <motion.div 
                  className="pt-8 md:pt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a 
                    href="#contato"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-black rounded-full px-10 py-5 transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 text-lg"
                  >
                    <span>
                      Agendar uma Chamada Estratégica Gratuita
                    </span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Social Proof Bar */}
      <SocialProofBar />

      {/* Results Section */}
      <ResultsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
