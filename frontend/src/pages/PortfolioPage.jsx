import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { useState, useRef } from 'react';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';

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

// Project Card Component - Image Full Top, Text Bottom
const ProjectCard = ({ project, index }) => {
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
        {/* Top Half - Full Image (No Frame) - Increased height to show first section */}
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

        {/* Bottom Half - Content Section */}
        <div className="px-8 py-6 space-y-3">
          {/* New Addition Badge */}
          {project.isNew && (
            <span className="inline-block w-fit px-3 py-1.5 bg-[#222222] text-white text-xs font-semibold rounded-full">
              New Addition
            </span>
          )}

          {/* Title */}
          <h3 className="text-2xl font-bold text-white leading-tight">
            {project.title}
          </h3>

          {/* Category */}
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            {project.category}
          </p>

          {/* Description - 2 lines max */}
          <p className="text-[#A1A1A1] text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
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

const PortfolioPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const filters = ['Todos', 'Web Design', 'E-commerce', 'SaaS', 'Branding'];

  const projects = [
    {
      id: 1,
      title: 'VistaHome',
      category: 'Portal Imobiliário Premium',
      description: 'Portal imobiliário de alto padrão gerando 120+ leads qualificados mensalmente através de SEO orgânico e tours virtuais 360°.',
      image: 'https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/ula6k21s_Captura%20de%20ecr%C3%A3%202026-04-06%20142454.png',
      tags: ['Real Estate', 'SEO'],
      isNew: true,
    },
    {
      id: 2,
      title: 'Newy Plumbing',
      category: 'Website Corporativo',
      description: 'Solução completa de canalização nº1 em Newcastle com sistema de agendamento online e 5000+ clientes satisfeitos.',
      image: 'https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/hntshac6_Gemini_Generated_Image_grxh62grxh62grxh.png',
      tags: ['Corporate', 'Lead Gen'],
      isNew: true,
    },
    {
      id: 3,
      title: 'LuxeStore Premium',
      category: 'E-commerce',
      description: 'E-commerce de moda de luxo com taxa de conversão de 8.5% - três vezes acima da média do setor de moda online.',
      image: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc3NTQ4MTE2MHww&ixlib=rb-4.1.0&q=85',
      tags: ['E-commerce', 'Branding'],
      isNew: false,
    },
    {
      id: 4,
      title: 'RealEstate Hub',
      category: 'Corporate Website',
      description: 'Portal imobiliário de alto padrão gerando consistentemente 120+ leads qualificados por mês através de SEO orgânico.',
      image: 'https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc3NTQ4MTE2MHww&ixlib=rb-4.1.0&q=85',
      tags: ['Corporate', 'SEO'],
      isNew: false,
    },
    {
      id: 5,
      title: 'CloudSync Dashboard',
      category: 'SaaS Platform',
      description: 'Dashboard de gestão cloud com interface intuitiva, tempos de resposta inferiores a 100ms e 99.9% de uptime.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc3NTQ4MTE2MHww&ixlib=rb-4.1.0&q=85',
      tags: ['SaaS', 'Cloud'],
      isNew: false,
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <style>{scrollbarHideCSS}</style>
      <CustomCursor />
      <FloatingOrbs />
      
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/e8xk7pen_Captura%20de%20ecr%C3%A3%202026-03-31%20170113.png"
                alt="ELEVA"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1 border border-gray-700 rounded-full px-4 py-2">
              <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5">
                Início
              </Link>
              <Link to="/services" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5">
                Serviços
              </Link>
              <Link to="/sobre" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5">
                Sobre
              </Link>
              <Link to="/portfolio" className="text-sm text-white hover:text-white transition-colors duration-300 px-3 py-1.5">
                Portfolio
              </Link>
              <a href="/#resultados" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5">
                Resultados
              </a>
              <a href="/#faq" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5">
                FAQ
              </a>
              <a href="/#contato" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5">
                Contato
              </a>
            </div>

            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-black/90 backdrop-blur-lg rounded-2xl border border-gray-700 p-4">
              <div className="flex flex-col gap-2">
                <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Início
                </Link>
                <Link to="/services" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Serviços
                </Link>
                <Link to="/sobre" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Sobre
                </Link>
                <Link to="/portfolio" className="text-sm text-white hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Portfolio
                </Link>
                <a href="/#resultados" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Resultados
                </a>
                <a href="/#faq" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </a>
                <a href="/#contato" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Contato
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative pt-32 md:pt-40 pb-20 md:pb-24 px-4 md:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-blue-900/10"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold tracking-widest uppercase mb-8">
              Portfolio · Trabalho Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight uppercase"
          >
            Projetos
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              De Elite.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Uma seleção curada de <span className="text-cyan-400 font-semibold">soluções digitais de alto desempenho</span> que construímos para 
            líderes de mercado e <span className="text-blue-400 font-semibold">marcas visionárias</span>.
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Bar */}
      <section className="py-8 px-4 md:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-cyan-500 text-black'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Horizontal Carousel with Auto-Scroll - 5 Projects */}
      <section className="py-24 md:py-32 bg-black overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8">
          {/* Auto-Scrolling Container - 5 Projects */}
          <motion.div 
            className="flex gap-8"
            animate={{
              x: [0, -2290], // 5 projects: (450px width + 8px gap) * 5 = 2290px
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50, // Slower: 50 seconds per loop
                ease: "linear",
              },
            }}
          >
            {/* Original Projects */}
            {projects.map((project, index) => (
              <div key={`original-${project.id}`} className="flex-shrink-0 w-[450px]">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
            {/* Duplicate Projects for seamless loop */}
            {projects.map((project, index) => (
              <div key={`duplicate-${project.id}`} className="flex-shrink-0 w-[450px]">
                <ProjectCard project={project} index={index} />
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
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 px-4 md:px-6 lg:px-8 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black"></div>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        ></motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight"
          >
            Pronto Para Ser o
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Próximo?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Vamos criar juntos o próximo <span className="text-cyan-400 font-semibold">projeto de elite</span> que define o seu mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/#contato"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 text-black font-black px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 text-lg uppercase tracking-wide"
            >
              Iniciar Projeto
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
