import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle } from 'lucide-react';

const ServicesFAQ = () => {
  const faqs = [
    {
      question: 'Porque devo ter um website para o meu negócio?',
      answer:
        'Um website é a sua montra digital 24/7. Constrói credibilidade, alcança clientes em todo o mundo e serve como a base do seu marketing digital. Sem um, é invisível aos 97% de consumidores que pesquisam online antes de comprar. Um website profissional não é uma despesa — é um investimento que se paga através de maior visibilidade e vendas.',
    },
    {
      question: 'Quanto tempo demora o desenvolvimento?',
      answer:
        'A maioria dos websites fica concluída em 4-8 semanas, dependendo da complexidade. Trabalhamos por fases: Estratégia & Planeamento (1 semana), Design (1-2 semanas), Desenvolvimento (2-3 semanas), Testes & Lançamento (1 semana). Projetos urgentes podem ser acomodados. Durante todo o processo, terá total visibilidade e participação em cada marco.',
    },
    {
      question: 'O que vos diferencia de outras agências de web design?',
      answer:
        'Não construímos apenas websites — construímos sistemas geradores de receita. Cada site inclui otimização de conversão, afinação de performance e funcionalidades focadas em crescimento. Usamos as mesmas estratégias no nosso negócio que implementamos para clientes. Além disso, tem acesso direto a developers seniores, não a staff júnior. Sem templates, sem soluções genéricas — apenas trabalho personalizado que entrega ROI.',
    },
    {
      question: 'O meu website vai ser mobile-friendly?',
      answer:
        'Absolutamente. Cada website que construímos é mobile-first, o que significa que é desenhado primeiro para smartphones e depois adaptado para tablets e desktops. Com mais de 60% do tráfego web a vir de dispositivos móveis, isto não é opcional — é essencial. Testamos em dezenas de dispositivos e tamanhos de ecrã para garantir performance impecável em todo o lado.',
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
            Perguntas Frequentes
          </h2>
          <p className="text-base md:text-lg text-white/70">
            Tem dúvidas? A nossa secção de FAQ tem as respostas rápidas às perguntas mais comuns.
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
      </div>
    </section>
  );
};

export default ServicesFAQ;
