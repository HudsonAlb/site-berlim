import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from 'lucide-react';

interface Article {
  id: number;
  tag: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  imageUrl: string;
  studyLink: string;
}

const articles: Article[] = [
  {
    id: 1,
    tag: 'TENDÊNCIAS',
    title: 'O Fim dos Cookies de Terceiros e o Futuro do Tráfego Pago em 2026',
    summary: 'Saiba como preparar sua estrutura de rastreamento no Meta e Google Ads utilizando APIs de conversão integradas diretamente no servidor.',
    readTime: '6 min read',
    date: 'Jun 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    studyLink: '#blog-cookies'
  },
  {
    id: 2,
    tag: 'HOW-TO',
    title: 'Como Estruturar Testes A/B no Elementor e ActiveCampaign para Dobrar Conversões',
    summary: 'Um guia prático com os principais erros cometidos por agências e como implementar hipóteses estatisticamente válidas nas Landing Pages.',
    readTime: '8 min read',
    date: 'Jun 18, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000',
    studyLink: '#blog-tests'
  },
  {
    id: 3,
    tag: 'ESTRATÉGIA',
    title: 'Guia de Atribuição de Tráfego: Multi-Touch vs Last Click em Jornadas Complexas',
    summary: 'Aprenda a analisar o impacto de múltiplos canais de atração no faturamento final da sua empresa e evite desligar anúncios geradores de leads.',
    readTime: '10 min read',
    date: 'Jun 12, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    studyLink: '#blog-attribution'
  },
  {
    id: 4,
    tag: 'ANÁLISE DE MERCADO',
    title: 'Inteligência AI no Tráfego: Como o Advantage+ e PMax Estão Mudando Tudo',
    summary: 'Descubra como dominar os algoritmos de leilão automatizados alimentando as IAs com as audiências mais qualificadas do seu CRM.',
    readTime: '5 min read',
    date: 'Jun 05, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    studyLink: '#blog-ai'
  }
];

export default function BlogCarousel() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = articles[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % articles.length);
  };

  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="glow-spot bottom-[-200px] right-[-100px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0052ff] uppercase block mb-4">
            CONHECIMENTO & INSIGHTS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Novas ideias
          </h2>
        </div>

        {/* Interactive Highlighted News Slider */}
        <div className="flex items-center justify-between gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* Left Arrow Button */}
          <button 
            onClick={handlePrev}
            className="p-3 rounded-none bg-slate-50 border border-slate-200 hover:border-[#0941DC] hover:text-[#0941DC] hover:bg-white transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Previous article"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Combined Article Panel Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 rounded-none overflow-hidden shadow-lg border border-slate-100 flex-grow items-stretch min-h-[350px]">
            
            {/* Left Column: Image (representing the active article) */}
            <div className="md:col-span-6 w-full h-[250px] md:h-auto min-h-[250px] relative overflow-hidden">
              <img 
                key={active.id}
                src={active.imageUrl} 
                alt={active.title} 
                className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 pointer-events-none" />
            </div>

            {/* Right Column: Dark Grey Panel containing Title, Summary, details and Button */}
            <div className="md:col-span-6 bg-[#080816] p-8 md:p-10 text-left flex flex-col justify-between items-start border-l border-white/5">
              <div className="w-full">
                {/* Tag & Meta info */}
                <div className="flex justify-between items-center mb-4">
                  <span className="px-2.5 py-1 rounded-none bg-[#0941DC]/10 border border-[#0941DC]/20 text-[#0941DC] text-[10px] font-extrabold tracking-widest uppercase">
                    {active.tag}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {active.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                  {active.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                  {active.summary}
                </p>
              </div>

              {/* Bottom Row: Read details + CTA Button */}
              <div className="w-full flex items-center justify-between pt-6 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  {active.readTime}
                </span>

                <a 
                  href={active.studyLink}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0941DC] text-white text-xs font-bold uppercase tracking-wider rounded-none shadow-md hover:bg-[#061F6B] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  Ler Notícia
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={handleNext}
            className="p-3 rounded-none bg-slate-50 border border-slate-200 hover:border-[#0941DC] hover:text-[#0941DC] hover:bg-white transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Next article"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
