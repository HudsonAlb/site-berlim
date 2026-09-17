import { useEffect } from 'react';
import { newsData } from '../data/newsData';
import { Calendar, Clock, ArrowLeft, MapPin, Tag, ArrowRight, Share2, CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface NewsDetailPageProps {
  articleId: string;
  onNavigateHome: () => void;
  onSelectArticle: (id: string) => void;
  onOpenBlog?: () => void;
  onOpenCompanyOnboarding?: () => void;
}

export default function NewsDetailPage({ articleId, onNavigateHome, onSelectArticle, onOpenBlog, onOpenCompanyOnboarding }: NewsDetailPageProps) {
  // Scroll to top when opening a news article page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [articleId]);

  const article = newsData.find((n) => n.id === articleId) || newsData[0];
  const otherArticles = newsData.filter((n) => n.id !== article.id);

  return (
    <div className="min-h-screen bg-[#030311] text-white flex flex-col justify-between selection:bg-[#0941DC]/20 selection:text-white">
      {/* Top Navbar */}
      <Navbar onNavigateHome={onNavigateHome} onOpenBlog={onOpenBlog} onOpenCompanyOnboarding={onOpenCompanyOnboarding} />

      <main className="pt-28 pb-20 relative overflow-hidden flex-grow">
        {/* Ambient Background Lighting (Figma CSS Pattern) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#0941DC]/15 via-transparent to-transparent pointer-events-none z-0" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#0941DC]/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#061F6B]/20 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-[1287px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Button / Navigation Breadcrumb */}
          <div className="mb-8 text-left">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[7px] bg-[rgba(0,0,0,0.30)] border border-white/15 hover:border-[#0941DC]/60 hover:bg-[#0941DC]/20 text-slate-300 hover:text-white font-['Inter',sans-serif] text-sm font-semibold transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              <ArrowLeft className="w-4 h-4 text-[#0941DC]" />
              Voltar para a Página Inicial
            </button>
          </div>

          {/* Article Header & Title */}
          <div className="text-left mb-10">
            {/* Category Tag */}
            <div className="inline-block mb-4">
              <span className="px-3.5 py-1.5 rounded-[7px] bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] font-['Inter',sans-serif] text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                {article.category}
              </span>
            </div>

            {/* Main Article Title */}
            <h1 className="font-['Clash_Display','Inter',sans-serif] font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-[110%] tracking-tight mb-6 max-w-5xl">
              {article.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-white/10 text-xs sm:text-sm text-slate-300 font-['Inter',sans-serif]">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#0941DC]" />
                {article.date}
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="flex items-center gap-2">
                {article.type === 'evento' ? <MapPin className="w-4 h-4 text-[#0941DC]" /> : <Clock className="w-4 h-4 text-[#0941DC]" />}
                {article.readTimeOrLocation}
              </span>
              {article.speakerOrAuthor && (
                <>
                  <span className="hidden sm:inline text-white/20">•</span>
                  <span className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#0941DC]" />
                    {article.speakerOrAuthor}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Featured Article Image */}
          <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/15 bg-[#080816] shadow-2xl mb-12 group">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030311] via-transparent to-transparent opacity-60" />
          </div>

          {/* Main Content Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20 text-left">
            
            {/* Left Column: Full Text Body */}
            <div className="lg:col-span-8 space-y-6 text-slate-200 font-['Inter',sans-serif] text-base sm:text-lg leading-relaxed">
              
              {/* Highlight Lead Paragraph */}
              <p className="font-semibold text-white text-lg sm:text-xl leading-relaxed p-6 rounded-[7px] bg-[#080816] border-l-4 border-[#0941DC] border-y border-r border-white/10">
                {article.summary}
              </p>

              {/* Full Paragraphs */}
              {article.fullContent.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 text-base leading-relaxed whitespace-pre-line text-justify">
                  {paragraph}
                </p>
              ))}

              {/* Share & Callout Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-['Inter',sans-serif]">
                  Publicado oficialmente por <strong className="text-white">Berlim Co. Growth Intelligence</strong>
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link da matéria copiado para a área de transferência!');
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-[7px] bg-white/5 border border-white/10 hover:border-[#0941DC] text-slate-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-[#0941DC]" />
                  Compartilhar Notícia
                </button>
              </div>
            </div>

            {/* Right Column: Event Info Card / Registration Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {article.eventDetails ? (
                <div className="bg-[#080816] rounded-[7px] border border-white/15 p-6 lg:p-8 shadow-xl space-y-6">
                  <h3 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl text-white border-b border-white/10 pb-4">
                    Informações do Evento
                  </h3>

                  <div className="space-y-4 text-sm font-['Inter',sans-serif]">
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Localização</span>
                      <p className="text-white font-medium flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#0941DC] shrink-0 mt-1" />
                        {article.eventDetails.location}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Horário & Formato</span>
                      <p className="text-white font-medium flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#0941DC] shrink-0" />
                        {article.eventDetails.schedule}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">Público-Alvo</span>
                      <p className="text-white font-medium flex items-center gap-2">
                        <Tag className="w-4 h-4 text-[#0941DC] shrink-0" />
                        {article.eventDetails.targetAudience}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onNavigateHome}
                    className="w-full py-4 px-6 bg-[#0941DC] hover:bg-[#061F6B] text-white font-['Inter',sans-serif] font-bold uppercase tracking-wider text-xs transition-all duration-300 rounded-[7px] shadow-lg shadow-[#0941DC]/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {article.actionText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="bg-[#080816] rounded-[7px] border border-white/15 p-6 lg:p-8 shadow-xl space-y-6">
                  <h3 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl text-white border-b border-white/10 pb-4">
                    Conheça o B-DASH
                  </h3>
                  <p className="font-['Inter',sans-serif] text-sm text-slate-300 leading-relaxed">
                    Conecte todo o seu ecossistema de aquisição e tráfego pago em um único painel estratégico em tempo real.
                  </p>
                  
                  <div className="space-y-2 text-xs font-['Inter',sans-serif] text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0941DC]" />
                      <span>Atribuição nativa GA4 & CRM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0941DC]" />
                      <span>Atualizações automáticas a cada hora</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0941DC]" />
                      <span>Dashboard mobile responsivo</span>
                    </div>
                  </div>

                  <button
                    onClick={onNavigateHome}
                    className="w-full py-4 px-6 bg-[#0941DC] hover:bg-[#061F6B] text-white font-['Inter',sans-serif] font-bold uppercase tracking-wider text-xs transition-all duration-300 rounded-[7px] shadow-lg shadow-[#0941DC]/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Solicitar Demonstração
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>

          </div>

          {/* Bottom Section: Related News & Events */}
          <div className="pt-12 border-t border-white/10 text-left">
            <h3 className="font-['Clash_Display','Inter',sans-serif] font-bold text-2xl sm:text-3xl text-white mb-8">
              Outras Notícias & Eventos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {otherArticles.map((other) => (
                <div 
                  key={other.id}
                  onClick={() => onSelectArticle(other.id)}
                  className="bg-[#080816] rounded-[7px] border border-white/10 overflow-hidden hover:border-[#0941DC]/60 transition-all duration-300 flex flex-col sm:flex-row items-stretch group cursor-pointer shadow-xl"
                >
                  <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden bg-[#030311] shrink-0">
                    <img 
                      src={other.imageUrl} 
                      alt={other.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between text-left">
                    <div>
                      <span className="px-2.5 py-1 rounded-[7px] bg-[#0941DC]/15 border border-[#0941DC]/30 text-[#0941DC] text-[10px] font-bold tracking-widest uppercase font-['Inter',sans-serif] inline-block mb-3">
                        {other.category}
                      </span>
                      <h4 className="font-['Inter',sans-serif] font-semibold text-base sm:text-lg leading-snug text-white mb-2 group-hover:text-[#0941DC] transition-colors line-clamp-2">
                        {other.title}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-4 font-['Inter',sans-serif]">
                      <span>{other.date}</span>
                      <span className="text-[#0941DC] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Ler <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </main>

      {/* Bottom Footer */}
      <Footer onOpenCompanyOnboarding={onOpenCompanyOnboarding} />
    </div>
  );
}
