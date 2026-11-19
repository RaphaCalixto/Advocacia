import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedArea?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedArea = 'Holding & Sucessão Familiar',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState(preSelectedArea);
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedArea) {
      setArea(preSelectedArea);
    }
  }, [preSelectedArea]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#AD9273', '#491A36', '#E9E8E6'],
      });
    } catch (err) {
      // Ignorar
    }

    // Redirecionamento formatado para o WhatsApp da banca
    const contactPhone = '5511999999999';
    const text = encodeURIComponent(
      `*AGENDAMENTO DE CONSULTA PRIORITÁRIA*\n\n` +
      `*Nome:* ${name}\n` +
      `*E-mail:* ${email}\n` +
      `*Telefone:* ${phone}\n` +
      `*Área:* ${area}\n` +
      `*Data Pretendida:* ${preferredDate || 'A combinar'}\n` +
      `*Resumo do Caso:* ${message || 'Não detalhado'}\n\n` +
      `Solicito confirmação de disponibilidade da agenda do Dr. Alexandre Valença.`
    );

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=${contactPhone}&text=${text}`, '_blank');
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-[#2d0e22] via-[#1c0714] to-[#12030d] border border-gold/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] p-6 sm:p-8 text-alabaster"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full border border-gold/30 bg-wine-900/60 flex items-center justify-center text-gold hover:bg-gold hover:text-wine-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <>
              <div className="mb-6">
                <span className="text-[10px] uppercase font-cinzel text-gold font-bold tracking-widest px-2.5 py-1 rounded-sm bg-wine-900/80 border border-gold/30 inline-block mb-2">
                  Atendimento Estratégico
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-cinzel text-alabaster">
                  Agendar Consulta Prioritária
                </h2>
                <p className="text-xs sm:text-sm text-taupe font-cormorant italic mt-1">
                  Reunião sob termo de confidencialidade (presencial em SP/Brasília ou videoconferência segura).
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr(a). / Sr(a). Nome Sobrenome"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                      E-mail Institucional *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contato@empresa.com.br"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                      Frente Jurídica
                    </label>
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                    >
                      <option value="Holding & Sucessão Familiar">Holding & Sucessão Familiar</option>
                      <option value="Direito Societário & M&A">Direito Societário & M&A</option>
                      <option value="Tributário Estratégico & CARF">Tributário Estratégico & CARF</option>
                      <option value="Tribunais Superiores (STF/STJ)">Tribunais Superiores (STF/STJ)</option>
                      <option value="Imobiliário & Agronegócio">Imobiliário & Agronegócio</option>
                      <option value="Penal Econômico & Compliance">Penal Econômico & Compliance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                      Data Preferencial
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                    Breve Síntese da Demanda (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva pontos centrais ou o número do processo, caso haja..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-taupe pt-1">
                  <Lock className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Sigilo profissional resguardado pelo Art. 7º do Estatuto da OAB.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-gold via-gold/90 to-gold/80 text-wine-950 font-cinzel text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(173,146,115,0.35)] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmar & Conectar com a Banca</span>
                </button>
              </form>
            </>
          ) : (
            <div className="py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-wine-800 border-2 border-gold flex items-center justify-center text-gold mx-auto mb-4 shadow-[0_0_25px_rgba(173,146,115,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-alabaster mb-2">
                Solicitação Registrada
              </h3>
              <p className="text-sm text-taupe max-w-md mx-auto mb-6">
                Você está sendo redirecionado para o WhatsApp exclusivo da banca para confirmação de agenda.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-wine-900 border border-gold/30 text-xs font-cinzel uppercase text-gold hover:bg-gold hover:text-wine-950 transition-colors"
              >
                Concluir
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
