import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { useState, useRef } from 'react';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';

// Project Card Component with Premium Effects
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 ${
        project.size === 'large' ? 'col-span-2 row-span-2' : ''
      } ${project.size === 'wide' ? 'col-span-2' : ''} ${project.size === 'tall' ? 'row-span-2' : ''}`}
      style={{ 
        minHeight: project.size === 'large' ? '600px' : project.size === 'tall' ? '500px' : '300px',
        backgroundColor: '#0A0A0A'
      }}
    >
      {/* Project Image with Zoom Effect */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ filter: isHovered ? 'saturate(1.2) brightness(1.1)' : 'saturate(0.9) brightness(0.8)' }}
        />
      </motion.div>

      {/* Overlay with Project Info */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-end p-6 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Title */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
            {project.title}
          </h3>

          {/* Category */}
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            {project.category}
          </p>

          {/* Description */}
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            {project.description}
          </p>

          {/* View Project Link */}
          <motion.div
            className="flex items-center gap-2 text-cyan-400 font-bold cursor-pointer group/link"
            whileHover={{ x: 5 }}
          >
            <span className="uppercase text-sm tracking-wide">Ver Projeto</span>
            <ExternalLink className="w-4 h-4 group-hover/link:rotate-45 transition-transform duration-300" />
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle Inner Glow Border */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          boxShadow: isHovered 
            ? 'inset 0 0 0 1px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.2)'
            : 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
        }}
      ></div>
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
      title: 'TechFlow SaaS',
      category: 'SaaS Platform',
      description: 'Plataforma de gestão de projetos com IA integrada que aumentou a produtividade em 200%.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBkZXNpZ258ZW58MHx8fHwxNzc1MDYwMzc5fDA&ixlib=rb-4.1.0&q=85',
      tags: ['Web Design', 'Custom Code', 'SEO'],
      size: 'large',
    },
    {
      id: 2,
      title: 'LuxeStore',
      category: 'E-commerce Premium',
      description: 'Loja online de moda de luxo com conversão de 8.5% - 3x acima da média do setor.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RvcmV8ZW58MHx8fHwxNzc1MDYwMzgxfDA&ixlib=rb-4.1.0&q=85',
      tags: ['E-commerce', 'Branding'],
      size: 'normal',
    },
    {
      id: 3,
      title: 'FitnessPro',
      category: 'Web App',
      description: 'Aplicação de treino personalizado com 50k+ utilizadores ativos mensalmente.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwfGVufDB8fHx8MTc3NTA2MDM4M3ww&ixlib=rb-4.1.0&q=85',
      tags: ['Web Design', 'UX/UI'],
      size: 'normal',
    },
    {
      id: 4,
      title: 'RealEstate Hub',
      category: 'Corporate Website',
      description: 'Portal imobiliário que gera 120+ leads qualificados por mês através de SEO orgânico.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc3NTA2MDM4NXww&ixlib=rb-4.1.0&q=85',
      tags: ['Web Design', 'SEO', 'Custom Code'],
      size: 'wide',
    },
    {
      id: 5,
      title: 'CloudSync',
      category: 'SaaS Dashboard',
      description: 'Dashboard de análise de dados cloud com interface intuitiva e tempos de resposta < 100ms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc3NTA2MDM4N3ww&ixlib=rb-4.1.0&q=85',
      tags: ['SaaS', 'Custom Code'],
      size: 'tall',
    },
    {
      id: 6,
      title: 'BrandStudio',
      category: 'Branding & Design',
      description: 'Identidade visual completa para agência criativa com 95% de aprovação de clientes.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbnxlbnwwfHx8fDE3NzUwNjAzODl8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Branding', 'Web Design'],
      size: 'normal',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
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

      {/* Projects Grid - Bento/Masonry Style */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white hover:bg-white hover:text-black text-white font-black rounded-full transition-all duration-300 hover:scale-105 uppercase tracking-wide">
              Ver Todos os Projetos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
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
