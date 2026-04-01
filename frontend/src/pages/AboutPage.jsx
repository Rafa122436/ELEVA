import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Target, Zap, Users, Award, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { number: '150+', label: 'Projetos Entregues' },
    { number: '€2.5M+', label: 'Gerados para Clientes' },
    { number: '5 Anos', label: 'de Experiência' },
    { number: '98%', label: 'Taxa de Satisfação' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Focados em Resultados',
      description: 'Não vendemos apenas serviços — garantimos que cada projeto gera retorno real e mensurável para o seu negócio.',
    },
    {
      icon: Zap,
      title: 'Execução Rápida',
      description: 'Enquanto outros demoram meses, nós entregamos websites e campanhas prontas em 30-45 dias sem comprometer qualidade.',
    },
    {
      icon: Heart,
      title: 'Parceria de Longo Prazo',
      description: 'O nosso sucesso está ligado ao seu. Não somos apenas fornecedores, somos parceiros estratégicos do seu crescimento.',
    },
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Utilizamos as tecnologias mais avançadas e metodologias comprovadas para garantir que o seu projeto é construído para durar.',
    },
  ];

  const team = [
    {
      name: 'Designers & Estrategistas',
      description: 'Especialistas em criar experiências visuais que convertem e comunicam a essência da sua marca.',
    },
    {
      name: 'Developers & Engenheiros',
      description: 'Código limpo, performance otimizada e soluções técnicas que funcionam perfeitamente em qualquer dispositivo.',
    },
    {
      name: 'Marketing & SEO Experts',
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

            <div className="hidden lg:flex items-center gap-6">
              <Link to="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                Serviços
              </Link>
              <Link to="/sobre" className="text-white hover:text-white transition-colors text-sm font-semibold">
                Sobre
              </Link>
              <Link to="/#resultados" className="text-white/80 hover:text-white transition-colors text-sm">
                Resultados
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Não Construímos Websites.
              <br />
              <span className="text-[#64CEFB]">Construímos Negócios.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              A ELEVA nasceu de uma simples observação: a maioria das agências cria websites bonitos que não geram resultados. Decidimos fazer diferente.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#64CEFB]/50 transition-all duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#64CEFB] mb-2">
                  {stat.number}
                </h3>
                <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
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
                A Nossa <span className="text-[#64CEFB]">História</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Fundada em 2020, a ELEVA nasceu da frustração de ver negócios promissores falharem online por terem websites que não convertem. 
                </p>
                <p>
                  Começámos como uma pequena equipa de 3 pessoas obcecadas por uma missão: criar presenças digitais que realmente geram receita. Não queríamos ser mais uma agência que cria "sites bonitos" — queríamos ser a agência que transforma websites em máquinas de vendas.
                </p>
                <p>
                  Hoje, 5 anos depois, já ajudámos mais de 150 empresas a multiplicar a sua presença online e a gerar milhões em receita através de estratégias digitais focadas em resultados, não em vaidade.
                </p>
                <p className="text-[#64CEFB] font-semibold">
                  O nosso compromisso mantém-se o mesmo: o seu sucesso é o nosso sucesso.
                </p>
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Equipa ELEVA"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#64CEFB] text-black px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#64CEFB]/20">
                5 Anos de Excelência
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Os Nossos <span className="text-[#64CEFB]">Valores</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e cada projeto que entregamos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 hover:border-[#64CEFB]/50 transition-all duration-500 hover:scale-[1.02]"
              >
                <value.icon className="w-12 h-12 text-[#64CEFB] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              A Nossa <span className="text-[#64CEFB]">Equipa</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Especialistas dedicados a transformar a sua visão em realidade digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#64CEFB]/10 border-2 border-[#64CEFB] flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#64CEFB]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{member.name}</h3>
                <p className="text-white/60 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#64CEFB]/10 border border-[#64CEFB]/30 rounded-full px-6 py-3 mb-8">
              <TrendingUp className="w-5 h-5 text-[#64CEFB]" />
              <span className="text-[#64CEFB] font-semibold">A Nossa Missão</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
              "Elevar negócios através de presenças digitais que <span className="text-[#64CEFB]">convertem, escalam e duram</span>."
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Acreditamos que cada negócio merece uma presença digital que não apenas existe, mas que trabalha 24/7 a gerar leads, construir autoridade e multiplicar receita.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
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
            Agendar Consultoria Gratuita
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
