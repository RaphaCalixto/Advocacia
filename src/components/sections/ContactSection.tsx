import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Holding Familiar & Sucessão');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#AD9273', '#491A36', '#E9E8E6'],
      });
    } catch (err) {}

    const contactPhone = '5511999999999';
    const text = encodeURIComponent(
      `*NOVA SOLICITAÇÃO DE CONSULTORIA JURÍDICA*\n\n` +
      `*Nome:* ${name}\n` +
      `*E-mail:* ${email}\n` +
      `*Telefone:* ${phone}\n` +
      `*Área de Interesse:* ${area}\n` +
      `*Resumo:* ${message || 'Não informado'}\n\n` +
      `Por favor, informe a disponibilidade para atendimento presencial ou virtual.`
    );

    setTimeout(() => {
      window.open(`https://api.whatsapp.com/send?phone=${contactPhone}&text=${text}`, '_blank');
    }, 1000);
  };

  return (
    <section id="contato" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#180513] via-[#1f0717] to-[#12030d] overflow-hidden">
      
      {/* Luz ambiente */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-wine-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-wine-900/80 border border-gold/30 text-gold text-xs font-cinzel font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Canal Direto & Restrito
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-alabaster tracking-tight mb-4">
            Inicie seu <span className="text-gold-gradient">Atendimento Reservado</span>
          </h2>

          <p className="font-cormorant text-lg sm:text-xl text-taupe italic leading-relaxed">
            Nossa equipe de sócios titulares avaliará a sua demanda em regime de prioridade institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Coluna da Esquerda: Unidades Físicas & Telefonia */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Unidade São Paulo */}
            <div className="p-7 rounded-2xl bg-wine-950/70 border border-gold/25 backdrop-blur-md">
              <div className="flex items-center gap-2 text-gold text-xs font-cinzel font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-gold" />
                Sede São Paulo • Capital
              </div>
              <p className="text-sm text-alabaster font-semibold">
                Av. Brigadeiro Faria Lima, 3477 — 14º Andar
              </p>
              <p className="text-xs text-taupe mt-1">
                Itaim Bibi • CEP 04538-133 • São Paulo/SP
              </p>
            </div>

            {/* Unidade Brasília */}
            <div className="p-7 rounded-2xl bg-wine-950/70 border border-gold/25 backdrop-blur-md">
              <div className="flex items-center gap-2 text-gold text-xs font-cinzel font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-gold" />
                Banca Brasília • Tribunais Superiores
              </div>
              <p className="text-sm text-alabaster font-semibold">
                SAF Sul, Quadra 02, Bloco D — Ed. Imperador
              </p>
              <p className="text-xs text-taupe mt-1">
                Zona Cívico-Administrativa • Brasília/DF
              </p>
            </div>

            {/* Contatos Telefônicos e Plantão */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-wine-900/80 to-wine-950/90 border border-gold/30 space-y-4">
              <div className="flex items-center gap-3 text-xs text-alabaster">
                <div className="w-8 h-8 rounded-lg bg-wine-800 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-cinzel text-gold font-bold block">Central Institucional</span>
                  <span className="font-semibold">+55 (11) 3280-9400</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-alabaster">
                <div className="w-8 h-8 rounded-lg bg-wine-800 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-cinzel text-gold font-bold block">Plantão Exclusivo WhatsApp</span>
                  <span className="font-semibold">+55 (11) 99999-9999</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-alabaster">
                <div className="w-8 h-8 rounded-lg bg-wine-800 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-cinzel text-gold font-bold block">Gabinete de Triagem</span>
                  <span className="font-semibold">gabinete@valencalaw.com.br</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-alabaster pt-2 border-t border-gold/15">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-taupe text-[11px]">
                  Atendimento de Segunda a Sexta, das 09h às 19h (Plantão 24h para liminares).
                </span>
              </div>
            </div>

          </div>

          {/* Coluna da Direita: Formulário de Contato com Corte Chanfrado */}
          <div className="lg:col-span-7">
            <div className="clip-chamfer p-[1.5px] bg-gradient-to-b from-gold/50 via-wine-600 to-gold/30 shadow-[0_20px_50px_rgba(73,26,54,0.5)]">
              <div className="clip-chamfer bg-[#1b0615] p-8 sm:p-10 relative overflow-hidden">
                
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-alabaster mb-2">
                  Formulário de Entrada Estratégica
                </h3>
                <p className="text-xs text-taupe mb-6">
                  Preencha os campos para direcionarmos a demanda diretamente ao sócio especialista da área.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome Sobrenome"
                        className="w-full px-4 py-3 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                        E-mail de Contato *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contato@dominio.com.br"
                        className="w-full px-4 py-3 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                        Especialidade Requerida
                      </label>
                      <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none"
                      >
                        <option value="Holding Familiar & Sucessão">Holding Familiar & Sucessão</option>
                        <option value="Societário & Fusões e Aquisições">Societário & Fusões e Aquisições</option>
                        <option value="Tributário Estratégico & CARF">Tributário Estratégico & CARF</option>
                        <option value="Contencioso STF / STJ">Contencioso STF / STJ</option>
                        <option value="Agronegócio & Imobiliário">Agronegócio & Imobiliário</option>
                        <option value="Penal Econômico & Governança">Penal Econômico & Governança</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-cinzel tracking-wider text-gold font-bold mb-1">
                      Contexto e Síntese da Situação Jurídica
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Descreva suscintamente os pontos centrais, número do processo ou prazo em curso..."
                      className="w-full px-4 py-3 rounded-lg bg-wine-950/80 border border-gold/30 text-alabaster text-xs focus:border-gold focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-taupe pt-1">
                    <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                    <span>Sigilo inviolável resguardado por lei. Seus dados nunca são compartilhados.</span>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-gold via-gold/95 to-gold/80 text-wine-950 font-cinzel text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_0_25px_rgba(173,146,115,0.4)] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSent ? 'Redirecionando para Atendimento...' : 'Enviar Demanda para Análise Preliminar'}</span>
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
