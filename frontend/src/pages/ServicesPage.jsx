import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCardsGrid from '../components/ServiceCardsGrid';
import ServicesFAQ from '../components/ServicesFAQ';
import ServicesCTA from '../components/ServicesCTA';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingOrbs from '../components/FloatingOrbs';
import Header from '../components/Header';

const ServicesPage = () => {
  return (
    <div className="bg-black">
      <CustomCursor />
      <FloatingOrbs />
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black">
        {/* Navigation Bar */}
        <Header />

        {/* Hero Content */}
        <div className="flex items-center justify-center min-h-[35vh] px-4 md:px-6 lg:px-8 relative">
          {/* Animated background orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#64CEFB]/20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#64CEFB]/20 rounded-full blur-3xl"
          ></motion.div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2"
            >
              {/* Main Heading */}
              <div className="space-y-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-none"
                >
                  Serviços Criados para Gerar:
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#64CEFB] tracking-tighter leading-none"
                  style={{
                    textShadow: '0 0 30px rgba(100, 206, 251, 0.3)',
                  }}
                >
                  Leads, Vendas e Crescimento
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-6"
              >
                Os mesmos sistemas que usamos no nosso negócio são os que implementamos para os nossos clientes.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <ServiceCardsGrid />

      {/* FAQ Section */}
      <ServicesFAQ />

      {/* CTA Section */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
