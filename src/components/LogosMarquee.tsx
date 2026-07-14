import React from 'react';

interface Partner {
  name: string;
  renderLogo: () => React.ReactElement;
}

const partners: Partner[] = [
  {
    name: 'Sport Clube do Recife',
    renderLogo: () => (
      <svg viewBox="0 0 180 40" className="h-8 text-slate-400 hover:text-[#d32f2f] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Shield icon */}
        <path d="M10,5 L30,5 L30,20 C30,28 20,35 20,35 C20,35 10,28 10,20 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        {/* Stripes inside shield */}
        <line x1="15" y1="10" x2="15" y2="25" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="8" x2="20" y2="30" stroke="currentColor" strokeWidth="2" />
        <line x1="25" y1="10" x2="25" y2="25" stroke="currentColor" strokeWidth="2" />
        {/* Text */}
        <text x="42" y="24" fontSize="16" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1">SPORT</text>
        <text x="42" y="33" fontSize="8" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5" opacity="0.7">RECIFE</text>
      </svg>
    )
  },
  {
    name: 'Batekoo',
    renderLogo: () => (
      <svg viewBox="0 0 160 40" className="h-8 text-slate-400 hover:text-[#fbc02d] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        <text x="10" y="27" fontSize="22" fontWeight="950" fontFamily="Impact, system-ui, -apple-system, sans-serif" letterSpacing="1.5">BATEKOO</text>
      </svg>
    )
  },
  {
    name: 'Coquetel Molotov',
    renderLogo: () => (
      <svg viewBox="0 0 200 40" className="h-8 text-slate-400 hover:text-[#ff9800] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Bottle with flame */}
        <path d="M15,18 L15,32 A3,3 0 0,0 18,35 L24,35 A3,3 0 0,0 27,32 L27,18 L24,14 L24,10 L18,10 L18,14 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M21,10 C21,6 23,8 23,4 C21,4 19,6 20,10 Z" fill="currentColor" />
        {/* Text */}
        <text x="38" y="23" fontSize="13" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1.5">COQUETEL</text>
        <text x="38" y="33" fontSize="10" fontWeight="500" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="3" opacity="0.8">MOLOTOV</text>
      </svg>
    )
  },
  {
    name: 'TOTVS',
    renderLogo: () => (
      <svg viewBox="0 0 150 40" className="h-8 text-slate-400 hover:text-[#0052ff] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Intersecting ellipses */}
        <ellipse cx="20" cy="20" rx="14" ry="5" transform="rotate(-30 20 20)" fill="none" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="20" cy="20" rx="14" ry="5" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
        {/* Text */}
        <text x="45" y="27" fontSize="22" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1.5">TOTVS</text>
      </svg>
    )
  },
  {
    name: 'Ser Educacional',
    renderLogo: () => (
      <svg viewBox="0 0 180 40" className="h-8 text-slate-400 hover:text-[#1e88e5] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Graduation cap */}
        <path d="M20,8 L34,14 L20,20 L6,14 Z" fill="currentColor" />
        <path d="M12,18 L12,28 C12,30 28,30 28,28 L28,18" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* Text */}
        <text x="42" y="22" fontSize="16" fontWeight="950" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">ser</text>
        <text x="42" y="32" fontSize="9" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1" opacity="0.8">EDUCACIONAL</text>
      </svg>
    )
  },
  {
    name: 'Morada da Paz Essencial',
    renderLogo: () => (
      <svg viewBox="0 0 200 40" className="h-8 text-slate-400 hover:text-[#00bcd4] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Stylized flower */}
        <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M20,30 C20,20 12,22 12,16 C12,12 20,8 20,8 C20,8 28,12 28,16 C28,22 20,20 20,30 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* Text */}
        <text x="42" y="20" fontSize="12" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">MORADA DA PAZ</text>
        <text x="42" y="31" fontSize="8" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="2" opacity="0.7">ESSENCIAL</text>
      </svg>
    )
  },
  {
    name: 'Âncora',
    renderLogo: () => (
      <svg viewBox="0 0 150 40" className="h-8 text-slate-400 hover:text-[#37474f] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Anchor */}
        <circle cx="20" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <line x1="20" y1="13" x2="20" y2="30" stroke="currentColor" strokeWidth="3" />
        <line x1="12" y1="18" x2="28" y2="18" stroke="currentColor" strokeWidth="2.5" />
        <path d="M8,24 C8,34 32,34 32,24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        {/* Text */}
        <text x="42" y="27" fontSize="18" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="2">ÂNCORA</text>
      </svg>
    )
  },
  {
    name: 'Hemobrás',
    renderLogo: () => (
      <svg viewBox="0 0 160 40" className="h-8 text-slate-400 hover:text-[#e53935] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Blood drop */}
        <path d="M20,6 C20,6 29,17 29,23 A9,9 0 0,1 11,23 C11,17 20,6 20,6 Z" fill="currentColor" />
        <circle cx="20" cy="23" r="3" fill="white" />
        {/* Text */}
        <text x="38" y="27" fontSize="17" fontWeight="950" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1">HEMOBRÁS</text>
      </svg>
    )
  },
  {
    name: 'Governo de PE',
    renderLogo: () => (
      <svg viewBox="0 0 200 40" className="h-8 text-slate-400 hover:text-[#1565c0] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Sun emblem */}
        <circle cx="20" cy="20" r="7" fill="currentColor" />
        <path d="M20,6 L20,10 M20,30 L20,34 M6,20 L10,20 M30,20 L34,20 M10,10 L13,13 M27,27 L30,30 M10,30 L13,27 M27,10 L30,13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Text */}
        <text x="42" y="18" fontSize="11" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">GOVERNO</text>
        <text x="42" y="28" fontSize="9" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">DE PERNAMBUCO</text>
        <text x="42" y="36" fontSize="7" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" opacity="0.6">Mais trabalho, mais futuro</text>
      </svg>
    )
  },
  {
    name: 'Prefeitura do Recife',
    renderLogo: () => (
      <svg viewBox="0 0 200 40" className="h-8 text-slate-400 hover:text-[#1e88e5] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Lighthouse */}
        <path d="M14,35 L16,16 L24,16 L26,35 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="12" y="32" width="16" height="3" fill="currentColor" />
        <circle cx="20" cy="11" r="3.5" fill="currentColor" />
        {/* Text */}
        <text x="38" y="19" fontSize="11" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">PREFEITURA DO</text>
        <text x="38" y="32" fontSize="14" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1">RECIFE</text>
      </svg>
    )
  },
  {
    name: 'Rio 2026',
    renderLogo: () => (
      <svg viewBox="0 0 150 40" className="h-8 text-slate-400 hover:text-[#009688] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Wave silhouette */}
        <path d="M6,26 Q14,10 22,24 T38,18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="34" cy="12" r="3.5" fill="currentColor" />
        {/* Text */}
        <text x="48" y="22" fontSize="16" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1">RIO</text>
        <text x="48" y="33" fontSize="11" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="3" opacity="0.8">2026</text>
      </svg>
    )
  },
  {
    name: 'RedBull',
    renderLogo: () => (
      <svg viewBox="0 0 150 40" className="h-8 text-slate-400 hover:text-[#e53935] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Charging bull silhouette */}
        <path d="M6,16 C10,12 18,14 20,18 C22,22 18,28 24,28 C28,28 32,20 34,16 L34,22 C30,26 24,32 16,32 C10,32 6,24 6,16 Z" fill="currentColor" />
        <circle cx="28" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* Text */}
        <text x="44" y="27" fontSize="18" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">RedBull</text>
      </svg>
    )
  },
  {
    name: 'UOL Edtech',
    renderLogo: () => (
      <svg viewBox="0 0 180 40" className="h-8 text-slate-400 hover:text-[#ff9800] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* UOL Ball */}
        <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M20,8 A12,12 0 0,1 32,20 L20,20 Z" fill="currentColor" />
        {/* Text */}
        <text x="42" y="22" fontSize="16" fontWeight="950" fontFamily="system-ui, -apple-system, sans-serif">UOL</text>
        <text x="42" y="32" fontSize="9" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1" opacity="0.8">EDTECH</text>
      </svg>
    )
  },
  {
    name: 'Esporte da Sorte',
    renderLogo: () => (
      <svg viewBox="0 0 200 40" className="h-8 text-slate-400 hover:text-[#2e7d32] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Clover leaf */}
        <path d="M20,18 C17,14 11,14 11,19 C11,24 18,24 20,21 C22,24 29,24 29,19 C29,14 23,14 20,18 Z" fill="currentColor" />
        <path d="M20,21 C17,25 11,25 11,30 C11,35 18,35 20,32 C22,35 29,35 29,30 C29,25 23,25 20,21 Z" fill="currentColor" />
        <path d="M20,30 L20,38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Text */}
        <text x="38" y="20" fontSize="11" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">ESPORTE DA</text>
        <text x="38" y="32" fontSize="13" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1">SORTE</text>
      </svg>
    )
  },
  {
    name: 'Um Telecom',
    renderLogo: () => (
      <svg viewBox="0 0 170 40" className="h-8 text-slate-400 hover:text-[#3f51b5] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Number 1 with signal waves */}
        <circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M17,26 L17,14 L14,16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M24,12 A10,10 0 0,1 29,20 A10,10 0 0,1 24,28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Text */}
        <text x="42" y="22" fontSize="16" fontWeight="950" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">UM</text>
        <text x="42" y="32" fontSize="9" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="2" opacity="0.8">TELECOM</text>
      </svg>
    )
  },
  {
    name: 'FIAT',
    renderLogo: () => (
      <svg viewBox="0 0 120 40" className="h-8 text-slate-400 hover:text-[#d32f2f] transition-all duration-300 transform hover:scale-105" fill="currentColor">
        {/* Classic FIAT bold italic text and red bars */}
        <text x="10" y="29" fontSize="28" fontWeight="950" fontFamily="system-ui, -apple-system, sans-serif" fontStyle="italic" letterSpacing="2">FIAT</text>
        <rect x="88" y="10" width="3" height="20" fill="currentColor" transform="skewX(-15)" />
        <rect x="96" y="10" width="3" height="20" fill="currentColor" transform="skewX(-15)" />
        <rect x="104" y="10" width="3" height="20" fill="currentColor" transform="skewX(-15)" />
        <rect x="112" y="10" width="3" height="20" fill="currentColor" transform="skewX(-15)" />
      </svg>
    )
  }
];

export default function LogosMarquee() {
  // Double the array to make the infinite scroll effect seamless
  const extendedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50 z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6">
        <h2 className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Marcas que tiveram resultados conosco
        </h2>
      </div>

      <div className="flex w-full overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap gap-12 py-4 items-center">
          {extendedPartners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center px-6 select-none">
              {partner.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

