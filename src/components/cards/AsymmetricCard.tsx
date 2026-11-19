import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Scale, TrendingUp } from 'lucide-react';
import type { PracticeArea } from '../../types';

interface AsymmetricCardProps {
  area: PracticeArea;
  index: number;
  onOpenDetails: (area: PracticeArea) => void;
}

export const AsymmetricCard: React.FC<AsymmetricCardProps> = ({ area, index, onOpenDetails }) => {
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
      {/* Camada de Fundo Deslocada (Layer Offset Dourado) */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 clip-diagonal bg-gold/20 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:bg-gold/30" />

      {/* Moldura Externa com Corte Diagonal */}
      <div className="relative clip-diagonal p-[1.5px] bg-gradient-to-tr from-gold/50 via-wine-600 to-gold/20 transition-all duration-500 group-hover:from-gold group-hover:to-gold/40 group-hover:shadow-[0_0_35px_rgba(73,26,54,0.6)]">
        
        {/* Corpo do Card com Corte Diagonal Interno */}
        <div className="clip-diagonal h-full w-full bg-gradient-to-b from-[#2e0e23] via-[#1f0817] to-[#12030d] p-8 md:p-9 flex flex-col justify-between relative overflow-hidden">
          
          {/* Efeito de Luz em Gradiente Mesh */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-wine-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-wine-500/40 transition-all duration-500" />

          <div>
            {/* Header com Ícone e Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-sm bg-wine-900 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-cinzel text-gold font-bold tracking-wider">
                    {area.badge}
                  </span>
                  <span className="text-[11px] text-taupe flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-gold" />
                    Impacto Fiscal & Contábil
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-wine-950 transition-all duration-400">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Título */}
            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-alabaster group-hover:text-gold-light transition-colors duration-300 leading-snug mb-3">
              {area.title}
            </h3>

            {/* Subtítulo / Tagline */}
            <p className="text-gold/90 font-cormorant italic text-base mb-4 leading-relaxed">
              "{area.tagline}"
            </p>

            {/* Descrição */}
            <p className="text-taupe text-sm leading-relaxed mb-6 line-clamp-3">
              {area.description}
            </p>

            {/* Linhas de Entrega Estratégica */}
            <div className="space-y-2 border-t border-gold/15 pt-4 mb-6">
              {area.deliverables.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs text-alabaster/80 py-1 border-b border-white/5">
                  <span className="truncate pr-2">{item}</span>
                  <span className="text-[10px] text-gold font-mono uppercase">Ativo</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rodapé do Card com Corte Chanfrado */}
          <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
            <span className="text-xs font-semibold text-gold tracking-wide">
              {area.metrics}
            </span>
            <span className="text-xs text-taupe group-hover:text-alabaster transition-colors">
              Explorar Teses →
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
