import { useState } from 'react';
import bdashMockup from '../assets/bdash_mockup.png';
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
          
          {/* Visual Mockup PC & Smartphone (Left Column) */}
          <div className="lg:col-span-7 w-full order-2 lg:order-1 flex justify-center items-center">
            <div className="relative group w-full">
              {/* Glowing Background Glows matching the premium branding */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0052ff] to-purple-600 rounded-none blur-2xl opacity-20 group-hover:opacity-35 transition duration-1000 group-hover:duration-300" />
              <div className="relative overflow-hidden border border-white/10 bg-[#080816] p-2 shadow-2xl">
                <img 
                  src={bdashMockup} 
                  alt="B-DASH em dispositivos móveis e desktop" 
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />
              </div>
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
