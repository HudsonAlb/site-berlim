import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onNavigateHome?: () => void;
}

export default function Navbar({ onNavigateHome }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY <= 20;
      setScrolled(!isTop);

      // Section IDs with dark background (#030311)
      const darkSectionIds = ['bdash', 'testimonials', 'news', 'footer-section'];
      const navbarCheckPoint = window.innerWidth >= 768 ? 100 : 70;

      let overDarkSection = false;

      // Check if Y checkpoint (middle of navbar) overlaps any dark section rect
      for (const id of darkSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navbarCheckPoint && rect.bottom >= navbarCheckPoint) {
            overDarkSection = true;
            break;
          }
        }
      }

      // Also trigger when reaching bottom of page
      const reachedBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 30);
      if (reachedBottom) {
        overDarkSection = true;
      }

      setIsDarkTheme(isTop || overDarkSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    const scrollToTarget = () => {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Poll scroll position for 1.5s after navigation to ensure navbar theme updates
      let polls = 0;
      const interval = setInterval(() => {
        window.dispatchEvent(new Event('scroll'));
        polls++;
        if (polls >= 30) clearInterval(interval);
      }, 50);
    };

    if (onNavigateHome) {
      onNavigateHome();
      setTimeout(scrollToTarget, 50);
    } else {
      scrollToTarget();
    }
  };

  const isLight = scrolled && !isDarkTheme;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[100px] md:h-[130px] flex items-center justify-between px-6 lg:px-12 ${
      isLight 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-md' 
        : scrolled
          ? 'bg-[#030311]/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent'
    }`}>
      {/* Brand logo container (left) */}
      <div className="flex items-center md:w-1/4">
        <a 
          href="#" 
          onClick={() => handleNavClick('#')}
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
            : 'bg-white/10 border-white/10'
        }`}>
          {/* Início */}
          <a 
            href="#" 
            onClick={() => handleNavClick('#')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Início
          </a>

          {/* Mission */}
          <a 
            href="#about" 
            onClick={() => handleNavClick('#about')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Nossa missão
          </a>

          {/* Serviços */}
          <a 
            href="#solutions" 
            onClick={() => handleNavClick('#solutions')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Serviços
          </a>

          {/* B-Dash */}
          <a 
            href="#bdash" 
            onClick={() => handleNavClick('#bdash')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Dashboard
          </a>

          {/* Cases */}
          <a 
            href="#cases" 
            onClick={() => handleNavClick('#cases')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            Cases
          </a>

          {/* News & Ideas */}
          <a 
            href="#news" 
            onClick={() => handleNavClick('#news')}
            className={`text-sm font-semibold tracking-wide transition-colors ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            News & Ideas
          </a>
        </div>
      </div>

      {/* Say Hello / Contato CTA (right) */}
      <div className="hidden lg:flex items-center justify-end lg:w-1/4">
        <a 
          href="#contact" 
          onClick={() => handleNavClick('#contact')}
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
          <a href="#" onClick={() => { setIsOpen(false); handleNavClick('#'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Início</a>
          <a href="#about" onClick={() => { setIsOpen(false); handleNavClick('#about'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Nossa missão</a>
          <a href="#solutions" onClick={() => { setIsOpen(false); handleNavClick('#solutions'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Serviços</a>
          <a href="#bdash" onClick={() => { setIsOpen(false); handleNavClick('#bdash'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Dashboard</a>
          <a href="#cases" onClick={() => { setIsOpen(false); handleNavClick('#cases'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">Cases</a>
          <a href="#news" onClick={() => { setIsOpen(false); handleNavClick('#news'); }} className="text-base font-bold text-slate-300 hover:text-white transition-colors py-1">News & Ideas</a>
          <a href="#contact" onClick={() => { setIsOpen(false); handleNavClick('#contact'); }} className="w-full py-3 text-center text-sm font-bold text-white rounded-none bg-[#0941DC] hover:bg-[#061F6B] transition-colors shadow-md">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
