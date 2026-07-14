

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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Berlim Co. Institutional Office" 
              className="w-full h-[350px] md:h-[450px] object-cover rounded-none shadow-md border border-slate-100 hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Text Summary Card (Right Column) */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-[#f8fafc] p-8 md:p-12 rounded-none border border-slate-100 shadow-sm">
              <span className="text-xs font-bold tracking-widest text-[#0052ff] uppercase block mb-4">
                Nossa missão
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Ajudamos as maiores empresas do mercado a <span className="text-[#0052ff]">escalar receita</span> com previsibilidade.
              </h2>
              <p className="text-slate-600 text-base font-light leading-relaxed mb-6">
                Na Berlim Co., combinamos engenharia de dados avançada, marketing e design de alta conversão para construir funis de vendas de alta performance.
              </p>
              <p className="text-slate-600 text-base font-light leading-relaxed">
                Estruturamos sistemas de crescimento onde cada investimento é mensurado, otimizado e convertido em receita previsível e sustentável.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

