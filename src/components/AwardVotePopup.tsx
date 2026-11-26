import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, Trophy, X } from 'lucide-react';
import premioLogo from '../assets/premio/premio-recife-inovacao.jpg';

// Prêmio Recife de Inovação 2026 — popular vote campaign.
// The "Votar" button on coreto.app.emprel.gov.br/programas/pri2026/projetos points here (Conecta Recife login).
const VOTE_URL = 'https://conectarecifeservicos.recife.pe.gov.br/votacao-pri/';
// Set to the last voting day (e.g. '2026-12-15T23:59:59-03:00') to retire the popup on its own; null keeps it on.
const VOTING_ENDS_AT: string | null = null;

const VOTED_KEY = 'berlim:premio-recife-2026:voted'; // clicked "Votar": stop asking on this device
const SEEN_KEY = 'berlim:premio-recife-2026:seen'; // popup already shown in this browser session
const PILL_CLOSED_KEY = 'berlim:premio-recife-2026:pill-closed';

// Pages where a modal would interrupt a form the visitor came to fill.
const NO_AUTO_OPEN = ['/onboarding', '/ebookmartech'];

function read(storage: 'local' | 'session', key: string): boolean {
  try {
    return (storage === 'local' ? localStorage : sessionStorage).getItem(key) === '1';
  } catch {
    return false;
  }
}

function write(storage: 'local' | 'session', key: string) {
  try {
    (storage === 'local' ? localStorage : sessionStorage).setItem(key, '1');
  } catch {
    // storage blocked: the popup just may show again
  }
}

const STEPS = [
  <>Entre com seu <strong className="text-white">CPF no Conecta Recife</strong></>,
  <>Na categoria <strong className="text-white">Inovação Empresarial</strong> (é a primeira)</>,
  <>Selecione <strong className="text-white">Martech System Berlim</strong></>,
];

export default function AwardVotePopup() {
  const { pathname } = useLocation();
  const votingOver = VOTING_ENDS_AT !== null && Date.now() > new Date(VOTING_ENDS_AT).getTime();
  const [voted, setVoted] = useState(() => read('local', VOTED_KEY));
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(() => read('session', SEEN_KEY));
  const [pillClosed, setPillClosed] = useState(() => read('session', PILL_CLOSED_KEY));
  const voteButtonRef = useRef<HTMLAnchorElement>(null);
  const formPage = NO_AUTO_OPEN.includes(pathname);

  // Open once per session, a moment after the page settles, except on form pages.
  useEffect(() => {
    if (votingOver || voted || seen || formPage) return;
    const timer = setTimeout(() => {
      write('session', SEEN_KEY);
      setSeen(true);
      setOpen(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [formPage, seen, voted, votingOver]);

  useEffect(() => {
    if (!open) return;
    voteButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (votingOver || voted) return null;

  const handleVote = () => {
    write('local', VOTED_KEY);
    setVoted(true);
    setOpen(false);
  };

  const closePill = () => {
    write('session', PILL_CLOSED_KEY);
    setPillClosed(true);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 print:hidden">
          <div className="absolute inset-0 bg-[#030311]/75 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="award-popup-title"
            className="relative w-full max-w-[440px] max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl bg-[#080816] border border-white/10 shadow-[0_40px_100px_-30px_rgba(9,65,220,0.7)]"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <img
              src={premioLogo}
              alt="Prêmio Recife de Inovação"
              className="block w-full h-36 sm:h-40 object-cover bg-[#135EAB]"
            />

            <div className="p-6 sm:p-7">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-[#8FB0FF] font-['Inter',sans-serif]">
                <Trophy className="w-3.5 h-3.5" />
                Votação popular · 2026
              </p>
              <h2
                id="award-popup-title"
                className="mt-2 font-['Clash_Display','Inter',sans-serif] font-bold text-2xl sm:text-[28px] leading-[1.1] text-white"
              >
                Vote na Berlim no Prêmio Recife de Inovação
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-['Inter',sans-serif]">
                O <strong className="text-white">Martech System Berlim</strong> está concorrendo na categoria Inovação Empresarial. Seu voto leva menos de um minuto:
              </p>

              <ol className="mt-5 space-y-3">
                {STEPS.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-['Inter',sans-serif]">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#0941DC] text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>

              <a
                ref={voteButtonRef}
                href={VOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleVote}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[7px] bg-[#0941DC] hover:bg-[#061F6B] text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#0941DC]/30 font-['Inter',sans-serif] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Votar na Berlim
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-2 w-full py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer font-['Inter',sans-serif]"
              >
                Agora não
              </button>
            </div>
          </div>
        </div>
      )}

      {/* After the popup is dismissed, a small reminder stays in the corner until the visitor votes. */}
      {!open && !pillClosed && (seen || formPage) && (
        <div className="fixed bottom-4 left-4 z-[90] flex items-center rounded-full bg-[#0941DC] text-white shadow-lg shadow-[#0941DC]/40 print:hidden font-['Inter',sans-serif]">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 pl-4 pr-2 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            <Trophy className="w-4 h-4" />
            Vote na Berlim
          </button>
          <button
            type="button"
            onClick={closePill}
            aria-label="Fechar lembrete de votação"
            className="mr-1.5 w-7 h-7 rounded-full hover:bg-white/15 flex items-center justify-center cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </>
  );
}
