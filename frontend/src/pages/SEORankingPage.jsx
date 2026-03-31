import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Code, FileSearch, Link2Icon, TrendingUp, Globe, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';

const SEORankingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pillars = [
    {
      icon: Code,
      title: 'Technical SEO',
      subtitle: 'The Foundation',
      description: 'Otimização de código, velocidade (Core Web Vitals), sitemaps XML e arquitetura de rastreamento para bots.',
    },
    {
      icon: FileSearch,
      title: 'On-Page Optimization',
      subtitle: '',
      description: 'Estratégia de palavras-chave, hierarquia H1-H4, otimização de imagens e meta-descrições focadas em CTR.',
    },
    {
      icon: Link2Icon,
      title: 'Authority Building',
      subtitle: 'Backlinks',
      description: 'Estratégia de link building de alta qualidade para aumentar relevância do domínio no algoritmo do Google.',
    },
  ];

  const strategy = [
    { title: 'Keyword Research', description: 'Identificação de termos com alto volume e baixa dificuldade' },
    { title: 'Competitor Analysis', description: 'Desconstrução do que os concorrentes fazem para superá-los' },
    { title: 'Content Strategy', description: 'Criação de conteúdo que responde às intenções de busca' },
    { title: 'Monthly Reporting', description: 'Transparência com KPIs de posição, tráfego e conversão' },
  ];

  const faqs = [
    {
      question: 'How long until I see results?',
      answer: 'SEO é uma estratégia de médio a longo prazo. Resultados iniciais aparecem em 3-6 meses, mas o verdadeiro crescimento composto acontece após 6-12 meses de trabalho consistente. É uma maratona, não um sprint.',
    },
    {
      question: 'Do you guarantee #1 ranking?',
      answer: 'Nenhuma agência séria pode garantir posição #1 porque os algoritmos mudam constantemente. O que garantimos é melhoria contínua, domínio de nicho e aumento mensurável de tráfego orgânico qualificado.',
    },
    {
      question: 'Will you optimize my existing content?',
      answer: 'Sim! Fazemos auditoria completa do conteúdo existente e revitalizamos páginas com potencial inexplorado. Muitas vezes, o melhor ROI vem de otimizar o que você já tem antes de criar novo conteúdo.',
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

            <div className="hidden lg:flex items-center gap-6">
              <Link to="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link to="/#resultados" className="text-white/80 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link to="/#resultados" className="text-white/80 hover:text-white transition-colors text-sm">
                Portfolio
              </Link>
            </div>

            <button className="hidden lg:block bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-semibold px-6 py-2.5 rounded-full transition-all duration-300">
              Get In Touch
            </button>

            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        {/* Growth chart visual */}
        <div className="absolute right-10 top-32 opacity-20">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <polyline
              points="20,180 60,120 100,140 140,60 180,40"
              fill="none"
              stroke="#64CEFB"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Own the
            <br />
            <span className="text-[#64CEFB]">Search Results.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Beautiful design is useless if no one finds it. We combine technical SEO with strategic content to put your brand in front of customers ready to buy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-[#64CEFB]/25">
              Audit My Website
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Reality Check */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/ttfdn8c1_7044c72a-63f5-43e3-8838-86d18897bac5.png"
                  alt="Google search ranking"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Paid Ads Stop When
                <br />
                <span className="text-[#64CEFB]">the Money Stops.</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                SEO is an asset that grows in value over time. While competitors burn cash on ads, you're building sustainable organic traffic.
              </p>
              <div className="inline-block bg-[#64CEFB]/10 border border-[#64CEFB]/30 rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5 text-[#64CEFB] inline mr-2" />
                <span className="text-[#64CEFB] font-semibold">Authority Digital. Not just keywords.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-16"
          >
            The 3 Pillars of <span className="text-[#64CEFB]">SEO</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 hover:border-[#64CEFB]/50 hover:-translate-y-2 transition-all duration-500"
              >
                <pillar.icon className="w-12 h-12 text-[#64CEFB] mb-6 stroke-[1.5]" />
                <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                {pillar.subtitle && (
                  <p className="text-[#64CEFB] text-sm font-semibold mb-3">{pillar.subtitle}</p>
                )}
                <p className="text-white/60 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white text-center mb-6"
          >
            Strategy over <span className="text-[#64CEFB]">Luck</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/70 text-center mb-16 max-w-2xl mx-auto"
          >
            We don't guess. Every decision is backed by data, competitor analysis, and proven SEO frameworks.
          </motion.p>

          <div className="space-y-6">
            {strategy.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#64CEFB] flex items-center justify-center font-bold text-black">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local vs Global */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-8"
            >
              <MapPin className="w-12 h-12 text-[#64CEFB] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Local SEO</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Domine sua cidade com Google My Business otimizado, citações locais e reviews estratégicos.
              </p>
              <p className="text-[#64CEFB] text-sm font-semibold">
                Perfeito para restaurantes, clínicas, lojas físicas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-8"
            >
              <Globe className="w-12 h-12 text-[#64CEFB] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Global SEO</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Conquiste mercados internacionais com estratégias multi-idioma e autoridade de domínio.
              </p>
              <p className="text-[#64CEFB] text-sm font-semibold">
                Ideal para e-commerce, SaaS, serviços online
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
            Common <span className="text-[#64CEFB]">Questions</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#0D0D0D] border border-white/10 rounded-xl px-6 hover:border-[#64CEFB]/50 transition-colors data-[state=open]:border-[#64CEFB]"
              >
                <AccordionTrigger className="text-white hover:text-[#64CEFB] py-6 text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            Stop Hiding on
            <br />
            <span className="text-[#64CEFB]">Page 2.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg mb-8"
          >
            Your customers are searching for you right now. Let's make sure they find you first.
          </motion.p>
          <Link
            to="/qualify"
            className="inline-flex items-center gap-2 bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-[#64CEFB]/25"
          >
            Start Ranking Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEORankingPage;
