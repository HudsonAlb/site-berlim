import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY <= 20;
      setScrolled(!isTop);

      if (isTop) {
        setIsDarkTheme(true);
        return;
      }

      // Order of sections from top of document to bottom
      const sections = [
        { id: 'hero', dark: true },
        { id: 'about', dark: false },
        { id: 'solutions', dark: false },
        { id: 'bdash', dark: true },
        { id: 'cases', dark: false },
        { id: 'news', dark: true },
        { id: 'contact', dark: false },
        { id: 'testimonials', dark: true },
        { id: 'footer-section', dark: true },
      ];

      const currentY = window.scrollY + 110;
      let currentDark = true;

      // Iterate in reverse (from bottom to top section) to find the active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          if (currentY >= top) {
            currentDark = sec.dark;
            break;
          }
        }
      }

      setIsDarkTheme(currentDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHash = (hash: string) => {
    const targetId = hash.replace('#', '');
    if (targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    let polls = 0;
    const interval = setInterval(() => {
      window.dispatchEvent(new Event('scroll'));
      polls++;
      if (polls >= 30) clearInterval(interval);
    }, 50);
  };

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (isHome) {
      window.history.replaceState(null, '', hash === '#' ? '/' : `/${hash}`);
      scrollToHash(hash);
    } else {
      navigate(hash === '#' ? '/' : `/${hash}`);
    }
  };

  const handleBlogClick = () => {
    navigate('/blog');
  };

  const isLight = scrolled && !isDarkTheme;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[100px] md:h-[130px] flex items-center justify-between px-6 lg:px-12 ${
      isLight
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-md'
        : scrolled
          ? 'bg-[#030311]/95 backdrop-blur-md border-b border-[#0941DC]/40 shadow-[0_4px_30px_rgba(9,65,220,0.2)]'
          : 'bg-transparent'
    }`}>
      {/* Brand logo container (left) */}
      <div className="flex items-center md:w-1/4">
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center group select-none cursor-pointer"
        >
          <BrandLogo height={42} invert={isLight} className="md:scale-110 origin-left" />
        </a>
      </div>

      {/* Desktop Menu - Centered Pill Container (middle) */}
      <div className="hidden lg:flex flex-grow justify-center items-center">
        <div className={`flex items-center space-x-7 px-8 py-2.5 rounded-none border backdrop-blur-md transition-all duration-300 ${
          isLight
            ? 'bg-slate-100/90 border-slate-200/80 shadow-sm'
            : 'bg-[#0941DC]/15 border-[#0941DC]/40 shadow-[0_0_20px_rgba(9,65,220,0.25)]'
        }`}>
          {/* Início */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '#')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Início
          </a>

          {/* Mission */}
          <a
            href="/#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Nossa missão
          </a>

          {/* Serviços */}
          <a
            href="/#solutions"
            onClick={(e) => handleNavClick(e, '#solutions')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Serviços
          </a>

          {/* B-Dash */}
          <a
            href="/#bdash"
            onClick={(e) => handleNavClick(e, '#bdash')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Dashboard
          </a>

          {/* Cases */}
          <a
            href="/#cases"
            onClick={(e) => handleNavClick(e, '#cases')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Cases
          </a>

          {/* News */}
          <a
            href="/#news"
            onClick={(e) => handleNavClick(e, '#news')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            News
          </a>

          {/* Feedbacks */}
          <a
            href="/#testimonials"
            onClick={(e) => handleNavClick(e, '#testimonials')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Feedbacks
          </a>

          {/* Blog */}
          <button
            onClick={handleBlogClick}
            className={`text-sm font-semibold tracking-wide transition-colors cursor-pointer bg-transparent border-0 p-0 ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Blog
          </button>
        </div>
      </div>

      {/* Say Hello / Contato CTA (right) */}
      <div className="hidden lg:flex items-center justify-end lg:w-1/4">
        <a
          href="/#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-none transition-all duration-300 border ${
            isLight
              ? 'border-slate-200 hover:border-slate-400 text-slate-800 bg-transparent hover:bg-slate-50'
              : 'border-white/20 hover:border-white/50 text-white bg-transparent hover:bg-white/5'
          }`}
        >
          Contato
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden p-2 focus:outline-none transition-colors ${
          isLight ? 'text-slate-800' : 'text-slate-300 hover:text-white'
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full border-b border-white/5 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="px-6 py-6 space-y-4 flex flex-col bg-[#080816] shadow-lg text-left">
          <a href="/" onClick={(e) => { setIsOpen(false); handleNavClick(e, '#'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Início</a>
          <a href="/#about" onClick={(e) => { setIsOpen(false); handleNavClick(e, '#about'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Nossa missão</a>
          <a href="/#solutions" onClick={(e) => { setIsOpen(false); handleNavClick(e, '#solutions'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Serviços</a>
          <a href="/#bdash" onClick={(e) => { setIsOpen(false); handleNavClick(e, '#bdash'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Dashboard</a>
          <a href="/#cases" onClick={(e) => { setIsOpen(false); handleNavClick(e, '#cases'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Cases</a>
          <a href="/#news" onClick={(e) => { setIsOpen(false); handleNavClick(e, '#news'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">News</a>
          <a href="/#testimonials" onClick={(e) => { setIsOpen(false); handleNavClick(e, '#testimonials'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Feedbacks</a>
          <button onClick={() => { setIsOpen(false); handleBlogClick(); }} className="text-left text-base font-bold text-slate-300 hover:text-white transition-colors py-1 bg-transparent border-0 p-0 cursor-pointer">Blog</button>
          <a href="/#contact" onClick={(e) => { setIsOpen(false); handleNavClick(e, '#contact'); }} className="w-full py-3 text-center text-sm font-bold text-white rounded-none bg-[#0941DC] hover:bg-[#061F6B] transition-colors shadow-md">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
