import React, { useState } from 'react';
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

  const navLinks = ['Início', 'Serviços', 'Resultados', 'FAQ', 'Contato'];

  return (
    <div className="bg-black">
      <CustomCursor />
      <FloatingOrbs />
      {/* Hero Section */}
      <div className="relative min-h-[150vh] w-full bg-black overflow-hidden">
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
                <Link
                  to="/sobre"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
                >
                  Sobre
                </Link>
                <a
                  href="#resultados"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
                >
                  Resultados
                </a>
                <a
                  href="#faq"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
                >
                  FAQ
                </a>
                <a
                  href="#contato"
                  className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
                >
                  Contato
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
                  <Link
                    to="/sobre"
                    className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sobre
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
                    className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contato
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </nav>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 pt-32 md:pt-40 lg:pt-48">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto w-full text-center">
              <div className="space-y-6 md:space-y-8">
                {/* Small uppercase text */}
                <p className="text-xs md:text-sm text-white/80 uppercase tracking-tight">
                  Website Estratégico + SEO + Automação
                </p>

                {/* Main Heading */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tighter leading-none">
                    Angarie Clientes de
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-none">
                    <ShinyText text="Alto Valor em" />
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tighter leading-none">
                    Piloto Automático
                  </h1>
                </div>

                {/* Sub-headline */}
                <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed pt-4 md:pt-6">
                  Transformamos o seu website numa máquina de vendas que atrai,
                  qualifica e converte leads enquanto você dorme
                </p>

                {/* CTA Button */}
                <div className="pt-8 md:pt-10">
                  <button className="group bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold rounded-full px-8 md:px-10 py-4 md:py-5 flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-105 shadow-xl shadow-[#64CEFB]/25">
                    <span className="text-base md:text-lg">
                      Agendar Consultoria Gratuita
                    </span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
