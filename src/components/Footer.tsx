import { ArrowRight, Award } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-brand-gradient-radial-dark text-white pt-28 pb-12 min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-130px)] flex flex-col justify-between relative overflow-hidden border-t border-white/5">
      {/* Decorative light overlay in the corner */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10 flex-grow flex flex-col justify-between">

        {/* Top Section with Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">

          {/* Column 1: Info and Brand */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-center mb-6 -ml-3 select-none">
              <BrandLogo height={45} />
            </div>
            <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
              A Berlim Co. é uma startup de growth marketing focada na geração contínua de ROI. Combinamos tecnologia proprietária, ciência de dados e engenharia criativa para marcas inovadoras.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-none bg-white/5 border border-white/10 hover:border-[#0052ff] text-slate-300 hover:text-white transition-all shadow-sm" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="p-2 rounded-none bg-white/5 border border-white/10 hover:border-[#0052ff] text-slate-300 hover:text-white transition-all shadow-sm" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="p-2 rounded-none bg-white/5 border border-white/10 hover:border-[#0052ff] text-slate-300 hover:text-white transition-all shadow-sm" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="p-2 rounded-none bg-white/5 border border-white/10 hover:border-[#0052ff] text-slate-300 hover:text-white transition-all shadow-sm" aria-label="YouTube">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions Links */}
          <div className="lg:col-span-2 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-6">Soluções</h3>
            <ul className="space-y-3.5 text-sm font-light text-slate-300">
              <li><a href="#solutions" className="hover:text-white transition-colors">Tráfego Pago</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Design & UX/UI</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">CRO & Testes A/B</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Business Intelligence</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">CRM & LTV</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate Links */}
          <div className="lg:col-span-2 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-6">Institucional</h3>
            <ul className="space-y-3.5 text-sm font-light text-slate-300">
              <li><a href="#about" className="hover:text-white transition-colors">Nossa missão</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Resultados</a></li>
              <li><a href="#footer-section" className="hover:text-white transition-colors">News & Ideas</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-6 font-semibold">Receba nossos relatórios</h3>
            <p className="text-sm font-light text-slate-300 leading-relaxed mb-4">
              Receba análises estratégicas mensais sobre tendências de tráfego, design de conversão e growth diretamente na sua caixa de entrada.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail profissional"
                className="flex-grow px-4 py-2.5 rounded-none bg-white/5 border border-white/10 focus:border-[#0052ff] focus:outline-none text-sm text-white placeholder-slate-500 font-medium shadow-sm"
              />
              <button
                type="submit"
                className="p-3 rounded-none bg-[#0052ff] text-white font-bold hover:bg-[#0041cb] transition-all shadow-sm cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Middle Section: Authority Seals/Badges */}
        <div className="py-12 flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-white/5">
          <div className="text-left max-w-md">
            <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#0052ff]" />
              Parcerias Homologadas & Certificações
            </h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Mantemos parceria oficial e certificação direta com os principais players de tecnologia e canais de aquisição globais.
            </p>
          </div>

          {/* Partner Seals Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">

            {/* RD Station Partner */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-none border border-white/10 bg-white/5 hover:border-white/20 transition-all select-none">
              <div className="w-6 h-6 rounded-none bg-amber-500 flex items-center justify-center text-xs font-black text-white">RD</div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-amber-500 tracking-wider">RD STATION</div>
                <div className="text-xs font-extrabold text-white">Silver Partner</div>
              </div>
            </div>

            {/* Facebook Creative Strategy Professional */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-none border border-white/10 bg-white/5 hover:border-white/20 transition-all select-none">
              <div className="w-6 h-6 rounded-none bg-blue-800 flex items-center justify-center text-xs font-black text-white">f</div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-sky-400 tracking-wider">META BUSINESS</div>
                <div className="text-xs font-extrabold text-white">Creative Strategist</div>
              </div>
            </div>

            {/* Google Partner */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-none border border-white/10 bg-white/5 hover:border-white/20 transition-all select-none">
              <div className="w-6 h-6 rounded-none bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center text-[10px] font-black text-white">G</div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-sky-400 tracking-wider">GOOGLE ADS</div>
                <div className="text-xs font-extrabold text-white">Partner Certified</div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 font-light gap-4">
          <div className="text-left">
            © {new Date().getFullYear()} Berlim Company. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
