import type { PracticeArea, SuccessCase, StatItem, Testimonial, FaqItem } from '../types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'societario-ma',
    title: 'Direito Societário, Fusões & Aquisições (M&A)',
    shortTitle: 'Societário & M&A',
    tagline: 'Segurança contratual e mitigação de riscos em negociações multimilionárias',
    description: 'Assessoria estratégica em estruturação societária, mediação de disputas entre acionistas, due diligence e transações de M&A com máxima confidencialidade.',
    iconName: 'Building2',
    badge: 'Operações Estruturadas',
    formatStyle: 'chamfer', // Card Lapidado Octogonal
    metrics: '+R$ 180M transacionados em 2025/2026',
    deliverables: [
      'Acordos de Acionistas e Cotistas de Alta Blindagem',
      'Estruturação de M&A e Due Diligence Completa',
      'Resolução Estratégica de Disputas Societárias',
      'Governança Corporativa e Programas de Integridade'
    ],
    strategicApproach: 'Unimos rigor técnico à visão de negócios, antecipando vulnerabilidades antes que se convertam em passivos ou litígios paralisantes.',
    featuredCase: {
      context: 'Grupo industrial em disputa fratricida pelo controle acionário de 51% do capital votante.',
      action: 'Negociação extrajudicial com reestruturação de classes de ações e cisão parcial com aproveitamento de ativos.',
      outcome: 'Preservação de 100% da continuidade operacional e liquidação sem judicialização.'
    }
  },
  {
    id: 'planejamento-patrimonial',
    title: 'Planejamento Patrimonial & Sucessório (Family Office)',
    shortTitle: 'Holding & Sucessão Familiar',
    tagline: 'Preservação do patrimônio e continuidade geracional sem litígios',
    description: 'Estruturação de Holdings Familiares, blindagem lícita contra volatilidade e litígios, regimes tributários eficientes (ITCMD/IR) e governança para dinastias empresariais.',
    iconName: 'ShieldCheck',
    badge: 'Proteção Geracional',
    formatStyle: 'arch', // Card em Arco Romano Clássico
    metrics: '+85 Holdings Familiares constituídas',
    deliverables: [
      'Constituição e Gestão de Holdings Patrimoniais e Operacionais',
      'Planejamento Sucessório com Doação de Quotas com Reserva de Usufruto',
      'Elaboração de Protocolos de Família e Regras de Entrada de Herdeiros',
      'Otimização Fiscal Lícita de Ganho de Capital e ITCMD'
    ],
    strategicApproach: 'Protegemos o legado construído por décadas com estruturas societárias e fiduciárias imunes a inventários morosos e dilapidações fiscais.',
    featuredCase: {
      context: 'Família do agronegócio com patrimônio imobiliário de R$ 90M e 4 herdeiros em estados distintos.',
      action: 'Instituição de Holding Mista com cláusulas de incomunicabilidade, impenhorabilidade e reversão.',
      outcome: 'Economia fiscal estimada em 72% de ITCMD e inventário evitado em sua totalidade.'
    }
  },
  {
    id: 'tributario-estrategico',
    title: 'Direito Tributário Estratégico & Defesa Fiscal',
    shortTitle: 'Tributário & CARF',
    tagline: 'Anulação de autuações indevidas e recuperação expressiva de ativos fiscais',
    description: 'Atuação combativa na esfera administrativa (CARF/SEFAZ) e judicial federal. Teses tributárias consolidadas para reaver pagamentos a maior e suspender cobranças ilegais.',
    iconName: 'Scale',
    badge: 'Eficiência Fiscal',
    formatStyle: 'asymmetric', // Card com Corte Diagonal
    metrics: '94.2% de teses tributárias com êxito',
    deliverables: [
      'Defesas Técnicas perante o CARF e Delegacias da Receita',
      'Ações Anulatórias de Débitos Fiscais com Pedido Liminar',
      'Recuperação de Créditos de PIS/COFINS, ICMS e IRPJ/CSLL',
      'Planejamento Tributário Pré-Operacional e Regimes Especiais'
    ],
    strategicApproach: 'Analisamos a contabilidade jurídica em profundidade para desarticular exigências arbitrárias do Fisco com jurisprudência vinculante dos Tribunais.',
    featuredCase: {
      context: 'Empresa do setor logístico autuada em R$ 14,8M por suposta irregularidade em creditamento de ICMS.',
      action: 'Apresentação de perícia técnica contábil e sustentação oral demonstrando conformidade com a LC 87/96.',
      outcome: 'Cancelamento integral do auto de infração sem necessidade de depósito judicial.'
    }
  },
  {
    id: 'contencioso-tribunais',
    title: 'Contencioso de Alta Complexidade & Tribunais Superiores',
    shortTitle: 'Tribunais Superiores (STF/STJ)',
    tagline: 'Advocacia artesanal e sustentações orais perante cortes de Brasília',
    description: 'Patrocínio exclusivo de causas estratégicas nos Tribunais de Justiça, TRFs, Superior Tribunal de Justiça (STJ) e Supremo Tribunal Federal (STF).',
    iconName: 'Landmark',
    badge: 'Atuação em Brasília',
    formatStyle: 'tilt', // Card Interativo 3D com Física Espelhada
    metrics: '+450 Sustentações Orais realizadas',
    deliverables: [
      'Recursos Especiais (REsp) e Extraordinários (RE) com prequestionamento cirúrgico',
      'Medidas Cautelares de Urgência e Suspensão de Efeitos de Decisões',
      'Despachos Presenciais com Ministros e Desembargadores',
      'Pareceres Jurídicos e Teses Inovadoras para '
    ],
    strategicApproach: 'Tratamos cada recurso como uma peça única de ourivesaria jurídica, com memoriais customizados e presença física assertiva nas bancadas dos julgadores.',
    featuredCase: {
      context: 'Decisão desfavorável em segunda instância que implicava em bloqueio de contas de R$ 32M.',
      action: 'Distribuição urgente de tutela provisória no STJ com comprovação de periculum in mora reverso.',
      outcome: 'Concessão de efeito suspensivo monocrático em 48 horas, preservando o fluxo de caixa.'
    }
  },
  {
    id: 'imobiliario-agro',
    title: 'Operações Imobiliárias de Grande Porte & Agronegócio',
    shortTitle: 'Imobiliário & Agro',
    tagline: 'Segurança jurídica para loteamentos, galpões logísticos e terras agrícolas',
    description: 'Assessoria completa em contratos de compra e venda de glebas, regularização fundiária de alta densidade, contratos agrários (arrendamento e parceria) e funding.',
    iconName: 'Compass',
    badge: 'Patrimônio Territorial',
    formatStyle: 'chamfer',
    metrics: '+120.000 hectares regularizados',
    deliverables: [
      'Auditoria Imobiliária de Risco Zero (Full Real Estate Due Diligence)',
      'Estruturação de CRI, CRA e Fundos Imobiliários Exclusivos',
      'Desmembramentos, Loteamentos e Regularizações Fundiárias Rurais',
      'Contratos Complexos de Built-to-Suit e Shopping Centers'
    ],
    strategicApproach: 'Mapeamos cada elo da cadeia dominial para expurgar riscos de evicção, ônus ocultos e litígios ambientais pré-existentes.',
    featuredCase: {
      context: 'Aquisição de complexo logístico industrial de R$ 64M com entraves cartorários centenários.',
      action: 'Saneamento registral em via extrajudicial e formatação de garantia fiduciária escalonada.',
      outcome: 'Escrituração finalizada em prazo recorde de 45 dias sem passivos remanescentes.'
    }
  },
  {
    id: 'compliance-penal',
    title: 'Defesa Penal Econômica & Governança de Riscos',
    shortTitle: 'Penal Econômico & Riscos',
    tagline: 'Proteção preventiva da reputação de executivos e empresas',
    description: 'Defesa especializada em crimes contra a ordem tributária, sistema financeiro nacional e lavagem de capitais, aliada a programas de compliance prévio.',
    iconName: 'FileCheck2',
    badge: 'Sigilo & Reputação',
    formatStyle: 'arch',
    metrics: '100% de sigilo garantido',
    deliverables: [
      'Investigações Internas Corporativas e Respostas a Incidentes',
      'Acompanhamento de Inquéritos Policiais e CPIs',
      'Defesa Técnica em Ações Penais Econômicas',
      'Implementação de Políticas de Integridade e Anticorrupção'
    ],
    strategicApproach: 'Atuação discreta, preventiva e implacável para salvaguardar a liberdade dos sócios e a integridade da imagem institucional da corporação.',
    featuredCase: {
      context: 'Investigação preliminar de suposta evasão fiscal instaurada contra diretoria executiva.',
      action: 'Apresentação de perícia preventiva independente e arquivamento em fase de inquérito.',
      outcome: 'Extinção da punibilidade sem abertura de processo penal ou desgaste midiático.'
    }
  }
];

export const STATS: StatItem[] = [
  {
    id: 'patrimonio',
    number: 480,
    prefix: '+R$ ',
    suffix: 'M',
    label: 'Patrimônio Protegido',
    detail: 'Em ativos empresariais e heranças geracionais estruturadas'
  },
  {
    id: 'anos',
    number: 18,
    prefix: '+',
    suffix: ' Anos',
    label: 'Tradição e Vanguarda',
    detail: 'Presença contínua perante os Tribunais de Justiça e Superiores'
  },
  {
    id: 'exito',
    number: 98,
    suffix: '.4%',
    label: 'Índice de Resolução Positiva',
    detail: 'Em teses recursais e negociações extrajudiciais complexas'
  },
  {
    id: 'corporacoes',
    number: 1250,
    prefix: '+',
    suffix: '',
    label: 'Famílias & Empresas',
    detail: 'Assessoradas com confidencialidade absoluta'
  }
];

export const SUCCESS_CASES: SuccessCase[] = [
  {
    id: 'case-1',
    category: 'Direito Societário',
    badge: 'Disputa de Controle',
    clientProfile: 'Rede Varejista com 42 Lojas',
    challenge: 'Bloqueio administrativo provocado por sócio dissidente com risco iminente de colapso de crédito bancário.',
    strategy: 'Construção de arbitragem expedita com cláusula de shot-gun (compra e venda compulsória) e aporte de investidor âncora.',
    financialImpact: 'Preservação de R$ 120M em valuation e manutenção de 1.800 postos de trabalho.',
    court: 'Câmara de Arbitragem Empresarial (CAM-CCBC)',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'case-2',
    category: 'Planejamento Sucessório',
    badge: 'Proteção Patrimonial',
    clientProfile: 'Família Patriarcal no Agronegócio',
    challenge: 'Iminência de inventário litigioso com múltiplos herdeiros e alíquotas progressivas de ITCMD ameaçando 40% dos ativos.',
    strategy: 'Criação de holding patrimonial pura + holding de participações com acordo parassocial e doação escalonada em vida.',
    financialImpact: 'Economia fiscal de R$ 6,8M e transferência de 100% da gestão sem interrupção de safra.',
    court: 'Extrajudicial / Tabelionato de Notas',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'case-3',
    category: 'Tributário / CARF',
    badge: 'Desoneração Fiscal',
    clientProfile: 'Indústria Química & Exportadora',
    challenge: 'Execução fiscal promovida pela Fazenda Nacional cobrando R$ 22,5M decorrentes de glosa indevida de incentivo regional.',
    strategy: 'Ingresso com Ação Anulatória com garantia via Seguro Garantia Judicial e aplicação do Tema Vinculante do STJ.',
    financialImpact: 'Extinção do débito de R$ 22,5M e liberação de certidões negativas de débito (CND).',
    court: 'Tribunal Regional Federal (TRF) / STJ',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'depoimento-1',
    author: 'Dr. Henrique V. Sampaio',
    position: 'Presidente do Conselho de Administração',
    company: 'Sampaio & Marcondes Participações S/A',
    avatarText: 'HS',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'A precisão cirúrgica e o conhecimento técnico demonstrados na condução do nosso M&A superaram qualquer assessoria prévia. A banca de advogados entregou uma solução que blindou a família por gerações.',
    caseType: 'Reestruturação & M&A',
    year: '2025'
  },
  {
    id: 'depoimento-2',
    author: 'Mariana Duarte Prado',
    position: 'Diretora Executiva e Herdeira',
    company: 'Grupo Agropecuário Terra Dourada',
    avatarText: 'MP',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quote: 'Evitamos o desgaste emocional e a dilapidação financeira de um inventário que se arrastaria por anos. A sensibilidade combinada com a autoridade jurídica dos sócios foi fundamental para a harmonia da nossa família.',
    caseType: 'Holding Familiar',
    year: '2025'
  },
  {
    id: 'depoimento-3',
    author: 'Carlos Alberto Fontes',
    position: 'CFO',
    company: 'Logística Integrada Brasil Sul',
    avatarText: 'CF',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    quote: 'Quando fomos surpreendidos por uma autuação fiscal desmedida, eles assumiram a linha de frente no CARF com uma tese impecável. Conseguiram anular a totalidade da exigência sem colocar em risco nosso caixa operacional.',
    caseType: 'Defesa Tributária',
    year: '2026'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Atendimento & Sigilo',
    question: 'Como funciona a primeira consulta estratégica e qual o nível de sigilo?',
    answer: 'Nossa primeira reunião é realizada sob rigoroso acordo de confidencialidade (NDA prévio, se necessário). Analisamos a documentação central da demanda, mapeamos riscos imediatos e apresentamos uma análise de viabilidade jurídica com plano de ação estratégico transparente.'
  },
  {
    id: 'faq-2',
    category: 'Planejamento Sucessório',
    question: 'A partir de qual patrimônio vale a pena constituir uma Holding Familiar?',
    answer: 'Geralmente, patrimônios imobiliários ou investimentos a partir de R$ 3 milhões já encontram sensível economia tributária em ITCMD e IRPF na constituição de holding. No entanto, mesmo para valores menores, a proteção contra partilhas litigiosas e a garantia de continuidade dos negócios tornam a estrutura vantajosa.'
  },
  {
    id: 'faq-3',
    category: 'Atuação Geográfica',
    question: 'O escritório atua em todo o Brasil ou apenas na sede física?',
    answer: 'Atuamos em escala nacional e internacional. Com o processo 100% eletrônico e nossa presença rotineira em Brasília perante o STF, STJ e CARF, atendemos clientes em qualquer estado do país, bem como famílias e empresas com patrimônio no exterior.'
  },
  {
    id: 'faq-4',
    category: 'Honorários & Contratação',
    question: 'Como são estabelecidos os honorários advocatícios do escritório?',
    answer: 'Nossos contratos seguem as diretrizes éticas da OAB, estruturados conforme a complexidade e a modalidade da demanda: honorários de partida para condução do caso e honorários de êxito (success fee) atrelados ao resultado efetivamente alcançado.'
  },
  {
    id: 'faq-5',
    category: 'Urgências & Liminares',
    question: 'Qual o tempo de resposta para situações de urgência e medidas liminares?',
    answer: 'Contamos com uma célula dedicada de plantão contencioso para medidas cautelares, bloqueios indevidos e habeas data/corpus. Demandas urgentes são despachadas diretamente com os juízos de plantão em até poucas horas após o recebimento dos subsídios.'
  }
];
