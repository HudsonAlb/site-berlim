import { useState } from 'react';
import { 
  BarChart3, 
  Activity, 
  Layers, 
  Smartphone, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  ShieldCheck,
  Database,
  ArrowRight,
  X
} from 'lucide-react';


export default function BDashSection() {
  const [activeTab, setActiveTab] = useState<'funil' | 'mkt' | 'roi'>('funil');
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
    <section id="bdash" className="py-24 bg-brand-gradient-dark relative overflow-hidden border-t border-white/5">
      {/* Decorative radial gradients for dark mode depth */}
      <div className="absolute top-1/4 left-[-100px] w-96 h-96 bg-[#0052ff]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-100px] w-96 h-96 bg-[#0052ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Category Badge & Main Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#0052ff]/10 border border-[#0052ff]/20 mb-6">
            <Activity className="w-4 h-4 text-[#0052ff] animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-[#0052ff] uppercase">TECNOLOGIA EXCLUSIVA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Conheça o <span className="text-[#0052ff]">B-DASH</span>. A inteligência comercial da sua marca consolidada em tempo real.
          </h2>
          <p className="text-slate-300 font-light text-lg">
            Esqueça relatórios manuais e dados fragmentados. O B-DASH é a nossa plataforma proprietária que conecta todo o seu ecossistema de aquisição em um único painel estratégico.
          </p>
        </div>

        {/* Product Visual Mockup & Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Interactive UI Mockup (Left Column) */}
          <div className="lg:col-span-7 w-full order-2 lg:order-1">
            <div className="bg-[#080816] p-6 md:p-8 rounded-none border border-white/5 shadow-2xl relative overflow-hidden">
              
              {/* Fake Window Controls */}
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-none bg-rose-400" />
                <div className="w-3 h-3 rounded-none bg-amber-400" />
                <div className="w-3 h-3 rounded-none bg-emerald-400" />
                <span className="text-xs font-mono text-slate-400 ml-4">bdash.berlim.co/dashboard</span>
              </div>

              {/* Dynamic tab contents mimicking powerBI widgets */}
              {activeTab === 'funil' && (
                <div className="space-y-6 animate-fade-in text-left">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#0c0c22] p-4 rounded-none border border-white/5 shadow-sm">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Receita CRM</span>
                      <span className="text-lg font-black text-white">R$ 294.673</span>
                      <span className="text-xs text-emerald-500 font-semibold block mt-1">↑ 18.2%</span>
                    </div>
                    <div className="bg-[#0c0c22] p-4 rounded-none border border-white/5 shadow-sm">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Sessões GA4</span>
                      <span className="text-lg font-black text-white">11.059</span>
                      <span className="text-xs text-slate-400 block mt-1">Meta Batida</span>
                    </div>
                    <div className="bg-[#0c0c22] p-4 rounded-none border border-white/5 shadow-sm">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Conversão</span>
                      <span className="text-lg font-black text-white">19,30%</span>
                      <span className="text-xs text-sky-400 font-semibold block mt-1">Alta de CPL</span>
                    </div>
                  </div>

                  {/* Funnel Graph Mockup */}
                  <div className="bg-[#0c0c22] p-4 rounded-none border border-white/5 shadow-sm">
                    <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">Etapas do Funil</h5>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-400">1. Sessões Organizadas</span>
                          <span className="text-white">11.059 (100%)</span>
                        </div>
                        <div className="h-6 w-full bg-white/5 rounded-none overflow-hidden">
                          <div className="h-full bg-[#0052ff] rounded-none" style={{ width: '100%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-400">2. Leads no CRM</span>
                          <span className="text-white">1.701 (15,3%)</span>
                        </div>
                        <div className="h-6 w-full bg-white/5 rounded-none overflow-hidden">
                          <div className="h-full bg-[#0052ff]/80 rounded-none" style={{ width: '55%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-slate-400">3. Vendas Ganhas</span>
                          <span className="text-white">329 (3,1%)</span>
                        </div>
                        <div className="h-6 w-full bg-white/5 rounded-none overflow-hidden">
                          <div className="h-full bg-[#0052ff]/60 rounded-none" style={{ width: '22%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mkt' && (
                <div className="space-y-6 animate-fade-in text-left">
                  {/* Top stats for Ads */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#0c0c22] p-4 rounded-none border border-white/5 shadow-sm">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Meta Ads ROI</span>
                      <span className="text-lg font-black text-white">4.5x</span>
                      <span className="text-xs text-sky-400 block mt-1">R$ 48k investidos</span>
                    </div>
                    <div className="bg-[#0c0c22] p-4 rounded-none border border-white/5 shadow-sm">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Google Ads ROI</span>
                      <span className="text-lg font-black text-white">5.2x</span>
                      <span className="text-xs text-sky-400 block mt-1">R$ 35k investidos</span>
                    </div>
                    <div className="bg-[#0c0c22] p-4 rounded-none border border-white/5 shadow-sm">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Custo por Lead</span>
                      <span className="text-lg font-black text-white">R$ 14,20</span>
                      <span className="text-xs text-emerald-500 font-semibold block mt-1">↓ 12% queda</span>
                    </div>
                  </div>

                  {/* Channel Breakdown */}
                  <div className="bg-[#0c0c22] p-5 rounded-none border border-white/5 shadow-sm">
                    <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">Investimento por Redes Sociais</h5>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-400 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-none bg-[#0052ff]" />
                          Facebook & Instagram Ads
                        </span>
                        <span className="font-bold text-white">R$ 124.500 (52%)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-400 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-none bg-[#0052ff]/70" />
                          Google & YouTube Ads
                        </span>
                        <span className="font-bold text-white">R$ 88.420 (36%)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-400 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-none bg-purple-500" />
                          TikTok Ads & Outros
                        </span>
                        <span className="font-bold text-white">R$ 29.620 (12%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'roi' && (
                <div className="space-y-6 animate-fade-in text-left">
                  {/* KPI card matrix */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0c0c22] p-6 rounded-none border border-white/5 shadow-sm flex items-center gap-4">
                      <div className="p-3 rounded-none bg-emerald-500/10 text-emerald-500">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">ROI Consolidado</span>
                        <span className="text-xl font-extrabold text-white">R$ 412.980</span>
                        <span className="text-xs text-emerald-500 font-bold block">4.2x retorno</span>
                      </div>
                    </div>

                    <div className="bg-[#0c0c22] p-6 rounded-none border border-white/5 shadow-sm flex items-center gap-4">
                      <div className="p-3 rounded-none bg-[#0052ff]/10 text-[#0052ff]">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase block">Métrica LVR</span>
                        <span className="text-xl font-extrabold text-white">142,5%</span>
                        <span className="text-xs text-sky-400 font-bold block">Crescimento de Leads</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0c0c22] p-4 rounded-none border border-white/5 shadow-sm flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-mono">Última atualização: Hoje 21:58</span>
                    <span className="text-emerald-500 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" />
                      Conexão Segura SSL Homologada
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>
          
          {/* Interactive features list (Right Column) */}
          <div className="lg:col-span-5 text-left space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Uma visão 360° da sua operação
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Navegue pelas abas para explorar como o B-DASH organiza seus KPIs e automatiza insights de marketing.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Tab 1 */}
              <div
                onClick={() => setActiveTab('funil')}
                className={`p-5 rounded-none text-left transition-all duration-300 border cursor-pointer ${
                  activeTab === 'funil'
                    ? 'bg-[#0052ff]/15 border-[#0052ff]/50 shadow-sm'
                    : 'bg-[#080816] border-white/5 hover:border-white/10 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-none ${activeTab === 'funil' ? 'bg-[#0052ff] text-white' : 'bg-white/5 text-slate-400'}`}>
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className={`text-base font-bold ${activeTab === 'funil' ? 'text-white' : 'text-slate-300'}`}>
                    Atribuição GA4 & CRM
                  </h4>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${activeTab === 'funil' ? 'max-h-24 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Mapeie a jornada desde o primeiro clique até o fechamento de vendas no CRM da RD Station de forma integrada.
                  </p>
                </div>
              </div>

              {/* Tab 2 */}
              <div
                onClick={() => setActiveTab('mkt')}
                className={`p-5 rounded-none text-left transition-all duration-300 border cursor-pointer ${
                  activeTab === 'mkt'
                    ? 'bg-[#0052ff]/15 border-[#0052ff]/50 shadow-sm'
                    : 'bg-[#080816] border-white/5 hover:border-white/10 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-none ${activeTab === 'mkt' ? 'bg-[#0052ff] text-white' : 'bg-white/5 text-slate-400'}`}>
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h4 className={`text-base font-bold ${activeTab === 'mkt' ? 'text-white' : 'text-slate-300'}`}>
                    Tráfego Pago & Ads Multi-canal
                  </h4>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${activeTab === 'mkt' ? 'max-h-24 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Compare investimentos e custos de aquisição (CAC) consolidados entre Facebook, Google, Instagram e TikTok.
                  </p>
                </div>
              </div>

              {/* Tab 3 */}
              <div
                onClick={() => setActiveTab('roi')}
                className={`p-5 rounded-none text-left transition-all duration-300 border cursor-pointer ${
                  activeTab === 'roi'
                    ? 'bg-[#0052ff]/15 border-[#0052ff]/50 shadow-sm'
                    : 'bg-[#080816] border-white/5 hover:border-white/10 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-none ${activeTab === 'roi' ? 'bg-[#0052ff] text-white' : 'bg-white/5 text-slate-400'}`}>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className={`text-base font-bold ${activeTab === 'roi' ? 'text-white' : 'text-slate-300'}`}>
                    Roi Consolidado & LVR
                  </h4>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${activeTab === 'roi' ? 'max-h-24 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Monitore a velocidade de crescimento de leads (LVR) e a taxa de retorno consolidada sobre seus investimentos.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full mt-6 py-4 px-6 bg-[#0052ff] hover:bg-[#0041cb] text-white font-bold uppercase tracking-wider text-xs transition-all shadow-lg hover:shadow-[#0052ff]/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Solicitar Acesso ao B-DASH
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

        {/* Feature Cards Grid (Footer of the section) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#080816] p-8 rounded-none border border-white/5 shadow-sm hover:shadow-md hover:border-[#0052ff]/30 transition-all duration-300 text-left">
            <div className="w-10 h-10 rounded-none bg-[#0052ff]/10 flex items-center justify-center mb-6">
              <Database className="w-5 h-5 text-[#0052ff]" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Integração RD Station
            </h4>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Plugue seu CRM e mapeie o desempenho do seu comercial de forma automática, segmentando vendedores e conversões.
            </p>
          </div>

          <div className="bg-[#080816] p-8 rounded-none border border-white/5 shadow-sm hover:shadow-md hover:border-[#0052ff]/30 transition-all duration-300 text-left">
            <div className="w-10 h-10 rounded-none bg-[#0052ff]/10 flex items-center justify-center mb-6">
              <Smartphone className="w-5 h-5 text-[#0052ff]" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Acesso Mobile Responsivo
            </h4>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Acompanhe o faturamento de mídia direto do seu smartphone na praia, em trânsito ou no escritório corporativo.
            </p>
          </div>

          <div className="bg-[#080816] p-8 rounded-none border border-white/5 shadow-sm hover:shadow-md hover:border-[#0052ff]/30 transition-all duration-300 text-left">
            <div className="w-10 h-10 rounded-none bg-[#0052ff]/10 flex items-center justify-center mb-6">
              <Clock className="w-5 h-5 text-[#0052ff]" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Atualização Automática
            </h4>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              O B-DASH atualiza seus dados a cada hora, garantindo previsibilidade para tomadas de decisões cirúrgicas.
            </p>
          </div>
        </div>
      </div>

      {/* Modern Premium Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div 
            className="relative w-full max-w-lg bg-[#080816] border border-white/10 p-8 md:p-10 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-none flex items-center justify-center mb-6 border border-emerald-500/20">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Solicitação Recebida!</h3>
                <p className="text-slate-350 font-light text-sm max-w-sm mx-auto">
                  Nossos engenheiros de growth estão analisando seu perfil e entrarão em contato em breve para liberar seu acesso ao B-DASH.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-[#0052ff] uppercase bg-[#0052ff]/10 px-2.5 py-1 rounded-none inline-block mb-3">
                    B-DASH Beta
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">Solicitar Demonstração</h3>
                  <p className="text-xs text-slate-400 font-light mt-1.5">
                    Inscreva-se na lista de espera exclusiva e agende uma demonstração prática da nossa inteligência comercial.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Nome */}
                  <div className="flex flex-col">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1.5">Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      placeholder="Ex: Hudson Albuquerque"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 focus:border-[#0052ff] focus:outline-none text-white text-sm font-medium transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1.5">E-mail Corporativo *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Ex: hudson@empresa.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 focus:border-[#0052ff] focus:outline-none text-white text-sm font-medium transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Telefone */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1.5">WhatsApp *</label>
                      <input
                        type="tel"
                        name="telefone"
                        required
                        placeholder="Ex: (11) 99999-9999"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 focus:border-[#0052ff] focus:outline-none text-white text-sm font-medium transition-all"
                      />
                    </div>

                    {/* Empresa */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1.5">Nome da Empresa *</label>
                      <input
                        type="text"
                        name="empresa"
                        required
                        placeholder="Ex: Berlim Company"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 focus:border-[#0052ff] focus:outline-none text-white text-sm font-medium transition-all"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-4 px-6 bg-[#0052ff] hover:bg-[#0041cb] text-white font-bold uppercase tracking-wider text-xs transition-all shadow-lg hover:shadow-[#0052ff]/20 flex items-center justify-center gap-2 cursor-pointer"
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
