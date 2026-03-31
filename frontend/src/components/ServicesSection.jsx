import React from 'react';
import { Code2, Search, Zap, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description:
        'Websites ultra-rápidos e design exclusivo que convertem visitantes em clientes. Focado em performance e experiência de utilizador.',
      features: [
        'Design personalizado e exclusivo',
        'Otimizado para velocidade',
        'Responsive em todos dispositivos',
        'Código limpo e escalável',
      ],
      image:
        'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGFic3RyYWN0fGVufDB8fHx8MTc3NDk2MTA5NXww&ixlib=rb-4.1.0&q=85',
    },
    {
      icon: Search,
      title: 'SEO / Ranking',
      description:
        'Seja encontrado no Google pelos seus clientes ideais. Estratégias de SEO que geram tráfego qualificado e aumentam autoridade.',
      features: [
        'Pesquisa de palavras-chave estratégica',
        'Otimização on-page completa',
        'Link building de qualidade',
        'Relatórios mensais de performance',
      ],
      image:
        'https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      icon: Zap,
      title: 'Sistemas de Automação',
      description:
        'O seu website não é um panfleto. É uma máquina de vendas que trabalha 24/7, qualifica leads e agenda reuniões automaticamente.',
      features: [
        'Formulários inteligentes',
        'Integração com CRM',
        'Email marketing automatizado',
        'Chat e chatbots estratégicos',
      ],
      image:
        'https://images.pexels.com/photos/12081657/pexels-photo-12081657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#64CEFB] animate-pulse"></div>
            <span className="text-xs md:text-sm text-white/80 uppercase tracking-wide">
              Ecossistema Digital
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 md:mb-6">
            Não Vendemos Websites.
            <br />
            <span className="text-[#64CEFB]">Vendemos Resultados.</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto">
            Um sistema completo que atrai, converte e automatiza o seu processo
            de vendas
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#64CEFB]/20 to-[#64CEFB]/5 border border-[#64CEFB]/30 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8 text-[#64CEFB]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-[#64CEFB] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4">
                  <button className="group/btn inline-flex items-center gap-2 text-[#64CEFB] hover:text-white transition-colors duration-300">
                    <span className="text-sm md:text-base font-semibold">
                      Saber mais
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#64CEFB]/30 transition-colors duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#64CEFB] text-black px-6 py-3 rounded-xl font-bold text-sm md:text-base shadow-xl shadow-[#64CEFB]/20 rotate-3 group-hover:rotate-6 transition-transform duration-300">
                  ROI Garantido
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
