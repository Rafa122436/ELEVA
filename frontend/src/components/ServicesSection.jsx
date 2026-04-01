import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Search, BarChart3, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento Web',
      description:
        'Websites de alto impacto que transformam visitantes em clientes pagantes. Criados para gerar resultados, não apenas para serem bonitos.',
      features: [
        'Design premium que converte',
        'Carregamento instantâneo (velocidade Google 95+)',
        'Perfeito em qualquer dispositivo',
        'Preparado para crescer com o seu negócio',
      ],
      image:
        'https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/2vzxwc0g_c22735fc-60ca-4ae4-a8af-c802bdc3df6b.png',
      link: '/services/web-development',
    },
    {
      icon: Search,
      title: 'SEO / Posicionamento',
      description:
        'Domine o Google e seja encontrado pelos clientes que realmente pagam. Mais visibilidade = Mais leads = Mais vendas.',
      features: [
        'Topo do Google nas palavras certas',
        'Tráfego orgânico qualificado todos os dias',
        'Autoridade que afasta a concorrência',
        'Resultados mensuráveis mês a mês',
      ],
      image:
        'https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/ashmsu3i_7044c72a-63f5-43e3-8838-86d18897bac5.png',
      link: '/services/seo-ranking',
    },
    {
      icon: BarChart3,
      title: 'Dashboards Personalizados',
      description:
        'Tome decisões baseadas em dados reais, não em intuição. Veja exatamente de onde vêm os seus leads e quanto cada canal está a render.',
      features: [
        'Todas as métricas do negócio num só lugar',
        'Dados atualizados em tempo real',
        'Relatórios que se geram sozinhos',
        'Tão simples que qualquer pessoa usa',
      ],
      image:
        'https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/hmepic8r_6daf0e6f-5a1e-44f5-b8bc-a66ff964d928.png',
      link: '/services/dashboards',
    },
    {
      icon: Code2,
      title: 'Branding Digital',
      description:
        'Construa uma marca que se destaca da concorrência. Identidade visual profissional que comunica autoridade e gera confiança instantânea.',
      features: [
        'Logo e identidade visual única',
        'Guidelines de marca profissionais',
        'Presença digital coerente',
        'Materiais de marketing prontos a usar',
      ],
      image:
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=srgb&fm=jpg&q=85',
      link: '/services/branding-digital',
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
              </div>

              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <Link to={service.link} className="block">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#64CEFB]/30 transition-colors duration-500 cursor-pointer">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </Link>

                {/* Botão Saber Mais */}
                <div className="mt-6">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#64CEFB]/25"
                  >
                    <span className="text-sm md:text-base">Saber mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
