import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Palette, Target, Layers, Sparkles, TrendingUp, Users, ArrowRight } from 'lucide-react';
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

const BrandingDigitalPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pillars = [
    {
      icon: Palette,
      title: 'Identidade Visual Única',
      description: 'Logo profissional e paleta de cores estratégica que comunica a essência da sua marca.',
    },
    {
      icon: Layers,
      title: 'Brand Guidelines',
      description: 'Manual completo de marca para garantir consistência em todos os canais.',
    },
    {
      icon: Sparkles,
      title: 'Design System',
      description: 'Elementos visuais prontos para web, redes sociais e materiais impressos.',
    },
    {
      icon: Target,
      title: 'Posicionamento Estratégico',
      description: 'Definição clara de proposta de valor e diferenciação da concorrência.',
    },
  ];

  const workflow = [
    { title: 'Descoberta', description: 'Pesquisa profunda sobre o mercado, concorrência e público-alvo' },
    { title: 'Estratégia', description: 'Definição de posicionamento, tom de voz e valores da marca' },
    { title: 'Conceito', description: 'Desenvolvimento de conceitos visuais e direções criativas' },
    { title: 'Design', description: 'Criação da identidade visual completa e aplicações' },
    { title: 'Guidelines', description: 'Documentação profissional de uso da marca' },
    { title: 'Entrega', description: 'Pacote completo com todos os arquivos e formatos' },
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
      question: 'A marca funciona em qualquer tamanho e cor?',
      answer: 'Absolutamente. Criamos versões da marca para fundos claros, escuros, monocromáticas e simplificadas. Testamos em diversos tamanhos, de favicon a outdoor, garantindo legibilidade e impacto em qualquer aplicação.',
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
                Serviços
              </Link>
              <Link to="/#resultados" className="text-white/80 hover:text-white transition-colors text-sm">
                Resultados
              </Link>
              <Link to="/#resultados" className="text-white/80 hover:text-white transition-colors text-sm">
                Portfolio
              </Link>
            </div>

            <button className="hidden lg:block bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-semibold px-6 py-2.5 rounded-full transition-all duration-300">
              Falar Connosco
            </button>

            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            A Sua Marca Não é um Logo.
            <br />
            <span className="text-[#64CEFB]">É uma Promessa</span> que Gera Confiança.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Construa uma identidade visual que comunica autoridade, profissionalismo e diferencia o seu negócio da concorrência desde o primeiro olhar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-[#64CEFB]/25">
              Criar a Minha Marca
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Marcas que <span className="text-[#64CEFB]">Convertem</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Uma marca forte não é apenas bonita — é estratégica. Cada cor, tipografia e elemento visual é escolhido para comunicar os valores certos e atrair o cliente ideal.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-[#64CEFB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Posicionamento Premium</h3>
                    <p className="text-white/60">Comunique autoridade e justifique preços mais elevados.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-[#64CEFB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Conexão Emocional</h3>
                    <p className="text-white/60">Crie reconhecimento instantâneo e lealdade duradoura.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-[#64CEFB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Diferenciação Clara</h3>
                    <p className="text-white/60">Destaque-se num mercado saturado de concorrência.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Branding Design"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Pillars */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-16"
          >
            O Que Recebe com <span className="text-[#64CEFB]">Branding ELEVA</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 hover:border-[#64CEFB]/50 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-[#64CEFB]/10"
              >
                <pillar.icon className="w-12 h-12 text-[#64CEFB] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/60 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-16"
          >
            O Nosso <span className="text-[#64CEFB]">Processo</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#0D0D0D] border border-white/10 rounded-xl p-6 hover:border-[#64CEFB]/50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#64CEFB]/20 border border-[#64CEFB] flex items-center justify-center mb-4">
                    <span className="text-[#64CEFB] font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
            Perguntas <span className="text-[#64CEFB]">Frequentes</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#0D0D0D] border border-white/10 rounded-xl px-6 hover:border-[#64CEFB]/50 transition-colors duration-300 data-[state=open]:border-[#64CEFB]"
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
      <section className="relative py-32 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            Pronto para Construir uma Marca
            <br />
            <span className="text-[#64CEFB]">Memorável?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <Link
              to="/qualify"
              className="inline-flex items-center gap-2 bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-[#64CEFB]/25"
            >
              Agendar Consultoria GRATUITA
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/50 text-sm">Apenas 2 vagas disponíveis este mês.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BrandingDigitalPage;
