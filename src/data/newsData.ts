import recnplayMainImg from '../assets/news/news1/snapinsta-1785269496906.jpg';
import levelAiMainImg from '../assets/news/news2/CAR07462.jpeg';

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
    id: 'level-ai-berlim-company',
    category: 'EVENTO DE IA & LIDERANÇA',
    type: 'evento',
    title: 'Level AI: Berlim Company reúne lideranças do Recife para discutir o futuro da inteligência artificial nos negócios',
    summary: 'Com o tema "O desafio não é tecnologia, é liderança", o evento idealizado por Paulo Filho reuniu cerca de 200 CEOs, diretores e gestores no auditório do Porto Digital para debater como a IA transforma a gestão e os resultados das empresas.',
    fullContent: [
      'No dia 7 de maio de 2026, o auditório do Porto Digital, no coração do Bairro do Recife, recebeu o Level AI, evento idealizado por Paulo Filho, fundador da Berlim Company, em parceria com a FH e o Porto Digital. Com o tema "O desafio não é tecnologia, é liderança", o encontro reuniu CEOs, diretores, gestores e fundadores de startups para debater como a inteligência artificial pode, de fato, transformar a gestão e os resultados das empresas.',
      'A repercussão do evento ganhou as páginas da Folha de Pernambuco, que destacou a proposta do Level AI de colocar lideranças, e não apenas tecnologia, no centro da conversa sobre IA nos negócios.',
      'O desafio não é a ferramenta, é quem lidera\nA provocação que dá nome ao evento resume o principal argumento de Paulo Filho: a inteligência artificial já está amplamente disponível, mas seu uso ainda é raso na maioria das empresas. Segundo ele, 78% das empresas já utilizam IA de alguma forma, mas apenas 6% conseguem extrair dela um retorno considerável. Já as organizações que adotam a tecnologia de forma madura registram ganhos de produtividade acima de 30%.',
      '"Nos últimos três anos, a evolução da IA foi significativa, mas muitos ainda se limitam a usar versões mais antigas das tecnologias, como os chatbots", pontuou Paulo Filho. Para ele, o gargalo não está na tecnologia em si, mas na forma como as lideranças a estruturam dentro das empresas: "Organizar dados é fundamental para estruturar a empresa. Com informações bem organizadas, as respostas se tornam mais eficazes, o que melhora a atuação de equipes e a qualidade das decisões."',
      'Um dia de imersão para quem decide\nVoltado a um público seleto, o Level AI reuniu cerca de 200 participantes em uma programação de um dia inteiro, das 9h às 16h, com discussões práticas sobre automação, liderança, governança, marketing e dados & analytics. Mais do que apresentar cases, o evento propôs uma reflexão sobre novos modelos de liderança e sobre a formação de equipes preparadas para atuar na nova economia orientada por dados.',
      '"A intenção é debater esses assuntos para que os líderes consigam, efetivamente, implementar as mudanças em suas empresas. A questão não é apenas a tecnologia, mas sim como ela é aplicada. Quando utilizada corretamente, a IA não apenas otimiza processos, mas também transforma a estrutura empresarial e redefine o posicionamento no mercado", concluiu Paulo Filho.',
      'Para a Berlim, o Level AI é mais um passo na consolidação de sua atuação como protagonista na conversa sobre adoção de IA nas empresas, um movimento que já vinha ganhando corpo com a criação da Martech e que segue no centro da estratégia da companhia para os próximos anos.'
    ],
    readTimeOrLocation: 'Porto Digital - Recife/PE',
    date: '07 de Maio, 2026',
    imageUrl: levelAiMainImg,
    speakerOrAuthor: 'Paulo Filho (Founder Berlim Co.)',
    actionText: 'Ver Cobertura Level AI',
    eventDetails: {
      location: 'Auditório do Porto Digital - Bairro do Recife, PE',
      schedule: '09h às 16h (Imersão de Dia Inteiro)',
      targetAudience: 'CEOs, Diretores, Gestores e Fundadores de Startups'
    }
  },
  {
    id: 'berlim-rec-n-play',
    category: 'EVENTO DE INOVAÇÃO',
    type: 'evento',
    title: "Berlim Digital no REC'n'Play: Presença de peso no maior festival de economia criativa da América Latina",
    summary: "A Berlim Company marcou presença no festival REC'n'Play no Bairro do Recife com participação especial em painéis e palestras sobre negócios do futuro, dados, IA e branding na era da atenção.",
    fullContent: [
      "O REC'n'Play reuniu, entre os dias 15 e 18 de outubro, mais de 700 atividades gratuitas no Bairro do Recife, consolidando o festival como um dos principais encontros de tecnologia, inovação e cultura da América Latina. Em meio a essa programação, a Berlim Company marcou presença no espaço Sebrae na Rua, na Avenida Rio Branco, com duas participações que reforçam o papel da empresa como referência em marketing, dados e tecnologia no Nordeste.",
      'Roda de conversa: "Negócios prontos para o futuro"\nNo dia 16 de outubro, das 14h às 15h, Paulo Filho, founder da Berlim Company, participou da roda de conversa "Negócios prontos para o futuro", ao lado de Patrícia Oliveira (Head Martech na Berlim Co.), Henrique Cesar (cofundador e CRO da FH) e Fernando Aureliano (cofundador e CEO da FH).',
      "O bate-papo, promovido em parceria entre Ampla, Porto Digital e Sebrae, discutiu os caminhos que empresas precisam trilhar para se manterem competitivas diante das transformações tecnológicas, com foco em dados, inteligência artificial e novos modelos de gestão. A presença da Berlim Co. no palco reforça a construção de soluções que unem marketing, dados e tecnologia para impulsionar negócios.",
      'Palestra: "Branding na era da atenção"\nNo dia seguinte, 17 de outubro, às 14h, também no espaço Sebrae na Rua, Paulo Filho voltou ao palco do REC\'n\'Play para uma palestra solo: "Branding na era da atenção". O tema abordou os desafios que marcas enfrentam em um cenário de excesso de estímulos e disputa constante pela atenção do público, e como estratégias de branding bem construídas ajudam empresas a se destacar e criar conexão real com seus públicos.',
      "Um festival que reflete o momento da Berlim\nA participação da Berlim Digital no REC'n'Play dialoga diretamente com o momento atual da empresa: a consolidação de sua atuação em marketing e tecnologia, impulsionada pela Martech, unidade de negócios criada para unir estratégia comercial, dados e inteligência artificial em soluções práticas para empresas.",
      "Levar essas discussões para um dos maiores palcos de inovação do país reforça o posicionamento da Berlim como protagonista na conversa sobre o futuro dos negócios, com coração no Porto Digital e mente voltada para o que vem a seguir.",
      "Sobre o REC'n'Play: o festival é considerado o maior evento de tecnologia, cultura e inovação da América Latina, reunindo mais de 700 atividades gratuitas, 7 palcos, 30 prédios ativados e 83 espaços de conteúdo no Bairro do Recife."
    ],
    readTimeOrLocation: 'Recife - PE (Porto Digital)',
    date: '15 a 18 de Outubro',
    imageUrl: recnplayMainImg,
    speakerOrAuthor: 'Paulo Filho (Founder) & Patrícia Oliveira (Head Martech)',
    actionText: 'Ver Cobertura Completa',
    eventDetails: {
      location: 'Espaço Sebrae na Rua, Av. Rio Branco - Bairro do Recife',
      schedule: '15 a 18 de Outubro (Atividades das 14h às 18h)',
      targetAudience: 'Empreendedores, Líderes de Martech, Tecnologia & Inovação'
    }
  }
];
