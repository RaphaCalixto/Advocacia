import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, CheckCircle2, FileSignature, ArrowRight } from 'lucide-react';

interface AboutLawyerProps {
  onOpenAppointmentModal: () => void;
}

export const AboutLawyer: React.FC<AboutLawyerProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="sobre" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#15040f] overflow-hidden">
      
      {/* Luzes decorativas */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-wine-600/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Esquerda: Composição Visual Editorial do Advogado */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Moldura Chanfrada Externa com Ouro Nobre */}
            <div className="relative clip-chamfer-lg p-[2px] bg-gradient-to-b from-gold via-wine-600 to-gold/40 shadow-[0_25px_60px_-15px_rgba(73,26,54,0.7)]">
              
              <div className="clip-chamfer-lg bg-[#270c1e] relative overflow-hidden aspect-[4/5] flex items-center justify-center">
                
                {/* Imagem de Fundo com Textura e Retrato Conceitual do Advogado */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#15040f] via-transparent to-transparent z-10" />
                
                {/* Ilustração / Retrato Estilizado de Autoridade Jurídica */}
                <div className="w-full h-full bg-gradient-to-br from-[#3b122c] via-[#240a1b] to-[#12030d] flex flex-col items-center justify-center p-8 relative">
                  
                  {/* Padrão Geométrico de Linhas Sutis */}
                  <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

                  {/* Retrato Fotográfico Real de Prestígio */}
                  <div className="relative z-0 w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-gold/60 p-1.5 flex items-center justify-center bg-wine-950/90 shadow-[0_0_40px_rgba(173,146,115,0.4)] mb-6 group">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                      alt="Dr. Alexandre Valença - Sócio Titular"
                      className="w-full h-full rounded-full object-cover object-top filter contrast-105 brightness-95"
                    />
                    {/* Badge flutuante */}
                    <div className="absolute -bottom-2 px-3 py-1 bg-gold text-wine-950 text-[10px] font-cinzel font-bold uppercase tracking-widest rounded-full shadow-lg border border-wine-950/30">
                      Sócio Titular
                    </div>
                  </div>

                  <div className="text-center relative z-10">
                    <span className="font-cinzel text-xl sm:text-2xl font-bold text-alabaster tracking-wider block">
                      DR. ALEXANDRE VALENÇA
                    </span>
                    <span className="text-xs font-cormorant italic text-gold block mt-1">
                      OAB/SP 248.910 • OAB/DF 72.140
                    </span>
                    <span className="text-[11px] text-taupe mt-2 block font-sans">
                      Doutor em Direito Comercial (USP) • Mestre em Ciências Jurídicas (Univ. de Coimbra)
                    </span>
                  </div>

                </div>

                {/* Badge Flutuante de Anos de Experiência */}
                <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-xl bg-wine-950/90 border border-gold/30 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-cinzel text-gold font-bold tracking-wider block">
                      Tribunais Superiores
                    </span>
                    <span className="text-xs text-alabaster font-medium">
                      Atuação perante STF, STJ e TST
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>

            {/* Ornamento de Fundo Deslocado */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold/40 rounded-br-3xl pointer-events-none" />
          </motion.div>

          {/* Coluna da Direita: Manifesto, Filosofia e Credenciais */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-wine-900/80 border border-gold/30 text-gold text-xs font-cinzel font-semibold tracking-widest uppercase mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Manifesto & Tradição
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-alabaster tracking-tight mb-6 leading-tight">
              A Arte da Advocacia Artesanal aliada ao{' '}
              <span className="text-gold-gradient">Rigor Estratégico</span>
            </h2>

            <blockquote className="font-cormorant text-xl sm:text-2xl text-gold-light italic border-l-2 border-gold pl-5 py-2 mb-8 bg-wine-950/40 rounded-r-lg">
              "Não atuamos com advocacia de massa. Cada caso aceito por nossa banca é tratado como uma obra jurídica de exceção, exigindo estudo de alta densidade e presença implacável perante os julgadores."
            </blockquote>

            <p className="text-sm sm:text-base text-taupe leading-relaxed mb-6">
              Com quase duas décadas de atuação ininterrupta, a banca fundada pelo Dr. Alexandre Valença consolidou-se como referência na proteção de grandes patrimônios familiares e na solução de disputas corporativas de alto valor agregado.
            </p>

            <p className="text-sm sm:text-base text-taupe leading-relaxed mb-8">
              Acompanhamos pessoalmente cada passo: desde o diagnóstico prévio de blindagem contra passivos até as sustentações orais nas turmas recursais de Brasília, mantendo um canal direto e restrito com os tomadores de decisão.
            </p>

            {/* Grid de Diferenciais de Autoridade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-wine-950/60 border border-gold/15">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-cinzel font-bold text-alabaster uppercase tracking-wider">
                    Atuação Artesanal
                  </h4>
                  <p className="text-xs text-taupe mt-1">
                    Sem terceirização de teses. Os sócios titulares lideram cada recurso.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-wine-950/60 border border-gold/15">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-cinzel font-bold text-alabaster uppercase tracking-wider">
                    Sigilo & Compliance
                  </h4>
                  <p className="text-xs text-taupe mt-1">
                    Rigorosos protocolos de confidencialidade (NDA) para blindar sua reputação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-wine-950/60 border border-gold/15">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-cinzel font-bold text-alabaster uppercase tracking-wider">
                    Conexão em Brasília
                  </h4>
                  <p className="text-xs text-taupe mt-1">
                    Despachos presenciais e entrega de memoriais customizados aos Ministros.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-wine-950/60 border border-gold/15">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-cinzel font-bold text-alabaster uppercase tracking-wider">
                    Visão Multidisciplinar
                  </h4>
                  <p className="text-xs text-taupe mt-1">
                    Integração orgânica entre Direito Tributário, Societário e Sucessório.
                  </p>
                </div>
              </div>
            </div>

            {/* Assinatura Estilizada e Ação */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-gold/20">
              <div className="flex items-center gap-3">
                <FileSignature className="w-8 h-8 text-gold/80" />
                <div>
                  <div className="font-cormorant italic text-2xl text-gold-light">
                    Alexandre Valença
                  </div>
                  <div className="text-[10px] uppercase font-cinzel tracking-widest text-taupe">
                    Fundador & Head de Estratégia
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold via-gold/90 to-gold/80 text-wine-950 font-cinzel text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(173,146,115,0.3)] transition-all"
              >
                <span>Conversar com a Banca</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};
