import { useState } from 'react';
import bdash9 from '../assets/Bdash 9.png';
import { 
  BarChart3, 
  Layers, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  X,
  Sparkles
} from 'lucide-react';

export default function BDashSection() {
  const [activeTab, setActiveTab] = useState<'ga4' | 'trafego' | 'roi'>('ga4');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.email && formData.telefone && formData.empresa) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ nome: '', email: '', telefone: '', empresa: '' });
        setIsModalOpen(false);
      }, 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="bdash" className="py-20 lg:py-28 bg-[#030311] relative overflow-hidden border-t border-white/10 text-white min-h-[954px] flex flex-col justify-between">
      
      {/* LAYER 1: Base Background & Gradient Lighting (Reference Image Gradient) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0941DC]/25 via-[#061F6B]/15 to-[#030311] pointer-events-none z-0" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#0941DC]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[#061F6B]/20 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* LAYER 2: Bdash 9 Background Image */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <img
          src={bdash9}
          alt="B-DASH Dashboard"
          className="w-full h-full object-cover object-center opacity-75 lg:opacity-85"
        />
        {/* Gradient overlays — only on edges to keep text legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030311]/80 via-transparent to-[#030311]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030311]/70 via-transparent to-[#030311]/30" />
      </div>

      {/* LAYER 3: Interactive Foreground Content Overlay */}
      <div className="max-w-[1431px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-between h-full">
        
        {/* Header Title (Conheça a B-Dash) */}
        <div className="text-center max-w-4xl mx-auto pt-4 mb-12 lg:mb-16">
          <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-4xl sm:text-6xl lg:text-[72px] leading-[100%] text-white tracking-tight">
            Conheça a B-Dash
          </h2>
        </div>

        {/* Middle Canvas: Positioned Pill Badges Floating over the Background App Layer */}
        <div className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] w-full flex flex-col justify-between py-6">
          
          {/* Top Left Pill: Atribuição GA4 & CRM */}
          <div className="flex flex-col items-start lg:ml-8 max-w-xs sm:max-w-sm mb-6 lg:mb-0">
            <div
              onClick={() => setActiveTab('ga4')}
              className={`group transition-all duration-300 cursor-pointer backdrop-blur-md rounded-[7px] p-4 border text-left ${
                activeTab === 'ga4'
                  ? 'bg-black/70 border-[#0941DC] shadow-[0_4px_25px_rgba(9,65,220,0.4)] ring-1 ring-[#0941DC]'
                  : 'bg-[rgba(0,0,0,0.40)] hover:bg-black/60 border-white/15 hover:border-white/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className={`w-5 h-5 ${activeTab === 'ga4' ? 'text-[#0941DC]' : 'text-slate-300'}`} />
                <h4 className="font-['Inter',sans-serif] font-semibold text-lg sm:text-[22px] lg:text-[24px] leading-[100%] text-white whitespace-nowrap">
                  Atribuição GA4 & CRM
                </h4>
              </div>
              {activeTab === 'ga4' && (
                <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-slate-300 mt-3 pt-2 border-t border-white/10 leading-relaxed animate-fade-in">
                  Mapeie a jornada completa do lead, do primeiro clique ao fechamento de vendas na RD Station.
                </p>
              )}
            </div>
          </div>

          {/* Middle Left Pill: Tráfego Pago & Ads Multi-canal */}
          <div className="flex flex-col items-start lg:ml-8 max-w-xs sm:max-w-md my-6 lg:my-0">
            <div
              onClick={() => setActiveTab('trafego')}
              className={`group transition-all duration-300 cursor-pointer backdrop-blur-md rounded-[7px] p-4 border text-left drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${
                activeTab === 'trafego'
                  ? 'bg-black/70 border-[#0941DC] shadow-[0_4px_25px_rgba(9,65,220,0.4)] ring-1 ring-[#0941DC]'
                  : 'bg-[rgba(0,0,0,0.40)] hover:bg-black/60 border-white/15 hover:border-white/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <BarChart3 className={`w-5 h-5 ${activeTab === 'trafego' ? 'text-[#0941DC]' : 'text-slate-300'}`} />
                <h4 className="font-['Inter',sans-serif] font-semibold text-lg sm:text-[22px] lg:text-[24px] leading-[100%] text-white whitespace-nowrap">
                  Tráfego Pago & Ads Multi-canal
                </h4>
              </div>
              {activeTab === 'trafego' && (
                <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-slate-300 mt-3 pt-2 border-t border-white/10 leading-relaxed animate-fade-in">
                  Compare investimentos e CAC consolidado em Meta, Google, LinkedIn e TikTok num só painel.
                </p>
              )}
            </div>
          </div>

          {/* Middle Right Pill: Roi Consolidade & LVR */}
          <div className="flex flex-col items-end lg:mr-8 max-w-xs sm:max-w-sm self-end my-4 lg:my-0">
            <div
              onClick={() => setActiveTab('roi')}
              className={`group transition-all duration-300 cursor-pointer backdrop-blur-md rounded-[7px] p-4 border text-left ${
                activeTab === 'roi'
                  ? 'bg-black/70 border-[#0941DC] shadow-[0_4px_25px_rgba(9,65,220,0.4)] ring-1 ring-[#0941DC]'
                  : 'bg-[rgba(0,0,0,0.40)] hover:bg-black/60 border-white/15 hover:border-white/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <TrendingUp className={`w-5 h-5 ${activeTab === 'roi' ? 'text-[#0941DC]' : 'text-slate-300'}`} />
                <h4 className="font-['Inter',sans-serif] font-semibold text-lg sm:text-[22px] lg:text-[24px] leading-[100%] text-white whitespace-nowrap">
                  Roi Consolidade & LVR
                </h4>
              </div>
              {activeTab === 'roi' && (
                <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-slate-300 mt-3 pt-2 border-t border-white/10 leading-relaxed animate-fade-in">
                  Acompanhe a velocidade de crescimento de leads (LVR) e rentabilidade consolidada em tempo real.
                </p>
              )}
            </div>
          </div>

          {/* Request Access CTA Floating Button */}
          <div className="self-center mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="py-3 px-6 bg-[#0941DC] hover:bg-[#061F6B] text-white font-['Inter',sans-serif] font-bold uppercase tracking-wider text-xs transition-all duration-300 rounded-[7px] shadow-lg shadow-[#0941DC]/30 flex items-center gap-2 group cursor-pointer border border-[#0941DC]"
            >
              <Sparkles className="w-4 h-4" />
              Solicitar Acesso ao B-DASH
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

        {/* Bottom Cards Row (Exact Reference Order: Integração RD Station -> Atualização Automática -> Acesso Mobile Responsivo) */}
        <div className="max-w-[1358px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8 pb-4">
          
          {/* Card 1: Integração RD Station */}
          <div className="bg-[#080816]/90 backdrop-blur-md p-6 lg:p-7 rounded-[7px] border border-white/10 hover:border-[#0941DC]/50 transition-all duration-300 text-left flex flex-col justify-between min-h-[131px] group shadow-xl">
            <div>
              <h4 className="font-['Inter',sans-serif] font-semibold text-[20px] leading-[100%] text-white mb-3">
                Integração RD Station
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[120%] text-slate-200">
                Plugue seu CRM e mapeie o desempenho do seu comercial de forma automática, segmentando vendedores e conversões.
              </p>
            </div>
          </div>

          {/* Card 2: Atualização Automática */}
          <div className="bg-[#080816]/90 backdrop-blur-md p-6 lg:p-7 rounded-[7px] border border-white/10 hover:border-[#0941DC]/50 transition-all duration-300 text-left flex flex-col justify-between min-h-[131px] group shadow-xl">
            <div>
              <h4 className="font-['Inter',sans-serif] font-semibold text-[20px] leading-[100%] text-white mb-3">
                Atualização Automática
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[120%] text-slate-200">
                O B-DASH atualiza seus dados a cada hora, garantindo previsibilidade para tomadas de decisões cirúrgicas.
              </p>
            </div>
          </div>

          {/* Card 3: Acesso Mobile Responsivo */}
          <div className="bg-[#080816]/90 backdrop-blur-md p-6 lg:p-7 rounded-[7px] border border-white/10 hover:border-[#0941DC]/50 transition-all duration-300 text-left flex flex-col justify-between min-h-[131px] group shadow-xl">
            <div>
              <h4 className="font-['Inter',sans-serif] font-semibold text-[20px] leading-[100%] text-white mb-3">
                Acesso Mobile Responsivo
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[120%] text-slate-200">
                Acompanhe o faturamento de mídia direto do seu smartphone na praia, em trânsito ou no escritório corporativo.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Access Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div 
            className="relative w-full max-w-lg bg-[#080816] border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="font-['Clash_Display','Inter',sans-serif] text-2xl font-bold text-white mb-2">
                  Solicitação Recebida!
                </h3>
                <p className="font-['Inter',sans-serif] text-slate-300 text-sm max-w-sm mx-auto">
                  Nossos engenheiros de growth estão analisando seu perfil e entrarão em contato em breve para liberar seu acesso ao B-DASH.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#0941DC] uppercase bg-[#0941DC]/15 px-3 py-1 rounded-full inline-block mb-3 font-['Inter',sans-serif]">
                    B-DASH Beta
                  </span>
                  <h3 className="font-['Clash_Display','Inter',sans-serif] text-2xl font-bold text-white">
                    Solicitar Demonstração
                  </h3>
                  <p className="font-['Inter',sans-serif] text-xs text-slate-400 mt-1.5">
                    Inscreva-se na lista de espera exclusiva e agende uma demonstração prática da nossa inteligência comercial.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5 font-['Inter',sans-serif]">Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      placeholder="Ex: João Albuquerque"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-[7px] bg-white/5 border border-white/10 focus:border-[#0941DC] focus:outline-none text-white text-sm font-medium transition-all"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5 font-['Inter',sans-serif]">E-mail Corporativo *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Ex: joao@empresa.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-[7px] bg-white/5 border border-white/10 focus:border-[#0941DC] focus:outline-none text-white text-sm font-medium transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5 font-['Inter',sans-serif]">WhatsApp *</label>
                      <input
                        type="tel"
                        name="telefone"
                        required
                        placeholder="Ex: (11) 99999-9999"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-[7px] bg-white/5 border border-white/10 focus:border-[#0941DC] focus:outline-none text-white text-sm font-medium transition-all"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5 font-['Inter',sans-serif]">Nome da Empresa *</label>
                      <input
                        type="text"
                        name="empresa"
                        required
                        placeholder="Ex: Berlim Company"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-[7px] bg-white/5 border border-white/10 focus:border-[#0941DC] focus:outline-none text-white text-sm font-medium transition-all"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-4 px-6 bg-[#0941DC] hover:bg-[#061F6B] text-white font-['Inter',sans-serif] font-bold uppercase tracking-wider text-xs transition-all duration-300 rounded-[7px] shadow-lg shadow-[#0941DC]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Garantir Meu Acesso
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
