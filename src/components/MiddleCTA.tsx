import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MiddleCTA() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    funcionarios: '',
    faturamento: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.email && formData.telefone && formData.empresa) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          funcionarios: '',
          faturamento: ''
        });
      }, 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 w-full bg-white overflow-hidden border-t border-slate-100">
      {/* Decorative premium light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-slate-50/80 to-blue-50/50 pointer-events-none" />
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Conversion Copy & Features */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-black tracking-widest text-[#0052ff] uppercase bg-[#0052ff]/10 px-3.5 py-1.5 rounded-none mb-6 inline-block">
              Conversão & Escala
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Pronto para dominar seu mercado?
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg mb-8 leading-relaxed">
              Nossa equipe de engenheiros de growth analisará seu funil de aquisição atual gratuitamente. Preencha o formulário para agendar sua sessão estratégica e iniciar sua escalada.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0052ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Auditoria Completa do Funil</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">Identificamos os pontos de atrito no seu tráfego e design.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0052ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Planejamento Tático de Mídia</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">Estratégias sob medida para Google Ads, Meta Ads e canais de aquisição.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0052ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Suporte de Growth Direto</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">Time sênior focado na geração contínua de ROI e LTV.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-none border border-slate-150 shadow-xl relative">
              {submitted ? (
                <div className="py-12 px-6 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-955 mb-2">Solicitação Recebida!</h3>
                  <p className="text-slate-600 font-light text-sm max-w-sm mx-auto">
                    Nossos engenheiros de growth estão analisando seu perfil e entrarão em contato em até 15 minutos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-left mb-6">
                    <h3 className="text-xl font-extrabold text-slate-950">Fale com um especialista</h3>
                    <p className="text-xs text-slate-500 font-light mt-1">Preencha os campos abaixo para solicitar seu diagnóstico gratuito.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-black uppercase text-slate-700 tracking-wider mb-1.5">Nome Completo *</label>
                      <input
                        type="text"
                        name="nome"
                        required
                        placeholder="Ex: Hudson Silva"
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-none bg-slate-50/50 border border-slate-200 focus:border-[#0052ff] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-black uppercase text-slate-700 tracking-wider mb-1.5">E-mail Corporativo *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Ex: hudson@empresa.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-none bg-slate-50/50 border border-slate-200 focus:border-[#0052ff] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Telefone */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-black uppercase text-slate-700 tracking-wider mb-1.5">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="telefone"
                        required
                        placeholder="Ex: (81) 99999-9999"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-none bg-slate-50/50 border border-slate-200 focus:border-[#0052ff] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>

                    {/* Empresa */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-black uppercase text-slate-700 tracking-wider mb-1.5">Nome da Empresa *</label>
                      <input
                        type="text"
                        name="empresa"
                        required
                        placeholder="Ex: Berlim Co."
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-none bg-slate-50/50 border border-slate-200 focus:border-[#0052ff] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* N Funcionários */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-black uppercase text-slate-700 tracking-wider mb-1.5">Nº de Funcionários</label>
                      <select
                        name="funcionarios"
                        value={formData.funcionarios}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-none bg-slate-50/50 border border-slate-200 focus:border-[#0052ff] focus:bg-white focus:outline-none text-slate-900 text-sm font-semibold transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="1-10">1 a 10 funcionários</option>
                        <option value="11-50">11 a 50 funcionários</option>
                        <option value="51-200">51 a 200 funcionários</option>
                        <option value="200+">Mais de 200 funcionários</option>
                      </select>
                    </div>

                    {/* Faturamento */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-black uppercase text-slate-700 tracking-wider mb-1.5">Faturamento Mensal</label>
                      <select
                        name="faturamento"
                        value={formData.faturamento}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-none bg-slate-50/50 border border-slate-200 focus:border-[#0052ff] focus:bg-white focus:outline-none text-slate-900 text-sm font-semibold transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="ate-50k">Até R$ 50.000 / mês</option>
                        <option value="50k-200k">R$ 50.000 a R$ 200.000 / mês</option>
                        <option value="200k-1m">R$ 200.000 a R$ 1.000.000 / mês</option>
                        <option value="1m+">Acima de R$ 1.000.000 / mês</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-2 bg-[#0052ff] text-white font-extrabold text-xs uppercase tracking-wider rounded-none shadow-md hover:bg-[#0041cb] transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Falar com especialista
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-[10px] text-slate-400 block mt-4 font-light text-center">
                    🔒 Dados 100% seguros de acordo com a LGPD.
                  </span>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
