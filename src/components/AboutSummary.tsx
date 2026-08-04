

import nossaMissaoImg from '../assets/nossosservicos/Nossa missão.png';

export default function AboutSummary() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Glow Spot */}
      <div className="glow-spot top-1/3 right-[-100px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Institutional Photo (Left Column) */}
          <div className="lg:col-span-5 w-full">
            <img 
              src={nossaMissaoImg} 
              alt="Nossa Missão - Berlim Co." 
              className="w-full h-[350px] md:h-[450px] object-cover rounded-none shadow-md border border-slate-100 hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Text Summary Card (Right Column) */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-[#f8fafc] p-8 md:p-12 rounded-none border border-slate-100 shadow-sm">
              <span className="text-xs font-bold tracking-widest text-[#0941DC] uppercase block mb-4">
                Nossa missão
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Ajudamos empresas a <span className="text-[#0941DC]">escalar sua receita</span> e desenvolver soluções
              </h2>
              <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-4 text-justify">
                Construímos uma trajetória de sucesso e protagonismo, atuando como ecossistema de MKT e tecnologia em prol de ampliar resultados. Ao longo dessa jornada, acumulamos diversos cases de sucesso e profissionais com mais de 40 prêmios.
              </p>
              <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-4 text-justify">
                Acreditamos que tecnologia e marketing não é só sobre estar presente, é sobre ser relevante e eficiente. E para isso, combinamos agilidade, inteligência e criatividade com uma estrutura de entregas que acompanha cada fase do seu negócio.
              </p>
              <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6 text-justify">
                Especialistas em marketing e tecnologia, sem fórmulas engessadas, sem enrolação.
              </p>
              <div className="font-['Clash_Display','Inter',sans-serif] text-lg font-bold text-[#0941DC]">
                Let's Grow Together!
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

