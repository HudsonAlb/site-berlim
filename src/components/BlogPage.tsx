import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Calendar, Clock, User, Key, HelpCircle, Share2, ArrowRight, Search, Check } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function BlogPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug?: string }>();
  const onNavigateHome = () => navigate('/');
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const categories = ['Todos', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activePost = blogPosts.find(p => p.id === slug);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#030311] text-white flex flex-col justify-between selection:bg-[#0941DC]/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      <main className="pt-28 pb-24 relative overflow-hidden flex-grow">
        {/* Ambient Background Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#0941DC]/15 via-transparent to-transparent pointer-events-none z-0" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#0941DC]/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-[#061F6B]/20 rounded-full blur-[140px] pointer-events-none z-0" />

        {activePost ? (
          /* ========================================================= */
          /* SINGLE BLOG ARTICLE DETAIL VIEW                            */
          /* ========================================================= */
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Navigation Bar */}
            <div className="mb-8 text-left flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[7px] bg-[rgba(255,255,255,0.05)] border border-white/10 hover:border-[#0941DC]/60 hover:bg-[#0941DC]/20 text-slate-300 hover:text-white font-['Inter',sans-serif] text-sm font-semibold transition-all duration-300 cursor-pointer backdrop-blur-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#0941DC]" />
                Voltar para a Lista de Artigos
              </button>

              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[7px] bg-transparent border border-white/10 hover:border-white/30 text-slate-400 hover:text-white font-['Inter',sans-serif] text-sm font-medium transition-all duration-300 cursor-pointer"
              >
                Página Inicial
              </button>
            </div>

            {/* Article Category & Title */}
            <div className="text-left mb-10 border-b border-white/10 pb-8">
              <div className="inline-block mb-4">
                <span className="px-3.5 py-1.5 rounded-[7px] bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] font-['Inter',sans-serif] text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                  {activePost.category}
                </span>
              </div>

              <h1 className="font-['Clash_Display','Inter',sans-serif] font-bold text-3xl sm:text-5xl text-white leading-[115%] tracking-tight mb-6">
                {activePost.title}
              </h1>

              {/* Author & Date Bar */}
              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-['Inter',sans-serif] text-slate-400">
                <span className="flex items-center gap-2 text-white font-semibold">
                  <User className="w-4 h-4 text-[#0941DC]" />
                  {activePost.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#0941DC]" />
                  {activePost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0941DC]" />
                  {activePost.readTime}
                </span>
              </div>
            </div>

            {/* SEO Metadata Box */}
            <div className="mb-10 p-6 rounded-xl bg-white/[0.02] border border-white/10 text-left space-y-4 font-['Inter',sans-serif]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0941DC]">
                <Key className="w-4 h-4 text-[#0941DC]" />
                Informações de SEO & Indexação
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-black/30 p-3.5 rounded-lg border border-white/5">
                  <span className="text-slate-400 font-bold uppercase block mb-1">Palavra-Chave Principal</span>
                  <span className="text-white font-semibold">{activePost.primaryKeyword}</span>
                </div>
                <div className="bg-black/30 p-3.5 rounded-lg border border-white/5">
                  <span className="text-slate-400 font-bold uppercase block mb-1">Palavras-Chave Secundárias</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {activePost.secondaryKeywords.map((kw, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-slate-300 text-[10px]">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Featured Image Banner */}
            <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative max-h-[480px]">
              <img
                src={activePost.imageUrl}
                alt={activePost.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030311] via-transparent to-transparent opacity-60" />
            </div>

            {/* Main Content Article Body */}
            <div className="space-y-8 text-left font-['Inter',sans-serif] text-slate-200 leading-relaxed">
              
              {/* Highlight Excerpt */}
              <p className="font-semibold text-white text-lg sm:text-xl leading-relaxed p-6 rounded-xl bg-[#080816] border-l-4 border-[#0941DC] border-y border-r border-white/10">
                {activePost.summary}
              </p>

              {/* Full Paragraphs */}
              {activePost.fullContent.map((paragraph, idx) => (
                <div key={idx} className="bg-white/[0.015] p-6 sm:p-8 rounded-xl border border-white/5">
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed whitespace-pre-line text-justify">
                    {paragraph}
                  </p>
                </div>
              ))}

              {/* FAQ Section */}
              {activePost.faqs && activePost.faqs.length > 0 && (
                <div className="mt-14 pt-10 border-t border-white/10">
                  <h3 className="font-['Clash_Display','Inter',sans-serif] font-bold text-2xl text-white mb-6 flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-[#0941DC]" />
                    Perguntas Frequentes (FAQ)
                  </h3>
                  <div className="space-y-4">
                    {activePost.faqs.map((faq, idx) => (
                      <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/10 text-left">
                        <h4 className="font-bold text-white text-base mb-2.5 flex items-start gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">?</span>
                          {faq.question}
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed pl-8 text-justify">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Share & Action Bar */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-['Inter',sans-serif]">
                  Escrito oficialmente por <strong className="text-white">Berlim Co. Growth & Tech Intelligence</strong>
                </span>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[7px] bg-[#0941DC] hover:bg-[#061F6B] text-white text-xs font-bold transition-all cursor-pointer shadow-md"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" /> Link Copiado!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" /> Compartilhar Artigo
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Bottom Back Button */}
            <div className="mt-14 text-center">
              <button
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[7px] bg-white/10 hover:bg-white/20 border border-white/15 text-white font-['Inter',sans-serif] text-sm font-bold transition-all duration-300 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para a Lista do Blog
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* BLOG POSTS LISTING GRID VIEW                              */
          /* ========================================================= */
          <div className="max-w-[1287px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Back Home Navigation */}
            <div className="mb-8 text-left">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[7px] bg-[rgba(255,255,255,0.05)] border border-white/10 hover:border-[#0941DC]/60 hover:bg-[#0941DC]/20 text-slate-300 hover:text-white font-['Inter',sans-serif] text-sm font-semibold transition-all duration-300 cursor-pointer backdrop-blur-md"
              >
                <ArrowLeft className="w-4 h-4 text-[#0941DC]" />
                Voltar para a Página Inicial
              </button>
            </div>

            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto mb-12">
              <span className="px-3.5 py-1.5 rounded-[7px] bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] font-['Inter',sans-serif] text-xs font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-md">
                Blog Berlim Co.
              </span>
              <h1 className="font-['Clash_Display','Inter',sans-serif] font-bold text-4xl sm:text-6xl text-white leading-[110%] tracking-tight mb-4">
                Estratégias de Growth, Dados & Martech
              </h1>
              <p className="font-['Inter',sans-serif] text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Artigos aprofundados sobre mensuração de marketing, SEO para IA generativa, ROI de Martech e engenharia de vendas.
              </p>
            </div>

            {/* Search & Category Filter Bar */}
            <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/[0.02] p-4 rounded-xl border border-white/10 backdrop-blur-md">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-[7px] text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#0941DC] text-white shadow-md shadow-[#0941DC]/30'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-[7px] bg-black/40 border border-white/10 focus:border-[#0941DC] focus:outline-none text-xs text-white placeholder-slate-500 font-['Inter',sans-serif]"
                />
              </div>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="group bg-[#080816] rounded-xl overflow-hidden border border-white/10 hover:border-[#0941DC]/60 transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer hover:-translate-y-1"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-black">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-['Inter',sans-serif]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#0941DC]" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#0941DC]" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl text-white mb-3 leading-snug group-hover:text-[#0941DC] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Summary */}
                      <p className="font-['Inter',sans-serif] text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-6 pb-6 pt-0">
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#0941DC] uppercase tracking-wider group-hover:underline flex items-center gap-1.5">
                        Ler Artigo Completo
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
