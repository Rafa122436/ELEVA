import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Palette, Target, Layers, Sparkles, TrendingUp, Users, ArrowRight, Award, Zap, Eye } from 'lucide-react';
import { useState, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';

// Animated Brand Elements Component
const AnimatedBrandElements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const elements = [
    { scale: 1.2, delay: 0, color: 'bg-gradient-to-br from-cyan-500 to-blue-500' },
    { scale: 0.8, delay: 0.2, color: 'bg-gradient-to-br from-blue-500 to-cyan-400' },
    { scale: 1, delay: 0.4, color: 'bg-gradient-to-br from-cyan-400 to-blue-600' },
  ];

  return (
    <div ref={ref} className="flex items-center justify-center gap-4">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={isInView ? { 
            scale: el.scale, 
            opacity: 1,
            rotate: [0, 180, 360]
          } : {}}
          transition={{ 
            duration: 1.5, 
            delay: el.delay,
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className={`w-20 h-20 ${el.color} rounded-2xl`}
          style={{ boxShadow: '0 0 40px rgba(100, 206, 251, 0.4)' }}
        />
      ))}
    </div>
  );
};

const BrandingDigitalPage = () => {
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
      icon: Palette,
      title: 'IDENTIDADE VISUAL',
      subtitle: 'Design Único',
      description: 'Logo profissional e paleta de cores estratégica que comunica a essência da sua marca.',
      gradient: 'from-cyan-900/10 to-blue-900/10',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: Layers,
      title: 'BRAND GUIDELINES',
      subtitle: 'Consistência Total',
      description: 'Manual completo de marca para garantir consistência em todos os canais.',
      gradient: 'from-blue-900/10 to-cyan-900/10',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: Sparkles,
      title: 'DESIGN SYSTEM',
      subtitle: 'Elementos Prontos',
      description: 'Elementos visuais prontos para web, redes sociais e materiais impressos.',
      gradient: 'from-cyan-900/10 to-blue-900/10',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: Target,
      title: 'POSICIONAMENTO',
      subtitle: 'Diferenciação Clara',
      description: 'Definição clara de proposta de valor e diferenciação da concorrência.',
      gradient: 'from-blue-900/10 to-cyan-900/10',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
  ];

  const workflow = [
    { title: 'DESCOBERTA', description: 'Pesquisa profunda sobre o mercado, concorrência e público-alvo', icon: Eye },
    { title: 'ESTRATÉGIA', description: 'Definição de posicionamento, tom de voz e valores da marca', icon: Target },
    { title: 'CONCEITO', description: 'Desenvolvimento de conceitos visuais e direções criativas', icon: Sparkles },
    { title: 'DESIGN', description: 'Criação da identidade visual completa e aplicações', icon: Palette },
    { title: 'GUIDELINES', description: 'Documentação profissional de uso da marca', icon: Layers },
    { title: 'ENTREGA', description: 'Pacote completo com todos os arquivos e formatos', icon: Award },
  ];

  const faqs = [
    {
      question: 'Vou receber os ficheiros originais da marca?',
      answer: 'Sim! Entregamos todos os ficheiros em formatos editáveis (AI, PSD, Figma) e prontos para uso (PNG, SVG, PDF). Receberá também versões otimizadas para web, redes sociais e impressão.',
    },
    {
      question: 'Quanto tempo demora a criação da marca?',
      answer: 'O processo completo demora entre 3-4 semanas, desde a pesquisa inicial até à entrega final. Incluímos 2 rondas de revisões para garantir que a marca reflete perfeitamente a visão do seu negócio.',
    },
    {
      question: 'Fazem rebranding de marcas existentes?',
      answer: 'Sim! Trabalhamos tanto com criação de marcas do zero como com rebranding completo. Analisamos a identidade atual, identificamos oportunidades de evolução e criamos uma marca renovada que mantém o melhor do passado enquanto projeta o futuro.',
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
                src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/4fxcadmm_0ae9043e-abb3-4116-ad86-d62d95e0c279.png"
                alt="ELEVA"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1 border border-gray-700 rounded-full px-4 py-2">
              <Link to="/services" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5">
                Serviços
              </Link>
              <Link to="/sobre" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5">
                Sobre
              </Link>
              <Link to="/portfolio" className="text-sm text-white hover:text-white transition-colors duration-300 px-3 py-1.5">
                Portfolio
              </Link>
            </div>

            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-black/90 backdrop-blur-lg rounded-2xl border border-gray-700 p-4">
              <div className="flex flex-col gap-2">
                <Link to="/services" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Serviços
                </Link>
                <Link to="/sobre" className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Sobre
                </Link>
                <Link to="/portfolio" className="text-sm text-white hover:text-white transition-colors duration-300 px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
                  Portfolio
                </Link>
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
        
        {/* Floating Palette Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-32 right-10 md:right-20"
        >
          <div className="relative">
            <Palette className="w-32 h-32 md:w-48 md:h-48 text-cyan-400" strokeWidth={0.5} />
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
              Branding · Identidade · Estratégia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight"
          >
            MARCAS QUE
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CONECTAM.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Identidade visual que <span className="text-cyan-400 font-semibold">conta histórias</span> e posicionamento estratégico que 
            faz a sua marca destacar-se num <span className="text-blue-400 font-semibold">mercado saturado</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/qualify"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 text-lg"
            >
              Criar Minha Marca
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Animated Brand Elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 max-w-md mx-auto"
        >
          <AnimatedBrandElements />
        </motion.div>
      </motion.section>

      {/* The Why - Brand Importance */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
                O PODER DA MARCA
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight uppercase">
                Primeira Impressão.
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Última Decisão.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                Tem <span className="text-cyan-400 font-semibold">7 segundos</span> para causar impacto. 
                Uma marca forte não é luxo — é a diferença entre ser <span className="text-blue-400 font-semibold">lembrado ou ignorado</span>.
              </p>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl px-6 py-4 backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 font-bold text-lg">Memorável. Autêntica. Inconfundível.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
                <img
                  src="https://images.pexels.com/photos/7598069/pexels-photo-7598069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Brand design process"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Floating Stat */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-cyan-400 text-sm font-semibold mb-1">Aumento no Reconhecimento</p>
                      <p className="text-white text-3xl font-black">+320%</p>
                    </div>
                    <TrendingUp className="w-12 h-12 text-cyan-400" />
                  </div>
                </motion.div>
              </div>

              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl -z-10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
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
              O QUE ENTREGAMOS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight">
              Os 4 Pilares de Uma{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Marca Premium
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
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

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl blur-xl ${pillar.gradient}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-cyan-950/5 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
              NOSSO PROCESSO
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase leading-tight">
              Da Estratégia à{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Identidade
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-2xl p-8 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-white/40 text-sm font-bold">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-950/5 to-black">
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
                Dúvidas
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
                  className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border-2 border-white/10 rounded-2xl px-6 hover:border-cyan-500/30 transition-all duration-300 data-[state=open]:border-cyan-500/50 data-[state=open]:shadow-xl data-[state=open]:shadow-cyan-500/10"
                >
                  <AccordionTrigger className="text-white hover:text-cyan-400 py-6 text-lg font-bold hover:no-underline uppercase tracking-tight">
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
              DESTAQUE-SE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight"
          >
            Deixe de Ser Mais
            <br />
            Um{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Genérico.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Vamos criar uma <span className="text-cyan-400 font-semibold">identidade única</span> que 
            faz a sua marca ser <span className="text-blue-400 font-semibold">impossível de esquecer</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/qualify"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 text-black font-black px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 text-lg uppercase tracking-wide"
            >
              Agendar Consultoria
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Branding Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span>Resultados Mensuráveis</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Entrega em 3-4 Semanas</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandingDigitalPage;
