import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Phone, Building2, User, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const QualifyPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyAndSector: '',
    phone: '',
    revenue: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        companyAndSector: '',
        phone: '',
        revenue: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const revenueOptions = [
    { value: 'A', label: 'Até 2.500€' },
    { value: 'B', label: '2.500€ – 7.500€' },
    { value: 'C', label: '7.500€ – 15.000€' },
    { value: 'D', label: 'Mais de 15.000€' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full h-full object-cover opacity-20 pointer-events-none"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <nav className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/4fxcadmm_0ae9043e-abb3-4116-ad86-d62d95e0c279.png"
                alt="ELEVA"
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            
            <Link 
              to="/"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden md:inline">Voltar</span>
            </Link>
          </div>
        </nav>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6">
                  Chamada Estratégica Gratuita
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tight"
              >
                Agende a Sua Chamada
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg text-white/70 max-w-2xl mx-auto"
              >
                Preencha o formulário abaixo e a nossa equipa entrará em contacto em <span className="text-cyan-400 font-semibold">24 horas</span> para agendar a sua chamada estratégica.
              </motion.p>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#111111] rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl"
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Obrigado!</h3>
                  <p className="text-white/70">
                    Recebemos a sua solicitação. Entraremos em contacto em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome Completo */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Nome Completo <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Ex: João Silva"
                      />
                    </div>
                  </div>

                  {/* Nome da Empresa + Setor */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Nome da Empresa + Setor de Atividade <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        name="companyAndSector"
                        value={formData.companyAndSector}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Ex: Silva Consulting - Marketing Digital"
                      />
                    </div>
                  </div>

                  {/* Contacto Telefónico */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Contacto Telefónico <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Ex: +351 912 345 678"
                      />
                    </div>
                  </div>

                  {/* Faturação Mensal */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                      Qual é a faturação mensal média da sua empresa? <span className="text-cyan-400">*</span>
                    </label>
                    <div className="space-y-3">
                      {revenueOptions.map((option) => (
                        <label
                          key={option.value}
                          className={`block cursor-pointer ${
                            formData.revenue === option.value
                              ? 'bg-cyan-500/10 border-cyan-500'
                              : 'bg-black/50 border-white/20 hover:border-white/40'
                          } border rounded-xl p-4 transition-all`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="revenue"
                              value={option.value}
                              checked={formData.revenue === option.value}
                              onChange={handleChange}
                              required
                              className="w-5 h-5 text-cyan-500 bg-black border-white/20 focus:ring-cyan-500 focus:ring-2"
                            />
                            <div className="text-white font-semibold">
                              {option.label}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-black rounded-xl px-8 py-5 transition-all duration-300 hover:scale-[1.02] shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 text-lg mt-8"
                  >
                    Enviar
                  </button>

                  <p className="text-xs text-center text-white/50 mt-4">
                    Os seus dados estão seguros e nunca serão partilhados com terceiros.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QualifyPage;
