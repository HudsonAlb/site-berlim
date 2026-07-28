export interface NewsItem {
  id: string;
  category: string;
  type: 'evento' | 'noticia';
  title: string;
  summary: string;
  fullContent: string[];
  readTimeOrLocation: string;
  date: string;
  imageUrl: string;
  speakerOrAuthor?: string;
  actionText: string;
  eventDetails?: {
    location?: string;
    schedule?: string;
    targetAudience?: string;
  };
}

export const newsData: NewsItem[] = [
  {
    id: 'growth-summit-2026',
    category: 'EVENTO PRESENCIAL',
    type: 'evento',
    title: 'Berlim Growth Summit 2026: Estratégias de Escala & IA',
    summary: 'Junte-se aos maiores líderes de performance do Brasil em um dia inteiro de imersão sobre Inteligência Artificial aplicada ao tráfego pago e CRO.',
    fullContent: [
      'O Berlim Growth Summit 2026 é o encontro definitivo para diretores de marketing, heads de performance e CEOs que buscam acelerar a receita de suas empresas utilizando o estado da arte em inteligência artificial e engenharia de conversão.',
      'Durante um dia inteiro de palestras e painéis práticos, executivos da Meta, Google, RD Station e engenheiros da Berlim Co. revelarão os bastidores de estratégias que geraram mais de R$ 100 milhões em faturamento rastreado ao longo do último ano.',
      'Além das sessões de conteúdo, o evento contará com um espaço exclusivo de networking B2B, análise ao vivo de landing pages e demonstração prática do ecossistema B-DASH para acompanhamento em tempo real de LVR e CAC.'
    ],
    readTimeOrLocation: 'São Paulo - SP',
    date: '15 de Agosto, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000',
    speakerOrAuthor: 'Palestrantes da Meta, Google & Berlim Co.',
    actionText: 'Garantir Vaga no Evento',
    eventDetails: {
      location: 'Centro de Convenções JK - Av. Pres. Juscelino Kubitschek, São Paulo - SP',
      schedule: '08:30 às 18:00 (Imersão de Dia Inteiro)',
      targetAudience: 'CEOs, CMOs, Heads de Growth & Mídia'
    }
  },
  {
    id: 'novos-dashboards-bdash',
    category: 'LANÇAMENTO B-DASH',
    type: 'noticia',
    title: 'Novos Dashboards com Atribuição Multi-touch via GA4 e CRM',
    summary: 'Lançamos a nova versão da plataforma B-DASH com inteligência preditiva para identificar canais de tração e otimização automatizada de CAC.',
    fullContent: [
      'A Berlim Co. tem o orgulho de anunciar o lançamento oficial da nova versão do B-DASH, nossa plataforma proprietária de inteligência comercial e atribuição avançada de mídia.',
      'Com a obsolescência dos cookies de terceiros e as limitações de rastreamento no navegador, a nova arquitetura do B-DASH realiza o cruzamento de dados de leilão via API de Conversão no servidor (CAPI) diretamente com os fechamentos de vendas no CRM da RD Station.',
      'Isso significa que gestores de tráfego e diretores financeiros agora possuem uma visão 360° do retorno real sobre o investimento (ROAS) de cada canal — Meta Ads, Google Ads, TikTok Ads e LinkedIn — eliminando a duplicidade de contagem e garantindo tomadas de decisões cirúrgicas.'
    ],
    readTimeOrLocation: '5 min de leitura',
    date: '28 de Julho, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    speakerOrAuthor: 'Equipe de Engenharia Berlim',
    actionText: 'Ler Matéria Completa'
  },
  {
    id: 'masterclass-cpl',
    category: 'WORKSHOP ONLINE',
    type: 'evento',
    title: 'Masterclass: Como Reduzir o CPL em 40% sem Perder Qualidade',
    summary: 'Um workshop prático onde nossos engenheiros de conversão mostram a anatomia de landing pages de alta resposta e novos formatos de anúncios.',
    fullContent: [
      'Reduzir o Custo por Lead (CPL) é um dos maiores desafios de marcas em crescimento, especialmente em mercados de alta concorrência onde os leilões de anúncios ficam cada vez mais caros.',
      'Nesta Masterclass online e gratuita, vamos abrir os bastidores de landing pages que convertem acima de 35% e demonstrar como alinhar o copywriting dos anúncios com a qualificação automática dos leads antes do envio para a equipe comercial.',
      'A transmissão incluirá sessão de perguntas e respostas ao vivo, checklist em PDF para download e templates de estrutura para campanhas de Meta Ads e Google Search.'
    ],
    readTimeOrLocation: 'Transmissão Ao Vivo',
    date: '10 de Agosto, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
    speakerOrAuthor: 'Head de Performance Berlim Co.',
    actionText: 'Inscrever-se no Workshop',
    eventDetails: {
      location: 'Plataforma Zoom (Link enviado via E-mail)',
      schedule: '19:30 às 21:00',
      targetAudience: 'Gestores de Mídia, Copywriters & Analistas de CRO'
    }
  },
  {
    id: 'meta-conversoes-capi-2026',
    category: 'TENDÊNCIAS DE TRÁFEGO',
    type: 'noticia',
    title: 'Meta CAPI Gateway v2: Como Mitigar a Perda de Rastreamento',
    summary: 'Descubra como a implementação da API de Conversões do Meta no nível de servidor reduz discrepâncias de métricas e melhora o ROAS em até 28%.',
    fullContent: [
      'À medida que navegadores bloqueiam cookies e identificadores tradicionais, marcas que dependem exclusivamente do Pixel do Meta perdem até 30% das conversões reais nos seus relatórios de anúncios.',
      'Neste estudo técnico publicado por nossos especialistas de dados, mostramos o passo a passo da infraestrutura CAPI Gateway com servidores dedicados e criptografia de ponta a ponta.',
      'Entenda como enviar eventos de checkout e lead qualificado diretamente para a Meta sem sobrecarregar o tempo de carregamento da sua página ou violar diretrizes de privacidade LGPD.'
    ],
    readTimeOrLocation: '6 min de leitura',
    date: '20 de Julho, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    speakerOrAuthor: 'Growth Data Team',
    actionText: 'Ler Guia Técnico'
  },
  {
    id: 'rd-station-partner-silver',
    category: 'CONQUISTAS BERLIM',
    type: 'noticia',
    title: 'Berlim Co. atinge o selo RD Station Silver Partner',
    summary: 'Nossa agência alcançou a certificação de alta performance na RD Station por excelência em automação de marketing e integração comercial.',
    fullContent: [
      'É com grande entusiasmo que celebramos a conquista do selo RD Station Silver Partner! Essa certificação reconhece a Berlim Co. como uma das agências de referência nacional no ecossistema de Inbound Marketing e Automação de Vendas.',
      'A certificação valida nossa metodologia proprietária de qualificação automatizada de leads (Lead Scoring) e sincronização contínua com os dashboards do B-DASH.',
      'Agradecemos a todos os nossos clientes e parceiros pela confiança em nossa engenharia de growth.'
    ],
    readTimeOrLocation: '4 min de leitura',
    date: '12 de Julho, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
    speakerOrAuthor: 'Comunicação Corporativa',
    actionText: 'Ler Comunicado'
  },
  {
    id: 'cro-testes-ab-landing-pages',
    category: 'ESTRATÉGIA & CRO',
    type: 'noticia',
    title: '7 Erros Mortais em Landing Pages que Destroem a Sua Taxa de Conversão',
    summary: 'Aprenda a identificar gargalos de velocidade, chamadas para ação fracas e falta de hierarquia visual que custam vendas diariamente.',
    fullContent: [
      'Investir milhares de reais em tráfego pago sem otimizar a página de destino é como tentar encher um balde furado. Nesse artigo, destrinchamos os 7 erros mais comuns encontrados nas auditorias de CRO realizadas pela Berlim Co.',
      'Desde botões de CTA imperceptíveis até formulários com campos desnecessários, veja exemplos práticos de antes e depois e como pequenos ajustes de UX/UI elevaram em 2.4x a conversão de nossos clientes.',
      'Acesse também o nosso template de checklist de auditoria de conversão gratuito no final da leitura.'
    ],
    readTimeOrLocation: '7 min de leitura',
    date: '02 de Julho, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    speakerOrAuthor: 'Equipe de UX/UI & CRO',
    actionText: 'Ler Artigo de CRO'
  }
];
