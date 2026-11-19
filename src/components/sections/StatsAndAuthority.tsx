import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../data/mockData';
import { ShieldCheck, Award, Landmark, Building } from 'lucide-react';

export const StatsAndAuthority: React.FC = () => {
  const getIconForIndex = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-6 h-6 text-gold" />;
      case 1:
        return <Landmark className="w-6 h-6 text-gold" />;
      case 2:
        return <Award className="w-6 h-6 text-gold" />;
      default:
        return <Building className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#180513] via-[#210719] to-[#160411] border-y border-gold/20 overflow-hidden">
      
      {/* Luz central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-wine-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gold/15">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`flex flex-col items-center text-center px-4 ${idx > 0 ? 'pt-6 sm:pt-0' : ''}`}
            >
              {/* Ícone no topo com moldura sutil */}
              <div className="w-12 h-12 rounded-xl bg-wine-900/80 border border-gold/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(173,146,115,0.15)]">
                {getIconForIndex(idx)}
              </div>

              {/* Número Grande */}
              <div className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-alabaster tracking-tight mb-2 flex items-baseline">
                {stat.prefix && <span className="text-gold text-2xl sm:text-3xl font-bold">{stat.prefix}</span>}
                <span className="text-gold-gradient">{stat.number}</span>
                <span className="text-gold text-2xl sm:text-3xl font-bold">{stat.suffix}</span>
              </div>

              {/* Rótulo */}
              <div className="font-cinzel text-xs uppercase tracking-widest text-alabaster font-bold mb-1.5">
                {stat.label}
              </div>

              {/* Detalhe Explicativo */}
              <p className="text-xs text-taupe leading-relaxed max-w-[220px]">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
