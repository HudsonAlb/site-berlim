import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Mail, MapPin, Building2, Check, Lock, Cookie, FileText, UserCheck, Server } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const onNavigateHome = () => navigate('/');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dev@berlim.co');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
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

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Button / Navigation Breadcrumb */}
          <div className="mb-8 text-left">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[7px] bg-[rgba(255,255,255,0.05)] border border-white/10 hover:border-[#0941DC]/60 hover:bg-[#0941DC]/20 text-slate-300 hover:text-white font-['Inter',sans-serif] text-sm font-semibold transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              <ArrowLeft className="w-4 h-4 text-[#0941DC]" />
              Voltar para a Página Inicial
            </button>
          </div>

          {/* Header Title & Metadata */}
          <div className="text-left mb-12 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] font-['Inter',sans-serif] text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#0941DC]" />
              Conformidade LGPD (Lei nº 13.709/2018)
            </div>

            <h1 className="font-['Clash_Display','Inter',sans-serif] font-bold text-3xl sm:text-5xl text-white leading-[115%] tracking-tight mb-4">
              Política de Privacidade
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-['Inter',sans-serif] text-slate-400">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Building2 className="w-3.5 h-3.5 text-[#0941DC]" />
                Berlim Company (Brec Comunicação e Negócios Ltda)
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Última atualização: 30 de julho de 2026
              </span>
            </div>
          </div>

          {/* Content Document */}
          <div className="space-y-10 text-left font-['Inter',sans-serif] text-slate-300 leading-relaxed">
            
            {/* Section 1 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">1</span>
                Introdução
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                A <strong className="text-white">Berlim Company</strong> respeita a sua privacidade e está comprometida em proteger os dados pessoais dos visitantes do nosso site institucional e dos usuários de nossas unidades de negócio: <strong className="text-white">Berlim School</strong>, <strong className="text-white">Station Work</strong>, <strong className="text-white">B Dash</strong>, <strong className="text-white">Geovoto</strong> e demais produtos.
              </p>
              <p className="text-slate-300 text-base leading-relaxed mt-3">
                Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos os seus dados pessoais, em conformidade com a <strong className="text-white">Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong>. Ao acessar nosso site ou utilizar nossos serviços, você concorda com as práticas descritas nesta política.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">2</span>
                Quem é o Controlador dos Dados
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-lg bg-black/30 border border-white/10">
                  <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Razão Social</div>
                  <div className="text-white font-semibold">Berlim Company [Brec Comunicação e Negócios Ltda]</div>
                </div>

                <div className="p-4 rounded-lg bg-black/30 border border-white/10">
                  <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">CNPJ</div>
                  <div className="text-white font-semibold">23.486.932/0001-91</div>
                </div>

                <div className="p-4 rounded-lg bg-black/30 border border-white/10 md:col-span-2 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0941DC] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Endereço Headquarter</div>
                    <div className="text-white font-semibold">Rua do Bom Jesus, 125, Sala, Recife - PE (CEP 50030-170), Brasil</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-[#0941DC]/10 border border-[#0941DC]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0941DC] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Encarregado de Proteção de Dados (DPO)</div>
                    <div className="text-white font-semibold text-sm">dev@berlim.co</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-[7px] bg-[#0941DC] hover:bg-[#061F6B] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> E-mail Copiado!
                    </>
                  ) : (
                    <>
                      Copiar E-mail do DPO
                    </>
                  )}
                </button>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">3</span>
                Quais Dados Coletamos
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#0941DC]" />
                    3.1 Dados fornecidos diretamente por você
                  </h3>
                  <p className="text-slate-300 text-sm mb-3">
                    Quando você preenche formulários de contato, solicita um orçamento, se cadastra para receber nossa newsletter ou demonstra interesse em nossos serviços (leads), podemos coletar:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {['Nome completo', 'E-mail', 'Telefone / WhatsApp', 'Empresa e cargo', 'Mensagem ou informações adicionais que você optar por compartilhar'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-black/20 px-3 py-2 rounded-md border border-white/5 text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0941DC]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#0941DC]" />
                    3.2 Dados coletados automaticamente
                  </h3>
                  <p className="text-slate-300 text-sm mb-3">
                    Ao navegar pelo site, coletamos automaticamente, por meio de cookies e tecnologias similares:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {['Endereço IP', 'Tipo de navegador e dispositivo', 'Páginas visitadas e tempo de navegação', 'Origem do tráfego (de onde você veio até o site)', 'Identificadores de cookies e pixels de rastreamento'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-black/20 px-3 py-2 rounded-md border border-white/5 text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0941DC]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">4</span>
                Cookies e Tecnologias de Rastreamento
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Utilizamos cookies próprios e de terceiros para:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-lg bg-black/30 border border-white/10">
                  <div className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-emerald-400" />
                    Cookies Necessários
                  </div>
                  <p className="text-xs text-slate-400">Garantir o funcionamento básico e segurança do site.</p>
                </div>
                <div className="p-4 rounded-lg bg-black/30 border border-white/10">
                  <div className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-sky-400" />
                    Cookies de Analytics
                  </div>
                  <p className="text-xs text-slate-400">Entender como os visitantes usam o site (ex.: Google Analytics) para melhorar a experiência e conteúdo.</p>
                </div>
                <div className="p-4 rounded-lg bg-black/30 border border-white/10">
                  <div className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-indigo-400" />
                    Cookies de Marketing
                  </div>
                  <p className="text-xs text-slate-400">Medir a performance de campanhas e exibir anúncios relevantes em outras plataformas (ex.: Meta Pixel, Google Ads, LinkedIn Ads).</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Você pode gerenciar suas preferências de cookies a qualquer momento por meio do banner de consentimento exibido no site ou nas configurações do seu navegador. A desativação de determinados cookies pode afetar algumas funcionalidades do site.
              </p>
            </section>

            {/* Section 5 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">5</span>
                Para Que Usamos os Seus Dados
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Usamos os dados coletados para as seguintes finalidades, com as respectivas bases legais previstas na LGPD:
              </p>

              <div className="overflow-x-auto border border-white/10 rounded-lg">
                <table className="w-full text-left border-collapse font-['Inter',sans-serif] text-sm">
                  <thead>
                    <tr className="bg-black/40 border-b border-white/10 text-white uppercase text-xs tracking-wider">
                      <th className="p-4 font-bold">Finalidade</th>
                      <th className="p-4 font-bold">Base Legal (LGPD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-4 text-slate-200">Responder a contatos, solicitações de orçamento e dúvidas</td>
                      <td className="p-4 text-[#0941DC] font-semibold">Execução de procedimentos preliminares / legítimo interesse (art. 7º, V)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-4 text-slate-200">Envio de newsletter e comunicações de marketing</td>
                      <td className="p-4 text-[#0941DC] font-semibold">Consentimento (art. 7º, I)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-4 text-slate-200">Análise de navegação e melhoria do site</td>
                      <td className="p-4 text-[#0941DC] font-semibold">Legítimo interesse (art. 7º, IX)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-4 text-slate-200">Campanhas de marketing e remarketing</td>
                      <td className="p-4 text-[#0941DC] font-semibold">Consentimento (art. 7º, I)</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-4 text-slate-200">Cumprimento de obrigações legais e regulatórias</td>
                      <td className="p-4 text-[#0941DC] font-semibold">Cumprimento de obrigação legal (art. 7º, II)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">6</span>
                Com Quem Compartilhamos os Seus Dados
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Podemos compartilhar seus dados pessoais com:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-[#0941DC] mt-2 shrink-0"></span>
                  <span><strong className="text-white">Provedores de tecnologia e ferramentas de marketing:</strong> que nos auxiliam na operação do site, envio de e-mails, análise de dados e execução de campanhas (ex.: plataformas de analytics, automação de marketing e anúncios).</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-[#0941DC] mt-2 shrink-0"></span>
                  <span><strong className="text-white">Prestadores de serviço das nossas marcas:</strong> prestadores da Berlim Digital, Station Work e B Studio, quando o dado for necessário para a entrega de um produto ou serviço solicitado por você.</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-[#0941DC] mt-2 shrink-0"></span>
                  <span><strong className="text-white">Autoridades públicas:</strong> quando exigido por lei, ordem judicial ou determinação regulatória.</span>
                </li>
              </ul>
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-semibold flex items-center gap-3">
                <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
                Não vendemos seus dados pessoais a terceiros sob nenhuma hipótese.
              </div>
            </section>

            {/* Section 7 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">7</span>
                Por Quanto Tempo Guardamos os Seus Dados
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, respeitando prazos legais e regulatórios aplicáveis. Após esse período, os dados são anonimizados ou eliminados de forma segura.
              </p>
            </section>

            {/* Section 8 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">8</span>
                Seus Direitos como Titular de Dados
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Nos termos da LGPD, você tem direito a:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-6">
                {[
                  'Confirmar a existência de tratamento dos seus dados;',
                  'Acessar seus dados;',
                  'Corrigir dados incompletos, inexatos ou desatualizados;',
                  'Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;',
                  'Solicitar a portabilidade dos seus dados;',
                  'Revogar o consentimento a qualquer momento;',
                  'Solicitar informações sobre com quem compartilhamos seus dados;',
                  'Se opor a tratamentos realizados com base no legítimo interesse.'
                ].map((direito, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-black/20 border border-white/5 text-slate-200">
                    <UserCheck className="w-4 h-4 text-[#0941DC] shrink-0 mt-0.5" />
                    <span>{direito}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 text-sm">
                Para exercer qualquer um desses direitos, entre em contato pelo e-mail do nosso DPO: <a href="mailto:dev@berlim.co" className="text-[#0941DC] hover:underline font-bold">dev@berlim.co</a>.
              </p>
            </section>

            {/* Section 9 & 10 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
                <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl text-white mb-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-xs flex items-center justify-center font-bold">9</span>
                  Segurança dos Dados
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados pessoais contra acessos não autorizados, perda, alteração ou divulgação indevida. No entanto, nenhum sistema é 100% infalível, e trabalhamos continuamente para aprimorar nossas práticas de segurança.
                </p>
              </section>

              <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
                <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl text-white mb-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-xs flex items-center justify-center font-bold">10</span>
                  Transferência Internacional
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Alguns dos nossos fornecedores de tecnologia (como ferramentas de analytics e marketing) podem processar dados em servidores localizados fora do Brasil. Nesses casos, buscamos garantir que essas transferências ocorram em conformidade com os requisitos da LGPD.
                </p>
              </section>
            </div>

            {/* Section 11 & 12 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">11</span>
                Alterações a Esta Política
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou em requisitos legais. Recomendamos que você a revise regularmente. A data da última atualização estará sempre indicada no início deste documento.
              </p>

              <div className="pt-6 border-t border-white/10">
                <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">12</span>
                  Contato
                </h2>
                <p className="text-slate-300 text-sm mb-4">
                  Em caso de dúvidas, solicitações ou reclamações relacionadas a esta Política de Privacidade ou ao tratamento dos seus dados pessoais, entre em contato:
                </p>
                <div className="p-4 rounded-lg bg-black/40 border border-white/10 space-y-2 text-sm">
                  <div className="font-bold text-white">Berlim Company</div>
                  <div className="text-slate-300 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#0941DC]" />
                    <span>E-mail: <a href="mailto:dev@berlim.co" className="text-[#0941DC] hover:underline">dev@berlim.co</a></span>
                  </div>
                  <div className="text-slate-300 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0941DC]" />
                    <span>Endereço: Rua do Bom Jesus, 125, Sala, Recife - PE (CEP 50030-170)</span>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Bottom Back Action */}
          <div className="mt-12 text-center">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[7px] bg-[#0941DC] hover:bg-[#061F6B] text-white font-['Inter',sans-serif] text-sm font-bold transition-all duration-300 cursor-pointer shadow-lg shadow-[#0941DC]/30"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para a Página Inicial
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
