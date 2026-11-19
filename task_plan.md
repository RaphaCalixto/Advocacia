# Plano de Execução: Website Jurídico de Alto Padrão

## Visão Geral
Website institucional moderno, imersivo e de altíssimo luxo para advocacia e consultoria jurídica de elite. Desenvolvido com base na paleta nobre da referência enviada pelo cliente (Vinho `#491A36`, Ouro Queimado `#AD9273`, Taupe `#C1B7AF` e Alabastro `#E9E8E6`), cards com formatos inovadores (chanfrados, arcos clássicos e assimetrias), técnicas avançadas de scroll e orquestração de animações com GSAP e Framer Motion.

---

### Phase 1: Inicialização do Projeto e Configuração da Stack
- Inicializar projeto Vite + React + TypeScript
- Instalar e configurar Tailwind CSS, Lucide React, Framer Motion, GSAP e `@gsap/react`
- Configurar fontes de autoridade via Google Fonts (`Cinzel`, `Cormorant Garamond`, `Plus Jakarta Sans`)
- Configurar `.gitignore` e regras de segurança
**Status:** complete

### Phase 2: Design Tokens e Arquitetura de Componentes Visuais
- Estruturar tokens de cores e temas no Tailwind (`wine-900`, `wine-800`, `gold-accent`, `taupe-stone`, `bone-white`)
- Criar componentes de cards exclusivos com geometrias diferenciadas:
  - Card Chanfrado / Lapidação (Octogonal com linhas douradas)
  - Card Abóbada / Arco Clássico Romano
  - Card Assimétrico com corte dinâmico e efeito Glassmorphism refinado
  - Efeito 3D Tilt interativo com reflexo de luz dourada
**Status:** complete

### Phase 3: Desenvolvimento das Seções da Landing Page
- **Header & Navbar**: Flutuante com backdrop blur fosco, selo de autoridade e botão de agendamento prioritário
- **Hero Cinematográfico**: Título com serifa dramática (`Cinzel`), tipografia monumental, balança da justiça em vetor elegante, badges de credibilidade e chamada para ação
- **Áreas de Atuação**: Grid editorial com cards de formatos alternados, efeitos de hover magnético e modal interativo de detalhes de cada especialidade
- **Sobre o Jurista / Trajetória**: Apresentação de autoridade, números expressivos (casos resolvidos, anos de atuação, valores recuperados), timeline e assinatura digital
- **Diferenciais & Filosofia de Atuação**: Seção com scroll horizontal ou revelação por camadas (layered reveal)
- **Casos de Sucesso & Depoimentos**: Cards em carrossel fluído com avaliações de clientes e empresas
- **FAQ Interativo**: Dúvidas frequentes jurídicas com acordeão animado em spring
- **Triagem & Contato Rápido**: Simulador/formulário de consulta com redirecionamento inteligente e formatado para WhatsApp e e-mail
- **Footer Institucional**: Informações da OAB, links institucionais, conformidade com o código de ética da OAB e proteção de dados
**Status:** complete

### Phase 4: Orquestração de Animações com GSAP e Framer Motion
- Integrar `ScrollTrigger` do GSAP com cleanup correto via `useGSAP`
- Animações de entrada escalonadas (stagger) para textos e cards
- Efeito suave de parallax nos fundos e elementos decorativos
- Animações por hardware (`x`, `y`, `scale`, `opacity`, `autoAlpha`) garantindo 60fps
- Respeito a `prefers-reduced-motion`
**Status:** complete

### Phase 5: Polimento, Responsividade e Validação de Build
- Validação minuciosa em mobile, tablet e telas ultrawide
- Teste e compilação do build de produção (`npm run build`)
- Verificação de acessibilidade, contraste de cores e conformidade estética anti-"AI slop"
**Status:** complete
