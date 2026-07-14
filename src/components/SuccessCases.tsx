import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import sportImg from '../assets/sport.png';

interface CaseStudy {
  id: number;
  companyName: string;
  metric: string;
  metricLabel: string;
  tag: string;
  title: string;
  context: string;
  additionalMetrics?: { label: string; value: string }[];
  bulletPoints?: string[];
  imageUrl: string;
  studyLink: string;
}

const cases: CaseStudy[] = [
  {
    id: 1,
    companyName: 'Sport',
    metric: '11.500%',
    metricLabel: 'ROI Alcançado',
    tag: 'FUTEBOL / PERFORMANCE',
    title: 'Transformando paixão em receita recorrente e previsível',
    context: 'O desafio não era só gerar visibilidade, mas transformar uma base apaixonada de torcedores em receita recorrente e previsível por meio do programa de sócios. Desenvolvemos uma estratégia integrada de mídia, conectando Google Ads para capturar demanda ativa e Meta Ads para ampliar audiência, ativar intenção e acelerar conversões.',
    additionalMetrics: [
      { label: 'ROAS', value: '115x' },
      { label: 'CPA', value: 'R$ 0,53' }
    ],
    bulletPoints: [
      'A estratégia foi construída com segmentação baseada em comportamento, definição clara do papel de cada canal e otimização contínua orientada por dados.',
      'O resultado foi uma operação de mídia que deixou de ser um centro de custo e passou a atuar como um ativo de crescimento.'
    ],
    imageUrl: sportImg,
    studyLink: '#contact'
  },
  {
    id: 2,
    companyName: 'Coquetel Molotov',
    metric: '1.315%',
    metricLabel: 'ROI Alcançado',
    tag: 'FESTIVAL / PERFORMANCE',
    title: 'Previsibilidade na venda de ingressos para festival de música',
    context: 'O desafio do Coquetel Molotov era transformar interesse em venda de ingressos com previsibilidade. A estratégia foi construída a partir do entendimento da jornada do público, combinando canais com funções complementares: o Google Ads capturando demanda ativa e o Meta Ads ampliando desejo e ativando a comunidade do festival.',
    additionalMetrics: [
      { label: 'ROAS', value: '14,15x' }
    ],
    bulletPoints: [
      'Estratégia orientada por dados e comportamento de audiência.',
      'Estrutura de mídia focada em previsibilidade de receita.',
      'O resultado foi uma operação de marketing orientada por performance, capaz de transformar relevância cultural em crescimento sustentável de receita.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000',
    studyLink: '#contact'
  }
];

export default function SuccessCases() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = cases[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % cases.length);
  };

  return (
    <section id="cases" className="pt-10 pb-14 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="glow-spot top-1/2 left-[-150px] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Cases
          </h2>
        </div>

        {/* Logo Selector Row surrounded by Arrows */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mb-5 max-w-3xl mx-auto">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="p-2.5 rounded-none bg-slate-50 border border-slate-150 hover:border-[#0941DC] hover:text-[#0941DC] hover:bg-white transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Previous case"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Logo buttons */}
          <div className="flex gap-3 justify-center items-center flex-wrap">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-4 py-2.5 rounded-none text-xs font-black tracking-wide border transition-all duration-300 cursor-pointer focus:outline-none uppercase ${
                  idx === selectedIdx
                    ? 'bg-[#0941DC]/10 border-[#0941DC] text-[#0941DC] shadow-sm'
                    : 'bg-slate-50 border-slate-150 hover:border-slate-300 text-slate-700 font-bold'
                }`}
              >
                {c.companyName}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="p-2.5 rounded-none bg-slate-50 border border-slate-150 hover:border-[#0941DC] hover:text-[#0941DC] hover:bg-white transition-all cursor-pointer focus:outline-none shrink-0"
            aria-label="Next case"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Column Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Metrics & Content Details Card */}
          <div className="lg:col-span-7 bg-[#f8fafc] p-6 md:p-8 rounded-none border border-slate-100 shadow-sm text-left flex flex-col justify-between">
            <div>
              {/* Highlight Metric */}
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                  {active.metric}
                </span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  {active.metricLabel}
                </span>
              </div>

              {/* Tag & Info */}
              <span className="text-[10px] font-bold text-[#0941DC] tracking-widest uppercase block mb-2">
                {active.tag}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {active.title}
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                {active.context}
              </p>

              {/* Additional Metrics Grid */}
              {active.additionalMetrics && (
                <div className="grid grid-cols-2 gap-4 mb-4 border-y border-slate-200/50 py-3">
                  {active.additionalMetrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-bold text-slate-900">{m.value}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet Points */}
              {active.bulletPoints && (
                <ul className="space-y-1.5 mb-4">
                  {active.bulletPoints.map((pt, idx) => (
                    <li key={idx} className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                      <span className="text-[#0941DC] mt-0.5 shrink-0 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Study Link */}
            <div className="pt-4 border-t border-slate-200">
              <a 
                href={active.studyLink} 
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0941DC] hover:text-[#061F6B] transition-colors group/link"
              >
                Falar com especialista
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Representative Image */}
          <div className="lg:col-span-5 w-full min-h-[250px] lg:min-h-full">
            <div className="relative w-full h-full min-h-[250px] rounded-none overflow-hidden shadow-sm border border-slate-100">
              <img 
                key={active.id}
                src={active.imageUrl} 
                alt={active.companyName} 
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
