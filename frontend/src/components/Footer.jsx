import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Skyline Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Column 1: Branding */}
          <div className="space-y-6">
            <Link to="/">
              <img
                src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/e8xk7pen_Captura%20de%20ecr%C3%A3%202026-03-31%20170113.png"
                alt="ELEVA"
                className="h-14 w-auto mb-4"
              />
            </Link>
            <p className="text-[15px] text-white/60 leading-relaxed max-w-sm">
              Websites estratégicos que convertem visitantes em clientes de alto valor.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[2px] text-white/50 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-[15px] text-white/70 hover:text-white transition-colors duration-300"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-[15px] text-white/70 hover:text-white transition-colors duration-300"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <a
                  href="/#resultados"
                  className="text-[15px] text-white/70 hover:text-white transition-colors duration-300"
                >
                  Resultados
                </a>
              </li>
              <li>
                <span className="text-[15px] text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                  Política de Privacidade
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[2px] text-white/50 mb-6">
              Stay Connected
            </h3>
            <p className="text-[14px] text-white/60 mb-6">
              Receba insights exclusivos e novidades sobre web design.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="O seu email"
                required
                className="flex-1 bg-white/5 border-b-2 border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none transition-colors duration-300 text-[14px]"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 font-semibold rounded-md hover:bg-white/90 transition-all duration-300 whitespace-nowrap text-[14px]"
              >
                Subscrever
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[13px] text-white/40">
            © {currentYear} ELEVA Web Design. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
