import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scale, Calendar, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenAppointmentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Autoridade & Banca', href: '#sobre' },
    { name: 'Casos Reais', href: '#casos' },
    { name: 'Diagnóstico Jurídico', href: '#diagnostico' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#170512]/90 backdrop-blur-xl border-b border-gold/25 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
            : 'py-6 bg-gradient-to-b from-[#15040f]/95 via-[#15040f]/50 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Monograma de Autoridade */}
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-[#491A36] to-[#250a1b] border border-gold/50 flex items-center justify-center text-gold shadow-[0_0_15px_rgba(173,146,115,0.3)] transition-transform duration-300 group-hover:scale-105">
                <Scale className="w-5 h-5 text-gold" />
                <span className="absolute -bottom-1 -right-1 text-[8px] font-cinzel font-black px-1 rounded-xs bg-gold text-wine-950">
                  OAB
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-alabaster group-hover:text-gold-light transition-colors">
                  VALENÇA <span className="text-gold font-light">&</span> ADVOGADOS
                </span>
                <span className="text-[10px] uppercase font-cinzel tracking-[0.25em] text-gold/80 -mt-1">
                  Estratégia Jurídica & Family Office
                </span>
              </div>
            </a>

            {/* Links Desktop */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase font-cinzel tracking-wider text-alabaster/80 hover:text-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Ações Direitas (Status de Plantão + CTA) */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-wine-900/60 border border-gold/20 text-[11px] text-alabaster/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Plantão Contencioso Ativo</span>
              </div>

              <button
                onClick={onOpenAppointmentModal}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold via-gold/90 to-gold/75 text-wine-950 font-cinzel text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(173,146,115,0.35)] hover:shadow-[0_0_30px_rgba(173,146,115,0.55)] hover:brightness-110 active:scale-95 transition-all duration-300"
              >
                <Calendar className="w-4 h-4 text-wine-950" />
                <span>Consulta Prioritária</span>
              </button>
            </div>

            {/* Botão Mobile Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-lg border border-gold/30 bg-wine-900/60 flex items-center justify-center text-gold"
                aria-label="Abrir menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-24 px-6 pb-10 bg-[#15040f]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="text-[10px] uppercase font-cinzel tracking-widest text-gold/70 border-b border-gold/20 pb-2">
                Navegação Institucional
              </div>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-cinzel text-alabaster hover:text-gold flex items-center justify-between py-2 border-b border-white/5"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-gold/50" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-gold/20">
              <div className="flex items-center gap-2 text-xs text-taupe">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Atendimento confidencial e com sigilo profissional</span>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-gold to-gold/80 text-wine-950 font-cinzel font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(173,146,115,0.4)] flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta Estratégica
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
