import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import ShinyText from '../components/ShinyText';
import SocialProofBar from '../components/SocialProofBar';
import ResultsSection from '../components/ResultsSection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Início', 'Serviços', 'Resultados', 'FAQ', 'Contato'];

  return (
    <div className="bg-black">
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
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5"
                  >
                    {link}
                  </a>
                ))}
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
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                  <a
                    href="#contato"
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
          <div className="flex-1 flex flex-col justify-center px-4 md:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
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
                <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed pb-12 md:pb-16 lg:pb-20">
                  Transformamos o seu website numa máquina de vendas que atrai,
                  qualifica e converte leads enquanto você dorme
                </p>

                {/* CTA Button */}
                <div className="pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-32 lg:pb-40">
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
