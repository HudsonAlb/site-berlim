import { useState } from 'react';
import { ArrowRight, BookOpen, Lock } from 'lucide-react';
import { CLASH, EbookCover, INTER } from './illustrations';

// Web App URL of the Google Apps Script bound to the ebook leads spreadsheet.
// https://docs.google.com/spreadsheets/d/1Mn7rtJx9gd0b5cFPwhhr-l6b6Ql9A3OhhGD-FseA7WY/edit
// Deploy docs/apps-script/ebook-leads.gs (see the comment at its top) and paste the /exec URL here.
const EBOOK_LEADS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbypVVYEiOiOUXBH--sXZJEdUni-L6XgBRrczoc8Jg7a06710tnwtZPotIQrUOeEs7Uk/exec';

const CHAPTERS = [
  'O que é MARTECH',
  'Por que incorporar mais tecnologia',
  'O que muda com o novo marketing',
  'Sistema, time e agentes de IA',
  'Seus primeiros passos',
];

interface LeadForm {
  nome: string;
  telefone: string;
  email: string;
  consentimento: boolean;
}

type Errors = Partial<Record<keyof LeadForm, string>>;

function formatPhone(value: string): string {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length === 0) return '';
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function validate(form: LeadForm): Errors {
  const errors: Errors = {};
  if (form.nome.trim().length < 2) errors.nome = 'Informe seu nome.';
  const digits = form.telefone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11) errors.telefone = 'Informe um telefone com DDD.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errors.email = 'Informe um e-mail válido.';
  if (!form.consentimento) errors.consentimento = 'É preciso autorizar para continuar.';
  return errors;
}

/** Where the visitor came from, e.g. ?origem=qrcode on the QR code printed for the talk. */
function readOrigin(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get('origem') || params.get('utm_source') || 'direto';
}

export default function EbookGate({ onUnlock }: { onUnlock: () => void }) {
  const [form, setForm] = useState<LeadForm>({ nome: '', telefone: '', email: '', consentimento: false });
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const update = <K extends keyof LeadForm>(key: K, value: LeadForm[K]) => {
    const next = { ...form, [key]: value };
    setForm(next);
    if (attempted) setErrors(validate(next));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    setSubmitError(false);
    try {
      if (!EBOOK_LEADS_WEBHOOK_URL) {
        // Lets the page be previewed locally before the spreadsheet exists; never lets a production lead get lost.
        if (import.meta.env.PROD) throw new Error('EBOOK_LEADS_WEBHOOK_URL is not configured');
        console.warn('[ebook] EBOOK_LEADS_WEBHOOK_URL is empty; lead not saved:', form);
      } else {
        await fetch(EBOOK_LEADS_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            'Data/Hora': new Date().toLocaleString('pt-BR', { timeZone: 'America/Recife' }),
            Nome: form.nome.trim(),
            Telefone: form.telefone,
            'E-mail': form.email.trim(),
            'Consentimento LGPD': 'Sim',
            Origem: readOrigin(),
          }),
        });
      }
      onUnlock();
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-[7px] bg-white/5 border ${hasError ? 'border-red-500/60' : 'border-white/10'} focus:border-[#0941DC] focus:outline-none text-white placeholder:text-slate-500 text-sm font-medium transition-all ${INTER}`;

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_80%_0%,rgba(9,65,220,0.35)_0%,rgba(6,31,107,0.15)_45%,transparent_75%)] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#061F6B]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-16 items-center">
        <div>
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#8FB0FF] ${INTER} text-xs font-bold tracking-widest uppercase mb-5`}>
            <BookOpen className="w-4 h-4" />
            Ebook gratuito
          </div>
          <h1 className={`${CLASH} font-bold text-4xl sm:text-6xl leading-[1.05] tracking-tight text-white`}>
            Por que o seu negócio precisa de{' '}
            <span className="bg-gradient-to-r from-[#B9CCFF] via-[#6E95FF] to-[#0941DC] bg-clip-text text-transparent">MARTECH?</span>
          </h1>
          <p className={`${INTER} mt-5 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl`}>
            Uma introdução simples para entender como tecnologia, dados e inteligência artificial estão mudando a forma de fazer marketing e de crescer. Baseado na palestra de Paulo Filho, founder da Berlim Co.
          </p>

          <div className="mt-10 grid sm:grid-cols-[auto_1fr] gap-10 items-center">
            <div className="w-56 sm:w-52 mx-auto">
              <EbookCover />
            </div>
            <ol className="space-y-3">
              {CHAPTERS.map((title, i) => (
                <li key={title} className="flex items-center gap-3">
                  <span className={`${CLASH} shrink-0 w-8 h-8 rounded-full bg-[#0941DC]/20 border border-[#0941DC]/50 text-[#8FB0FF] text-sm font-semibold flex items-center justify-center`}>
                    {i + 1}
                  </span>
                  <span className={`${INTER} text-sm text-slate-200 font-medium`}>{title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-[0_30px_80px_-30px_rgba(9,65,220,0.5)]"
        >
          <h2 className={`${CLASH} font-bold text-2xl sm:text-3xl text-white`}>Acesse o ebook</h2>
          <p className={`${INTER} text-slate-400 text-sm mt-2 mb-7`}>Preencha seus dados para ler o conteúdo completo.</p>

          <div className="space-y-5">
            <div>
              <label htmlFor="ebook-nome" className={`${INTER} block text-sm font-semibold text-slate-200 mb-1.5`}>Nome <span className="text-[#0941DC]">*</span></label>
              <input id="ebook-nome" type="text" autoComplete="name" placeholder="Seu nome completo" value={form.nome} onChange={(e) => update('nome', e.target.value)} className={inputClass(Boolean(errors.nome))} />
              {errors.nome && <p className={`${INTER} mt-1.5 text-xs text-red-400 font-semibold`}>{errors.nome}</p>}
            </div>

            <div>
              <label htmlFor="ebook-telefone" className={`${INTER} block text-sm font-semibold text-slate-200 mb-1.5`}>Telefone / WhatsApp <span className="text-[#0941DC]">*</span></label>
              <input id="ebook-telefone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder="(81) 99999-9999" value={form.telefone} onChange={(e) => update('telefone', formatPhone(e.target.value))} className={inputClass(Boolean(errors.telefone))} />
              {errors.telefone && <p className={`${INTER} mt-1.5 text-xs text-red-400 font-semibold`}>{errors.telefone}</p>}
            </div>

            <div>
              <label htmlFor="ebook-email" className={`${INTER} block text-sm font-semibold text-slate-200 mb-1.5`}>E-mail <span className="text-[#0941DC]">*</span></label>
              <input id="ebook-email" type="email" inputMode="email" autoComplete="email" placeholder="voce@empresa.com" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass(Boolean(errors.email))} />
              {errors.email && <p className={`${INTER} mt-1.5 text-xs text-red-400 font-semibold`}>{errors.email}</p>}
            </div>

            <div>
              <label className={`flex items-start gap-3 cursor-pointer ${INTER}`}>
                <input type="checkbox" checked={form.consentimento} onChange={(e) => update('consentimento', e.target.checked)} className="accent-[#0941DC] w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-400 leading-relaxed">
                  Autorizo a Berlim Co. a usar meus dados para enviar conteúdos e entrar em contato, conforme a LGPD e a{' '}
                  <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-[#8FB0FF] hover:underline">Política de Privacidade</a>.
                </span>
              </label>
              {errors.consentimento && <p className={`${INTER} mt-1.5 text-xs text-red-400 font-semibold`}>{errors.consentimento}</p>}
            </div>
          </div>

          {submitError && (
            <p className={`${INTER} mt-5 text-xs text-red-400 font-semibold`}>
              Não foi possível liberar o acesso agora. Verifique sua conexão e tente novamente.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className={`${INTER} mt-7 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[7px] bg-[#0941DC] hover:bg-[#061F6B] text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#0941DC]/30 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {submitting ? 'Liberando...' : 'Quero ler o ebook'}
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className={`${INTER} mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-500`}>
            <Lock className="w-3 h-3" />
            Seus dados ficam só com a Berlim Co.
          </p>
        </form>
      </div>
    </section>
  );
}
