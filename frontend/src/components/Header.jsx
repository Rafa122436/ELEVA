import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6 relative z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 md:gap-3 cursor-pointer"
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_designpro-hero/artifacts/4fxcadmm_0ae9043e-abb3-4116-ad86-d62d95e0c279.png"
            alt="ELEVA"
            className="h-16 md:h-20 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 border border-gray-700 rounded-full px-4 py-2">
          <a
            onClick={() => navigate('/services')}
            className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5 cursor-pointer"
          >
            Serviços
          </a>
          <a
            onClick={() => navigate('/sobre')}
            className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5 cursor-pointer"
          >
            Sobre
          </a>
          <a
            onClick={() => navigate('/portfolio')}
            className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-1.5 cursor-pointer"
          >
            Portfolio
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 bg-black/90 backdrop-blur-lg rounded-2xl border border-gray-700 p-4">
          <div className="flex flex-col gap-2">
            <a
              onClick={() => { navigate('/services'); setMobileMenuOpen(false); }}
              className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2 cursor-pointer"
            >
              Serviços
            </a>
            <a
              onClick={() => { navigate('/sobre'); setMobileMenuOpen(false); }}
              className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2 cursor-pointer"
            >
              Sobre
            </a>
            <a
              onClick={() => { navigate('/portfolio'); setMobileMenuOpen(false); }}
              className="text-sm text-white/80 hover:text-white transition-colors duration-300 px-3 py-2 cursor-pointer"
            >
              Portfolio
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
