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
              <a href="#" className="p-2 rounded-none bg-white/5 border border-white/10 hover:border-[#0941DC] text-slate-300 hover:text-white transition-all shadow-sm" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="p-2 rounded-none bg-white/5 border border-white/10 hover:border-[#0941DC] text-slate-300 hover:text-white transition-all shadow-sm" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="p-2 rounded-none bg-white/5 border border-white/10 hover:border-[#0941DC] text-slate-300 hover:text-white transition-all shadow-sm" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="p-2 rounded-none bg-white/5 border border-white/10 hover:border-[#0941DC] text-slate-300 hover:text-white transition-all shadow-sm" aria-label="YouTube">
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
              <li><a href="#cases" className="hover:text-white transition-colors">Cases</a></li>
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
                className="flex-grow px-4 py-2.5 rounded-none bg-white/5 border border-white/10 focus:border-[#0941DC] focus:outline-none text-sm text-white placeholder-slate-500 font-medium shadow-sm"
              />
              <button
                type="submit"
                className="p-3 rounded-none bg-[#0941DC] text-white font-bold hover:bg-[#061F6B] transition-all shadow-sm cursor-pointer"
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
              <Award className="w-4 h-4 text-[#0941DC]" />
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
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="url(#rdGradient)" />
                  <defs>
                    <linearGradient id="rdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d2c4" />
                      <stop offset="100%" stopColor="#008be6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-amber-500 tracking-wider">RD STATION</div>
                <div className="text-xs font-extrabold text-white">Silver Partner</div>
              </div>
            </div>

            {/* Facebook Creative Strategy Professional */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-none border border-white/10 bg-white/5 hover:border-white/20 transition-all select-none">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 16 16" className="w-5.5 h-5.5" fill="currentColor">
                  <path d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.615-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.137 0 .27.018" fill="#0668E1"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-sky-400 tracking-wider">META BUSINESS</div>
                <div className="text-xs font-extrabold text-white">Creative Strategist</div>
              </div>
            </div>

            {/* Google Partner */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-none border border-white/10 bg-white/5 hover:border-white/20 transition-all select-none">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285f4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34a853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#fbbc05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#ea4335"/>
                </svg>
              </div>
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
