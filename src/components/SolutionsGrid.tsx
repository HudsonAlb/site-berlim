import { useState } from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

interface Solution {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  lpUrl: string;
  accent: string;
}

const solutionsList: Solution[] = [
  {
    id: 1,
    title: 'Tráfego pago de Alta Escala',
    description: 'Criamos e escalamos campanhas nas redes mais eficientes do mercado: Meta Ads, Google Ads, TikTok e LinkedIn Ads, focados em conversão direta.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    lpUrl: '#traffic-lp',
    accent: '#0941DC'
  },
  {
    id: 2,
    title: 'Design de Conversão & UX/UI',
    description: 'Páginas e criativos desenhados cientificamente para capturar atenção e converter cliques em vendas. Foco em interfaces limpas e responsivas.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000',
    lpUrl: '#design-lp',
    accent: '#0941DC'
  },
  {
    id: 3,
    title: 'Business Intelligence & CRO',
    description: 'Monitoramento detalhado de cada etapa do funil e testes A/B estruturados para aumentar a taxa de conversão sem gastar mais com mídia.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    lpUrl: '#cro-lp',
    accent: '#0941DC'
  },
  {
    id: 4,
    title: 'CRM, LTV & Automação de E-mail',
    description: 'Aumente o tempo de vida do seu cliente (LTV) com réguas de relacionamento otimizadas e campanhas personalizadas de e-mail e WhatsApp.',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000',
    lpUrl: '#crm-lp',
    accent: '#0941DC'
  }
];

export default function SolutionsGrid() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const activeSolution = solutionsList.find(s => s.id === activeTab) || solutionsList[0];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="glow-spot bottom-10 left-[-200px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Centered Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Nossos serviços
          </h2>
        </div>

        {/* Interactive layout: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Vertical Tabs Accordion */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {solutionsList.map((sol) => {
              const isActive = sol.id === activeTab;
              return (
                <div 
                  key={sol.id}
                  onClick={() => setActiveTab(sol.id)}
                  className={`p-6 rounded-none text-left transition-all duration-300 border cursor-pointer ${
                    isActive 
                      ? 'bg-slate-100/80 border-transparent shadow-sm' 
                      : 'bg-slate-50 border-transparent hover:bg-slate-100/50'
                  }`}
                >
                  <h3 className={`text-lg md:text-xl font-bold transition-colors ${isActive ? 'text-slate-900' : 'text-slate-800'}`}>
                    {sol.title}
                  </h3>
                  
                  {/* Expanded description if active */}
                  <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-slate-600 font-light leading-relaxed mb-4">
                      {sol.description}
                    </p>
                    <a 
                      href={sol.lpUrl}
                      className="inline-flex items-center gap-1 text-xs text-[#0941DC] hover:underline font-bold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Saiba Mais
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Topic Representative Image */}
          <div className="lg:col-span-6 w-full h-full min-h-[300px] md:min-h-[400px]">
            <div className="relative w-full h-[320px] md:h-[420px] rounded-none overflow-hidden shadow-md border border-slate-100">
              {/* Fade in transition for active image */}
              <img 
                key={activeSolution.id}
                src={activeSolution.imageUrl} 
                alt={activeSolution.title} 
                className="w-full h-full object-cover object-center transition-all duration-550"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <span className="absolute bottom-6 left-6 text-white text-xs font-bold uppercase tracking-widest bg-[#0941DC] px-3.5 py-1.5 rounded-none shadow-sm">
                {activeSolution.title}
              </span>
            </div>
          </div>

        </div>

        {/* Global CTA Row */}
        <div className="flex justify-center">
          <a 
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 bg-[#0941DC] text-white font-bold rounded-none shadow-md hover:bg-[#061F6B] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            Agendar Auditoria Grátis
          </a>
        </div>

      </div>
    </section>
  );
}
