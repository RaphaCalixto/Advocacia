import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/mockData';
import { Quote, Star, Award, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#15040f] overflow-hidden">
      
      {/* Luz ambiente */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-wine-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-wine-900/80 border border-gold/30 text-gold text-xs font-cinzel font-semibold tracking-widest uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            Confiança & Prova Social
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-alabaster tracking-tight mb-4">
            A Voz de Nossos <span className="text-gold-gradient">Clientes & Conselhos</span>
          </h2>

          <p className="font-cormorant text-lg sm:text-xl text-taupe italic leading-relaxed">
            A segurança de líderes corporativos e famílias patriarcais que confiaram seus maiores ativos à nossa banca jurídica.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-[#260b1d] via-[#1a0613] to-[#12030d] border border-gold/20 flex flex-col justify-between hover:border-gold/50 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              <div>
                {/* Estrelas e Ícone de Citação */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-gold/30" />
                </div>

                {/* Texto da Citação */}
                <p className="font-cormorant text-lg sm:text-xl text-alabaster/90 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Autor */}
              <div className="pt-6 border-t border-gold/15 flex items-center gap-3.5">
                {t.avatarUrl ? (
                  <div className="relative w-12 h-12 rounded-full border-2 border-gold/60 p-0.5 shrink-0 shadow-[0_0_16px_rgba(173,146,115,0.35)]">
                    <img
                      src={t.avatarUrl}
                      alt={t.author}
                      className="w-full h-full rounded-full object-cover object-top filter contrast-105"
                    />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-wine-800 border border-gold/40 flex items-center justify-center font-cinzel font-bold text-gold text-xs shrink-0 shadow-[0_0_12px_rgba(173,146,115,0.2)]">
                    {t.avatarText}
                  </div>
                )}
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-alabaster uppercase tracking-wider">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-taupe">
                    {t.position}
                  </p>
                  <p className="text-[10px] text-gold/80 font-cinzel tracking-wider">
                    {t.company} • {t.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selo de Sigilo */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-taupe">
          <ShieldCheck className="w-4 h-4 text-gold" />
          <span>Depoimentos autorizados com dados de litígio preservados sob o sigilo profissional da OAB.</span>
        </div>

      </div>

    </section>
  );
};
