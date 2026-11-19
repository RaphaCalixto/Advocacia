import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Landmark, Sparkles } from 'lucide-react';
import type { PracticeArea } from '../../types';

interface TiltCard3DProps {
  area: PracticeArea;
  index: number;
  onOpenDetails: (area: PracticeArea) => void;
}

export const TiltCard3D: React.FC<TiltCard3DProps> = ({ area, index, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Valores de movimento do mouse relativos ao card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Molas suaves para física realista sem travamento
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Mapeamento para rotação tridimensional
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  // Posição de luz refletida
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalizar para -0.5 a 0.5
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-1000 group cursor-pointer"
      onClick={() => onOpenDetails(area)}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-gold via-wine-600 to-gold/30 transition-shadow duration-500 group-hover:shadow-[0_25px_60px_-15px_rgba(173,146,115,0.35)]"
      >
        {/* Corpo Interno do Card */}
        <div
          style={{ transform: 'translateZ(20px)' }}
          className="h-full w-full rounded-2xl bg-gradient-to-b from-[#2b0e20] via-[#1c0714] to-[#12030d] p-8 md:p-9 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl border border-gold/20"
        >
          {/* Efeito Especular de Luz Dinâmica (Glow Tracker) */}
          <motion.div
            style={{
              left: glareX,
              top: glareY,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-radial from-gold/25 via-gold/5 to-transparent rounded-full pointer-events-none blur-xl group-hover:opacity-100 opacity-40 transition-opacity duration-300"
          />

          <div>
            {/* Header com Ícone e Badge */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-wine-800/90 border border-gold/40 flex items-center justify-center text-gold shadow-[0_0_15px_rgba(173,146,115,0.25)] group-hover:scale-105 transition-transform">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-cinzel text-gold font-bold tracking-widest flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold" />
                    {area.badge}
                  </span>
                  <span className="text-[11px] text-taupe">Atuação em Brasília (STF/STJ)</span>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-wine-950 transition-all duration-400">
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </div>
            </div>

            {/* Título */}
            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-alabaster group-hover:text-gold-light transition-colors duration-300 leading-snug mb-3 relative z-10">
              {area.title}
            </h3>

            {/* Subtítulo / Tagline */}
            <p className="text-gold/90 font-cormorant italic text-base mb-4 leading-relaxed relative z-10">
              "{area.tagline}"
            </p>

            {/* Descrição */}
            <p className="text-taupe text-sm leading-relaxed mb-6 line-clamp-3 relative z-10">
              {area.description}
            </p>

            {/* Entregáveis de Prestígio */}
            <div className="space-y-2 border-t border-gold/15 pt-4 mb-6 relative z-10">
              {area.deliverables.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-alabaster/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rodapé com Métrica e Botão de Ação */}
          <div className="pt-4 border-t border-gold/20 flex items-center justify-between relative z-10">
            <span className="text-xs font-semibold text-gold tracking-wide">
              {area.metrics}
            </span>
            <span className="text-xs text-taupe group-hover:text-alabaster transition-colors font-medium">
              Interação 3D • Ver Dossiê →
            </span>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
