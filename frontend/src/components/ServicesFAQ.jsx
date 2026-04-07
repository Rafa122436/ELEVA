import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="bg-gradient-to-b from-black via-cyan-950/5 to-black py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
            Quebrando{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Dúvidas
            </span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border-2 border-white/10 rounded-2xl px-6 hover:border-cyan-500/30 transition-all duration-300 data-[state=open]:border-cyan-500/50 data-[state=open]:shadow-xl data-[state=open]:shadow-cyan-500/10"
              >
                <AccordionTrigger className="text-white hover:text-cyan-400 py-6 text-lg font-bold hover:no-underline uppercase tracking-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-white/70 mb-6 text-sm md:text-base">
            Ainda tem dúvidas? Vamos conversar.
          </p>
          <a 
            href="/qualify"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-8 md:px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            Agendar Consultoria Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
