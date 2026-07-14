import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Slide {
  id: number;
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image: string; // Deloitte fallback static image
  video: string; // Deloitte lifestyle corporate high-quality looping video
}

const slides: Slide[] = [
  {
    id: 1,
    tag: 'INTELECTO & PERFORMANCE',
    titleLine1: 'Transformamos Dados em',
    titleLine2: 'Crescimento Exponencial.',
    description: 'Agência de growth marketing focada em gerar ROI real por meio de tecnologia proprietária, criatividade cirúrgica e campanhas de alta performance.',
    primaryCta: 'Acelerar Meu Negócio',
    secondaryCta: 'Ver Nossos Cases',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000',
    video: 'https://cdn.pixabay.com/video/2019/04/16/22892-331665476_large.mp4' // Corporate technology network concept
  },
  {
    id: 2,
    tag: 'ENGENHARIA DE CONVERSÃO',
    titleLine1: 'Engenharia Criativa para',
    titleLine2: 'Marcas que Lideram.',
    description: 'Construímos funis de vendas ultra-otimizados e campanhas de tráfego pago que dominam canais digitais e maximizam margens de lucro.',
    primaryCta: 'Desenhar Minha Estratégia',
    secondaryCta: 'Nossas Soluções',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    video: 'https://cdn.pixabay.com/video/2021/04/12/70876-538180486_large.mp4' // Analytics charts screen interface loop
  },
  {
    id: 3,
    tag: 'BUSINESS INTELLIGENCE',
    titleLine1: 'Decisões Inteligentes baseadas',
    titleLine2: 'em Dados em Tempo Real.',
    description: 'Dashboards integrados e monitoramento contínuo para transformar cliques em leads altamente qualificados e clientes fiéis.',
    primaryCta: 'Agendar Demonstração',
    secondaryCta: 'Conhecer Métricas',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2000',
    video: 'https://cdn.pixabay.com/video/2016/09/21/5125-181676646_large.mp4' // Lifestyle workspace and meeting corporate loop
  }
];

const TIMER_DURATION = 6000; // 6 seconds per slide

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const intervalTime = 50; // Update every 50ms
    const step = (intervalTime / TIMER_DURATION) * 100;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#030311] flex items-center justify-center">
      {/* Background slide elements */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 scale-100 visible z-10' : 'opacity-0 scale-105 invisible z-0'
          }`}
        >
          {/* Main Background Video or Fallback Image */}
          {idx === current ? (
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 opacity-40"
              poster={slide.image}
            />
          ) : (
            <img
              src={slide.image}
              alt={slide.titleLine2}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            />
          )}

          {/* Premium overlay: Dark gradient on the left side to ensure high readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030311] via-[#030311]/85 md:from-[#030311]/95 md:via-[#030311]/75 to-transparent z-10" />

          {/* Slide Content */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full h-full flex items-center justify-start relative z-20 mt-8">
            <div className="max-w-3xl text-left">
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#0941DC]/10 border border-[#0941DC]/20 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#0941DC] animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-xs font-bold tracking-widest text-[#0941DC] uppercase">{slide.tag}</span>
              </div>

              {/* Lettering */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                {slide.titleLine1} <br />
                <span className="text-[#0941DC]">
                  {slide.titleLine2}
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                {slide.description}
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-[#0941DC] hover:bg-[#061F6B] text-white font-bold rounded-none shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  {slide.primaryCta}
                </a>
                <a 
                  href="#solutions"
                  className="px-8 py-4 border border-white/20 hover:border-white/40 text-white bg-transparent font-semibold rounded-none transition-all duration-300 hover:scale-[1.02] hover:bg-white/5"
                >
                  {slide.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}


      {/* Slide Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 z-30 p-3 rounded-none border border-white/10 hover:border-[#0941DC] bg-black/40 hover:bg-black/80 text-white hover:scale-105 transition-all duration-300 shadow-sm focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 z-30 p-3 rounded-none border border-white/10 hover:border-[#0941DC] bg-black/40 hover:bg-black/80 text-white hover:scale-105 transition-all duration-300 shadow-sm focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Deluxe Progress Timeline (Deloitte Style) */}
      <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 z-30 max-w-7xl mx-auto flex items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <span className="text-[#0941DC]">0{current + 1}</span>
          <span className="text-white/20">/</span>
          <span className="text-white/40">0{slides.length}</span>
        </div>
        
        <div className="flex flex-1 gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setProgress(0);
              }}
              className="flex-1 h-1.5 bg-white/10 rounded-none overflow-hidden transition-all duration-300 group"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div 
                className="h-full bg-[#0941DC] transition-all"
                style={{ 
                  width: idx === current ? `${progress}%` : idx < current ? '100%' : '0%',
                  transition: idx === current ? 'width 50ms linear' : 'width 300ms ease-in-out'
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

