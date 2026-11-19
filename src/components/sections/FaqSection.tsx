import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../../data/mockData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#180513] overflow-hidden">
      
      {/* Luz ambiente */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-wine-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-wine-900/80 border border-gold/30 text-gold text-xs font-cinzel font-semibold tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Transparência Institucional
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-alabaster tracking-tight mb-4">
            Perguntas <span className="text-gold-gradient">Frequentes</span>
          </h2>

          <p className="font-cormorant text-lg sm:text-xl text-taupe italic leading-relaxed">
            Esclarecimentos imediatos sobre nossa forma de atuação, metodologia de honorários e protocolos de atendimento.
          </p>
        </div>

        {/* Lista de Acordeões */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-gold/20 bg-gradient-to-b from-[#240a1c] to-[#170512] overflow-hidden transition-all duration-300 hover:border-gold/45"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-cinzel text-gold font-bold tracking-wider block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-cinzel text-sm sm:text-base font-bold text-alabaster">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-gold text-wine-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-xs sm:text-sm text-taupe leading-relaxed border-t border-gold/15">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
