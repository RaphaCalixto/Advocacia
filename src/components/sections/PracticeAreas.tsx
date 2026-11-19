import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRACTICE_AREAS } from '../../data/mockData';
import type { PracticeArea } from '../../types';
import { ChamferCard } from '../cards/ChamferCard';
import { ArchCard } from '../cards/ArchCard';
import { AsymmetricCard } from '../cards/AsymmetricCard';
import { TiltCard3D } from '../cards/TiltCard3D';
import { Sparkles, Compass } from 'lucide-react';

interface PracticeAreasProps {
  onOpenDetails: (area: PracticeArea) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onOpenDetails }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Frentes' },
    { id: 'societario', label: 'Societário & M&A', match: 'societario-ma' },
    { id: 'holding', label: 'Holding Familiar', match: 'planejamento-patrimonial' },
    { id: 'tributario', label: 'Tributário & CARF', match: 'tributario-estrategico' },
    { id: 'tribunais', label: 'STF & STJ', match: 'contencioso-tribunais' },
  ];

  const filteredAreas = PRACTICE_AREAS.filter((area) => {
    if (selectedCategory === 'all') return true;
    const cat = categories.find((c) => c.id === selectedCategory);
    return cat?.match ? area.id === cat.match : true;
  });

  const renderCardByFormat = (area: PracticeArea, index: number) => {
    switch (area.formatStyle) {
      case 'chamfer':
        return (
          <ChamferCard
            key={area.id}
            area={area}
            index={index}
            onOpenDetails={onOpenDetails}
          />
        );
      case 'arch':
        return (
          <ArchCard
            key={area.id}
            area={area}
            index={index}
            onOpenDetails={onOpenDetails}
          />
        );
      case 'asymmetric':
        return (
          <AsymmetricCard
            key={area.id}
            area={area}
            index={index}
            onOpenDetails={onOpenDetails}
          />
        );
      case 'tilt':
        return (
          <TiltCard3D
            key={area.id}
            area={area}
            index={index}
            onOpenDetails={onOpenDetails}
          />
        );
      default:
        return (
          <ChamferCard
            key={area.id}
            area={area}
            index={index}
            onOpenDetails={onOpenDetails}
          />
        );
    }
  };

  return (
    <section id="areas" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#180513] overflow-hidden">
      
      {/* Luzes decorativas */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-wine-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-wine-900/80 border border-gold/30 text-gold text-xs font-cinzel font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Especialidades Jurídicas
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-alabaster tracking-tight mb-5">
            Áreas de Atuação de <span className="text-gold-gradient">Alta Complexidade</span>
          </h2>

          <p className="font-cormorant text-lg sm:text-xl text-taupe italic leading-relaxed">
            Estruturações personalizadas e cards concebidos com geometrias exclusivas que refletem a singularidade de cada ramo do Direito praticado por nossa banca.
          </p>

          {/* Legenda dos Formatos de Cards */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] text-alabaster/70 font-cinzel">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-gold/80 rotate-45" />
              Card Chanfrado: Lapidação Societária
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-3 bg-wine-600 rounded-t-full border border-gold/40" />
              Card em Arco: Fortaleza e Sucessão
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-2.5 bg-taupe/80 skew-x-12" />
              Card Assimétrico: Estratégia Fiscal
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-gold animate-pulse rounded-full" />
              Card 3D Tilt: Tribunais Superiores
            </span>
          </div>
        </div>

        {/* Barra de Filtros Elegante */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-cinzel tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-gold via-gold/90 to-gold/75 text-wine-950 font-bold shadow-[0_0_15px_rgba(173,146,115,0.4)]'
                  : 'bg-wine-950/70 text-alabaster/75 hover:text-gold hover:bg-wine-900 border border-gold/15'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Cards Geométricos Diferenciados */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAreas.map((area, index) => renderCardByFormat(area, index))}
          </motion.div>
        </AnimatePresence>

        {/* Rodapé da Seção com Convite Institucional */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-wine-950/80 via-wine-900/60 to-wine-950/80 border border-gold/25 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-gold shrink-0" />
              <span className="text-xs sm:text-sm text-alabaster font-medium">
                Sua demanda possui particularidades multidisciplinares?
              </span>
            </div>
            <button
              onClick={() => onOpenDetails(PRACTICE_AREAS[0])}
              className="text-xs font-cinzel font-bold text-gold hover:text-gold-light uppercase tracking-wider underline underline-offset-4"
            >
              Solicitar Análise de Escopo Customizado →
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
