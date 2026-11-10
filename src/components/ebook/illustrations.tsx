import { Bot, Cpu, Megaphone, MessageSquare, Search } from 'lucide-react';

export const CLASH = "font-['Clash_Display','Inter',sans-serif]";
export const INTER = "font-['Inter',sans-serif]";

// The Berlim star, as used across the brand system (moodboard / app icon).
export const STAR_POINTS = '50,4 61.5,37.5 97,37.5 68.5,58.5 79.5,93 50,72 20.5,93 31.5,58.5 3,37.5 38.5,37.5';

export function BerlimStar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon points={STAR_POINTS} fill="currentColor" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * The ebook cover, drawn as a tilted book. Type is sized in container units (cqw)
 * so the same cover reads right at any width, from the form thumbnail to the hero.
 */
export function EbookCover() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] [perspective:1400px]">
      <div className="absolute -inset-10 bg-[#0941DC]/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative aspect-[3/4] [transform-style:preserve-3d] [transform:rotateY(-14deg)_rotateX(4deg)] transition-transform duration-700 hover:[transform:rotateY(-4deg)_rotateX(0deg)]">
        {/* page block behind the cover, for thickness */}
        <div className="absolute inset-0 translate-x-[7px] translate-y-[5px] rounded-[14px] bg-[#AFC4FF]" />
        <div className="absolute inset-0 translate-x-[4px] translate-y-[3px] rounded-[14px] bg-[#F2F8FF]" />

        <div className="@container absolute inset-0 rounded-[14px] overflow-hidden border border-white/15 shadow-[0_40px_80px_-20px_rgba(9,65,220,0.6)]">
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_85%_10%,#1D5BFF_0%,#0941DC_25%,#061F6B_55%,#030311_100%)]" />
          <div className="absolute inset-0 opacity-30 [background-size:9cqw_9cqw] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
          <div className="absolute inset-y-0 left-0 w-[4cqw] bg-gradient-to-r from-black/50 via-white/10 to-transparent" />
          <BerlimStar className="absolute -right-[12cqw] -bottom-[10cqw] w-[70cqw] h-[70cqw] text-white/[0.06]" />

          <div className="relative h-full flex flex-col p-[9cqw]">
            <span className={`${INTER} text-[3.2cqw] font-bold tracking-[0.2em] uppercase text-white/80`}>Ebook · Guia para iniciantes</span>
            <span className="mt-[2.5cqw] block w-[12cqw] h-[1cqw] bg-white rounded-full" />

            <div className="my-auto">
              <p className={`${CLASH} font-semibold text-white text-[8.5cqw] leading-[1.05]`}>
                Por que o seu negócio precisa de
              </p>
              <p className={`${CLASH} font-bold text-[13cqw] leading-none mt-[1.5cqw] bg-gradient-to-r from-white via-[#B9CCFF] to-[#6E95FF] bg-clip-text text-transparent`}>
                MARTECH?
              </p>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className={`${CLASH} font-semibold text-white text-[4.6cqw]`}>Berlim Co.</p>
                <p className={`${INTER} text-[3.2cqw] text-white/60`}>Palestra de Paulo Filho</p>
              </div>
              <BerlimStar className="w-[9cqw] h-[9cqw] text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Marketing + Technology = MARTECH, as three glass tiles. */
export function MartechEquation() {
  const tile = 'flex flex-col items-center justify-center gap-2 rounded-2xl px-4 py-5 sm:px-6 border';
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      <div className={`${tile} bg-white border-[#0941DC]/15 shadow-[0_10px_30px_-12px_rgba(9,65,220,0.25)]`}>
        <Megaphone className="w-7 h-7 text-[#0941DC]" />
        <span className={`${CLASH} font-semibold text-[#030311]`}>Marketing</span>
      </div>
      <span className={`${CLASH} text-3xl font-bold text-[#0941DC]`}>+</span>
      <div className={`${tile} bg-white border-[#0941DC]/15 shadow-[0_10px_30px_-12px_rgba(9,65,220,0.25)]`}>
        <Cpu className="w-7 h-7 text-[#0941DC]" />
        <span className={`${CLASH} font-semibold text-[#030311]`}>Technology</span>
      </div>
      <span className={`${CLASH} text-3xl font-bold text-[#0941DC]`}>=</span>
      <div className={`${tile} bg-gradient-to-br from-[#0941DC] to-[#061F6B] border-[#0941DC] shadow-[0_16px_40px_-12px_rgba(9,65,220,0.6)]`}>
        <BerlimStar className="w-7 h-7 text-white" />
        <span className={`${CLASH} font-bold text-white tracking-wide`}>MARTECH</span>
      </div>
    </div>
  );
}

/** "Antes": scattered guesses with no connection between them. */
export function BeforeArt() {
  const dots: [number, number, number][] = [
    [30, 30, 6], [92, 22, 4], [150, 40, 7], [60, 80, 5], [120, 92, 4], [178, 88, 6], [20, 108, 4], [96, 54, 3],
  ];
  return (
    <svg viewBox="0 0 200 130" className="w-full h-auto" aria-hidden="true">
      {dots.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#29569B" opacity={0.25 + (i % 3) * 0.15} />
      ))}
      <path d="M30 30 L55 45" stroke="#29569B" strokeOpacity="0.35" strokeDasharray="3 4" />
      <path d="M150 40 L132 60" stroke="#29569B" strokeOpacity="0.35" strokeDasharray="3 4" />
      <path d="M60 80 L78 100" stroke="#29569B" strokeOpacity="0.35" strokeDasharray="3 4" />
      {[[70, 36], [140, 76], [42, 110]].map(([x, y], i) => (
        <text key={i} x={x} y={y} fontSize="18" fontWeight="700" fill="#29569B" opacity="0.55" fontFamily="Clash Display, Inter, sans-serif">?</text>
      ))}
    </svg>
  );
}

/** "Hoje": every node connected to one system. */
export function TodayArt() {
  const cx = 100;
  const cy = 65;
  const nodes = Array.from({ length: 7 }, (_, i) => {
    const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
    return [cx + Math.cos(a) * 72, cy + Math.sin(a) * 48] as const;
  });
  return (
    <svg viewBox="0 0 200 130" className="w-full h-auto" aria-hidden="true">
      <ellipse cx={cx} cy={cy} rx="72" ry="48" fill="none" stroke="#030311" strokeOpacity="0.15" />
      {nodes.map(([x, y], i) => {
        const [nx, ny] = nodes[(i + 1) % nodes.length];
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="#030311" strokeOpacity="0.35" strokeWidth="1.2" />
            <line x1={x} y1={y} x2={nx} y2={ny} stroke="#030311" strokeOpacity="0.2" />
            <circle cx={x} cy={y} r="6" fill="#030311" />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="20" fill="#030311" />
      <g transform={`translate(${cx - 10} ${cy - 10}) scale(0.2)`}>
        <polygon points={STAR_POINTS} fill="#ffffff" />
      </g>
    </svg>
  );
}

/** The customer journey as a looping path through many touchpoints. */
export function JourneyArt() {
  const stops: { x: number; y: number; label: string; lx: number; ly: number }[] = [
    { x: 30, y: 200, label: 'Busca', lx: 30, ly: 224 },
    { x: 95, y: 70, label: 'Blog', lx: 95, ly: 54 },
    { x: 170, y: 170, label: 'Comparativo', lx: 160, ly: 194 },
    { x: 230, y: 50, label: 'Fórum', lx: 230, ly: 34 },
    { x: 300, y: 150, label: 'Avaliações', lx: 345, ly: 154 },
    { x: 215, y: 205, label: 'Redes sociais', lx: 238, ly: 230 },
  ];
  return (
    <svg viewBox="0 0 380 240" className="w-full h-auto" role="img" aria-label="A jornada do cliente passa por busca, blog, comparativo, fórum, avaliações e redes sociais, indo e voltando, até a decisão.">
      <defs>
        <linearGradient id="journeyStroke" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#29569B" />
          <stop offset="100%" stopColor="#0941DC" />
        </linearGradient>
      </defs>
      <path
        d="M30,200 C40,120 60,70 95,70 S160,150 170,170 S200,60 230,50 S290,110 300,150 S250,215 215,205 S300,60 330,40"
        fill="none"
        stroke="url(#journeyStroke)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="7 7"
      />
      {stops.map((s) => (
        <g key={s.label}>
          <circle cx={s.x} cy={s.y} r="9" fill="#ffffff" stroke="#0941DC" strokeWidth="3" />
          <text x={s.lx} y={s.ly} textAnchor="middle" fontSize="12" fontWeight="600" fill="#061F6B" fontFamily="Inter, sans-serif">{s.label}</text>
        </g>
      ))}
      <circle cx="330" cy="40" r="17" fill="#0941DC" />
      <g transform="translate(320 30) scale(0.2)">
        <polygon points={STAR_POINTS} fill="#ffffff" />
      </g>
      <text x="326" y="13" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0941DC" fontFamily="Inter, sans-serif">Decisão</text>
    </svg>
  );
}

/** SEO (being found in search) next to GEO (being cited by an AI answer). */
export function SeoGeoArt() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="rounded-xl bg-white border border-[#0941DC]/15 p-4 shadow-[0_10px_30px_-14px_rgba(9,65,220,0.3)]">
        <p className={`${INTER} text-[10px] font-bold uppercase tracking-widest text-[#29569B] mb-2`}>SEO · ser encontrado</p>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 mb-3">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <span className={`${INTER} text-xs text-slate-500`}>o que é martech</span>
        </div>
        <div className="space-y-2">
          <div className="rounded-lg bg-[#0941DC]/[0.07] border border-[#0941DC]/30 p-2">
            <p className={`${INTER} text-[10px] text-[#0941DC] font-semibold`}>suamarca.com.br</p>
            <div className="h-1.5 w-4/5 rounded bg-[#0941DC]/60 mt-1" />
            <div className="h-1.5 w-3/5 rounded bg-[#0941DC]/25 mt-1" />
          </div>
          <div className="p-2">
            <div className="h-1.5 w-2/3 rounded bg-slate-200" />
            <div className="h-1.5 w-1/2 rounded bg-slate-100 mt-1" />
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-[#030311] border border-white/10 p-4 shadow-[0_10px_30px_-14px_rgba(3,3,17,0.6)]">
        <p className={`${INTER} text-[10px] font-bold uppercase tracking-widest text-[#8FB0FF] mb-2`}>GEO · ser citado</p>
        <div className="flex justify-end mb-2">
          <span className={`${INTER} text-xs text-white bg-[#0941DC] rounded-2xl rounded-br-sm px-3 py-1.5`}>Qual agência entende de martech?</span>
        </div>
        <div className="flex gap-2">
          <span className="shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
            <MessageSquare className="w-3.5 h-3.5 text-[#8FB0FF]" />
          </span>
          <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/10 px-3 py-2">
            <div className="h-1.5 w-40 max-w-full rounded bg-white/25" />
            <div className="h-1.5 w-28 rounded bg-white/15 mt-1" />
            <span className={`${INTER} inline-flex items-center gap-1 mt-2 text-[10px] font-semibold text-white bg-[#0941DC]/40 border border-[#0941DC] rounded-full px-2 py-0.5`}>
              Fonte: Sua Marca
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Marketing at the center, connected to the five areas it now talks to. */
export function HubArt() {
  const areas = ['Tecnologia', 'Produto', 'Comercial', 'Dados', 'Comunicação'];
  const cx = 180;
  const cy = 150;
  const r = 110;
  const points = areas.map((label, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / areas.length;
    return { label, x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
  });
  return (
    <svg viewBox="0 0 360 300" className="w-full h-auto max-w-[460px] mx-auto" role="img" aria-label="O marketing no centro, conectado a tecnologia, produto, comercial, dados e comunicação.">
      <defs>
        <radialGradient id="hubGlow">
          <stop offset="0%" stopColor="#0941DC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0941DC" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hubCore" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D5BFF" />
          <stop offset="100%" stopColor="#061F6B" />
        </linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r="95" fill="url(#hubGlow)" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeDasharray="4 6" />
      {points.map((p) => (
        <line key={`l-${p.label}`} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#8FB0FF" strokeOpacity="0.45" strokeWidth="1.5" />
      ))}
      <circle cx={cx} cy={cy} r="46" fill="url(#hubCore)" stroke="#ffffff" strokeOpacity="0.25" />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff" fontFamily="Clash Display, Inter, sans-serif">Marketing</text>
      {points.map((p) => (
        <g key={p.label}>
          <rect x={p.x - 46} y={p.y - 15} width="92" height="30" rx="15" fill="#080816" stroke="#0941DC" strokeWidth="1.5" />
          <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#ffffff" fontFamily="Inter, sans-serif">{p.label}</text>
        </g>
      ))}
    </svg>
  );
}

export function AgentChip({ label }: { label: string }) {
  return (
    <span className={`${INTER} inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#030311] text-white text-xs font-semibold`}>
      <Bot className="w-3.5 h-3.5 text-[#8FB0FF]" />
      {label}
    </span>
  );
}
