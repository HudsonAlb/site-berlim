import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

import trafegoImg from '../assets/nossosservicos/Tráfego pago de Alta Escala.png';
import designImg from '../assets/nossosservicos/Design de Conversão & UX_UI.png';
import biImg from '../assets/nossosservicos/Business Intelligence & CRO.png';
import crmImg from '../assets/nossosservicos/CRM, LTV & Automação de E-mail.png';

interface Solution {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  accent: string;
}

const solutionsList: Solution[] = [
  {
    id: 1,
    title: 'Treinamento e Desenvolvimento Empresarial',
    description: 'Capacitamos equipes e lideranças para atuar com mais estratégia, dados e tecnologia no dia a dia. Programas In Company, workshops e imersões que desenvolvem competências reais em marketing, vendas, gestão e adoção de IA, sempre conectados aos desafios específicos do seu negócio.',
    imageUrl: trafegoImg,
    accent: '#0941DC'
  },
  {
    id: 2,
    title: 'Desenvolvimento de Soluções com Dados, IA e Automação',
    description: 'Criamos produtos e sistemas sob medida que unem dados, inteligência artificial e automação para tornar sua operação mais eficiente. De dashboards que centralizam informações de CRM, tráfego e presença online a agentes de IA que automatizam processos, entregamos tecnologia aplicada a resultados.',
    imageUrl: designImg,
    accent: '#0941DC'
  },
  {
    id: 3,
    title: 'Growth System',
    description: 'Estruturamos um sistema de crescimento previsível, integrando estratégia comercial, marketing de performance e dados em um só processo. Mais que ações pontuais, construímos a engrenagem que gera demanda, converte e escala vendas de forma consistente.',
    imageUrl: biImg,
    accent: '#0941DC'
  },
  {
    id: 4,
    title: 'Brand System & Content',
    description: 'Construímos marcas fortes e conteúdo que gera conexão real com o público. Posicionamento, identidade e uma estratégia de conteúdo pensada para gerar autoridade, engajamento e resultado em todos os canais em que sua marca precisa estar.',
    imageUrl: crmImg,
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase font-['Clash_Display','Inter',sans-serif]">
            ALGUNS SERVIÇOS
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
                    <p className="text-sm text-slate-600 font-light leading-relaxed text-justify">
                      {sol.description}
                    </p>
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
