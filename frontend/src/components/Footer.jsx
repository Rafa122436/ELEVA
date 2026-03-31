import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/e8xk7pen_Captura%20de%20ecr%C3%A3%202026-03-31%20170113.png"
                alt="ELEVA"
                className="h-14 md:h-16 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Websites estratégicos que convertem visitantes em clientes de alto
              valor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicos"
                  className="text-white/60 hover:text-[#64CEFB] transition-colors duration-300 text-sm"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#resultados"
                  className="text-white/60 hover:text-[#64CEFB] transition-colors duration-300 text-sm"
                >
                  Resultados
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white/60 hover:text-[#64CEFB] transition-colors duration-300 text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-white/60 hover:text-[#64CEFB] transition-colors duration-300 text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Serviços
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-white/60 text-sm">Desenvolvimento Web</span>
              </li>
              <li>
                <span className="text-white/60 text-sm">SEO / Posicionamento</span>
              </li>
              <li>
                <span className="text-white/60 text-sm">Dashboards</span>
              </li>
              <li>
                <span className="text-white/60 text-sm">Consultoria Estratégica</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Contato
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:contato@eleva.pt"
                  className="flex items-center gap-2 text-white/60 hover:text-[#64CEFB] transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  contato@eleva.pt
                </a>
              </li>
              <li>
                <a
                  href="tel:+351912345678"
                  className="flex items-center gap-2 text-white/60 hover:text-[#64CEFB] transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +351 912 345 678
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#64CEFB] hover:border-[#64CEFB] transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-white/60 group-hover:text-black transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#64CEFB] hover:border-[#64CEFB] transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 text-white/60 group-hover:text-black transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#64CEFB] hover:border-[#64CEFB] transition-all duration-300 group"
              >
                <Twitter className="w-4 h-4 text-white/60 group-hover:text-black transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs md:text-sm">
            © {currentYear} ELEVA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/50 hover:text-[#64CEFB] transition-colors duration-300 text-xs md:text-sm"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-[#64CEFB] transition-colors duration-300 text-xs md:text-sm"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
