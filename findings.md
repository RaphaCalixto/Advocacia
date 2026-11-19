# Descobertas Técnicas e Decisões de Arquitetura (Findings)

## Paleta de Cores Extraída da Referência do Cliente
- **Vinho Profundo / Imperial (Base)**: `#491A36` (com suporte a variações de profundidade como `#270C1C` para background noturno e `#5C2145` para gradientes de iluminação)
- **Ouro Queimado / Dourado Antigo (Acento)**: `#AD9273` (e tonalidade de brilho `#C5A888` / `#94795C`)
- **Taupe Acinzentado / Mármore Neutro (Suporte)**: `#C1B7AF`
- **Alabastro / Off-White Nobre (Superfícies Claras e Textos Destaque)**: `#E9E8E6`

## Tipografia Selecionada (Anti-Generic / Anti-AI Slop)
- **Display & Títulos de Alto Impacto**: `Cinzel` & `Cormorant Garamond` (clássicas, proporções lapidadas, autoridade jurídica inconfundível)
- **Corpo de Texto e Interfaces**: `Plus Jakarta Sans` (leiturabilidade impecável, elegância contemporânea e refinamento)

## Formatos e Geometria dos Cards
- Evitar os cards retangulares comuns com cantos arredondados genéricos.
- Implementar:
  1. Card Chanfrado / Lapidado (clip-path de cantos cortados com borda dourada precisa).
  2. Card em Arco Romano / Portal Clássico (topo arqueado perfeito remetendo à arquitetura dos grandes tribunais).
  3. Card Assimétrico com corte dinâmico de profundidade e glassmorphism vinho escuro translúcido.
  4. Interatividade com Tilt 3D baseado no ponteiro do mouse e spring physics no Framer Motion.

## Regras de Execução de Scripts no Windows
- Executar comandos com `npm.cmd` e `npx.cmd` devido à política Restrita de scripts PowerShell no Windows.
