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
      
      const message = `Olá, gostaria de agendar uma sessão estratégica.\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nEmpresa: ${formData.empresa}\nFuncionários: ${formData.funcionarios || 'N/A'}\nFaturamento: ${formData.faturamento || 'N/A'}`;
      const whatsappUrl = `https://wa.me/558182499584?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

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
      {/* Decorative light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-slate-50/80 to-blue-50/50 pointer-events-none" />
      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Conversion Copy & Features */}
          <div className="lg:col-span-5 text-left">
            <h2 className="font-['Clash_Display','Inter',sans-serif] text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Pronto para crescer seus resultados e desenvolver suas soluções em mkt e tech?
            </h2>
            <p className="text-slate-600 font-['Inter',sans-serif] font-normal text-base md:text-lg mb-8 leading-relaxed text-justify">
              Nossa equipe de engenheiros de growth analisará seu funil de aquisição atual gratuitamente. Preencha o formulário para agendar sua sessão estratégica e iniciar sua escalada.
            </p>

            <div className="space-y-4 font-['Inter',sans-serif]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0941DC] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Auditoria Completa do Funil</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">Identificamos os pontos de atrito no seu tráfego e design.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0941DC] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Planejamento Tático de Mídia</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">Estratégias sob medida para Google Ads, Meta Ads e canais de aquisição.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0941DC] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Suporte de Growth Direto</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">Time sênior focado na geração contínua de ROI e LTV.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-[7px] border border-slate-200 shadow-xl relative">
              {submitted ? (
                <div className="py-12 px-6 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-['Clash_Display','Inter',sans-serif] text-2xl font-bold text-slate-950 mb-2">Solicitação Recebida!</h3>
                  <p className="text-slate-600 font-['Inter',sans-serif] text-sm max-w-sm mx-auto">
                    Nossos engenheiros de growth estão analisando seu perfil e entrarão em contato em até 15 minutos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-left mb-6">
                    <h3 className="font-['Clash_Display','Inter',sans-serif] text-lg sm:text-xl font-bold text-slate-950 leading-snug">
                      Pronto para crescer seus resultados e desenvolver suas soluções em mkt e tech?
                    </h3>
                    <p className="text-xs text-slate-500 font-['Inter',sans-serif] font-light mt-1">Preencha os campos abaixo para solicitar seu diagnóstico gratuito.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-bold uppercase text-slate-700 tracking-wider mb-1.5 font-['Inter',sans-serif]">Nome Completo *</label>
                      <input
                        type="text"
                        name="nome"
                        required
                        placeholder="Ex: João Silva"
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-[7px] bg-slate-50/50 border border-slate-200 focus:border-[#0941DC] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-bold uppercase text-slate-700 tracking-wider mb-1.5 font-['Inter',sans-serif]">E-mail Corporativo *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Ex: joao@empresa.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-[7px] bg-slate-50/50 border border-slate-200 focus:border-[#0941DC] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Telefone */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-bold uppercase text-slate-700 tracking-wider mb-1.5 font-['Inter',sans-serif]">WhatsApp / Telefone *</label>
                      <input
                        type="tel"
                        name="telefone"
                        required
                        placeholder="Ex: (11) 99999-9999"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-[7px] bg-slate-50/50 border border-slate-200 focus:border-[#0941DC] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>

                    {/* Empresa */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-bold uppercase text-slate-700 tracking-wider mb-1.5 font-['Inter',sans-serif]">Nome da Empresa *</label>
                      <input
                        type="text"
                        name="empresa"
                        required
                        placeholder="Ex: Minha Empresa Co."
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-[7px] bg-slate-50/50 border border-slate-200 focus:border-[#0941DC] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Funcionários */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-bold uppercase text-slate-700 tracking-wider mb-1.5 font-['Inter',sans-serif]">Número de Funcionários</label>
                      <select
                        name="funcionarios"
                        value={formData.funcionarios}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-[7px] bg-slate-50/50 border border-slate-200 focus:border-[#0941DC] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                      >
                        <option value="">Selecione...</option>
                        <option value="1-10">1 a 10 funcionários</option>
                        <option value="11-50">11 a 50 funcionários</option>
                        <option value="51-200">51 a 200 funcionários</option>
                        <option value="200+">Mais de 200 funcionários</option>
                      </select>
                    </div>

                    {/* Faturamento */}
                    <div className="text-left flex flex-col">
                      <label className="text-[10px] font-bold uppercase text-slate-700 tracking-wider mb-1.5 font-['Inter',sans-serif]">Faturamento Mensal em Mídia</label>
                      <select
                        name="faturamento"
                        value={formData.faturamento}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-[7px] bg-slate-50/50 border border-slate-200 focus:border-[#0941DC] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                      >
                        <option value="">Selecione...</option>
                        <option value="ate-10k">Até R$ 10.000 /mês</option>
                        <option value="10k-50k">R$ 10.000 a R$ 50.000 /mês</option>
                        <option value="50k-200k">R$ 50.000 a R$ 200.000 /mês</option>
                        <option value="200k+">Acima de R$ 200.000 /mês</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 py-4 px-6 bg-[#0941DC] hover:bg-[#061F6B] text-white font-['Inter',sans-serif] font-bold uppercase tracking-wider text-xs transition-all duration-300 rounded-[7px] shadow-lg shadow-[#0941DC]/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Agendar Sessão Estratégica
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
