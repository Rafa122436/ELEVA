import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Code2, Zap, Target, Smartphone, Gauge, Search as SearchIcon, ArrowRight } from 'lucide-react';
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

const WebDevelopmentPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pillars = [
    {
      icon: Code2,
      title: 'Código à Medida',
      description: 'Zero templates. Cada linha de código é criada especificamente para o seu negócio.',
    },
    {
      icon: Gauge,
      title: 'Velocidade Extrema',
      description: 'Carregamento instantâneo. 95+ no Google PageSpeed ou refazemos.',
    },
    {
      icon: SearchIcon,
      title: 'SEO Integrado',
      description: 'Construído para ser encontrado. Estrutura otimizada desde a primeira linha de código.',
    },
    {
      icon: Smartphone,
      title: 'Perfeito em Qualquer Ecrã',
      description: 'Do iPhone ao desktop 4K. Experiência impecável em todos os dispositivos.',
    },
  ];

  const workflow = [
    { title: 'Descoberta', description: 'Imersão profunda no seu negócio e objetivos' },
    { title: 'Estrutura', description: 'Arquitetura de informação focada em conversão' },
    { title: 'Design UI', description: 'Interface de alta fidelidade e exclusiva' },
    { title: 'Desenvolvimento', description: 'Código limpo, rápido e escalável' },
    { title: 'Testes', description: 'Verificação rigorosa em todos os dispositivos' },
    { title: 'Lançamento', description: 'Deploy seguro e monitorização 24/7' },
  ];

  const faqs = [
    {
      question: 'Como garantem que o site vai aparecer no Google?',
      answer: 'Implementamos SEO desde o primeiro dia: código semântico, meta tags otimizadas, URLs amigáveis, sitemap XML, schema markup e Core Web Vitals no verde. Tudo construído seguindo as melhores práticas do Google para ranking orgânico.',
    },
    {
      question: 'Posso gerir o conteúdo sozinho?',
      answer: 'Absolutamente! Entregamos um CMS intuitivo (WordPress ou sistema personalizado) com interface simples. Também damos formação completa para editar conteúdo, imagens e páginas sem precisar de conhecimento técnico.',
    },
    {
      question: 'Hosting e segurança estão incluídos?',
      answer: 'Sim. Oferecemos hosting premium otimizado, certificado SSL, backups automáticos diários, proteção contra malware e ataques DDoS, além de monitorização 24/7. A sua infraestrutura fica em mãos seguras.',
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
                className="h-8 w-auto"
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
            O Seu Website Não é Custo.
            <br />
            <span className="text-[#64CEFB]">É o Melhor Vendedor</span> que Nunca Tira Férias.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Websites premium que trabalham 24/7 a gerar leads qualificados e fechar negócios enquanto dorme. Cada pixel criado para converter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-[#64CEFB]/25">
              Começar a Minha Transformação
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
                Foco em <span className="text-[#64CEFB]">Resultados</span>, Não em Prémios de Design
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Cada website que criamos tem um único objetivo: gerar resultados mensuráveis. Velocidade, acessibilidade e conversão não são extras — são a base de tudo.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-[#64CEFB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Design Estratégico</h3>
                    <p className="text-white/60">UX desenhada para guiar o visitante até à ação.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code2 className="w-6 h-6 text-[#64CEFB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Tecnologia de Ponta</h3>
                    <p className="text-white/60">React, Next.js ou WordPress Headless — o que funcionar melhor.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-[#64CEFB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Otimização de Conversão</h3>
                    <p className="text-white/60">Cada elemento testado para maximizar vendas.</p>
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
                  src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/evhr7399_c22735fc-60ca-4ae4-a8af-c802bdc3df6b.png"
                  alt="Developer coding"
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
            Os <span className="text-[#64CEFB]">4 Pilares</span> do Nosso Desenvolvimento
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NzQ5Njk4OTV8MA&ixlib=rb-4.1.0&q=85"
                  alt="Team collaboration"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>

            {/* Steps */}
            <div className="space-y-6">
              {workflow.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#64CEFB] flex items-center justify-center font-bold text-black">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Marquee */}
      <section className="py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Integração perfeita com as <span className="text-[#64CEFB]">suas ferramentas favoritas</span>
          </h2>
        </div>
        <div className="flex gap-12 items-center justify-center flex-wrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <span className="text-white text-2xl font-bold">HubSpot</span>
          <span className="text-white text-2xl font-bold">Meta Pixel</span>
          <span className="text-white text-2xl font-bold">Google Analytics</span>
          <span className="text-white text-2xl font-bold">Stripe</span>
          <span className="text-white text-2xl font-bold">Mailchimp</span>
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
            A Sua Concorrência Está a Crescer.
            <br />
            <span className="text-[#64CEFB]">E Você?</span>
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

export default WebDevelopmentPage;
