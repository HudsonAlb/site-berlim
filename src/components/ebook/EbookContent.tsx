import { useState } from 'react';
import { ArrowRight, Database, Download, MessageCircle, MousePointerClick, Route, Search, Sparkles, Target, Users, Workflow } from 'lucide-react';
import {
  AgentChip,
  BeforeArt,
  BerlimStar,
  CLASH,
  EbookCover,
  HubArt,
  INTER,
  JourneyArt,
  MartechEquation,
  SeoGeoArt,
  TodayArt,
} from './illustrations';

const WHATSAPP_URL = `https://wa.me/558182499584?text=${encodeURIComponent('Olá! Li o ebook MARTECH da Berlim Co. e quero conversar sobre o meu negócio.')}`;

function ChapterHeader({ number, eyebrow, title, dark }: { number: string; eyebrow: string; title: React.ReactNode; dark: boolean }) {
  return (
    <div className="relative mb-10 sm:mb-14">
      <span
        aria-hidden="true"
        className={`${CLASH} absolute -top-10 sm:-top-16 right-0 font-bold text-[120px] sm:text-[200px] leading-none select-none ${dark ? 'text-white/[0.04]' : 'text-[#0941DC]/[0.06]'}`}
      >
        {number}
      </span>
      <p className={`${INTER} relative text-xs font-bold tracking-[0.2em] uppercase ${dark ? 'text-[#8FB0FF]' : 'text-[#0941DC]'}`}>
        Capítulo {number} · {eyebrow}
      </p>
      <h2 className={`${CLASH} relative mt-3 font-bold text-3xl sm:text-5xl leading-[1.08] tracking-tight max-w-3xl ${dark ? 'text-white' : 'text-[#030311]'}`}>
        {title}
      </h2>
    </div>
  );
}

const LIGHT_SECTION = 'ebook-chapter relative overflow-hidden bg-[#F2F8FF] text-[#030311] py-20 sm:py-28';
const DARK_SECTION = 'ebook-chapter relative overflow-hidden bg-[#030311] text-white py-20 sm:py-28';
const GRID_LIGHT = 'absolute inset-0 pointer-events-none [background-size:60px_60px] [background-image:linear-gradient(to_right,rgba(9,65,220,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,65,220,0.05)_1px,transparent_1px)]';
const CONTAINER = 'relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';

function Cover() {
  return (
    <section className="ebook-cover relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#030311]">
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_75%_10%,#0941DC_0%,#061F6B_40%,#030311_80%)] opacity-90 pointer-events-none" />
      <div className="absolute inset-0 opacity-20 pointer-events-none [background-size:60px_60px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
      <div className={`${CONTAINER} grid md:grid-cols-[1.2fr_1fr] gap-14 items-center`}>
        <div>
          <p className={`${INTER} text-xs font-bold tracking-[0.2em] uppercase text-white/80`}>Ebook · Guia para iniciantes</p>
          <span className="mt-3 block w-12 h-[3px] bg-white rounded-full" />
          <h1 className={`${CLASH} mt-8 font-bold text-5xl sm:text-7xl leading-[1.02] tracking-tight`}>
            Por que o seu negócio precisa de{' '}
            <span className="bg-gradient-to-r from-white via-[#B9CCFF] to-[#6E95FF] bg-clip-text text-transparent">MARTECH?</span>
          </h1>
          <p className={`${INTER} mt-6 text-white/80 text-base sm:text-lg leading-relaxed max-w-xl`}>
            Uma introdução simples para entender como a tecnologia, os dados e a inteligência artificial estão mudando a forma de fazer marketing e de crescer.
          </p>
          <p className={`${INTER} mt-8 text-sm text-white/60`}>
            <strong className="text-white">Berlim Co.</strong> · Com base na palestra de Paulo Filho, founder da Berlim Co.
          </p>
          <button
            type="button"
            onClick={() => window.print()}
            className={`${INTER} print:hidden mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-[7px] bg-white/10 border border-white/20 hover:bg-white/20 text-white text-sm font-semibold transition-all cursor-pointer backdrop-blur-md`}
          >
            <Download className="w-4 h-4" />
            Salvar em PDF
          </button>
        </div>
        <div className="hidden md:block">
          <EbookCover />
        </div>
      </div>
    </section>
  );
}

function Chapter1() {
  return (
    <section className={LIGHT_SECTION}>
      <div className={GRID_LIGHT} />
      <div className={CONTAINER}>
        <ChapterHeader number="01" eyebrow="O básico" title="O que é MARTECH?" dark={false} />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className={`${INTER} space-y-5 text-base sm:text-lg leading-relaxed text-slate-700`}>
            <p>
              MARTECH é a junção de <strong className="text-[#030311]">Marketing + Technology</strong> (tecnologia). Em poucas palavras: é usar ferramentas, dados, automações e inteligência artificial para planejar, executar e medir o marketing de forma mais inteligente.
            </p>
            <p>
              Pense assim: antes, o marketing dependia muito de boas ideias e de intuição. Hoje, a boa ideia continua importante, mas ela precisa vir acompanhada de números, testes e sistemas que ajudam a acertar mais.
            </p>
          </div>
          <MartechEquation />
        </div>

        <blockquote className="relative mt-14 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0941DC] via-[#0737B8] to-[#061F6B] px-7 py-10 sm:px-12 sm:py-14 text-white shadow-[0_30px_60px_-25px_rgba(9,65,220,0.7)]">
          <BerlimStar className="absolute -right-8 -top-8 w-48 h-48 text-white/10" />
          <p className={`${CLASH} relative font-bold text-3xl sm:text-5xl leading-[1.1]`}>“Criatividade sem dado ficou caro demais.”</p>
          <footer className={`${INTER} relative mt-4 text-sm text-white/70`}>A ideia central da palestra de Paulo Filho sobre MARTECH</footer>
        </blockquote>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-white border border-[#0941DC]/10 p-6 sm:p-7">
            <p className={`${INTER} text-xs font-bold tracking-widest uppercase text-[#29569B]`}>Antes</p>
            <div className="my-4 max-w-[260px]"><BeforeArt /></div>
            <p className={`${INTER} text-slate-600 leading-relaxed`}>
              Campanhas pontuais, baseadas na criatividade e em palpites. Era difícil saber o que realmente trouxe resultado.
            </p>
          </div>
          <div className="rounded-2xl bg-[#DCE7FF] border border-[#0941DC]/20 p-6 sm:p-7">
            <p className={`${INTER} text-xs font-bold tracking-widest uppercase text-[#0941DC]`}>Hoje</p>
            <div className="my-4 max-w-[260px]"><TodayArt /></div>
            <p className={`${INTER} text-[#030311] leading-relaxed`}>
              Sistemas de crescimento integrados: marketing, dados e tecnologia trabalhando juntos para o negócio funcionar com mais assertividade.
            </p>
          </div>
        </div>

        <p className={`${CLASH} mt-10 text-xl sm:text-2xl font-semibold text-[#0941DC] leading-snug max-w-3xl`}>
          Resumo: MARTECH não substitui a criatividade. Ela dá direção, velocidade e previsibilidade para a criatividade gerar resultado.
        </p>
      </div>
    </section>
  );
}

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const int = new Intl.NumberFormat('pt-BR');

/** Interactive R = L × C% × T, so the reader sees how small gains in each factor multiply. */
function RevenueFormula() {
  const [leads, setLeads] = useState(1000);
  const [conversion, setConversion] = useState(3);
  const [ticket, setTicket] = useState(500);
  const revenue = leads * (conversion / 100) * ticket;

  const sliders = [
    { key: 'L', label: 'Leads por mês', value: leads, display: int.format(leads), min: 100, max: 10000, step: 100, set: setLeads },
    { key: 'C%', label: 'Taxa de conversão', value: conversion, display: `${conversion.toLocaleString('pt-BR')}%`, min: 0.5, max: 20, step: 0.5, set: setConversion },
    { key: 'T', label: 'Ticket médio', value: ticket, display: brl.format(ticket), min: 50, max: 5000, step: 50, set: setTicket },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#080816] to-[#061F6B]/60">
      <div className="px-6 py-8 sm:px-10 text-center border-b border-white/10">
        <p className={`${CLASH} font-bold text-4xl sm:text-6xl tracking-wide`}>
          R <span className="text-[#6E95FF]">=</span> L <span className="text-[#6E95FF]">×</span> C% <span className="text-[#6E95FF]">×</span> T
        </p>
        <p className={`${INTER} mt-2 text-sm text-white/60`}>Receita = Leads × Taxa de conversão × Ticket médio</p>
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-8 px-6 py-8 sm:px-10 items-center">
        <div className="space-y-6">
          {sliders.map((s) => (
            <label key={s.key} className="block">
              <span className={`${INTER} flex items-baseline justify-between text-sm`}>
                <span className="text-white/70"><strong className={`${CLASH} text-white mr-2`}>{s.key}</strong>{s.label}</span>
                <span className="font-bold text-white tabular-nums">{s.display}</span>
              </span>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={s.value}
                onChange={(e) => s.set(Number(e.target.value))}
                className="mt-2 w-full accent-[#0941DC] cursor-pointer"
              />
            </label>
          ))}
        </div>
        <div className="md:w-56 rounded-xl bg-[#0941DC] p-6 text-center shadow-[0_20px_50px_-20px_rgba(9,65,220,0.9)]">
          <p className={`${INTER} text-xs font-bold uppercase tracking-widest text-white/70`}>Receita / mês</p>
          <p className={`${CLASH} mt-2 font-bold text-3xl tabular-nums`}>{brl.format(revenue)}</p>
        </div>
      </div>

      <p className={`${INTER} px-6 pb-8 sm:px-10 text-sm text-white/70 leading-relaxed`}>
        <strong className="text-white">Experimente:</strong> melhorar só 10% em cada fator faz a receita crescer <strong className="text-[#8FB0FF]">33%</strong>, não 10%. É por isso que medir cada parte da conta faz tanta diferença.
      </p>
    </div>
  );
}

function Chapter2() {
  const shifts = [
    {
      icon: Target,
      title: 'Medir o crescimento com precisão',
      text: 'Você consegue dizer, com exatidão, de onde vêm suas vendas? Uma conta simples ajuda a pensar: Receita = Leads × Conversão × Ticket. Ou seja, quantas pessoas chegam, quantas compram e quanto cada uma paga. Com tecnologia, você enxerga e melhora cada parte dessa conta.',
    },
    {
      icon: Database,
      title: 'Cuidar dos seus próprios dados',
      text: 'Os chamados first-party data são as informações que você coleta diretamente dos seus clientes e da sua audiência. Dados próprios são mais precisos e mais ricos em contexto. É o seu maior tesouro.',
    },
    {
      icon: Workflow,
      title: 'Automatizar o que se repete',
      text: 'Ferramentas conectadas entre si fazem sozinhas tarefas como enviar e-mails, organizar contatos e gerar relatórios. Sua equipe ganha tempo para pensar, criar e decidir.',
    },
  ];
  return (
    <section className={DARK_SECTION}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0941DC]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className={CONTAINER}>
        <ChapterHeader number="02" eyebrow="Primeiros passos" title="Por que o seu negócio precisa incorporar mais tecnologia?" dark />

        <p className={`${INTER} text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl`}>
          O mundo mudou e boa parte do marketing ainda não percebeu. O fim da intuição como estratégia e a chegada da previsibilidade como vantagem competitiva pedem três mudanças básicas:
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {shifts.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:border-[#0941DC]/60 transition-colors">
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-[#0941DC]/20 border border-[#0941DC]/50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#8FB0FF]" />
                </span>
                <span className={`${CLASH} text-3xl font-bold text-white/10`}>0{i + 1}</span>
              </div>
              <h3 className={`${CLASH} mt-5 text-xl font-semibold text-white`}>{title}</h3>
              <p className={`${INTER} mt-3 text-sm leading-relaxed text-slate-400`}>{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <RevenueFormula />
        </div>
      </div>
    </section>
  );
}

function Chapter3() {
  const cards = [
    {
      icon: Sparkles,
      title: 'Criatividade com IA e automação',
      text: 'Ferramentas de inteligência artificial ajudam a criar imagens, vídeos e campanhas em escala, e a automação conecta tudo. Um exemplo: um sistema que gera um cartaz personalizado com o mapa estelar do dia em que você nasceu e envia por e-mail, sem ninguém fazer manualmente.',
    },
    {
      icon: MousePointerClick,
      title: 'A decisão acontece antes do clique',
      text: 'As pessoas já perguntam para o Google e para as IAs, e recebem respostas prontas antes mesmo de visitar o seu site. Parte da decisão de compra é tomada ali, fora do seu controle direto.',
    },
  ];
  return (
    <section className={LIGHT_SECTION}>
      <div className={GRID_LIGHT} />
      <div className={CONTAINER}>
        <ChapterHeader number="03" eyebrow="O novo marketing" title="O que muda com esse novo marketing?" dark={false} />

        <p className={`${INTER} text-base sm:text-lg leading-relaxed text-slate-700 max-w-3xl`}>
          Existe criatividade no marketing orientado por tecnologia? Pelo contrário: hoje as possibilidades de criação se ampliam ao limite do pensamento. O que muda é a forma de fazer.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white border border-[#0941DC]/10 p-6 sm:p-7">
              <span className="w-11 h-11 rounded-xl bg-[#0941DC] flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </span>
              <h3 className={`${CLASH} mt-5 text-xl font-semibold`}>{title}</h3>
              <p className={`${INTER} mt-3 text-slate-600 leading-relaxed`}>{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl bg-white border border-[#0941DC]/10 p-6 sm:p-8 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center">
          <div>
            <span className="w-11 h-11 rounded-xl bg-[#0941DC] flex items-center justify-center">
              <Route className="w-5 h-5 text-white" />
            </span>
            <h3 className={`${CLASH} mt-5 text-xl font-semibold`}>O funil deixou de ser uma linha reta</h3>
            <p className={`${INTER} mt-3 text-slate-600 leading-relaxed`}>
              A jornada do cliente não segue mais uma sequência simples. A pessoa passa por buscas, blogs, comparativos, fóruns, avaliações e redes sociais, e volta várias vezes antes de decidir.
            </p>
          </div>
          <JourneyArt />
        </div>

        <div className="mt-5 rounded-2xl bg-[#DCE7FF] border border-[#0941DC]/20 p-6 sm:p-8 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center">
          <div>
            <span className="w-11 h-11 rounded-xl bg-[#030311] flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </span>
            <h3 className={`${CLASH} mt-5 text-xl font-semibold`}>SEO + GEO: ser encontrado e ser citado</h3>
            <p className={`${INTER} mt-3 text-[#030311]/80 leading-relaxed`}>
              SEO é aparecer nos buscadores. GEO (Generative Engine Optimization) é aparecer nas respostas das inteligências artificiais. Para isso, a sua marca precisa ter presença e relevância em muitos lugares, não só no próprio site.
            </p>
          </div>
          <SeoGeoArt />
        </div>

        <p className={`${CLASH} mt-10 text-xl sm:text-2xl font-semibold text-[#0941DC] leading-snug max-w-3xl`}>
          A lição: não basta mais estar no seu site. É preciso estar presente, de forma relevante, em todos os lugares onde as pessoas e as IAs buscam informação.
        </p>
      </div>
    </section>
  );
}

function Chapter4() {
  const roles = [
    'Analista de negócio', 'Gestor MARTECH', 'Designer generativo', 'Engenheiro de IA', 'Analytics e BI',
    'Engenheiro de dados', 'Gestor de growth', 'Designer de produto', 'Creator', 'Gestor de projetos',
  ];
  const agents = ['SDR (vendas)', 'Suporte', 'Análise de dados', 'Mídia', 'Pesquisa e planejamento'];
  const system = ['Canais', 'Training', 'Builder', 'Management', 'Governance'];

  return (
    <section className={DARK_SECTION}>
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-[#061F6B]/50 rounded-full blur-[150px] pointer-events-none" />
      <div className={CONTAINER}>
        <ChapterHeader number="04" eyebrow="Pessoas e sistemas" title="Um marketing mais integrado: sistema, time e agentes" dark />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className={`${INTER} text-base sm:text-lg leading-relaxed text-slate-300`}>
              MARTECH não é sobre pessoas comandarem tarefas, nem sobre a ausência de criatividade. É uma atuação sistemática, criativa e direcionada para o crescimento e para a resolução de problemas.
            </p>
            <p className={`${INTER} mt-6 text-xs font-bold tracking-[0.2em] uppercase text-[#8FB0FF]`}>O marketing passa a conversar com:</p>
            <p className={`${INTER} mt-2 text-slate-400`}>Tecnologia, produto, comercial, dados e comunicação.</p>
          </div>
          <HubArt />
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-7">
            <span className="w-11 h-11 rounded-xl bg-[#0941DC]/20 border border-[#0941DC]/50 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#8FB0FF]" />
            </span>
            <h3 className={`${CLASH} mt-5 text-xl font-semibold`}>O novo time MARTECH</h3>
            <p className={`${INTER} mt-3 text-sm text-slate-400 leading-relaxed`}>
              Novas competências para novas soluções. Todo mundo pensando em automação e dados.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {roles.map((r) => (
                <span key={r} className={`${INTER} px-3 py-1.5 rounded-full border border-white/15 text-xs text-slate-200`}>{r}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-[#F2F8FF] text-[#030311] p-6 sm:p-7">
            <span className="w-11 h-11 rounded-xl bg-[#0941DC] flex items-center justify-center">
              <BerlimStar className="w-5 h-5 text-white" />
            </span>
            <h3 className={`${CLASH} mt-5 text-xl font-semibold`}>Junto com agentes de IA</h3>
            <p className={`${INTER} mt-3 text-sm text-slate-600 leading-relaxed`}>
              Os agentes são assistentes de IA que executam tarefas específicas ao lado da equipe. A equipe humana passa a orientar, decidir e criar com eles.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {agents.map((a) => <AgentChip key={a} label={a} />)}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className={`${INTER} text-xs font-bold tracking-[0.2em] uppercase text-[#8FB0FF]`}>Um sistema para dar previsibilidade</p>
          <p className={`${INTER} mt-2 text-slate-300 max-w-3xl`}>
            Toda equipe precisa de um sistema que entregue previsibilidade e ajude na decisão. Um bom caminho passa por cinco etapas:
          </p>
          <ol className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-3">
            {system.map((step, i) => (
              <li key={step} className="relative rounded-xl bg-gradient-to-b from-[#0941DC]/25 to-transparent border border-[#0941DC]/40 px-4 py-5">
                <span className={`${CLASH} block text-sm font-bold text-[#8FB0FF]`}>0{i + 1}</span>
                <span className={`${CLASH} block mt-1 text-lg font-semibold`}>{step}</span>
                {i < system.length - 1 && (
                  <ArrowRight className="hidden sm:block absolute -right-[13px] top-1/2 -translate-y-1/2 w-4 h-4 text-[#8FB0FF] z-10" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Chapter5() {
  const steps = [
    { title: 'Defina o que você quer medir', text: 'Escolha poucos números que mostram se o negócio cresce: leads, conversão e ticket médio.' },
    { title: 'Organize os seus dados', text: 'Junte em um só lugar as informações de clientes e campanhas. Comece pelos dados próprios.' },
    { title: 'Automatize uma tarefa', text: 'Escolha algo repetitivo, como o envio de e-mails, e conecte ferramentas para fazer por você.' },
    { title: 'Experimente a IA com um objetivo', text: 'Teste a criação com IA para um problema real, não por modismo.' },
    { title: 'Esteja onde as pessoas buscam', text: 'Produza conteúdo útil e presente em vários canais, pensando em SEO e em GEO.' },
  ];
  return (
    <section className="ebook-chapter relative overflow-hidden text-white py-20 sm:py-28 bg-[#030311]">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_20%_0%,#0941DC_0%,#061F6B_45%,#030311_85%)] pointer-events-none" />
      <BerlimStar className="absolute -right-24 bottom-24 w-[420px] h-[420px] text-white/[0.04] pointer-events-none" />
      <div className={CONTAINER}>
        <ChapterHeader number="05" eyebrow="Por onde começar" title="Seus primeiros passos em MARTECH" dark />

        <p className={`${INTER} text-base sm:text-lg leading-relaxed text-white/80 max-w-3xl`}>
          Você não precisa de uma grande estrutura para começar. Comece pequeno, com clareza do que quer medir.
        </p>

        <ol className="mt-10 relative max-w-3xl">
          <span aria-hidden="true" className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-[#8FB0FF] via-[#0941DC] to-transparent" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 pb-8 last:pb-0">
              <span className={`${CLASH} relative z-10 shrink-0 w-12 h-12 rounded-full bg-white text-[#0941DC] text-lg font-bold flex items-center justify-center shadow-[0_0_0_6px_rgba(9,65,220,0.35)]`}>
                {i + 1}
              </span>
              <div className="pt-1.5">
                <h3 className={`${CLASH} text-xl font-semibold`}>{s.title}</h3>
                <p className={`${INTER} mt-1 text-white/70 leading-relaxed`}>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 pt-10 border-t border-white/15">
          <p className={`${CLASH} text-2xl sm:text-3xl font-semibold leading-snug max-w-3xl`}>
            Não é sobre tecnologia no lugar das pessoas. É sobre pessoas com uma perspectiva única, formada por tudo o que viveram, usando tecnologia para ir mais longe.
          </p>
        </div>

        <div className="mt-14 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className={`${CLASH} font-bold text-4xl sm:text-5xl bg-gradient-to-r from-white to-[#8FB0FF] bg-clip-text text-transparent`}>Let's Grow Together!</p>
            <p className={`${INTER} mt-2 text-sm text-white/60`}>Berlim Co. · Conteúdo baseado na palestra MARTECH de Paulo Filho</p>
          </div>
          <div className="print:hidden flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${INTER} inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 rounded-[7px] bg-white text-[#0941DC] hover:bg-[#F2F8FF] text-sm font-bold uppercase tracking-wider transition-all`}
            >
              <MessageCircle className="w-4 h-4" />
              Falar com a Berlim
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className={`${INTER} inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 rounded-[7px] border border-white/30 hover:bg-white/10 text-white text-sm font-bold uppercase tracking-wider transition-all cursor-pointer`}
            >
              <Download className="w-4 h-4" />
              Salvar em PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EbookContent() {
  return (
    <article>
      <Cover />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Chapter5 />
    </article>
  );
}
