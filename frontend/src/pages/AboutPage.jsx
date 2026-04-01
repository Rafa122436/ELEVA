import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Target, Zap, Users, Award, TrendingUp, Heart, ArrowRight, Rocket } from 'lucide-react';
import { useState, useRef } from 'react';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';

// Animated Stats Counter Component
const AnimatedStat = ({ number, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, type: "spring" }}
      className="text-center"
    >
      <motion.p
        initial={{ y: 20 }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3"
      >
        {number}
      </motion.p>
      <p className="text-white/70 text-sm md:text-base uppercase tracking-wide font-semibold">{label}</p>
    </motion.div>
  );
};

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const stats = [
    { number: '50+', label: 'Projetos Entregues', delay: 0 },
    { number: '100%', label: 'Projetos no Prazo', delay: 0.2 },
    { number: '5 Anos', label: 'de Experiência', delay: 0.4 },
    { number: '98%', label: 'Taxa de Satisfação', delay: 0.6 },
  ];

  const values = [
    {
      icon: Target,
      title: 'FOCADOS EM RESULTADOS',
      subtitle: 'ROI Garantido',
      description: 'Não vendemos apenas serviços — garantimos que cada projeto gera retorno real e mensurável para o seu negócio.',
      gradient: 'from-cyan-900/10 to-blue-900/10',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: Zap,
      title: 'EXECUÇÃO RÁPIDA',
      subtitle: 'Entrega Express',
      description: 'Enquanto outros demoram meses, nós entregamos websites e campanhas prontas em 30-45 dias sem comprometer qualidade.',
      gradient: 'from-blue-900/10 to-cyan-900/10',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: Heart,
      title: 'PARCERIA LONGO PRAZO',
      subtitle: 'Crescimento Conjunto',
      description: 'O nosso sucesso está ligado ao seu. Não somos apenas fornecedores, somos parceiros estratégicos do seu crescimento.',
      gradient: 'from-cyan-900/10 to-blue-900/10',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: Award,
      title: 'EXCELÊNCIA TÉCNICA',
      subtitle: 'Tecnologia Avançada',
      description: 'Utilizamos as tecnologias mais avançadas e metodologias comprovadas para garantir que o seu projeto é construído para durar.',
      gradient: 'from-blue-900/10 to-cyan-900/10',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
  ];

  const team = [
    {
      name: 'Designers',
      icon: Users,
      description: 'Especialistas em criar experiências visuais que convertem e comunicam a essência da sua marca.',
    },
    {
      name: 'Developers',
      icon: Rocket,
      description: 'Código limpo, performance otimizada e soluções técnicas que funcionam perfeitamente em qualquer dispositivo.',
    },
    {
      name: 'Marketing',
      icon: TrendingUp,
      description: 'Profissionais dedicados a garantir que o seu negócio é encontrado pelos clientes certos no momento certo.',
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
              <Link to="/sobre" className="text-sm text-white hover:text-white transition-colors duration-300 px-3 py-1.5">
                Sobre
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
                <Link to="/sobre" className="text-sm text-white hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Sobre
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
        className="relative pt-32 md:pt-40 pb-32 md:pb-40 px-4 md:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-blue-900/10"></div>
        
        {/* Floating Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-32 right-10 md:right-20"
        >
          <div className="relative">
            <Users className="w-32 h-32 md:w-48 md:h-48 text-cyan-400" strokeWidth={0.5} />
            <div className="absolute inset-0 blur-3xl bg-cyan-400/20 rounded-full"></div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold tracking-widest uppercase mb-8">
              Sobre Nós · Nossa História
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight"
          >
            CONSTRUÍMOS
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              FUTUROS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Não somos apenas uma agência de web design. Somos <span className="text-cyan-400 font-semibold">arquitetos de experiências digitais</span> que transformam negócios em 
            <span className="text-blue-400 font-semibold"> marcas inesquecíveis</span>.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Values - 4 Pillars */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              OS NOSSOS VALORES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight">
              O Que Nos{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Define
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${value.gradient} backdrop-blur-sm border-2 ${value.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative inline-block mb-6">
                    <value.icon className={`w-14 h-14 ${value.iconColor} stroke-[1.5]`} />
                    <div className={`absolute inset-0 blur-xl ${value.iconColor} opacity-30`}></div>
                  </div>

                  <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-2">
                    {value.subtitle}
                  </p>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl blur-xl ${value.gradient}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
              A NOSSA EQUIPA
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight">
              Especialistas{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Dedicados
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-2xl p-8 transition-all duration-500 text-center"
              >
                <div className="relative inline-block mb-6">
                  <member.icon className="w-16 h-16 text-cyan-400 stroke-[1.5] mx-auto" />
                  <div className="absolute inset-0 blur-xl bg-cyan-400/20 rounded-full"></div>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">
                  {member.name}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              A NOSSA HISTÓRIA
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">
              Como Tudo{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Começou
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border-2 border-white/10 rounded-3xl p-8 md:p-12"
          >
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Há 5 anos, começámos com uma missão simples mas ambiciosa: <span className="text-cyan-400 font-semibold">transformar a forma como os negócios se apresentam online</span>.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Cansados de ver empresas incríveis com presenças digitais medíocres, decidimos criar uma agência que combinasse{' '}
              <span className="text-blue-400 font-semibold">design excepcional com estratégia orientada a resultados</span>.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Hoje, já ajudámos <span className="text-cyan-400 font-semibold">40+ negócios</span> a elevar a sua presença digital e a alcançar crescimento real e mensurável.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              O que nos move? Ver o sucesso dos nossos clientes e saber que fizemos parte dessa jornada. <span className="text-blue-400 font-semibold">O futuro é digital. E nós estamos aqui para o construir consigo.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 md:py-40 px-4 md:px-6 lg:px-8 overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold tracking-widest uppercase mb-8">
              JUNTE-SE A NÓS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight"
          >
            Pronto Para
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Elevar?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Vamos construir juntos o <span className="text-cyan-400 font-semibold">futuro digital</span> do seu negócio.
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
              Começar Agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
