import { ArrowRight, Award } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
  onOpenBlog?: () => void;
  onOpenTermsOfUse?: () => void;
  onOpenCompanyOnboarding?: () => void;
}

export default function Footer({ onOpenPrivacyPolicy, onOpenBlog, onOpenTermsOfUse, onOpenCompanyOnboarding }: FooterProps) {
  return (
    <footer id="footer-section" className="bg-[#030311] text-white pt-24 sm:pt-32 pb-16 min-h-screen relative overflow-hidden border-t border-white/10 flex flex-col justify-between">
      {/* Background Lighting Gradients (Matching B-Dash & Feedbacks) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-[#0941DC]/10 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#061F6B]/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#0941DC]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1431px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-between">

        {/* Top Section with Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">

          {/* Column 1: Info and Brand */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-center mb-6 -ml-3 select-none">
              <BrandLogo height={45} />
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-sm text-slate-300 leading-relaxed mb-6 text-justify">
              A Berlim Co. é uma martech direcionada para análise de dados, desenvolvimento de soluções e geração de resultados. Unimos o melhor do MKT, com Vendas, Produtos e Tecnologias.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/berlimco/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-[7px] bg-[rgba(0,0,0,0.25)] border border-white/10 hover:border-[#0941DC] text-slate-300 hover:text-white transition-all shadow-sm backdrop-blur-md" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.instagram.com/berlim.company/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-[7px] bg-[rgba(0,0,0,0.25)] border border-white/10 hover:border-[#0941DC] text-slate-300 hover:text-white transition-all shadow-sm backdrop-blur-md" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.youtube.com/@BerlimCast" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-[7px] bg-[rgba(0,0,0,0.25)] border border-white/10 hover:border-[#0941DC] text-slate-300 hover:text-white transition-all shadow-sm backdrop-blur-md" aria-label="YouTube">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions Links */}
          <div className="lg:col-span-2 text-left">
            <h3 className="font-['Clash_Display','Inter',sans-serif] font-bold text-sm uppercase tracking-wider text-white mb-6">
              Soluções
            </h3>
            <ul className="space-y-3 font-['Inter',sans-serif] text-sm text-slate-300">
              <li><a href="#solutions" className="hover:text-[#0941DC] transition-colors">Tráfego Pago</a></li>
              <li><a href="#solutions" className="hover:text-[#0941DC] transition-colors">Design & UX/UI</a></li>
              <li><a href="#solutions" className="hover:text-[#0941DC] transition-colors">CRO & Testes A/B</a></li>
              <li><a href="#solutions" className="hover:text-[#0941DC] transition-colors">Business Intelligence</a></li>
              <li><a href="#solutions" className="hover:text-[#0941DC] transition-colors">CRM & LTV</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate Links */}
          <div className="lg:col-span-2 text-left">
            <h3 className="font-['Clash_Display','Inter',sans-serif] font-bold text-sm uppercase tracking-wider text-white mb-6">
              Institucional
            </h3>
            <ul className="space-y-3 font-['Inter',sans-serif] text-sm text-slate-300">
              <li><a href="#about" className="hover:text-[#0941DC] transition-colors">Nossa missão</a></li>
              <li><a href="#cases" className="hover:text-[#0941DC] transition-colors">Cases</a></li>
              <li><a href="#news" className="hover:text-[#0941DC] transition-colors">News</a></li>
              <li>
                <button 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    if (onOpenBlog) onOpenBlog(); 
                    else { 
                      const el = document.getElementById('news'); 
                      if (el) el.scrollIntoView({ behavior: 'smooth' }); 
                    } 
                  }} 
                  className="hover:text-[#0941DC] transition-colors cursor-pointer bg-transparent border-0 p-0 text-sm text-slate-300 font-['Inter',sans-serif]"
                >
                  Blog
                </button>
              </li>
              <li><a href="#contact" className="hover:text-[#0941DC] transition-colors">Carreiras</a></li>
              <li><a href="#contact" className="hover:text-[#0941DC] transition-colors">Fale Conosco</a></li>
              {onOpenCompanyOnboarding && (
                <li>
                  <button
                    onClick={(e) => { e.preventDefault(); onOpenCompanyOnboarding(); }}
                    className="hover:text-[#0941DC] transition-colors cursor-pointer bg-transparent border-0 p-0 text-sm text-slate-300 font-['Inter',sans-serif]"
                  >
                    Área de Empresas
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 text-left">
            <h3 className="font-['Clash_Display','Inter',sans-serif] font-bold text-sm uppercase tracking-wider text-white mb-6">
              Receba nossos relatórios
            </h3>
            <p className="font-['Inter',sans-serif] text-sm text-slate-300 leading-relaxed mb-4">
              Receba análises estratégicas mensais sobre tendências de tráfego, design de conversão e growth diretamente na sua caixa de entrada.
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
              if (emailInput && emailInput.value) {
                const message = `Olá, gostaria de assinar os relatórios com o email: ${emailInput.value}`;
                const whatsappUrl = `https://wa.me/558182499584?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                emailInput.value = '';
              }
            }} className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail profissional"
                className="flex-grow px-4 py-3 rounded-[7px] bg-[#080816] border border-white/10 focus:border-[#0941DC] focus:outline-none text-sm text-white placeholder-slate-500 font-['Inter',sans-serif] font-medium shadow-sm transition-all"
              />
              <button
                type="submit"
                className="p-3.5 rounded-[7px] bg-[#0941DC] hover:bg-[#061F6B] text-white font-bold transition-all duration-300 shadow-lg shadow-[#0941DC]/25 cursor-pointer"
                aria-label="Inscrever-se"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Middle Section: Authority Seals/Badges */}
        <div className="py-10 flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-white/10">
          <div className="text-left max-w-md">
            <h4 className="font-['Inter',sans-serif] font-bold text-sm text-white mb-1.5 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#0941DC]" />
              Parcerias Homologadas & Certificações
            </h4>
            <p className="font-['Inter',sans-serif] text-xs text-slate-400 leading-relaxed">
              Mantemos parceria oficial e certificação direta com os principais players de tecnologia e canais de aquisição globais.
            </p>
          </div>

          {/* Partner Seals Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">

            {/* RD Station */}
            <div className="w-44 h-14 flex items-center justify-center px-4 py-2 rounded-[7px] border border-white/10 bg-[#080816] hover:border-[#0941DC]/50 transition-all select-none shadow-md">
              <img src="/src/assets/selos/RD Station.svg" alt="RD Station Partner" className="max-h-full max-w-full object-contain" />
            </div>

            {/* Meta Certified */}
            <div className="w-44 h-14 flex items-center justify-center px-4 py-2 rounded-[7px] border border-white/10 bg-[#080816] hover:border-[#0941DC]/50 transition-all select-none shadow-md">
              <img src="/src/assets/selos/Meta certified.svg" alt="Meta Certified Partner" className="max-h-full max-w-full object-contain" />
            </div>

            {/* Google Ads Certified */}
            <div className="w-44 h-14 flex items-center justify-center px-4 py-2 rounded-[7px] border border-white/10 bg-[#080816] hover:border-[#0941DC]/50 transition-all select-none shadow-md">
              <img src="/src/assets/selos/Google ads certified.svg" alt="Google Ads Certified Partner" className="max-h-full max-w-full object-contain" />
            </div>

          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-['Inter',sans-serif] gap-4">
          <div className="text-left">
            © {new Date().getFullYear()} Berlim Co. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={(e) => {
                e.preventDefault();
                if (onOpenTermsOfUse) onOpenTermsOfUse();
              }} 
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs text-slate-400 font-['Inter',sans-serif]"
            >
              Termos de Uso
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                if (onOpenPrivacyPolicy) onOpenPrivacyPolicy();
              }} 
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs text-slate-400 font-['Inter',sans-serif]"
            >
              Políticas de Privacidade
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
