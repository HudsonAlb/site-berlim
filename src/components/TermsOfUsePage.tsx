import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Scale, Mail, MapPin, Building2, Phone, ShieldAlert } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function TermsOfUsePage() {
  const navigate = useNavigate();
  const onNavigateHome = () => navigate('/');
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+55 81 9 8202-2720');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
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
              <Scale className="w-4 h-4 text-[#0941DC]" />
              Termos e Condições Gerais de Uso
            </div>

            <h1 className="font-['Clash_Display','Inter',sans-serif] font-bold text-3xl sm:text-5xl text-white leading-[115%] tracking-tight mb-4">
              Termos de Uso
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

          {/* Document Content Sections */}
          <div className="space-y-10 text-left font-['Inter',sans-serif] text-slate-300 leading-relaxed">
            
            {/* Section 1 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">1</span>
                Aceitação dos Termos
              </h2>
              <p className="text-slate-300 text-base leading-relaxed text-justify">
                Estes Termos de Uso regulam o acesso e a utilização do site institucional da <strong className="text-white">Berlim Company</strong>, incluindo conteúdos referentes às nossas unidades de negócio: <strong className="text-white">Berlim School</strong>, <strong className="text-white">Station Work</strong>, <strong className="text-white">B Dash</strong>, <strong className="text-white">Geovoto</strong> e demais produtos.
              </p>
              <p className="text-slate-300 text-base leading-relaxed mt-3 text-justify">
                Ao acessar ou navegar por este site, você (<strong className="text-white">"usuário"</strong>, <strong className="text-white">"visitante"</strong>) declara ter lido, compreendido e concordado integralmente com estes Termos. Caso não concorde, recomendamos que não utilize o site.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">2</span>
                Quem Somos
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

              <div className="mt-4 p-4 rounded-lg bg-[#0941DC]/10 border border-[#0941DC]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0941DC] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Telefone de Contato</div>
                    <div className="text-white font-semibold text-sm">+55 81 9 8202-2720</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-3.5 py-1.5 rounded-[7px] bg-[#0941DC] hover:bg-[#061F6B] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  {copiedPhone ? 'Telefone Copiado!' : 'Copiar Telefone'}
                </button>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">3</span>
                Natureza do Site
              </h2>
              <p className="text-slate-300 text-base leading-relaxed text-justify mb-4">
                Este é um site institucional com finalidade de apresentar a empresa, suas unidades de negócio (<strong className="text-white">Berlim School</strong>, <strong className="text-white">Station Work</strong>, <strong className="text-white">B Dash</strong>, <strong className="text-white">Geovoto</strong> e demais produtos) e seus serviços de <strong className="text-white">RevOps, dashboards, growth aplicado a IA e operações de marketing multicanal</strong>, além de permitir contato e solicitação de orçamentos.
              </p>
              <div className="p-4 rounded-lg bg-black/40 border border-white/10 text-sm text-slate-300">
                <strong className="text-white">Importante:</strong> O site não realiza vendas, contratações ou pagamentos online. Toda contratação de serviços é formalizada por meio de proposta comercial e contrato específico, negociados diretamente entre a Berlim Company e o cliente, fora do ambiente do site.
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">4</span>
                Uso Permitido do Site
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Você concorda em utilizar o site apenas para fins lícitos e de acordo com estes Termos. É expressamente vedado:
              </p>
              <ul className="space-y-3 font-['Inter',sans-serif] text-sm text-slate-300">
                {[
                  'Utilizar o site de forma que possa danificar, sobrecarregar ou prejudicar seu funcionamento;',
                  'Tentar obter acesso não autorizado a qualquer parte do site, servidores ou sistemas conectados;',
                  'Utilizar robôs, scrapers ou outras ferramentas automatizadas para extrair conteúdo do site sem autorização prévia;',
                  'Utilizar o site para transmitir vírus, malware ou qualquer código malicioso;',
                  'Reproduzir, copiar, vender ou explorar comercialmente qualquer parte do site sem autorização expressa da Berlim.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
                    <ShieldAlert className="w-4 h-4 text-[#0941DC] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 5 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">5</span>
                Propriedade Intelectual
              </h2>
              <p className="text-slate-300 text-base leading-relaxed text-justify mb-4">
                Todo o conteúdo disponível no site — incluindo textos, marcas, logotipos, layout, imagens, gráficos, códigos e materiais criativos — é de propriedade exclusiva da <strong className="text-white">Berlim Company</strong> ou de seus licenciadores, e está protegido pela legislação de propriedade intelectual aplicável.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed text-justify">
                É proibida a reprodução, distribuição ou uso desses materiais sem autorização prévia e por escrito da Berlim Company, exceto quando expressamente permitido por lei.
              </p>
            </section>

            {/* Section 6 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
              <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">6</span>
                Formulários de Contato e Leads
              </h2>
              <p className="text-slate-300 text-base leading-relaxed text-justify mb-4">
                Ao preencher formulários de contato, solicitação de orçamento ou cadastro para newsletter, você declara que as informações fornecidas são verdadeiras, precisas e atualizadas.
              </p>
              <div className="p-4 rounded-lg bg-[#0941DC]/10 border border-[#0941DC]/30 text-sm text-slate-300 flex items-center justify-between gap-4">
                <span>O tratamento dos dados pessoais coletados por meio desses formulários segue nossa Política de Privacidade.</span>
                <button
                  onClick={() => navigate('/politica-de-privacidade')}
                  className="px-3.5 py-1.5 rounded-[7px] bg-[#0941DC] hover:bg-[#061F6B] text-white text-xs font-bold shrink-0 cursor-pointer"
                >
                  Ver Política de Privacidade
                </button>
              </div>
            </section>

            {/* Section 7, 8 & 9 */}
            <div className="space-y-6">
              <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
                <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl text-white mb-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-xs flex items-center justify-center font-bold">7</span>
                  Links para Sites de Terceiros
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed text-justify">
                  O site pode conter links para sites de terceiros (redes sociais, parceiros, ferramentas). A Berlim Company não se responsabiliza pelo conteúdo, práticas de privacidade ou disponibilidade desses sites externos. O acesso a eles é de responsabilidade exclusiva do usuário.
                </p>
              </section>

              <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
                <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl text-white mb-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-xs flex items-center justify-center font-bold">8</span>
                  Isenção de Garantias
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed text-justify mb-3">
                  O site é fornecido "como está" e "conforme disponível". Envidamos esforços razoáveis para manter as informações atualizadas e o site funcionando corretamente, mas não garantimos:
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-300">
                  <li>Que o site estará disponível de forma ininterrupta ou livre de erros;</li>
                  <li>Que todas as informações apresentadas estão completas ou totalmente atualizadas;</li>
                  <li>Resultados específicos decorrentes do uso das informações do site.</li>
                </ul>
              </section>

              <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md">
                <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl text-white mb-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-xs flex items-center justify-center font-bold">9</span>
                  Limitação de Responsabilidade
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed text-justify">
                  Na máxima extensão permitida pela lei, a Berlim Company não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso do site, incluindo, mas não se limitando a, perda de dados, lucros cessantes ou interrupção de negócios.
                </p>
              </section>
            </div>

            {/* Section 10, 11 & 12 */}
            <section className="bg-white/[0.02] border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md space-y-6">
              <div>
                <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">10</span>
                  Alterações no Site e nos Termos
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed text-justify">
                  A Berlim Company reserva-se o direito de, a qualquer momento, modificar, suspender ou descontinuar qualquer parte do site, bem como atualizar estes Termos de Uso. Alterações relevantes serão refletidas na data de "Última atualização" no topo deste documento. O uso continuado do site após alterações implica concordância com os novos Termos.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">11</span>
                  Legislação Aplicável e Foro
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed text-justify">
                  Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de <strong className="text-white">Recife, Pernambuco</strong>, para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="font-['Clash_Display','Inter',sans-serif] font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0941DC]/20 border border-[#0941DC]/40 text-[#0941DC] text-sm flex items-center justify-center font-bold">12</span>
                  Contato
                </h2>
                <p className="text-slate-300 text-sm mb-4">
                  Em caso de dúvidas sobre estes Termos de Uso, entre em contato:
                </p>
                <div className="p-4 rounded-lg bg-black/40 border border-white/10 space-y-2 text-sm">
                  <div className="font-bold text-white">Berlim Company</div>
                  <div className="text-slate-300 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#0941DC]" />
                    <span>E-mail: <a href="mailto:dev@berlim.co" className="text-[#0941DC] hover:underline">dev@berlim.co</a></span>
                  </div>
                  <div className="text-slate-300 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0941DC]" />
                    <span>Endereço: Rua do Bom Jesus, 125, Sala, Recife - PE (CEP 50030-170), Brasil</span>
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
