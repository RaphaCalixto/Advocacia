import React from 'react';
import { Scale, ShieldCheck, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#10030c] border-t border-gold/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-alabaster overflow-hidden">
      
      {/* Luz ambiente de rodapé */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-wine-900/20 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Bloco Superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gold/15">
          
          {/* Identidade da Banca */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#491A36] to-[#250a1b] border border-gold/50 flex items-center justify-center text-gold shadow-[0_0_15px_rgba(173,146,115,0.25)]">
                <Scale className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-wider text-alabaster block">
                  VALENÇA <span className="text-gold font-light">&</span> ADVOGADOS
                </span>
                <span className="text-[10px] uppercase font-cinzel tracking-[0.2em] text-gold/80 block">
                  Sociedade de Advogados • OAB/SP 45.120
                </span>
              </div>
            </div>

            <p className="text-xs text-taupe leading-relaxed max-w-md">
              Banca de advocacia boutique especializada em estruturação societária, holding familiar patrimonial, contencioso de alto risco e sustentações orais perante os Tribunais Superiores.
            </p>

            <div className="flex items-center gap-2 text-xs text-gold font-cinzel">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Conformidade com o Provimento 205/2021 do CFOAB</span>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-cinzel uppercase font-bold text-gold tracking-widest mb-3">
              Frentes de Atuação
            </div>
            <ul className="space-y-2 text-xs text-taupe font-sans">
              <li><a href="#areas" className="hover:text-gold transition-colors">Societário & Fusões e Aquisições (M&A)</a></li>
              <li><a href="#areas" className="hover:text-gold transition-colors">Holding Familiar & Sucessão</a></li>
              <li><a href="#areas" className="hover:text-gold transition-colors">Tributário Estratégico & CARF</a></li>
              <li><a href="#areas" className="hover:text-gold transition-colors">Tribunais Superiores (STF/STJ)</a></li>
              <li><a href="#areas" className="hover:text-gold transition-colors">Agronegócio & Imobiliário</a></li>
            </ul>
          </div>

          {/* Endereços e Gabinetes */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-cinzel uppercase font-bold text-gold tracking-widest mb-3">
              Gabinetes Institucionais
            </div>
            <div className="space-y-3 text-xs text-taupe">
              <div>
                <span className="text-alabaster font-semibold block">Sede São Paulo</span>
                <span>Av. Brigadeiro Faria Lima, 3477, 14º Andar — Itaim Bibi</span>
              </div>
              <div>
                <span className="text-alabaster font-semibold block">Gabinete Brasília</span>
                <span>SAF Sul, Qd. 02, Bl. D, Ed. Imperador — Próximo aos Tribunais</span>
              </div>
              <div className="pt-2 text-gold font-mono text-[11px]">
                Telefone: +55 (11) 3280-9400 • WhatsApp: +55 (11) 99999-9999
              </div>
            </div>
          </div>

        </div>

        {/* Bloco Inferior: Aviso Legal & Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-taupe/80">
          <p className="text-center sm:text-left leading-relaxed">
            © {new Date().getFullYear()} Valença & Advogados Associados. Todos os direitos reservados.
            <br />
            Este website tem finalidade estritamente informativa e institucional, em consonância com o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gold/20 text-gold hover:bg-gold/10 hover:text-alabaster transition-all shrink-0 text-xs font-cinzel"
          >
            <span>Voltar ao Topo</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>

    </footer>
  );
};
