import React from 'react';
import { TrendingUp, Quote } from 'lucide-react';

const ResultsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      company: 'Mendes Consulting',
      result: '+250% em leads qualificados em 3 meses',
      image: 'https://images.unsplash.com/photo-1599090738077-75d2187fd892?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHN1Y2Nlc3N8ZW58MHx8fHwxNzc0OTYxMTAwfDA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Ana Silva',
      company: 'Silva & Associados',
      result: 'Faturação aumentou €80k no primeiro trimestre',
      image: 'https://images.pexels.com/photos/7792803/pexels-photo-7792803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      name: 'Pedro Costa',
      company: 'Costa Tech Solutions',
      result: 'De 5 para 45 clientes em 6 meses',
      image: 'https://images.unsplash.com/photo-1758518729912-bf3a84c400e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHN1Y2Nlc3N8ZW58MHx8fHwxNzc0OTYxMTAwfDA&ixlib=rb-4.1.0&q=85',
    },
    {
      name: 'Maria Rodrigues',
      company: 'Rodrigues Imobiliária',
      result: '€120k em vendas diretas via website',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      name: 'João Ferreira',
      company: 'Ferreira Advocacia',
      result: 'ROI de 420% no primeiro ano',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      name: 'Sofia Almeida',
      company: 'Almeida Marketing Digital',
      result: 'Agenda cheia por 4 meses seguidos',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#64CEFB]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#64CEFB]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-[#64CEFB]" />
            <span className="text-xs md:text-sm text-white/80 uppercase tracking-wide">
              Resultados Reais
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 md:mb-6">
            O Efeito de um Website
            <br />
            <span className="text-[#64CEFB]">Estratégico</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Empresas que investiram num sistema digital completo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#64CEFB]/50 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-[#64CEFB]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Image */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-6 border-2 border-[#64CEFB]/30 group-hover:border-[#64CEFB] transition-colors duration-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Result */}
                <p className="text-lg md:text-xl font-bold text-white mb-6 leading-tight">
                  {testimonial.result}
                </p>

                {/* Name & Company */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white/90 font-semibold mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-white/60 text-sm">{testimonial.company}</p>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#64CEFB]/0 to-[#64CEFB]/0 group-hover:from-[#64CEFB]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
