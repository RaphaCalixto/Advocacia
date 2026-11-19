import React from 'react';
import { motion } from 'framer-motion';
import { SUCCESS_CASES } from '../../data/mockData';
import { Landmark, Scale } from 'lucide-react';

export const SuccessCases: React.FC = () => {
  return (
    <section id="casos" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#180513] overflow-hidden">
      
      {/* Luzes decorativas */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-wine-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-wine-900/80 border border-gold/30 text-gold text-xs font-cinzel font-semibold tracking-widest uppercase mb-4">
            <Scale className="w-3.5 h-3.5" />
            Precedentes & Soluções
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-alabaster tracking-tight mb-4">
            Casos de <span className="text-gold-gradient">Impacto Comprovado</span>
          </h2>

          <p className="font-cormorant text-lg sm:text-xl text-taupe italic leading-relaxed">
            Exemplos reais de operações corporativas, disputas societárias e teses fiscais patrocinadas por nossa banca (identidades preservadas sob estrito sigilo ético).
          </p>
        </div>

        {/* Grid de Casos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SUCCESS_CASES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-[#2a0e20] via-[#1c0714] to-[#14030e] border border-gold/25 hover:border-gold/60 shadow-[0_15px_45px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(173,146,115,0.25)] transition-all duration-400 overflow-hidden"
            >
              {/* Imagem de Fundo Jurídica Desfocada e Escurecida (Visual Atmosférico) */}
              {item.imageUrl && (
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.clientProfile}
                    className="w-full h-full object-cover filter blur-[2.5px] scale-110 opacity-25 group-hover:opacity-40 group-hover:scale-115 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2a0e20]/85 via-[#1c0714]/92 to-[#14030e]/98" />
                </div>
              )}

              <div className="relative z-10">
                {/* Header do Card */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-sm bg-wine-900 border border-gold/30 text-gold text-[10px] font-cinzel font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="text-xs text-taupe font-mono flex items-center gap-1">
                    <Landmark className="w-3.5 h-3.5 text-gold/70" />
                    {item.court}
                  </span>
                </div>

                <div className="text-xs font-cinzel uppercase text-gold/80 tracking-wider mb-1 font-semibold">
                  {item.category}
                </div>

                <h3 className="text-lg font-cinzel font-bold text-alabaster group-hover:text-gold-light transition-colors mb-4">
                  {item.clientProfile}
                </h3>

                {/* Desafio e Solução */}
                <div className="space-y-3 text-xs sm:text-sm text-taupe mb-6">
                  <div>
                    <span className="text-gold font-semibold block text-[11px] uppercase font-cinzel tracking-wider mb-1">
                      Desafio Jurídico
                    </span>
                    <p className="leading-relaxed bg-wine-950/80 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
                      {item.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-gold font-semibold block text-[11px] uppercase font-cinzel tracking-wider mb-1">
                      Estratégia Adotada
                    </span>
                    <p className="leading-relaxed bg-wine-950/80 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
                      {item.strategy}
                    </p>
                  </div>
                </div>
              </div>

              {/* Impacto Financeiro em Destaque */}
              <div className="pt-4 border-t border-gold/20 flex flex-col gap-1 relative z-10">
                <span className="text-[10px] uppercase font-cinzel tracking-widest text-gold/80 font-bold">
                  Impacto & Resultado
                </span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-400">
                  {item.financialImpact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};
