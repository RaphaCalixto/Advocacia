import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, Sparkles, Send, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveAssessment: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [area, setArea] = useState<string>('Holding & Sucessão Familiar');
  const [patrimony, setPatrimony] = useState<string>('R$ 5M a R$ 20M');
  const [urgency, setUrgency] = useState<string>('Preventivo / Planejamento Estratégico');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');

  const areasOptions = [
    { id: 'holding', label: 'Holding Familiar & Planejamento Sucessório', desc: 'Proteção contra inventários caros e continuidade do patrimônio' },
    { id: 'societario', label: 'Direito Societário, Disputas & M&A', desc: 'Acordos de sócios, fusões ou saída litigiosa de cotistas' },
    { id: 'tributario', label: 'Defesa Tributária & Anulação de Débitos no CARF', desc: 'Execuções fiscais, autuações indevidas e recuperação de tributos' },
    { id: 'urgencia', label: 'Contencioso Estratégico & Tribunais Superiores (STF/STJ)', desc: 'Recursos especiais, liminares e causas de alta complexidade' },
  ];

  const patrimonyOptions = [
    { label: 'R$ 1M a R$ 5M', desc: 'Patrimônio ou valor da causa em fase de consolidação' },
    { label: 'R$ 5M a R$ 20M', desc: 'Estruturação patrimonial avançada e blindagem de ativos' },
    { label: 'R$ 20M a R$ 50M', desc: 'Operações societárias e Family Office corporativo' },
    { label: 'Acima de R$ 50M', desc: 'Complexidade máxima, governança e múltiplos herdeiros/investidores' },
  ];

  const urgencyOptions = [
    { label: 'Preventivo / Planejamento Estratégico', tag: 'Prioridade Alta', color: 'text-gold' },
    { label: 'Notificação Extrajudicial / Fiscalização Recente', tag: 'Atenção Imediata', color: 'text-amber-400' },
    { label: 'Prazo Judicial em Curso / Risco de Bloqueio', tag: 'Urgência Crítica', color: 'text-rose-400' },
  ];

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      setStep(4);
      // Disparo comemorativo de confetes dourados discretos
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#AD9273', '#491A36', '#E9E8E6']
        });
      } catch (e) {
        // Fallback silencioso
      }
    }
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '5511999999999'; // Número da banca configurável
    const message = encodeURIComponent(
      `*DIAGNÓSTICO JURÍDICO PRELIMINAR - VALENÇA & ASSOCIADOS*\n\n` +
      `*Nome:* ${clientName || 'Cliente Confidencial'}\n` +
      `*Telefone:* ${clientPhone || 'Não informado'}\n` +
      `*Área de Interesse:* ${area}\n` +
      `*Faixa Patrimonial / Valor da Causa:* ${patrimony}\n` +
      `*Nível de Urgência:* ${urgency}\n\n` +
      `Olá, realizei o simulador no site e gostaria de agendar uma reunião confidencial para avaliar o meu caso.`
    );
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank');
  };

  return (
    <section id="diagnostico" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#15040f] via-[#1f0717] to-[#15040f] overflow-hidden">
      
      {/* Luz ambiente em tom vinho nobre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-wine/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-wine-900/80 border border-gold/30 text-gold text-xs font-cinzel font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Ferramenta Interativa
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-alabaster tracking-tight mb-4">
            Simulador de <span className="text-gold-gradient">Diagnóstico Jurídico</span>
          </h2>

          <p className="font-cormorant text-lg sm:text-xl text-taupe italic max-w-2xl mx-auto leading-relaxed">
            Identifique em 3 etapas o panorama de viabilidade e as medidas protetivas prioritárias para o seu caso antes da consulta.
          </p>
        </div>

        {/* Card Chanfrado do Simulador */}
        <div className="relative clip-chamfer p-[1.5px] bg-gradient-to-b from-gold/50 via-wine-600 to-gold/30 shadow-[0_20px_60px_-10px_rgba(73,26,54,0.6)]">
          <div className="clip-chamfer bg-[#1f0718] p-6 sm:p-10 md:p-12 relative overflow-hidden">
            
            {/* Barra de Progresso Superior */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold text-wine-950 font-cinzel font-bold text-xs flex items-center justify-center">
                  {step <= 3 ? step : '✓'}
                </span>
                <span className="text-xs font-cinzel uppercase tracking-wider text-alabaster font-semibold">
                  {step === 1 && 'Etapa 1: Natureza da Demanda'}
                  {step === 2 && 'Etapa 2: Porte Patrimonial / Valor da Causa'}
                  {step === 3 && 'Etapa 3: Nível de Urgência & Prazos'}
                  {step === 4 && 'Diagnóstico Gerado com Sucesso'}
                </span>
              </div>
              <span className="text-xs text-gold font-mono">
                {step <= 3 ? `${step} de 3` : 'Completo'}
              </span>
            </div>

            {/* Conteúdo Dinâmico por Etapa */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-cinzel font-bold text-alabaster mb-2">
                    Qual a principal frente jurídica necessária?
                  </h3>
                  <p className="text-xs text-taupe mb-6">
                    Selecione o segmento que melhor se aproxima do seu objetivo atual.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                    {areasOptions.map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => setArea(opt.label)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          area === opt.label
                            ? 'bg-wine-800/80 border-gold shadow-[0_0_15px_rgba(173,146,115,0.25)]'
                            : 'bg-wine-950/60 border-gold/15 hover:border-gold/40 hover:bg-wine-900/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-xs sm:text-sm font-cinzel font-bold text-alabaster">
                            {opt.label}
                          </h4>
                          {area === opt.label && <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />}
                        </div>
                        <p className="text-xs text-taupe leading-relaxed">
                          {opt.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-wine-950 font-cinzel text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_15px_rgba(173,146,115,0.3)]"
                    >
                      <span>Avançar para Porte</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-cinzel font-bold text-alabaster mb-2">
                    Qual a faixa estimada de patrimônio envolvida?
                  </h3>
                  <p className="text-xs text-taupe mb-6">
                    A dimensão dos ativos determina os regimes societários e fiscais mais eficientes.
                  </p>

                  <div className="space-y-3 mb-8">
                    {patrimonyOptions.map((opt) => (
                      <div
                        key={opt.label}
                        onClick={() => setPatrimony(opt.label)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          patrimony === opt.label
                            ? 'bg-wine-800/80 border-gold shadow-[0_0_15px_rgba(173,146,115,0.25)]'
                            : 'bg-wine-950/60 border-gold/15 hover:border-gold/40 hover:bg-wine-900/40'
                        }`}
                      >
                        <div>
                          <div className="text-sm font-cinzel font-bold text-gold tracking-wide">
                            {opt.label}
                          </div>
                          <div className="text-xs text-taupe mt-0.5">
                            {opt.desc}
                          </div>
                        </div>
                        {patrimony === opt.label && <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-gold/20 text-xs font-cinzel text-taupe hover:text-alabaster"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Voltar</span>
                    </button>

                    <button
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-wine-950 font-cinzel text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_15px_rgba(173,146,115,0.3)]"
                    >
                      <span>Avançar para Urgência</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-cinzel font-bold text-alabaster mb-2">
                    Qual o momento processual ou urgência?
                  </h3>
                  <p className="text-xs text-taupe mb-6">
                    Avaliamos se é necessária medida cautelar de urgência ou plano estruturado.
                  </p>

                  <div className="space-y-3 mb-8">
                    {urgencyOptions.map((opt) => (
                      <div
                        key={opt.label}
                        onClick={() => setUrgency(opt.label)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          urgency === opt.label
                            ? 'bg-wine-800/80 border-gold shadow-[0_0_15px_rgba(173,146,115,0.25)]'
                            : 'bg-wine-950/60 border-gold/15 hover:border-gold/40 hover:bg-wine-900/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <AlertTriangle className={`w-4 h-4 ${opt.color}`} />
                          <span className="text-xs sm:text-sm font-medium text-alabaster">
                            {opt.label}
                          </span>
                        </div>
                        <span className={`text-[10px] uppercase font-cinzel tracking-wider px-2 py-0.5 rounded-sm bg-wine-950 border border-gold/20 font-bold ${opt.color}`}>
                          {opt.tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-gold/20 text-xs font-cinzel text-taupe hover:text-alabaster"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Voltar</span>
                    </button>

                    <button
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-gold to-gold/80 text-wine-950 font-cinzel text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(173,146,115,0.4)]"
                    >
                      <span>Gerar Síntese Executiva</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="p-5 rounded-xl bg-gradient-to-br from-wine-900/90 to-wine-950 border border-gold/30 mb-6">
                    <div className="flex items-center gap-2 text-xs font-cinzel uppercase tracking-widest text-gold font-bold mb-3">
                      <ShieldCheck className="w-4 h-4 text-gold" />
                      Resumo da Demanda Classificada
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
                      <div className="p-3 bg-wine-950/70 rounded-lg border border-white/5">
                        <span className="text-taupe block text-[10px] uppercase font-cinzel">Frente</span>
                        <span className="text-alabaster font-semibold">{area}</span>
                      </div>
                      <div className="p-3 bg-wine-950/70 rounded-lg border border-white/5">
                        <span className="text-taupe block text-[10px] uppercase font-cinzel">Faixa</span>
                        <span className="text-gold font-semibold">{patrimony}</span>
                      </div>
                      <div className="p-3 bg-wine-950/70 rounded-lg border border-white/5">
                        <span className="text-taupe block text-[10px] uppercase font-cinzel">Urgência</span>
                        <span className="text-emerald-400 font-semibold">{urgency}</span>
                      </div>
                    </div>

                    <div className="text-xs text-taupe leading-relaxed border-t border-gold/15 pt-3">
                      ✓ A banca possui teses consolidadas e estrutura de Family Office apta a atender demandas deste porte com discrição absoluta.
                    </div>
                  </div>

                  {/* Formulário Rápido para Envio Direto ao WhatsApp da Banca */}
                  <form onSubmit={handleSendToWhatsApp} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1.5">
                          Seu Nome ou Sigla
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Ex: Roberto Valença"
                          className="w-full px-4 py-3 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1.5">
                          WhatsApp de Contato
                        </label>
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-3 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-taupe pt-1">
                      <Lock className="w-3.5 h-3.5 text-gold" />
                      <span>Seus dados são protegidos por sigilo profissional e pela LGPD.</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gold/20">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-cinzel text-taupe hover:text-alabaster underline"
                      >
                        Reiniciar Simulação
                      </button>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-to-r from-gold via-gold/90 to-gold/75 text-wine-950 font-cinzel text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_0_25px_rgba(173,146,115,0.4)] transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Receber Análise no WhatsApp</span>
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>

    </section>
  );
};
