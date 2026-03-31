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
      question: 'Why should I get a website for my business?',
      answer:
        'A website is your 24/7 digital storefront. It builds credibility, reaches customers worldwide, and serves as the foundation of your digital marketing. Without one, you\'re invisible to the 97% of consumers who search online before buying. A professional website isn\'t an expense—it\'s an investment that pays for itself through increased visibility and sales.',
    },
    {
      question: 'How long does it take to develop?',
      answer:
        'Most websites are completed in 4-8 weeks, depending on complexity. We work in phases: Strategy & Planning (1 week), Design (1-2 weeks), Development (2-3 weeks), Testing & Launch (1 week). Rush projects can be accommodated. Throughout the process, you\'ll have full visibility and input at each milestone.',
    },
    {
      question: 'What makes you different to other web design agencies?',
      answer:
        'We don\'t just build websites—we build revenue-generating systems. Every site includes conversion optimization, performance tuning, and growth-focused features. We use the same strategies for our own business that we implement for clients. Plus, you get direct access to senior developers, not junior staff. No templates, no cookie-cutter solutions—just custom work that delivers ROI.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer:
        'Absolutely. Every website we build is mobile-first, meaning it\'s designed for smartphones first, then adapted for tablets and desktops. With 60%+ of web traffic coming from mobile devices, this isn\'t optional—it\'s essential. We test on dozens of devices and screen sizes to ensure flawless performance everywhere.',
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
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-white/70">
            Have questions? Our FAQ section has you covered with quick answers
            to the most common inquiries.
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
