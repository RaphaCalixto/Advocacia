import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { PracticeArea } from '../../types';

interface ChamferCardProps {
  area: PracticeArea;
  index: number;
  onOpenDetails: (area: PracticeArea) => void;
}

export const ChamferCard: React.FC<ChamferCardProps> = ({ area, index, onOpenDetails }) => {
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
      {/* Moldura Dourada com cantos Chanfrados (Border Outer) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-gold/15 to-transparent clip-chamfer p-[1px] transition-all duration-500 group-hover:from-gold group-hover:via-gold/50 group-hover:to-gold/20 group-hover:shadow-[0_0_30px_rgba(173,146,115,0.25)]">
        {/* Corpo do Card com o mesmo corte chanfrado */}
        <div className="h-full w-full bg-gradient-to-b from-[#2b0e20] via-[#1c0714] to-[#15040f] clip-chamfer p-8 md:p-9 flex flex-col justify-between relative overflow-hidden">
          
          {/* Reflexo luminoso no topo */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-wine/30 rounded-full blur-2xl group-hover:bg-wine/50 transition-all duration-700 pointer-events-none" />
          
          {/* Detalhes de Canto Lapidado (Ornamentos) */}
          <div className="absolute top-2 left-6 text-[9px] tracking-[0.25em] uppercase text-gold/60 font-cinzel">
            [ LAPIDAÇÃO JURÍDICA ]
          </div>

          <div>
            {/* Topo do Card: Badge e Ação */}
            <div className="flex items-center justify-between mb-6 pt-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-xs font-medium tracking-wider text-gold bg-wine/60 border border-gold/20 uppercase font-cinzel">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                {area.badge}
              </span>
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-wine-950 transition-all duration-400 group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5 transition-transform" />
              </div>
            </div>

            {/* Título Principal */}
            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-alabaster group-hover:text-gold-light transition-colors duration-300 leading-snug mb-3">
              {area.title}
            </h3>

            {/* Subtítulo / Tagline */}
            <p className="text-gold/90 text-sm font-cormorant italic text-base mb-4 leading-relaxed">
              "{area.tagline}"
            </p>

            {/* Descrição */}
            <p className="text-taupe text-sm leading-relaxed mb-6 line-clamp-3">
              {area.description}
            </p>

            {/* Entregáveis em Destaque */}
            <div className="space-y-2 mb-6 border-t border-gold/15 pt-4">
              {area.deliverables.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-alabaster/80">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rodapé do Card: Métrica e Gatilho */}
          <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
            <span className="text-xs font-semibold text-gold tracking-wide">
              {area.metrics}
            </span>
            <span className="text-xs text-taupe group-hover:text-alabaster transition-colors underline-offset-4 group-hover:underline">
              Analisar Caso →
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
