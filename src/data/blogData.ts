import geoSeoImg from '../assets/news/geo_seo_ai.png';
import mensuracaoImg from '../assets/news/mensuracao_marketing.png';
import martechRoiImg from '../assets/news/martech_roi.png';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  summary: string;
  fullContent: string[];
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  faqs: FAQItem[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'geo-e-seo-guia-oficial-google-ia-generativa',
    slug: '/blog/geo-e-seo-guia-oficial-google-ia-generativa',
    category: 'SEO & IA Generativa',
    title: 'GEO é SEO? O guia oficial do Google sobre IA generativa encerra esse debate',
    metaTitle: 'GEO é SEO? O Guia Oficial do Google Sobre IA Generativa Explica',
    metaDescription: 'O Google publicou o guia oficial sobre otimização para IA generativa e derrubou 5 mitos do GEO. Entenda o que muda no SEO e na estratégia de marketing.',
    primaryKeyword: 'GEO e SEO',
    secondaryKeywords: ['otimização para IA generativa', 'AI Overviews', 'guia do Google', 'Gemini SEO', 'schema markup', 'métrica de citação'],
    summary: 'O Google acabou de publicar o guia oficial sobre otimização para IA generativa. Descubra por que otimizar para AI Overviews, AI Mode e respostas do Gemini é, na prática, fazer SEO tradicional bem feito.',
    author: 'Equipe de SEO & Data Berlim Co.',
    date: '30 de Julho, 2026',
    readTime: '6 min de leitura',
    imageUrl: geoSeoImg,
    fullContent: [
      'O Google acabou de publicar o guia oficial do Google Search sobre otimização para IA generativa, e o documento vai incomodar muita gente que está vendendo "GEO" como se fosse uma disciplina paralela ao SEO. A resposta da própria empresa é direta: otimizar para AI Overviews, AI Mode e respostas do Gemini é, na prática, fazer SEO bem feito.',
      'Não existe algoritmo paralelo. Não existe hack secreto. Os recursos de IA da Busca operam em cima dos mesmos sistemas centrais de ranqueamento que sempre existiram. Sempre existiram.',
      'O que o guia do Google diz sobre GEO e SEO\nA leitura que fazemos aqui, na Berlim Company, é que esse documento serve tanto para orientar quanto para conter um movimento de mercado que vinha empacotando tudo como algo novo para gerar convencimento e faturamento. Nos últimos meses, a sigla GEO virou pacote vendido em massa, com agências cobrando "otimização para motores generativos" como se fosse um universo separado do SEO. Não é.',
      'O guia do Google derruba, um a um, os principais mitos que o mercado vinha empurrando.\n\nOs 5 mitos do GEO que o Google derrubou:\n\n1. Arquivo llms.txt não é fator de ranqueamento\nO Google declarou de forma explícita que não trata esse arquivo de modo especial. Investir tempo e verba nele não move o ponteiro do ranqueamento nem da geração de respostas por IA.\n\n2. Chunking artificial não ajuda a IA\nFragmentar o conteúdo em pedaços minúsculos para "ajudar a IA" a entender a página é uma prática sem efeito real. Os sistemas do Google já entendem a nuance de múltiplos tópicos dentro de uma única página.\n\n3. Reescrever conteúdo para "soar como prompt" é desperdício\nA IA entende sinônimos e linguagem natural. Reescrever páginas inteiras para parecer um prompt de IA consome tempo de equipe sem gerar retorno.\n\n4. Menções fabricadas em fóruns e diretórios não funcionam\nAlém de não funcionarem, associam a marca a spam. O Google bloqueia essa camada antes mesmo de ela chegar perto da geração de respostas por IA.\n\n5. Schema não é passe de entrada para respostas de IA\nDados estruturados continuam úteis para gerar resultados ricos na busca tradicional, mas não garantem, sozinhos, presença nas respostas geradas por IA.',
      'O que o Google continua exigindo (agora com mais rigor)\nO que o Google pede em troca é o que sempre pediu, agora com mais rigor: perspectiva original, conteúdo de experiência real, HTML semântico, indexação saudável e profundidade temática. Ou seja, os fundamentos do SEO clássico, bem executados, seguem sendo o caminho, inclusive para aparecer em AI Overviews e no AI Mode.',
      'A nova métrica de sucesso: da posição à citação\nHá um ponto do guia que merece atenção especial de CMOs e líderes de marketing: a nova métrica de sucesso não é o clique. É a citação.\n\nSites citados dentro da AI Overview recebem volume de cliques substancialmente maior do que sites não citados. A pergunta deixou de ser "estou na primeira posição" e virou "minha marca aparece dentro da resposta?".\n\nEssa mudança altera diretamente o jogo da mensuração de resultados em marketing. No SEO atual, a decisão real por trás da métrica é de orçamento: onde alocar investimento, em conteúdo commodity ou em conteúdo de autoridade? O guia do Google responde essa pergunta sem rodeios, e a resposta favorece quem constrói autoridade real, não quem produz volume vazio.',
      'O que isso significa para a estratégia de marketing da sua empresa\nA boa notícia é que quem fez a lição de casa do SEO clássico nos últimos anos está em vantagem real. Empresas que investiram em conteúdo original, autoridade de marca, estrutura técnica saudável e experiência real de produto ou serviço já estão mais preparadas para o cenário de busca com IA generativa do que qualquer pacote de "GEO" vendido às pressas.\n\nNa Berlim Company, unimos estratégia de marketing, dados e tecnologia justamente para transformar esse tipo de mudança em vantagem competitiva para nossos clientes, sem correr atrás de modismos de mercado.'
    ],
    faqs: [
      {
        question: 'GEO é diferente de SEO?',
        answer: 'Segundo o guia oficial do Google, não. Os recursos de IA da Busca, como AI Overviews, AI Mode e respostas do Gemini, operam sobre os mesmos sistemas centrais de ranqueamento do SEO tradicional.'
      },
      {
        question: 'O arquivo llms.txt melhora o ranqueamento no Google?',
        answer: 'Não. O Google confirmou que não trata esse arquivo de forma especial para efeitos de ranqueamento ou geração de respostas por IA.'
      },
      {
        question: 'Schema markup ajuda a aparecer em respostas de IA?',
        answer: 'Dados estruturados continuam relevantes para resultados ricos na busca, mas não são um requisito isolado para aparecer em respostas geradas por IA.'
      },
      {
        question: 'Qual é a métrica mais importante no SEO para IA generativa?',
        answer: 'A citação da marca dentro das respostas de IA, como a AI Overview, passou a ser mais relevante do que apenas a posição no ranking tradicional.'
      }
    ]
  },
  {
    id: 'mensuracao-de-marketing-framework-google-accenture',
    slug: '/blog/mensuracao-de-marketing-framework-google-accenture',
    category: 'Analytics & Governança',
    title: 'Mensuração de marketing: por que o problema não é técnico, é organizacional',
    metaTitle: 'Mensuração de Marketing: o Framework do Google Explica o Que Está Errado',
    metaDescription: 'O Marketing Measurement Framework do Google e da Accenture revela 6 princípios de mensuração de marketing. Entenda por que o problema não é técnico, é organizacional.',
    primaryKeyword: 'mensuração de marketing',
    secondaryKeywords: ['Marketing Measurement Framework', 'atribuição de marketing', 'MMM', 'incrementalidade', 'governança de dados', 'alocação de orçamento de marketing'],
    summary: 'Um dos estudos mais relevantes sobre mensuração de marketing revela: mensuração deixou de ser um problema técnico e virou um problema organizacional. Conheça os 6 princípios para transformar dados em decisão.',
    author: 'Equipe de Business Intelligence Berlim Co.',
    date: '25 de Julho, 2026',
    readTime: '7 min de leitura',
    imageUrl: mensuracaoImg,
    fullContent: [
      'Um dos estudos mais relevantes sobre mensuração de marketing dos últimos meses circulou recentemente pelo Brasil: o Marketing Measurement Framework, produzido pelo Google em parceria com a Accenture e com a participação de lideranças de empresas como Magalu, Nubank, Hapvida, Stellantis, Reckitt, Carrefour e Leroy Merlin. O documento fecha uma tese que já vinha guiando o trabalho da Berlim Co. com seus clientes.',
      'A frase que resume o estudo é de André Gibin, Head of Data, Measurement & Analytics do Google: "Mensuração deixou de ser um problema técnico. Virou um problema organizacional."',
      'De coletar dados a interpretar dados\nHá dez anos, o principal desafio das empresas era coletar dados de marketing. Hoje, qualquer operação tem mais dados do que consegue interpretar. O gargalo mudou de lugar: agora está em como dados, métodos e decisão conversam dentro da estrutura organizacional, não na quantidade de dados disponíveis.',
      'Os 6 princípios de mensuração de marketing do estudo:\n\n1. A mensuração começa pela decisão, não pela métrica\nA pergunta certa não é "o que eu posso medir". É "que decisão eu preciso tomar". Empresas que partem da métrica antes da decisão constroem dashboards bonitos que não sustentam nenhuma ação concreta.\n\n2. Governança e incentivos são o alicerce do sistema\nSem ownership claro, KPI compartilhado entre Marketing e Finanças e um ritual de decisão definido, a mensuração vira informação solta. Ela não se transforma em poder decisório dentro da empresa.\n\n3. Mensuração é um sistema, não um método isolado\nAtribuição, testes de incrementalidade e MMM (Marketing Mix Modeling) têm papéis diferentes e complementares. Empresas que buscam o "método perfeito" único acabam se perdendo em vez de construir um sistema robusto de mensuração.\n\n4. Dado de marketing, isoladamente, não é suficiente\nSem receita, margem, payback, LTV e custo real entrando na conta, qualquer decisão de mídia tende a superestimar o curto prazo e subestimar o valor da marca no médio e longo prazo.\n\n5. Marketing precisa falar a língua do negócio\nO CMO que ainda discute impressão e clique não senta na mesa de decisão estratégica. O CMO que discute P&L, retorno marginal e risco, senta. Essa mudança de vocabulário é também uma mudança de posicionamento dentro da empresa.\n\n6. IA acelera boas práticas, não substitui a base\nA inteligência artificial escala o que já existe. Quem escala mensuração sem dado limpo e sem governança estruturada não escala eficiência, escala erro, e mais rápido.',
      'O problema que a corrida por IA está mascarando\nEsse último ponto explica um padrão recorrente nas operações que a Berlim Co. acompanha: a corrida por IA está mascarando um problema bem mais antigo. A maioria das empresas ainda não consegue responder, com clareza, que decisão de negócio está tentando tomar antes de investir em ferramentas, modelos ou dashboards.',
      'A pergunta que deveria abrir qualquer projeto de mensuração\nNa Berlim Co., a mesma pergunta guia qualquer trabalho de dados, antes de abrir um dashboard, modelar uma base ou contratar uma ferramenta: "Que decisão de negócio essa mensuração precisa sustentar?"\n\nSem essa pergunta respondida, o resultado é sempre o mesmo: um relatório bonito que não muda nenhuma decisão de orçamento.'
    ],
    faqs: [
      {
        question: 'O que é o Marketing Measurement Framework do Google?',
        answer: 'É um estudo produzido pelo Google em parceria com a Accenture e lideranças de grandes empresas brasileiras, que define princípios para tornar a mensuração de marketing um processo estratégico e organizacional, e não apenas técnico.'
      },
      {
        question: 'Qual a diferença entre atribuição, incrementalidade e MMM?',
        answer: 'São métodos complementares de mensuração de marketing. Atribuição avalia o caminho de conversão do consumidor, testes de incrementalidade medem o impacto real de uma ação isolada, e o MMM (Marketing Mix Modeling) avalia o efeito combinado de diferentes canais no resultado de negócio ao longo do tempo.'
      },
      {
        question: 'Por que mensuração de marketing é um problema organizacional?',
        answer: 'Porque a maior parte das empresas já tem acesso a dados suficientes, mas falta governança, ownership claro e um ritual de decisão que transforme esses dados em ação. Sem isso, a mensuração não sustenta decisões de orçamento.'
      },
      {
        question: 'Como saber se a mensuração de marketing da minha empresa está funcionando?',
        answer: 'O teste mais simples é verificar se, hoje, a mensuração gera decisões reais de alocação de orçamento. Se os relatórios não mudam onde o investimento é direcionado, a mensuração ainda não está cumprindo sua função estratégica.'
      }
    ]
  },
  {
    id: 'roi-martech-stack-decisao-de-negocio',
    slug: '/blog/roi-martech-stack-decisao-de-negocio',
    category: 'Martech & ROI',
    title: 'ROI de Martech: por que a maior parte do orçamento não está virando resultado',
    metaTitle: 'ROI de Martech: Por Que Seu Stack Não Está Virando Resultado',
    metaDescription: 'A maior parte do orçamento de Martech não vira ROI. Entenda por que o problema não é a ferramenta, e os 5 passos para inverter essa lógica.',
    primaryKeyword: 'ROI de Martech',
    secondaryKeywords: ['stack de Martech', 'orçamento de marketing', 'KPI de marketing', 'governança de dados', 'IA applied a marketing'],
    summary: 'Estudos da Gartner mostram que empresas usam menos de 35% do stack de Martech. Entenda por que o problema não é a ferramenta e como inverter essa lógica para gerar resultados reais.',
    author: 'Consultoria de Martech & Growth Berlim Co.',
    date: '18 de Julho, 2026',
    readTime: '5 min de leitura',
    imageUrl: martechRoiImg,
    fullContent: [
      'A maior parte do orçamento de Martech da sua empresa não está virando ROI. E o problema não é a ferramenta.',
      'A Gartner mediu, ano após ano, a mesma coisa: as empresas usam, em média, menos de 35% da capacidade do stack de Martech que já adquiriram. O chiefmartec mapeou 14.106 soluções de marketing no último Martech Map. O CMO médio carrega de 12 a 15 ferramentas no cinto. E ainda assim, sete em cada dez diretores de marketing dizem, em pesquisa, que não conseguem provar o impacto financeiro do investimento.',
      'O padrão que se repete nas conversas com C-levels\nHá um padrão se repetindo nas conversas que temos tido com C-levels ao longo deste ano: a empresa compra a ferramenta antes de definir a decisão que ela deveria melhorar.',
      'Compra CRM antes de mapear o funil real. Compra CDP antes de saber qual evento vale ouro. Compra ferramenta de ABM antes de definir as contas que importam. Compra IA antes de saber qual gargalo está sangrando. O resultado é sempre o mesmo: o stack vira despesa, não alavanca.',
      'Como inverter a lógica do investimento em Martech\nO que tem funcionado nos projetos que a Berlim Co. conduz é inverter essa ordem. E o caminho é mais simples do que parece.\n\n1. Comece pela decisão, não pela tecnologia\nA pergunta que deveria abrir qualquer projeto de Martech é: "que decisão de negócio vai ficar mensuravelmente melhor a partir disso?" Se a resposta não cabe em uma frase, o projeto ainda não está pronto para sair do PowerPoint.\n\n2. Defina o KPI antes do contrato\nTempo de resposta, custo por lead qualificado, velocidade do funil, pipeline gerado por conta-alvo: o KPI precisa estar definido antes da assinatura, não depois. Sem isso, qualquer resultado vira narrativa, não evidência.\n\n3. Mapeie o dado antes da integração\nA maior parte dos projetos de Martech morre na qualidade do dado de origem, não no software. CRM mal preenchido, atribuição quebrada e evento de conversão duplicado formam a receita perfeita para um relatório bonito e uma decisão ruim.\n\n4. Co-crie com quem opera\nComercial, atendimento e performance precisam estar na mesa antes do go-live, não depois. Martech implementado de cima para baixo, sem envolver quem vai operar no dia a dia, gera duas consequências previsíveis: retrabalho e resistência.\n\n5. IA entra como camada, não como projeto\nA IA aplicada multiplica o ROI de um stack bem governado. E multiplica o desperdício de um stack mal governado. Ela não corrige a pergunta errada, só responde mais rápido.',
      'O exercício antes de fechar o orçamento de Martech\nSe sua empresa está montando o orçamento de Martech para o próximo trimestre, ou revisitando o stack atual antes de assinar mais uma renovação, vale fazer um exercício simples antes de qualquer planilha:\n\nListe as 5 ferramentas que mais pesam no orçamento. Para cada uma, anote qual decisão de negócio ficou mensuravelmente melhor nos últimos 6 meses. Se mais de duas ficarem em branco, o problema não é orçamento.'
    ],
    faqs: [
      {
        question: 'Por que as empresas não conseguem medir o ROI de Martech?',
        answer: 'Porque, na maioria dos casos, a ferramenta é comprada antes de a empresa definir qual decisão de negócio ela deveria melhorar. Sem uma decisão clara e um KPI definido desde o início, qualquer resultado vira narrativa, não evidência mensurável.'
      },
      {
        question: 'Qual a porcentagem do stack de Martech que as empresas realmente utilizam?',
        answer: 'Segundo levantamentos da Gartner, as empresas usam, em média, menos de 35% da capacidade do stack de Martech que já adquiriram.'
      },
      {
        question: 'IA resolve o problema de ROI em Martech?',
        answer: 'Não sozinha. A IA aplicada multiplica o ROI de um stack bem governado, mas também multiplica o desperdício de um stack mal governado. Ela acelera a resposta, não corrige a pergunta errada por trás da decisão de investimento.'
      },
      {
        question: 'Como saber se uma ferramenta de Martech está gerando retorno?',
        answer: 'O teste mais direto é verificar se, nos últimos meses, essa ferramenta melhorou de forma mensurável alguma decisão de negócio específica. Se a resposta não existe ou é vaga, a ferramenta provavelmente está gerando despesa, não alavancagem.'
      }
    ]
  }
];
