import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Code, FileSearch, Link2Icon, TrendingUp, Globe, MapPin, ArrowRight, Target, Zap, Award, BarChart3, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';

// Animated Rising Bar Chart Component
const RisingBarChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const bars = [
    { height: 40, delay: 0, color: 'bg-gradient-to-t from-cyan-600/80 to-cyan-400' },
    { height: 65, delay: 0.1, color: 'bg-gradient-to-t from-cyan-600/80 to-cyan-400' },
    { height: 52, delay: 0.2, color: 'bg-gradient-to-t from-blue-600/80 to-blue-400' },
    { height: 85, delay: 0.3, color: 'bg-gradient-to-t from-blue-600/80 to-cyan-400' },
    { height: 100, delay: 0.4, color: 'bg-gradient-to-t from-cyan-500 to-blue-400' },
  ];

  return (
    <div ref={ref} className="flex items-end justify-center gap-3 h-32">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0 }}
          animate={isInView ? { height: `${bar.height}%`, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: bar.delay, ease: "easeOut" }}
          className={`w-8 ${bar.color} rounded-t-lg relative`}
          style={{ boxShadow: '0 0 20px rgba(100, 206, 251, 0.3)' }}
        >
          {i === bars.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2"
            >
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const SEORankingPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const pillars = [
    {
      icon: Code,
      title: 'SEO TÉCNICO',
      subtitle: 'A Fundação',
      description: 'Otimização de código, velocidade de carregamento (Core Web Vitals), mapas de site XML e arquitetura de rastreamento perfeita para bots.',
      gradient: 'from-cyan-600/20 to-blue-600/20',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: FileSearch,
      title: 'OTIMIZAÇÃO ON-PAGE',
      subtitle: 'Estratégia Conteúdo',
      description: 'Estratégia de palavras-chave, hierarquia de cabeçalhos (H1-H4), otimização de imagens e meta-descrições focadas em CTR (taxa de clique).',
      gradient: 'from-blue-600/20 to-cyan-600/20',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: Link2Icon,
      title: 'CONSTRUÇÃO AUTORIDADE',
      subtitle: 'Domínio Backlink',
      description: 'Estratégia de link building de alta qualidade para aumentar a relevância do domínio perante o algoritmo do Google.',
      gradient: 'from-cyan-600/20 to-blue-600/20',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
  ];

  const strategy = [
    { 
      title: 'PESQUISA PALAVRAS-CHAVE', 
      description: 'Identificação de termos com alto volume e baixa dificuldade.',
      icon: Search,
    },
    { 
      title: 'ANÁLISE CONCORRÊNCIA', 
      description: 'Desconstrução do que os concorrentes estão a fazer para os superar.',
      icon: Target,
    },
    { 
      title: 'ESTRATÉGIA CONTEÚDO', 
      description: 'Criação de conteúdo que responde às intenções de busca do utilizador.',
      icon: Zap,
    },
    { 
      title: 'RELATÓRIOS MENSAIS', 
      description: 'Transparência total com KPIs de posição, tráfego e conversão.',
      icon: BarChart3,
    },
  ];

  const faqs = [
    {
      question: 'Quanto tempo até ver resultados?',
      answer: 'SEO é uma estratégia de médio a longo prazo. Os primeiros resultados visíveis aparecem normalmente em 3-6 meses, mas o verdadeiro crescimento composto e ROI substancial acontecem após 6-12 meses de trabalho consistente e otimização contínua. Não é uma solução rápida — é uma maratona estratégica que constrói ativos duradouros.',
    },
    {
      question: 'Garantem a posição #1?',
      answer: 'Nenhuma agência séria pode garantir posição #1 porque os algoritmos do Google mudam constantemente e existem centenas de variáveis fora do nosso controlo. O que garantimos é melhoria contínua mensurável, domínio de nicho específico e aumento consistente de tráfego orgânico qualificado que converte. Focamo-nos em resultados reais, não em promessas vazias.',
    },
    {
      question: 'Vão otimizar o meu conteúdo existente?',
      answer: 'Sim, absolutamente! A nossa primeira ação é uma auditoria completa do conteúdo existente para identificar páginas com potencial inexplorado. Revitalizamos, otimizamos e melhoramos o que já existe antes de criar novo conteúdo. Muitas vezes, o melhor ROI vem de maximizar os ativos que já possui — é mais rápido e mais eficiente do que começar do zero.',
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
            <a onClick={() => navigate('/')} className="cursor-pointer flex items-center gap-2">
              <img 
                src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/4fxcadmm_0ae9043e-abb3-4116-ad86-d62d95e0c279.png"
                alt="ELEVA"
                className="h-12 md:h-14 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center gap-1 border border-gray-700 rounded-full px-4 py-2">
              <a onClick={() => navigate('/services')} className="cursor-pointer text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5">
                Serviços
              </a>
              <a onClick={() => navigate('/sobre')} className="cursor-pointer text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5">
                Sobre
              </a>
              <a onClick={() => navigate('/portfolio')} className="cursor-pointer text-sm text-white hover:text-white transition-colors duration-300 px-3 py-1.5">
                Portfolio
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
                <a onClick={() => navigate('/services')} className="cursor-pointer text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Serviços
                </a>
                <a onClick={() => navigate('/sobre')} className="cursor-pointer text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Sobre
                </a>
                <a onClick={() => navigate('/portfolio')} className="cursor-pointer text-sm text-white hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Portfolio
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Own the Search Results */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative pt-32 md:pt-40 pb-32 md:pb-40 px-4 md:px-6 lg:px-8 overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-cyan-900/10"></div>
        
        {/* Floating Search Icon with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-32 right-10 md:right-20"
        >
          <div className="relative">
            <Search className="w-32 h-32 md:w-48 md:h-48 text-cyan-400" strokeWidth={0.5} />
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
              SEO · Ranking · Domínio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight"
          >
            DOMINE OS
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              RESULTADOS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Design bonito é inútil se ninguém o encontra. Combinamos{' '}
            <span className="text-cyan-400 font-semibold">SEO técnico</span> com{' '}
            <span className="text-blue-400 font-semibold">conteúdo estratégico</span>{' '}
            para colocar a sua marca na frente de clientes prontos a comprar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a onClick={() => navigate('/qualify')}
              className="cursor-pointer group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 text-lg"
            >
              Auditar Meu Website
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Rising Bar Chart Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 max-w-md mx-auto"
        >
          <RisingBarChart />
        </motion.div>
      </motion.section>

      {/* The Reality Check - Organic Value */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
                A REALIDADE
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight uppercase">
                Anúncios Param
                <br />
                Quando o
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Dinheiro Acaba.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                SEO é um <span className="text-cyan-400 font-semibold">ativo que cresce em valor</span> ao longo do tempo. 
                Enquanto a concorrência queima milhares em anúncios todos os meses, você está a construir{' '}
                <span className="text-blue-400 font-semibold">tráfego orgânico sustentável</span> que não desaparece quando o orçamento acaba.
              </p>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl px-6 py-4 backdrop-blur-sm">
                <Award className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 font-bold text-lg">Autoridade Digital. Não apenas palavras-chave.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/20 shadow-2xl shadow-blue-500/10">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxTRU8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjb21wdXRlciUyMHNjcmVlbnxlbnwwfHx8fDE3NzUwNTg0Mjl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Google search ranking dominance"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-400 text-sm font-semibold mb-1">Organic Traffic Growth</p>
                      <p className="text-white text-3xl font-black">+247%</p>
                    </div>
                    <TrendingUp className="w-12 h-12 text-blue-400" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl -z-10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Pillars - Premium Grid */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              FRAMEWORK DE ATAQUE SEO
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight">
              Os 3 Pilares do{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Domínio
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-gradient-to-br ${pillar.gradient} backdrop-blur-sm border-2 ${pillar.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon with Glow */}
                  <div className="relative inline-block mb-6">
                    <pillar.icon className={`w-14 h-14 ${pillar.iconColor} stroke-[1.5]`} />
                    <div className={`absolute inset-0 blur-xl ${pillar.iconColor} opacity-30`}></div>
                  </div>

                  <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-2">
                    {pillar.subtitle}
                  </p>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl blur-xl ${pillar.gradient}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy over Luck - The Method */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-950/5 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
              VISIBILIDADE ESTRATÉGICA
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase leading-tight">
              Estratégia Sobre{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Sorte
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Não adivinhamos. Cada decisão é baseada em{' '}
              <span className="text-blue-400 font-semibold">dados</span>,{' '}
              <span className="text-cyan-400 font-semibold">análise da concorrência</span> e frameworks SEO comprovados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategy.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-500 overflow-hidden"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-white/40 text-sm font-bold">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local vs Global SEO */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              ESTRATÉGIAS ADAPTATIVAS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Domínio
              </span>{' '}
              Local vs{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ataque
              </span>{' '}
              Global
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-cyan-900/10 to-cyan-600/5 border-2 border-cyan-500/20 hover:border-cyan-500/50 rounded-3xl p-10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-transparent group-hover:from-cyan-500/5 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <MapPin className="w-16 h-16 text-cyan-400 mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-black text-white mb-4 uppercase">Local SEO</h3>
                <p className="text-white/70 leading-relaxed mb-6 text-lg">
                  Domine sua cidade com Google My Business otimizado, citações locais estratégicas e reviews que convertem.
                </p>
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2">
                  <span className="text-cyan-400 text-sm font-bold uppercase tracking-wide">
                    Restaurantes · Clínicas · Lojas Físicas
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-blue-900/10 to-cyan-600/5 border-2 border-blue-500/20 hover:border-blue-500/50 rounded-3xl p-10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-transparent group-hover:from-blue-500/5 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <Globe className="w-16 h-16 text-blue-400 mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-black text-white mb-4 uppercase">Global SEO</h3>
                <p className="text-white/70 leading-relaxed mb-6 text-lg">
                  Conquiste mercados internacionais com estratégias multi-idioma e autoridade de domínio absoluta.
                </p>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2">
                  <span className="text-blue-400 text-sm font-bold uppercase tracking-wide">
                    E-commerce · SaaS · Serviços Online
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/5 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
              Quebrando{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Objeções
              </span>
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border-2 border-white/10 rounded-2xl px-6 hover:border-blue-500/30 transition-all duration-300 data-[state=open]:border-blue-500/50 data-[state=open]:shadow-xl data-[state=open]:shadow-blue-500/10"
                >
                  <AccordionTrigger className="text-white hover:text-blue-400 py-6 text-lg font-bold hover:no-underline uppercase tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA - Stop Hiding on Page 2 */}
      <section className="relative py-32 md:py-40 px-4 md:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        ></motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold tracking-widest uppercase mb-8">
              TOME AÇÃO AGORA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight"
          >
            Pare de Se Esconder
            <br />
            na{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Página 2.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Os seus clientes estão a procurar por si <span className="text-blue-400 font-semibold">agora mesmo</span>. 
            Vamos garantir que o encontram <span className="text-cyan-400 font-semibold">primeiro</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a onClick={() => navigate('/qualify')}
              className="cursor-pointer group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 text-black font-black px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 text-lg uppercase tracking-wide"
            >
              Começar a Rankear Agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Especialistas SEO Certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span>Historial Comprovado</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Implementação Rápida</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEORankingPage;
