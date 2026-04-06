import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
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

// Custom CSS for hiding scrollbar
const scrollbarHideCSS = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// Portfolio Projects Data
const portfolioProjects = [
  {
    id: 1,
    title: 'VistaHome',
    category: 'Portal Imobiliário Premium',
    description: 'Elevou o padrão de apresentação de imóveis de luxo, resultando num aumento de 45% no tempo de permanência dos utilizadores no site.',
    image: 'https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/ula6k21s_Captura%20de%20ecr%C3%A3%202026-04-06%20142454.png',
    tags: ['Real Estate', 'SEO'],
    isNew: true,
  },
  {
    id: 2,
    title: 'Almeida Canalizações',
    category: 'Website Corporativo',
    description: 'Otimizou o funil de conversão local, gerando um crescimento de 30% no agendamento direto de serviços de emergência.',
    image: 'https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/ocp1gzle_23d5ba27-c7ad-4df7-86d7-e168db7f5092.png',
    tags: ['Corporate', 'Lead Gen'],
    isNew: true,
  },
  {
    id: 3,
    title: 'Aventuras DR',
    category: 'Plataforma de Turismo',
    description: 'Transformou a experiência de reserva online, duplicando a taxa de conversão para excursões exclusivas na República Dominicana.',
    image: 'https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/9hpnu49x_9e0c6821-a8e2-4894-904b-d8ebd0382b0a.png',
    tags: ['Tourism', 'Booking'],
    isNew: true,
  },
  {
    id: 4,
    title: 'Terapias de Luz',
    category: 'Bem-Estar & Terapias',
    description: 'Criou uma presença digital serena e profissional que aumentou a marcação de consultas de primeira vez em mais de 25%.',
    image: 'https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/2niijwsl_Captura%20de%20ecr%C3%A3%202026-04-06%20152635.png',
    tags: ['Wellness', 'Booking'],
    isNew: true,
  },
];

// Portfolio Card Component
const PortfolioCard = ({ project, index }) => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-[#111111] rounded-[24px] overflow-hidden"
        style={{
          boxShadow: isHovered 
            ? '0 20px 60px rgba(100, 206, 251, 0.15), 0 0 0 1px rgba(100, 206, 251, 0.1)'
            : '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
        }}
      >
        {/* Top Half - Full Image */}
        <div className="relative h-[350px] overflow-hidden bg-black">
          <motion.img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ filter: 'brightness(0.95)' }}
          />
        </div>

        {/* Bottom Half - Content */}
        <div className="px-8 py-6 space-y-3">
          {project.isNew && (
            <span className="inline-block w-fit px-3 py-1.5 bg-[#222222] text-white text-xs font-semibold rounded-full">
              New Addition
            </span>
          )}

          <h3 className="text-2xl font-bold text-white leading-tight">
            {project.title}
          </h3>

          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            {project.category}
          </p>

          <p className="text-[#A1A1A1] text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex gap-2 flex-wrap pt-2">
            {project.tags.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

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

      {/* Portfolio Section */}
      <section className="py-24 md:py-32 bg-black overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold tracking-widest uppercase"
            >
              Agência Parceira de Confiança
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Startups + <span className="text-cyan-400">Empresas</span>
            </h2>
            
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Tenha seu site online num instante com setup profissional e suporte técnico
            </p>
          </motion.div>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <style>{scrollbarHideCSS}</style>
          <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
            {/* Mobile: Swipeable, Desktop: Auto-scroll */}
            <div className="block md:hidden">
              {/* Mobile - Manual Swipe */}
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  scrollPaddingLeft: '16px'
                }}
              >
                {portfolioProjects.map((project, index) => (
                  <div key={project.id} className="flex-shrink-0 w-[85vw] sm:w-[400px] snap-center">
                    <PortfolioCard project={project} index={index} />
                  </div>
                ))}
              </div>
              
              {/* Swipe Indicator */}
              <div className="text-center mt-4">
                <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
                  <span>← Deslize →</span>
                </div>
              </div>
            </div>
            
            {/* Desktop - Auto-scroll */}
            <div className="hidden md:block">
              <motion.div 
                className="flex gap-8"
                animate={{
                  x: [0, -1832],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 45,
                    ease: "linear",
                  },
                }}
              >
                {/* Original Projects */}
                {portfolioProjects.map((project, index) => (
                  <div key={`original-${project.id}`} className="flex-shrink-0 w-[450px]">
                    <PortfolioCard project={project} index={index} />
                  </div>
                ))}
                {/* Duplicate Projects for seamless loop */}
                {portfolioProjects.map((project, index) => (
                  <div key={`duplicate-${project.id}`} className="flex-shrink-0 w-[450px]">
                    <PortfolioCard project={project} index={index} />
                  </div>
                ))}
              </motion.div>

              {/* Auto-Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 text-center"
              >
                <div className="flex items-center justify-center gap-3 text-white/40 text-sm">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                  <span className="uppercase tracking-wider">Auto-Scroll Ativo</span>
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link to="/portfolio">
            <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-black rounded-full transition-all duration-300 hover:scale-105 uppercase tracking-wide shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
              Ver Todos os Projetos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
