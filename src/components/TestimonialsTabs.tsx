import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  companyName: string;
  quote: string;
  authorName: string;
  authorRole: string;
  avatarUrl: string; // Placeholder profile URLs or nice initials
  resultMetric: string;
  resultLabel: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    companyName: 'Apex Biotech',
    quote: 'A Berlim Co. reformulou completamente nossa estratégia de captação digital. O custo por lead qualificado (CPL) reduziu em 45% e finalmente conseguimos previsibilidade para expandir nossa equipe de vendas.',
    authorName: 'Dr. Lucas Medeiros',
    authorRole: 'CEO @ Apex Biotech',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250&h=250',
    resultMetric: '+320%',
    resultLabel: 'Aumento em Vendas Digitais'
  },
  {
    id: 2,
    companyName: 'Logix Logistics',
    quote: 'A implementação dos dashboards de atribuição e CRO nos trouxe clareza absoluta de onde cada real era gasto. Escalamos nossos anúncios mensais de R$ 50k para R$ 250k mantendo o ROAS acima de 4.2x.',
    authorName: 'Mariana Guedes',
    authorRole: 'Diretora de Performance @ Logix',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250&h=250',
    resultMetric: '4.2x ROAS',
    resultLabel: 'Retorno Médio Mantido'
  },
  {
    id: 3,
    companyName: 'Velo Fintech',
    quote: 'Com o tráfego de alta conversão da Berlim Co., batemos a meta de novos correntistas ativos em apenas 6 meses. O suporte ágil e o comprometimento técnico do time deles é sem precedentes no Brasil.',
    authorName: 'Felipe Alencar',
    authorRole: 'Head de Growth @ Velo',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250&h=250',
    resultMetric: '-45% CPL',
    resultLabel: 'Redução de Custo por Lead'
  }
];

export default function TestimonialsTabs() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = testimonials[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#03030e] relative overflow-hidden border-t border-white/5">
      <div className="glow-spot-dark top-10 right-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Feedbacks
          </h2>
        </div>

        {/* Pill Selector Tabs (Center Row) */}
        <div className="flex justify-center items-center gap-3 flex-wrap mb-12">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-6 py-2.5 rounded-none text-sm font-semibold transition-all duration-300 border cursor-pointer focus:outline-none ${
                idx === selectedIdx
                  ? 'bg-slate-200 border-transparent text-slate-900 shadow-md'
                  : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300'
              }`}
            >
              {t.companyName}
            </button>
          ))}
        </div>

        {/* Slider Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Left Arrow Button (Desktop only) */}
          <button 
            onClick={handlePrev}
            className="hidden md:flex p-3 rounded-none bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Panel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start flex-grow w-full">
            
            {/* Left Side: Photo + Author Info Box */}
            <div className="md:col-span-4 flex flex-col gap-4 items-center md:items-stretch w-full">
              <div className="relative w-full aspect-square rounded-none overflow-hidden border border-white/10 shadow-lg">
                <img 
                  key={active.id}
                  src={active.avatarUrl} 
                  alt={active.authorName} 
                  className="w-full h-full object-cover object-center transition-all duration-500" 
                />
              </div>
              <div className="bg-[#f8fafc]/5 p-4 rounded-none border border-white/5 text-left w-full">
                <h4 className="text-sm font-bold text-white leading-tight">{active.authorName}</h4>
                <p className="text-xs text-slate-400 font-light mt-1">{active.authorRole}</p>
              </div>
            </div>

            {/* Right Side: Highlight Metric Box + Quote */}
            <div className="md:col-span-8 bg-transparent p-8 md:p-10 rounded-none border border-white/10 text-left min-h-[300px] flex flex-col justify-center relative">
              <Quote className="absolute right-8 top-8 w-24 h-24 text-[#0052ff]/5 pointer-events-none" />
              
              {/* Highlight Metric */}
              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-white/5">
                <div className="text-5xl font-black text-white tracking-tight leading-none">
                  {active.resultMetric}
                </div>
                <div className="text-sm font-semibold text-slate-300 tracking-wide max-w-[200px]">
                  {active.resultLabel}
                </div>
              </div>

              {/* Quote Testimonial Text */}
              <blockquote className="text-base md:text-lg text-slate-300 font-light leading-relaxed italic">
                "{active.quote}"
              </blockquote>
            </div>

          </div>

          {/* Right Arrow Button (Desktop only) */}
          <button 
            onClick={handleNext}
            className="hidden md:flex p-3 rounded-none bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile Navigation Arrows (Mobile only) */}
          <div className="flex md:hidden justify-center items-center gap-4 mt-2">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-none bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-slate-400 font-medium select-none">
              {selectedIdx + 1} / {testimonials.length}
            </span>
            <button 
              onClick={handleNext}
              className="p-3 rounded-none bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
