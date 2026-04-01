import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'E-commerce Moda',
      category: 'Desenvolvimento Web',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      description: 'Plataforma de e-commerce premium para marca de moda portuguesa',
    },
    {
      title: 'Dashboard Analytics',
      category: 'Dashboards Personalizados',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      description: 'Sistema de análise de dados em tempo real para startup fintech',
    },
    {
      title: 'Website Imobiliária',
      category: 'SEO / Posicionamento',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      description: 'Website otimizado para SEO que triplicou o tráfego orgânico',
    },
    {
      title: 'Marca Tech Startup',
      category: 'Branding Digital',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80',
      description: 'Identidade visual completa para startup de tecnologia',
    },
    {
      title: 'Portal Saúde',
      category: 'Desenvolvimento Web',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      description: 'Portal de saúde com sistema de marcação de consultas integrado',
    },
    {
      title: 'App Fitness',
      category: 'Dashboards Personalizados',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      description: 'Dashboard de métricas de performance para app de fitness',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <CustomCursor />
      <FloatingOrbs />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Projectos que
              <br />
              <span className="text-[#64CEFB]">Geram Resultados</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Cada projeto é uma história de transformação digital. De conceito a execução, criamos experiências que convertem.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#64CEFB]/50 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#64CEFB]/20 backdrop-blur-sm border border-[#64CEFB]/30 px-4 py-2 rounded-full">
                    <span className="text-[#64CEFB] text-sm font-semibold">{project.category}</span>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#64CEFB] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            className="inline-flex items-center gap-2 bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-[#64CEFB]/25"
          >
            Agendar uma Chamada Estratégica Gratuita
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
