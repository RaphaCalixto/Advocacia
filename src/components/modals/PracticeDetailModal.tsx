import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldAlert, Award, ArrowRight, MessageSquare } from 'lucide-react';
import type { PracticeArea } from '../../types';

interface PracticeDetailModalProps {
  area: PracticeArea | null;
  onClose: () => void;
  onBookConsultation: (areaTitle: string) => void;
}

export const PracticeDetailModal: React.FC<PracticeDetailModalProps> = ({
  area,
  onClose,
  onBookConsultation,
}) => {
  // Bloquear scroll do body quando modal estiver aberto
  useEffect(() => {
    if (area) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [area]);

  if (!area) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop com blur profundo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Container do Dossiê */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-[#2d0e22] via-[#1c0714] to-[#12030d] border border-gold/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] p-6 sm:p-8 md:p-10 text-alabaster"
        >
          {/* Botão Fechar */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full border border-gold/30 bg-wine-900/60 flex items-center justify-center text-gold hover:bg-gold hover:text-wine-950 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Cabeçalho do Dossiê */}
          <div className="mb-8 border-b border-gold/20 pb-6 pr-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold bg-wine-900 border border-gold/30 rounded-sm font-cinzel">
                {area.badge}
              </span>
              <span className="text-xs text-taupe font-mono">Dossiê Estratégico #{area.id.toUpperCase()}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-alabaster mb-3">
              {area.title}
            </h2>

            <p className="text-gold font-cormorant italic text-lg sm:text-xl">
              "{area.tagline}"
            </p>
          </div>

          {/* Abordagem Estratégica */}
          <div className="mb-8">
            <h3 className="text-xs uppercase font-cinzel tracking-widest text-gold font-bold mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-gold" />
              Tese e Abordagem Institucional
            </h3>
            <p className="text-sm sm:text-base text-taupe leading-relaxed bg-wine-950/60 p-5 rounded-xl border border-gold/15">
              {area.strategicApproach}
            </p>
          </div>

          {/* Entregáveis e Escopo de Atuação */}
          <div className="mb-8">
            <h3 className="text-xs uppercase font-cinzel tracking-widest text-gold font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold" />
              Principais Frentes de Atuação
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {area.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-wine-900/30 border border-gold/10">
                  <span className="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-alabaster/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Estudo de Caso Recente */}
          <div className="mb-8 rounded-xl p-5 sm:p-6 bg-gradient-to-br from-wine-900/70 to-wine-950/90 border border-gold/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2 text-xs font-bold font-cinzel uppercase text-gold mb-3">
              <ShieldAlert className="w-4 h-4 text-gold" />
              Precedente Resolvido (Sigilo Protegido)
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="text-gold font-semibold">Cenário Desafiador: </span>
                <span className="text-taupe">{area.featuredCase.context}</span>
              </div>
              <div>
                <span className="text-gold font-semibold">Ação da Banca: </span>
                <span className="text-alabaster/90">{area.featuredCase.action}</span>
              </div>
              <div>
                <span className="text-gold font-semibold">Desfecho: </span>
                <span className="text-emerald-400 font-medium">{area.featuredCase.outcome}</span>
              </div>
            </div>
          </div>

          {/* Rodapé e CTA de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gold/20">
            <div>
              <span className="block text-xs text-taupe font-medium">Capacidade de Atendimento</span>
              <span className="text-xs text-gold font-semibold tracking-wide">Plantão com confidencialidade e resposta em até 24h</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onBookConsultation(area.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-gold via-gold/90 to-gold/80 text-wine-950 font-cinzel text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(173,146,115,0.3)] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Agendar Consulta nesta Área
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
