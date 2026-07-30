import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  companyName: string;
  quote: string;
  authorName: string;
  authorRole: string;
  avatarUrl: string;
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
    <section id="testimonials" className="py-20 lg:py-28 bg-[#030311] relative overflow-hidden border-t border-white/10 text-white">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#0941DC]/10 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#0941DC]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-[#0941DC]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1431px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-4xl sm:text-6xl lg:text-[72px] leading-[100%] text-white tracking-tight mb-4 sm:mb-6">
            Feedbacks
          </h2>

          <p className="font-['Inter',sans-serif] font-normal text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Veja como ajudamos grandes marcas a multiplicar receitas e escalar operações com estratégias de growth de alta performance.
          </p>
        </div>

        {/* Pill Selector Tabs (Figma Style matching B-Dash section) */}
        <div className="flex justify-center items-center gap-3 flex-wrap mb-12">
          {testimonials.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-6 py-3.5 rounded-[7px] text-base font-semibold font-['Inter',sans-serif] leading-[100%] transition-all duration-300 border cursor-pointer backdrop-blur-md focus:outline-none ${
                idx === selectedIdx
                  ? 'bg-black/40 border-[#0941DC] shadow-[0_4px_20px_rgba(9,65,220,0.3)] ring-1 ring-[#0941DC]/50 text-white'
                  : 'bg-[rgba(0,0,0,0.25)] border-white/10 hover:border-white/20 hover:bg-black/35 text-slate-300'
              }`}
            >
              {t.companyName}
            </button>
          ))}
        </div>

        {/* Testimonial Slider Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 max-w-[1287px] mx-auto">
          
          {/* Left Arrow Button (Desktop) */}
          <button 
            onClick={handlePrev}
            className="hidden md:flex p-4 rounded-[7px] bg-[rgba(0,0,0,0.25)] border border-white/10 hover:border-[#0941DC]/50 hover:bg-[#0941DC]/20 text-white transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial Main Content Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch flex-grow w-full">
            
            {/* Left Side: Photo + Author Info Box */}
            <div className="md:col-span-4 flex flex-col gap-3 md:gap-4 items-center md:items-stretch w-full">
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-auto md:aspect-square rounded-[7px] overflow-hidden border border-white/10 shadow-xl bg-[#080816]">
                <img 
                  key={active.id}
                  src={active.avatarUrl} 
                  alt={active.authorName} 
                  className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105" 
                />
              </div>
              <div className="bg-[#080816] p-4 sm:p-5 rounded-[7px] border border-white/10 text-left w-full">
                <h4 className="font-['Inter',sans-serif] font-bold text-white text-sm sm:text-base leading-tight">
                  {active.authorName}
                </h4>
                <p className="font-['Inter',sans-serif] font-normal text-xs text-slate-400 mt-0.5 sm:mt-1">
                  {active.authorRole}
                </p>
              </div>
            </div>

            {/* Right Side: Highlight Metric Box + Quote (Group 40 / Card Style) */}
            <div className="md:col-span-8 bg-[#080816] p-5 sm:p-8 md:p-10 rounded-[7px] border border-white/10 text-left flex flex-col justify-between relative shadow-xl shadow-[#0941DC]/5">
              <Quote className="absolute right-4 top-4 sm:right-8 sm:top-8 w-12 h-12 sm:w-24 sm:h-24 text-[#0941DC]/10 pointer-events-none" />
              
              {/* Highlight Metric */}
              <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10">
                <div className="font-['Clash_Display','Inter',sans-serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
                  {active.resultMetric}
                </div>
                <div className="font-['Inter',sans-serif] font-semibold text-xs sm:text-base text-slate-300 tracking-wide max-w-[220px] leading-tight">
                  {active.resultLabel}
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="font-['Inter',sans-serif] font-normal text-xs sm:text-lg text-slate-200 leading-relaxed italic relative z-10">
                "{active.quote}"
              </blockquote>
            </div>

          </div>

          {/* Right Arrow Button (Desktop) */}
          <button 
            onClick={handleNext}
            className="hidden md:flex p-4 rounded-[7px] bg-[rgba(0,0,0,0.25)] border border-white/10 hover:border-[#0941DC]/50 hover:bg-[#0941DC]/20 text-white transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden justify-center items-center gap-4 mt-2">
            <button 
              onClick={handlePrev}
              className="p-3.5 rounded-[7px] bg-[rgba(0,0,0,0.25)] border border-white/10 hover:border-[#0941DC]/50 text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-['Inter',sans-serif] text-xs text-slate-400 font-medium select-none">
              {selectedIdx + 1} / {testimonials.length}
            </span>
            <button 
              onClick={handleNext}
              className="p-3.5 rounded-[7px] bg-[rgba(0,0,0,0.25)] border border-white/10 hover:border-[#0941DC]/50 text-white transition-all cursor-pointer focus:outline-none"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
