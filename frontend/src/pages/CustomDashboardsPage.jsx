import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, RefreshCw, Link2, BarChart3, FileText, ArrowRight, Activity } from 'lucide-react';
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

const CustomDashboardsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: RefreshCw,
      title: 'Sincronização em Tempo Real',
      description: 'Conexão direta com APIs para dados atualizados a cada segundo.',
    },
    {
      icon: Link2,
      title: 'Integração Multi-Plataforma',
      description: 'Unificação de Google Ads, Meta, Shopify, Stripe e CRMs num único lugar.',
    },
    {
      icon: BarChart3,
      title: 'KPIs Personalizados',
      description: 'Gráficos específicos para as métricas que realmente importam no seu negócio.',
    },
    {
      icon: FileText,
      title: 'Relatórios Automáticos',
      description: 'Relatórios que se geram sozinhos e eliminam trabalho manual repetitivo.',
    },
  ];

  const timeline = [
    { title: 'Auditoria', description: 'Mapeamento de todas as fontes de dados atuais do negócio' },
    { title: 'Arquitetura', description: 'Estruturação de como os dados serão conectados e processados' },
    { title: 'Design', description: 'Criação da interface focada na experiência e usabilidade' },
    { title: 'Implementação', description: 'Integração final e formação completa da equipa' },
  ];

  const faqs = [
    {
      question: 'Conseguem integrar com o meu CRM específico?',
      answer: 'Sim! Trabalhamos com APIs personalizadas para integrar qualquer CRM, ERP ou sistema proprietário. Se tem uma API, conseguimos conectar e extrair os dados necessários.',
    },
    {
      question: 'Os meus dados estão seguros?',
      answer: 'Absolutamente. Utilizamos criptografia end-to-end, protocolos HTTPS, tokens de autenticação seguros e conformidade total com GDPR. Os seus dados nunca são armazenados nos nossos servidores ou partilhados com terceiros.',
    },
    {
      question: 'Com que frequência os gráficos atualizam?',
      answer: 'Dependendo da fonte de dados, as atualizações podem ser em tempo real (segundos) ou em intervalos configuráveis (minutos/horas). Você define o que faz mais sentido para o ritmo do seu negócio.',
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
        {/* Abstract dashboard visual */}
        <div className="absolute right-0 top-20 w-1/2 h-96 opacity-20">
          <div className="absolute top-10 right-10 w-40 h-40 border-2 border-[#64CEFB] rounded-lg"></div>
          <div className="absolute top-32 right-32 w-56 h-2 bg-[#64CEFB]/50"></div>
          <div className="absolute top-40 right-20 text-[#64CEFB] text-6xl font-bold">87%</div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Decisões Baseadas em Dados
            <br />
            <span className="text-[#64CEFB]">Feitas Simples.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Pare de adivinhar. Comece a saber. Construímos ecossistemas de dados personalizados que lhe dão uma visão 360° do desempenho do seu negócio em tempo real.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-[#64CEFB]/25">
              Criar o Meu Dashboard Personalizado
            </button>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Informação Está em Todo o Lado.
                <br />
                <span className="text-[#64CEFB]">Insights São Raros.</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Os seus dados estão espalhados por múltiplas plataformas — Anúncios, CRM, folhas de cálculo. Horas desperdiçadas a tentar consolidar tudo manualmente. Nós transformamos dados brutos em inteligência acionável.
              </p>
              <div className="inline-block bg-[#64CEFB]/10 border border-[#64CEFB]/30 rounded-full px-6 py-3">
                <Activity className="w-5 h-5 text-[#64CEFB] inline mr-2" />
                <span className="text-[#64CEFB] font-semibold">Insights em tempo real. Zero trabalho manual.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHw0fHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc3NDk2OTg5OXww&ixlib=rb-4.1.0&q=85"
                  alt="Dashboard analytics"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 hover:border-[#64CEFB]/50 hover:-translate-y-2 transition-all duration-500"
              >
                <feature.icon className="w-12 h-12 text-[#64CEFB] mb-6 stroke-[1.5]" />
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Visual Edge */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Design encontra <span className="text-[#64CEFB]">Dados</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Os nossos dashboards não são apenas funcionais — são bonitos, intuitivos e desenhados para serem compreendidos em segundos, não em horas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-[#64CEFB]"></div>
                  Dark mode otimizado para sessões longas
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-[#64CEFB]"></div>
                  Métricas com código de cores (verde/vermelho para clareza instantânea)
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-[#64CEFB]"></div>
                  Responsivo mobile para decisões em qualquer lugar
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
                <img
                  src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/hmepic8r_6daf0e6f-5a1e-44f5-b8bc-a66ff964d928.png"
                  alt="Dashboard mockup"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-white text-center mb-16"
          >
            Cronograma de <span className="text-[#64CEFB]">Implementação</span>
          </motion.h2>

          <div className="space-y-8">
            {timeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#64CEFB] flex items-center justify-center font-bold text-black">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
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
        <div className="absolute inset-0 bg-gradient-radial from-[#64CEFB]/10 via-black to-black"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            Pronto para Elevar
            <br />
            <span className="text-[#64CEFB]">o Seu Negócio?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg mb-8"
          >
            Vamos conversar sobre como podemos transformar a sua presença digital em resultados concretos.
          </motion.p>
          <Link
            to="/qualify"
            className="inline-flex items-center gap-2 bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-[#64CEFB]/25"
          >
            Agendar uma Chamada Estratégica Gratuita
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomDashboardsPage;
