import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

type FieldType = 'short' | 'paragraph' | 'radio' | 'checkbox';

interface FieldSchema {
  key: string;
  label: string;
  description?: string;
  type: FieldType;
  required: boolean;
  options?: string[];
  hasOther?: boolean;
  placeholder?: string;
}

interface StepSchema {
  title: string;
  fields: FieldSchema[];
}

const CONSENT_STEP: StepSchema = {
  title: 'Termo de Consentimento',
  fields: [
    {
      key: 'consentimento',
      label: 'Você autoriza a Berlim.co a utilizar as informações fornecidas neste formulário para fins estratégicos, operacionais e de planejamento interno, incluindo o compartilhamento com colaboradores diretamente envolvidos na execução do seu projeto, conforme a LGPD (Lei Geral de Proteção de Dados)?',
      description: 'Nenhuma informação será compartilhada com terceiros ou usada para fins distintos do relacionamento comercial com a Berlim Co.',
      type: 'radio',
      required: true,
      options: [
        'Sim, autorizo o uso e compartilhamento interno das informações fornecidas',
        'Não autorizo',
      ],
    },
  ],
};

const STEPS: StepSchema[] = [
  CONSENT_STEP,
  {
    title: 'Informações Gerais da Empresa',
    fields: [
      { key: 'nomeEmpresa', label: 'Nome da empresa', type: 'short', required: true },
      { key: 'nomeResponsavel', label: 'Nome do responsável pelo preenchimento', type: 'short', required: true },
      { key: 'cargo', label: 'Cargo', type: 'short', required: true },
      { key: 'whatsapp', label: 'WhatsApp', type: 'short', required: true, placeholder: 'Ex: (81) 99999-9999' },
      { key: 'emailInstitucional', label: 'E-mail institucional', type: 'short', required: true, placeholder: 'Ex: contato@suaempresa.com' },
      { key: 'site', label: 'Site da marca', type: 'short', required: true, placeholder: 'Ex: https://suaempresa.com' },
      {
        key: 'redesSociais', label: 'Redes sociais ativas', type: 'checkbox', required: true, hasOther: true,
        options: ['Instagram', 'Facebook', 'Linkedin', 'TikTok', 'Youtube', 'X (Antigo Twitter)', 'Threads'],
      },
      { key: 'enderecoFisico', label: 'Endereço físico', type: 'short', required: false },
    ],
  },
  {
    title: 'Identidade e Posicionamento',
    fields: [
      { key: 'historiaMarca', label: 'Descreva brevemente a história da marca', type: 'paragraph', required: true },
      { key: 'missaoVisaoValores', label: 'Missão, Visão e Valores', type: 'paragraph', required: true },
      { key: 'publicoAlvo', label: 'Público-alvo principal (faixa etária, localização, interesses, etc.)', type: 'paragraph', required: true },
      { key: 'tomDeVoz', label: 'Como você descreveria o tom de voz da sua marca? (Ex: institucional, leve, ousado...)', type: 'paragraph', required: true },
      { key: 'historiasBastidores', label: 'Quais histórias, marcos ou bastidores você acredita que representem bem a essência da sua marca? (ex: origem, bastidores, clientes transformados, causas defendidas)', type: 'paragraph', required: true },
      { key: 'diferenciais', label: 'Quais são os principais diferenciais da sua marca hoje?', type: 'paragraph', required: true },
    ],
  },
  {
    title: 'Desafios e Objetivos',
    fields: [
      { key: 'desafiosAtuais', label: 'Quais são os maiores desafios atuais da sua empresa no digital?', type: 'paragraph', required: true },
      {
        key: 'metas3meses', label: 'Quais metas você deseja atingir nos próximos 3 meses?', type: 'checkbox', required: true, hasOther: true,
        options: ['Aumentar visibilidade', 'Gerar mais leads', 'Melhorar conversão', 'Fortalecer posicionamento'],
      },
      { key: 'historicoAcoesDigitais', label: 'Já possui histórico de ações digitais? Se sim, quais deram certo ou não funcionaram?', type: 'paragraph', required: true },
    ],
  },
  {
    title: 'Serviços e Produtos',
    fields: [
      { key: 'produtosServicos', label: 'Quais os principais produtos ou serviços que deseja divulgar?', type: 'paragraph', required: true },
      { key: 'sazonalidade', label: 'Existe alguma sazonalidade ou calendário de campanhas importantes?', type: 'paragraph', required: true },
      { key: 'produtosLucrativos', label: 'Quais produtos/serviços são mais lucrativos ou estratégicos para o negócio?', type: 'paragraph', required: true },
      {
        key: 'listaLeads', label: 'Seu negócio já possui lista de leads ou base de contatos?', type: 'radio', required: true,
        options: ['Sim, organizada por CRM', 'Sim, mas sem organização', 'Não'],
      },
      {
        key: 'canaisVenda', label: 'Quais canais de venda estão ativos?', type: 'checkbox', required: true, hasOther: true,
        options: ['Instagram', 'WhatsApp', 'Site'],
      },
    ],
  },
  {
    title: 'Referências e Concorrência',
    fields: [
      { key: 'referencias', label: 'Quais empresas ou marcas são referências para você?', type: 'paragraph', required: true },
      { key: 'concorrentes', label: 'Cite até 3 concorrentes diretos', type: 'paragraph', required: true },
      { key: 'admiracaoEvitar', label: 'O que admira nessas referências e o que gostaria de evitar?', type: 'paragraph', required: true },
    ],
  },
  {
    title: 'Estrutura Interna',
    fields: [
      { key: 'responsavelAprovacao', label: 'Quem será o responsável pela aprovação dos conteúdos?', type: 'short', required: true },
      { key: 'equipeInterna', label: 'Existe equipe interna de marketing, design ou vendas? Se sim, quem participa do processo?', type: 'paragraph', required: true },
      { key: 'horariosAdequados', label: 'Quais os horários mais adequados para reuniões e contatos?', type: 'short', required: true },
      {
        key: 'ferramentasMarketing', label: 'Quais ferramentas de marketing sua empresa utiliza atualmente? (pode selecionar mais de uma)', type: 'checkbox', required: true, hasOther: true,
        options: [
          'Email Marketing (Ex.: Mailchimp, E-goi, Sendinblue/Brevo)',
          'Gestão de Tráfego Pago / Anúncios (Ex.: Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads)',
          'Chatbots & Atendimento (Ex.: Botconversa, ManyChat, Zenvia)',
          'Social Media & Agendamento de Posts (Ex.: mLabs, Hootsuite, Etus, Buffer)',
          'Análise & Métricas (Ex.: Google Analytics, Looker Studio, Power BI)',
          'Criação & Produção de Conteúdo (Ex.: Canva, Figma, Adobe Photoshop/Illustrator/Premiere)',
        ],
      },
      { key: 'nomesFerramentas', label: 'Qual o nome de cada ferramenta que vocês usam? Podemos ter acesso?', type: 'paragraph', required: true },
    ],
  },
  {
    title: 'Materiais e Acessos',
    fields: [
      { key: 'bancoImagens', label: 'Possui banco de imagens ou vídeos próprios?', type: 'radio', required: true, options: ['Sim', 'Não'] },
      { key: 'manualMarca', label: 'Tem logotipo, manual de marca, fontes e paleta de cores?', type: 'radio', required: true, options: ['Sim', 'Não'] },
      { key: 'linkMateriais', label: 'Se sim, anexe o link aqui', type: 'paragraph', required: false },
    ],
  },
  {
    title: 'Expectativas com a Parceria',
    fields: [
      { key: 'resultadoSucesso', label: 'O que seria, para você, um resultado de sucesso com a Berlim.co nos próximos 3 meses?', type: 'paragraph', required: true },
      { key: 'expectativasEquipe', label: 'Há algo que você espera (ou não espera) da nossa equipe?', type: 'paragraph', required: true },
    ],
  },
  {
    title: 'Feedback Inicial',
    fields: [
      { key: 'comoConheceu', label: 'Como nos conheceu?', type: 'paragraph', required: true },
      { key: 'porqueEscolheu', label: 'Por que escolheu a Berlim.co?', type: 'paragraph', required: true },
      { key: 'observacoesAdicionais', label: 'Alguma observação adicional?', type: 'paragraph', required: true },
    ],
  },
];

const OTHER_OPTION = 'Outro';

type Answers = Record<string, string | string[]>;

function isFieldFilled(field: FieldSchema, answers: Answers): boolean {
  if (!field.required) return true;
  const value = answers[field.key];
  if (field.type === 'checkbox') {
    const arr = (value as string[]) || [];
    if (arr.length === 0) return false;
    if (arr.includes(OTHER_OPTION)) {
      return Boolean((answers[`${field.key}Outro`] as string || '').trim());
    }
    return true;
  }
  return Boolean((value as string || '').trim());
}

function formatFieldValue(field: FieldSchema, answers: Answers): string {
  const value = answers[field.key];
  if (field.type === 'checkbox') {
    const arr = ((value as string[]) || []).map((opt) => {
      if (opt === OTHER_OPTION) {
        const outro = (answers[`${field.key}Outro`] as string || '').trim();
        return outro ? `Outro: ${outro}` : 'Outro';
      }
      return opt;
    });
    return arr.join(', ');
  }
  return ((value as string) || '').trim();
}

// Web App URL from the Google Apps Script bound to the onboarding responses spreadsheet.
// https://docs.google.com/spreadsheets/d/1lM09FjoUNzDjy_L1bY-A2G-hactsaXUsknQ39vPClbA/edit
const SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzLcQAye0L3Klx_bGIew3QQneQoQSHBYA4OBVwCIJGHfMaRq0PCh6hNjOs1CpgKWw1UCA/exec';

function buildSheetPayload(answers: Answers): Record<string, string> {
  const payload: Record<string, string> = {};
  payload[CONSENT_STEP.fields[0].label] = formatFieldValue(CONSENT_STEP.fields[0], answers);
  STEPS.slice(1).forEach((step) => {
    step.fields.forEach((field) => {
      payload[field.label] = formatFieldValue(field, answers);
    });
  });
  return payload;
}

interface CompanyOnboardingPageProps {
  onNavigateHome: () => void;
}

export default function CompanyOnboardingPage({ onNavigateHome }: CompanyOnboardingPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [attemptedAdvance, setAttemptedAdvance] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep, submitted]);

  const step = STEPS[currentStep];
  const isLastStep = currentStep === STEPS.length - 1;
  const stepValid = step.fields.every((field) => isFieldFilled(field, answers));

  const handleTextChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleRadioChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckboxToggle = (key: string, option: string) => {
    setAnswers((prev) => {
      const current = new Set((prev[key] as string[]) || []);
      if (current.has(option)) {
        current.delete(option);
      } else {
        current.add(option);
      }
      return { ...prev, [key]: Array.from(current) };
    });
  };

  const goNext = async () => {
    if (!stepValid) {
      setAttemptedAdvance(true);
      return;
    }
    setAttemptedAdvance(false);
    if (isLastStep) {
      setSubmitting(true);
      setSubmitError(false);
      try {
        await fetch(SHEETS_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(buildSheetPayload(answers)),
        });
        setSubmitted(true);
      } catch {
        setSubmitError(true);
      } finally {
        setSubmitting(false);
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    setAttemptedAdvance(false);
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const renderField = (field: FieldSchema) => {
    const showError = attemptedAdvance && !isFieldFilled(field, answers);

    if (field.type === 'short') {
      return (
        <input
          type="text"
          required={field.required}
          placeholder={field.placeholder}
          value={(answers[field.key] as string) || ''}
          onChange={(e) => handleTextChange(field.key, e.target.value)}
          className={`w-full px-4 py-3 rounded-[7px] bg-white/5 border ${showError ? 'border-red-500/60' : 'border-white/10'} focus:border-[#0941DC] focus:outline-none text-white text-sm font-medium transition-all`}
        />
      );
    }

    if (field.type === 'paragraph') {
      return (
        <textarea
          required={field.required}
          rows={3}
          placeholder={field.placeholder}
          value={(answers[field.key] as string) || ''}
          onChange={(e) => handleTextChange(field.key, e.target.value)}
          className={`w-full px-4 py-3 rounded-[7px] bg-white/5 border ${showError ? 'border-red-500/60' : 'border-white/10'} focus:border-[#0941DC] focus:outline-none text-white text-sm font-medium transition-all resize-none`}
        />
      );
    }

    if (field.type === 'radio') {
      return (
        <div className="space-y-2">
          {field.options?.map((option) => (
            <label
              key={option}
              className={`flex items-start gap-3 px-4 py-3 rounded-[7px] bg-white/5 border ${showError ? 'border-red-500/60' : 'border-white/10'} cursor-pointer hover:border-[#0941DC]/60 transition-all`}
            >
              <input
                type="radio"
                name={field.key}
                checked={answers[field.key] === option}
                onChange={() => handleRadioChange(field.key, option)}
                className="accent-[#0941DC] w-4 h-4 mt-0.5 shrink-0"
              />
              <span className="text-sm text-slate-200 font-medium">{option}</span>
            </label>
          ))}
        </div>
      );
    }

    if (field.type === 'checkbox') {
      const selected = (answers[field.key] as string[]) || [];
      const allOptions = field.hasOther ? [...(field.options || []), OTHER_OPTION] : field.options || [];
      return (
        <div className="space-y-2">
          {allOptions.map((option) => (
            <div key={option}>
              <label
                className={`flex items-start gap-3 px-4 py-3 rounded-[7px] bg-white/5 border ${showError ? 'border-red-500/60' : 'border-white/10'} cursor-pointer hover:border-[#0941DC]/60 transition-all`}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => handleCheckboxToggle(field.key, option)}
                  className="accent-[#0941DC] w-4 h-4 mt-0.5 shrink-0"
                />
                <span className="text-sm text-slate-200 font-medium">{option}</span>
              </label>
              {option === OTHER_OPTION && selected.includes(OTHER_OPTION) && (
                <input
                  type="text"
                  placeholder="Especifique..."
                  value={(answers[`${field.key}Outro`] as string) || ''}
                  onChange={(e) => handleTextChange(`${field.key}Outro`, e.target.value)}
                  className="mt-2 w-full px-4 py-2.5 rounded-[7px] bg-white/5 border border-white/10 focus:border-[#0941DC] focus:outline-none text-white text-sm font-medium transition-all"
                />
              )}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#030311] text-white flex flex-col justify-between selection:bg-[#0941DC]/30 selection:text-white">
      <Navbar onNavigateHome={onNavigateHome} />

      <main className="pt-28 pb-24 relative overflow-hidden flex-grow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#0941DC]/15 via-transparent to-transparent pointer-events-none z-0" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#0941DC]/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-[#061F6B]/20 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 text-left">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[7px] bg-[rgba(255,255,255,0.05)] border border-white/10 hover:border-[#0941DC]/60 hover:bg-[#0941DC]/20 text-slate-300 hover:text-white font-['Inter',sans-serif] text-sm font-semibold transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              <ArrowLeft className="w-4 h-4 text-[#0941DC]" />
              Voltar para a Página Inicial
            </button>
          </div>

          <div className="text-left mb-10 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] font-['Inter',sans-serif] text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#0941DC]" />
              Área de Empresas
            </div>
            <h1 className="font-['Clash_Display','Inter',sans-serif] font-bold text-3xl sm:text-5xl text-white leading-[115%] tracking-tight mb-4">
              Formulário de Onboarding
            </h1>
            <p className="text-slate-300 font-['Inter',sans-serif] text-sm sm:text-base leading-relaxed max-w-2xl">
              Este é o primeiro passo para construirmos uma parceria estratégica e orientada a resultados reais. Vamos reunir informações essenciais sobre sua marca, objetivos, desafios e expectativas para personalizar o planejamento e garantir um kickoff de alta performance.
              <br />
              <span className="text-slate-400">⏳ Tempo estimado de preenchimento: 10 a 15 minutos.</span>
            </p>
          </div>

          {!submitted && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-['Inter',sans-serif]">
                  Etapa {currentStep + 1} de {STEPS.length}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0941DC] font-['Inter',sans-serif]">
                  {Math.round(((currentStep + 1) / STEPS.length) * 100)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0941DC] transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
            {submitted ? (
              <div className="py-12 px-2 text-center flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-['Clash_Display','Inter',sans-serif] text-2xl font-bold text-white mb-2">Formulário Enviado!</h3>
                <p className="text-slate-300 font-['Inter',sans-serif] text-sm max-w-sm mx-auto mb-8">
                  Recebemos todas as suas respostas. Nossa equipe vai analisar as informações e entrar em contato para dar início ao planejamento do seu onboarding.
                </p>
                <button
                  onClick={onNavigateHome}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[7px] bg-[#0941DC] hover:bg-[#061F6B] text-white font-['Inter',sans-serif] text-sm font-bold transition-all duration-300 cursor-pointer shadow-lg shadow-[#0941DC]/30"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para a Página Inicial
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-6">
                  {step.title}
                </h2>

                <div className="space-y-6 text-left">
                  {step.fields.map((field) => (
                    <div key={field.key} className="flex flex-col">
                      <label className="text-sm font-semibold text-slate-200 mb-1 font-['Inter',sans-serif]">
                        {field.label}
                        {field.required && <span className="text-[#0941DC]"> *</span>}
                      </label>
                      {field.description && (
                        <p className="text-xs text-slate-400 mb-2 font-['Inter',sans-serif]">{field.description}</p>
                      )}
                      {renderField(field)}
                    </div>
                  ))}
                </div>

                {attemptedAdvance && !stepValid && (
                  <p className="mt-4 text-xs text-red-400 font-['Inter',sans-serif] font-semibold">
                    Preencha os campos obrigatórios (*) para continuar.
                  </p>
                )}

                {submitError && (
                  <p className="mt-4 text-xs text-red-400 font-['Inter',sans-serif] font-semibold">
                    Não foi possível enviar suas respostas agora. Verifique sua conexão e tente novamente.
                  </p>
                )}

                <div className="flex items-center justify-between mt-8 gap-4">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={currentStep === 0 || submitting}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-[7px] border border-white/10 text-slate-300 hover:text-white hover:border-white/30 font-['Inter',sans-serif] text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-[7px] bg-[#0941DC] hover:bg-[#061F6B] text-white font-['Inter',sans-serif] text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#0941DC]/25 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Enviando...' : isLastStep ? 'Enviar' : 'Avançar'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer onOpenPrivacyPolicy={() => {}} />
    </div>
  );
}
