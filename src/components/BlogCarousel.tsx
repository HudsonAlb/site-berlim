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
    <section id="news" className="py-12 lg:py-16 bg-[#030311] relative overflow-hidden border-t border-white/10 text-white">
      {/* Background Lighting Gradients (Figma CSS Pattern) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-[#0941DC]/10 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#0941DC]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#061F6B]/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-[1431px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-3xl sm:text-4xl lg:text-5xl leading-[100%] text-white tracking-tight">
            News
          </h2>
        </div>

        {/* Featured News Carousel Card (Compact Layout) */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          
          {/* Circular Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-[-16px] sm:left-[-24px] lg:left-[-28px] z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-slate-950 shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none border border-white"
            aria-label="Notícia anterior"
          >
            <ChevronLeft className="w-5 h-5 stroke-[3]" />
          </button>

          {/* Main Card Container with fixed standardized height */}
          <div 
            onClick={() => handleArticleClick(active.id)}
            className="w-full grid grid-cols-1 lg:grid-cols-12 rounded-[20px] overflow-hidden bg-[#1c1c21] border border-white/10 shadow-2xl items-stretch h-[480px] sm:h-[420px] lg:h-[380px] cursor-pointer group transition-all duration-500"
          >
            {/* Left Column (50% / 6 cols): Image Banner */}
            <div className="lg:col-span-6 relative w-full h-[200px] sm:h-[220px] lg:h-full overflow-hidden bg-[#030311]">
              <img 
                key={active.id}
                src={active.imageUrl} 
                alt={active.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1c1c21]/90 hidden lg:block pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c21] via-transparent to-transparent lg:hidden pointer-events-none" />
              
            </div>

            {/* Right Column (50% / 6 cols): Dark Panel Content */}
            <div className="lg:col-span-6 bg-[#1c1c21] p-5 sm:p-6 lg:p-8 text-left flex flex-col justify-between items-start border-t lg:border-t-0 lg:border-l border-white/5 h-full">
              <div className="w-full">
                {/* Date & Meta Info */}
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-2 font-['Inter',sans-serif]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#0941DC]" />
                    {active.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    {active.type === 'evento' ? <MapPin className="w-3.5 h-3.5 text-[#0941DC]" /> : <Clock className="w-3.5 h-3.5 text-[#0941DC]" />}
                    {active.readTimeOrLocation}
                  </span>
                </div>

                {/* Title (Standardized to line-clamp-2) */}
                <h3 className="font-['Clash_Display','Inter',sans-serif] font-bold text-lg sm:text-xl lg:text-2xl text-white mb-2 leading-snug group-hover:text-[#0941DC] transition-colors line-clamp-2">
                  {active.title}
                </h3>

                {/* Description Paragraph (Standardized to line-clamp-3) */}
                <p className="font-['Inter',sans-serif] font-normal text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3">
                  {active.summary}
                </p>
              </div>

              {/* Bottom Row with Pill Button */}
              <div className="w-full flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-xs text-slate-400 font-mono">
                  {selectedIdx + 1} / {newsData.length}
                </span>

                {/* Botão Pill Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleArticleClick(active.id);
                  }}
                  className="px-5 py-2 rounded-full bg-[#0941DC] hover:bg-[#061F6B] text-white font-['Inter',sans-serif] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0941DC]/30 transition-all duration-300 flex items-center gap-1.5 group-hover:scale-105 cursor-pointer"
                >
                  {active.actionText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Circular Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-[-16px] sm:right-[-24px] lg:right-[-28px] z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-slate-950 shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none border border-white"
            aria-label="Próxima notícia"
          >
            <ChevronRight className="w-5 h-5 stroke-[3]" />
          </button>

        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {newsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                idx === selectedIdx
                  ? 'w-6 bg-[#0941DC]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir para a notícia ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
