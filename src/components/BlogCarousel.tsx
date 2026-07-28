import { useState } from 'react';
import { newsData } from '../data/newsData';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

interface BlogCarouselProps {
  onOpenArticle?: (id: string) => void;
}

export default function BlogCarousel({ onOpenArticle }: BlogCarouselProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = newsData[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % newsData.length);
  };

  const handleArticleClick = (id: string) => {
    if (onOpenArticle) {
      onOpenArticle(id);
    }
  };

  return (
    <section id="news" className="py-20 lg:py-28 bg-[#030311] relative overflow-hidden border-t border-white/10 text-white">
      {/* Background Lighting Gradients (Figma CSS Pattern) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#0941DC]/10 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#0941DC]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#061F6B]/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-[1431px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header matching Figma "News" title */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-5xl sm:text-7xl lg:text-[80px] leading-[100%] text-white tracking-tight">
            News
          </h2>
        </div>

        {/* Featured News Carousel Card (Exact Figma 2-Column Split Layout) */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
          
          {/* Circular Left Arrow Button (Figma Spec) */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] sm:left-[-28px] lg:left-[-32px] z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white text-slate-950 shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none border border-white"
            aria-label="Notícia anterior"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Main Card Container */}
          <div 
            onClick={() => handleArticleClick(active.id)}
            className="w-full grid grid-cols-1 lg:grid-cols-12 rounded-[24px] overflow-hidden bg-[#1c1c21] border border-white/10 shadow-2xl items-stretch min-h-[420px] sm:min-h-[460px] cursor-pointer group transition-all duration-500"
          >
            {/* Left Column (50% / 6 cols): Image Banner (Red block in Figma wireframe) */}
            <div className="lg:col-span-6 relative w-full h-[280px] lg:h-auto min-h-[280px] overflow-hidden bg-[#030311]">
              <img 
                key={active.id}
                src={active.imageUrl} 
                alt={active.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1c1c21]/90 hidden lg:block pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c21] via-transparent to-transparent lg:hidden pointer-events-none" />
              
              {/* Category Tag */}
              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1.5 rounded-[7px] bg-[rgba(0,0,0,0.65)] border border-white/20 backdrop-blur-md text-[#0941DC] text-xs font-bold tracking-widest uppercase font-['Inter',sans-serif]">
                  {active.category}
                </span>
              </div>
            </div>

            {/* Right Column (50% / 6 cols): Dark Panel Content (Figma Grey Box) */}
            <div className="lg:col-span-6 bg-[#1c1c21] p-8 sm:p-10 lg:p-12 text-left flex flex-col justify-between items-start border-t lg:border-t-0 lg:border-l border-white/5">
              <div className="w-full">
                {/* Date & Meta Info */}
                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 mb-4 font-['Inter',sans-serif]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#0941DC]" />
                    {active.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    {active.type === 'evento' ? <MapPin className="w-4 h-4 text-[#0941DC]" /> : <Clock className="w-4 h-4 text-[#0941DC]" />}
                    {active.readTimeOrLocation}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Clash_Display','Inter',sans-serif] font-bold text-2xl sm:text-3xl text-white mb-4 leading-snug group-hover:text-[#0941DC] transition-colors">
                  {active.title}
                </h3>

                {/* Description Paragraph */}
                <p className="font-['Inter',sans-serif] font-normal text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {active.summary}
                </p>
              </div>

              {/* Bottom Row with Pill Button (botão em azul no Figma) */}
              <div className="w-full flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400 font-mono">
                  {selectedIdx + 1} / {newsData.length}
                </span>

                {/* Botão Pill Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleArticleClick(active.id);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#0941DC] hover:bg-[#061F6B] text-white font-['Inter',sans-serif] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0941DC]/30 transition-all duration-300 flex items-center gap-2 group-hover:scale-105 cursor-pointer"
                >
                  {active.actionText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Circular Right Arrow Button (Figma Spec) */}
          <button
            onClick={handleNext}
            className="absolute right-[-20px] sm:right-[-28px] lg:right-[-32px] z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-white text-slate-950 shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none border border-white"
            aria-label="Próxima notícia"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {newsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                idx === selectedIdx
                  ? 'w-8 bg-[#0941DC]'
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir para a notícia ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
