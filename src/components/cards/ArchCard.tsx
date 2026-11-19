import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import type { PracticeArea } from '../../types';

interface ArchCardProps {
  area: PracticeArea;
  index: number;
  onOpenDetails: (area: PracticeArea) => void;
}

export const ArchCard: React.FC<ArchCardProps> = ({ area, index, onOpenDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      onClick={() => onOpenDetails(area)}
      className="group relative cursor-pointer"
    >
      {/* Moldura Externa com Arco Romano */}
      <div className="card-arch p-[1.5px] bg-gradient-to-b from-gold via-gold/30 to-wine/40 transition-all duration-500 group-hover:from-gold-light group-hover:to-gold/40 group-hover:shadow-[0_0_35px_rgba(173,146,115,0.3)]">
        
        {/* Corpo com Arco Interno */}
        <div className="card-arch h-full w-full bg-gradient-to-b from-[#341027] via-[#21091a] to-[#15040f] p-8 md:p-9 flex flex-col justify-between relative overflow-hidden">
          
          {/* Decoração Arquitetônica do Arco Superior */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 border-b border-gold/30 rounded-b-full flex items-center justify-center pt-2">
            <Sparkles className="w-4 h-4 text-gold/70 animate-pulse" />
          </div>

          <div>
            {/* Ícone no Centro Superior do Arco */}
            <div className="flex flex-col items-center text-center mt-6 mb-6">
              <div className="w-14 h-14 rounded-full bg-wine-800/80 border border-gold/40 flex items-center justify-center text-gold mb-3 shadow-[0_0_20px_rgba(173,146,115,0.2)] group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              
              <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-gold/90 font-semibold">
                {area.badge}
              </span>
            </div>

            {/* Título Principal */}
            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-center text-alabaster group-hover:text-gold-light transition-colors duration-300 leading-snug mb-3">
              {area.title}
            </h3>

            {/* Subtítulo / Tagline */}
            <p className="text-center text-gold/90 font-cormorant italic text-base mb-4 leading-relaxed">
              "{area.tagline}"
            </p>

            {/* Descrição */}
            <p className="text-taupe text-sm text-center leading-relaxed mb-6 line-clamp-3">
              {area.description}
            </p>

            {/* Pilares Estratégicos */}
            <div className="bg-wine-900/60 rounded-lg p-3.5 border border-gold/15 mb-6">
              <div className="text-[10px] uppercase font-cinzel text-gold tracking-widest mb-2 font-bold text-center">
                Diretrizes de Proteção
              </div>
              <ul className="space-y-1.5 text-xs text-alabaster/80 text-left">
                {area.deliverables.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rodapé com Métrica e Botão de Ação */}
          <div className="pt-4 border-t border-gold/20 flex items-center justify-between">
            <span className="text-xs font-semibold text-gold tracking-wide">
              {area.metrics}
            </span>
            <div className="flex items-center gap-1 text-xs text-alabaster/90 group-hover:text-gold transition-colors font-medium">
              <span>Examinar</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
