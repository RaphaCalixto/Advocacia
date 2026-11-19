import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ShieldCheck, ChevronDown, ArrowRight, Landmark, Scale, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenAppointmentModal: () => void;
  onExploreAreas: () => void;
  onStartAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointmentModal,
  onExploreAreas,
  onStartAssessment,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const balanceGraphicRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Sequência cinematográfica de entrada no carregamento
      tl.from(badgeRef.current, {
        opacity: 0,
        y: -25,
        duration: 0.9,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 1.1,
          },
          '-=0.5'
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1.0,
          },
          '-=0.7'
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.9,
          },
          '-=0.7'
        )
        .from(
          balanceGraphicRef.current,
          {
            opacity: 0,
            scale: 0.92,
            duration: 1.4,
          },
          '-=1.2'
        );

      // Efeito Parallax suave no scroll com ScrollTrigger
      gsap.to(bgImageRef.current, {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(balanceGraphicRef.current, {
        y: 80,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(titleRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#15040f]"
    >
      {/* Imagem de Fundo de Advocacia de Alto Padrão (Desfocada, Escurecida com degradê Vinho) */}
      <div ref={bgImageRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=85"
          alt="Tribunal de Justiça e Advocacia Estratégica"
          className="w-full h-full object-cover object-center filter blur-[2.5px] scale-110 opacity-30 brightness-75 contrast-110"
        />
        {/* Degradês de Vinho Profundo e Vinheta de Proteção de Contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#15040f]/85 via-[#2b0e20]/80 to-[#15040f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#15040f]/60 to-[#15040f]/95" />
      </div>

      {/* Luzes de Fundo (Atmospheric Mesh Wine & Gold) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#491A36]/35 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#AD9273]/15 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#341027]/40 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Grid Texturizado e Linhas Sutis */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none z-0" />

      {/* Elemento Gráfico Central de Fundo: Brasão & Balança em Ouro Queimado */}
      <div
        ref={balanceGraphicRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 select-none flex items-center justify-center"
      >
        <svg
          className="w-[500px] h-[500px] sm:w-[720px] sm:h-[720px] text-gold/30 animate-[spin_160s_linear_infinite]"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 4" />
        </svg>

        {/* Silhueta da Balança e Justiça */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Scale className="w-64 h-64 sm:w-80 sm:h-80 text-gold/15 stroke-[0.8]" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Selo Superior / Badge Institucional */}
        <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-wine-900/90 via-wine-800/80 to-wine-900/90 border border-gold/35 shadow-[0_0_20px_rgba(173,146,115,0.25)] mb-8">
          <Award className="w-4 h-4 text-gold" />
          <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-[0.2em] uppercase text-gold">
            Banca de Advocacia Estratégica & Soluções Complexas
          </span>
        </div>

        {/* Título Principal com Tipografia Monumental Cinzel */}
        <h1
          ref={titleRef}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-alabaster leading-[1.12] mb-6"
        >
          Advocacia de Precisão.{' '}
          <span className="block mt-1 sm:mt-2 text-gold-gradient font-black">
            Soberania & Estratégia.
          </span>
        </h1>

        {/* Subtítulo Editorial Cormorant Garamond */}
        <p
          ref={subtitleRef}
          className="font-cormorant text-lg sm:text-2xl md:text-3xl text-taupe max-w-3xl mx-auto font-normal italic leading-relaxed mb-10"
        >
          Estruturação societária, holding familiar, contencioso de alto risco e sustentações perante os Tribunais Superiores com confidencialidade absoluta.
        </p>

        {/* Grupo de Ações / CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16"
        >
          <button
            onClick={onOpenAppointmentModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold via-gold/95 to-gold/80 text-wine-950 font-cinzel font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(173,146,115,0.4)] hover:shadow-[0_15px_45px_rgba(173,146,115,0.6)] hover:brightness-110 active:scale-95 transition-all duration-300 group"
          >
            <span>Agendar Consulta Preliminar</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onStartAssessment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-wine-900/60 hover:bg-wine-800/80 text-alabaster border border-gold/30 hover:border-gold font-cinzel text-xs sm:text-sm font-semibold uppercase tracking-wider backdrop-blur-md transition-all duration-300"
          >
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Simulador de Diagnóstico</span>
          </button>
        </div>

        {/* Badges de Autoridade Flutuantes com Formatos Geométricos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6 border-t border-gold/15">
          
          <div className="p-4 rounded-xl bg-wine-950/60 border border-gold/20 backdrop-blur-md text-left flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-wine-800/60 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold font-cinzel text-alabaster uppercase tracking-wider">
                Tribunais Superiores
              </div>
              <div className="text-[11px] text-taupe">Atuação direta no STF, STJ e CARF</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-wine-950/60 border border-gold/20 backdrop-blur-md text-left flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-wine-800/60 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold font-cinzel text-alabaster uppercase tracking-wider">
                +R$ 480 Milhões
              </div>
              <div className="text-[11px] text-taupe">Em patrimônio e litígios blindados</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-wine-950/60 border border-gold/20 backdrop-blur-md text-left flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-wine-800/60 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold font-cinzel text-alabaster uppercase tracking-wider">
                Sigilo Incondicional
              </div>
              <div className="text-[11px] text-taupe">Privacidade sob compliance e NDA</div>
            </div>
          </div>

        </div>

      </div>

      {/* Indicador de Scroll Suave */}
      <div
        onClick={onExploreAreas}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-gold/70 hover:text-gold transition-colors"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-cinzel">Rolar para Explorar</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>

    </section>
  );
};
