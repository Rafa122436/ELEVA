import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SocialProofBar = () => {
  return (
    <section className="bg-black/60 backdrop-blur-sm border-y border-white/10 py-4 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-3 md:gap-12">
          <div className="flex items-center gap-2 md:gap-3">
            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#64CEFB] flex-shrink-0" />
            <p className="text-white/90 text-xs md:text-base font-medium">
              Mais de 50 projetos lançados com sucesso
            </p>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/20"></div>
          <div className="flex items-center gap-2 md:gap-3">
            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#64CEFB] flex-shrink-0" />
            <p className="text-white/90 text-xs md:text-base font-medium">
              ROI médio de 300% no primeiro ano
            </p>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/20"></div>
          <div className="flex items-center gap-2 md:gap-3">
            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#64CEFB] flex-shrink-0" />
            <p className="text-white/90 text-xs md:text-base font-medium">
              Entrega em 30-45 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
