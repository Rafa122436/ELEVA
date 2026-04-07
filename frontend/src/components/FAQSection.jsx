import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Como sei que vou ter leads qualificados?',
      answer:
        'Implementamos sistemas de tracking e conversão desde o dia 1. Cada elemento do website é otimizado para captar e qualificar leads através de formulários estratégicos, CTAs claros e automações que segmentam o público. Além disso, fornecemos relatórios mensais com métricas claras de tráfego, conversões e ROI.',
    },
    {
      question: 'Quanto tempo demora o processo completo?',
      answer:
        'O lançamento do seu website acontece em 30-45 dias, dependendo da complexidade. Dividimos em fases: Estratégia e Design (7-10 dias), Desenvolvimento (15-20 dias), e Testes e Lançamento (5-7 dias). A otimização de SEO é contínua e começa a mostrar resultados a partir do 2º-3º mês.',
    },
    {
      question: 'Vou ficar preso a mensalidades eternas?',
      answer:
        'Não. O website é 100% seu após o lançamento. Oferecemos apenas suporte e manutenção opcional (€99-199/mês) que inclui atualizações, backups e suporte técnico. Muitos clientes escolhem manter para garantir segurança e performance, mas é totalmente opcional.',
    },
    {
      question: 'O website funciona bem em telemóveis?',
      answer:
        'Absolutamente. Todos os nossos websites são desenvolvidos com abordagem mobile-first, o que significa que são desenhados primeiro para telemóveis e depois adaptados para desktop. Testamos em dezenas de dispositivos e navegadores para garantir experiência perfeita em qualquer ecrã.',
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#64CEFB] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#64CEFB] rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-[#64CEFB]" />
            <span className="text-xs md:text-sm text-white/80 uppercase tracking-wide">
              Perguntas Frequentes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6">
            Dúvidas que{' '}
            <span className="text-[#64CEFB]">Todos Têm</span>
          </h2>
          <p className="text-base md:text-lg text-white/70">
            Respostas diretas às perguntas mais comuns
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 md:px-8 hover:border-[#64CEFB]/50 transition-colors duration-300 data-[state=open]:border-[#64CEFB]"
            >
              <AccordionTrigger className="text-left text-white hover:text-[#64CEFB] py-6 md:py-8 text-base md:text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-6 md:pb-8 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA after FAQ */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-white/70 mb-6 text-sm md:text-base">
            Ainda tem dúvidas? Vamos conversar.
          </p>
          <a 
            href="/qualify"
            className="inline-block bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold px-8 md:px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#64CEFB]/25"
          >
            Agendar Consultoria Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
