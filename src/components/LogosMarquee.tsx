import React from 'react';
import totvsLogo from '../assets/Totvs.svg';
import umTelecomLogo from '../assets/Um telecom.svg';
import batekooLogo from '../assets/batekoo.svg';
import hemobrasLogo from '../assets/hemobras.svg';
import redBullLogo from '../assets/red bull.svg';
import uolLogo from '../assets/uol.svg';
import ancoraLogo from '../assets/âncora.svg';
import sportLogo from '../assets/Sport.svg';
import fiatLogo from '../assets/Fiat.svg';
import esporteDaSorteLogo from '../assets/esporte da sorte.svg';
import moradaLogo from '../assets/morada.svg';
import rio2016Logo from '../assets/rioa 2016.svg';
import serEducacionalLogo from '../assets/ser educacional.svg';
import govPeLogo from '../assets/Gov pe p.png';
import prefRecifeLogo from '../assets/prefeitura do recife p.png';

interface Partner {
  name: string;
  renderLogo: () => React.ReactElement;
}

const imgClass = "max-h-9 sm:max-h-11 max-w-[130px] sm:max-w-[160px] w-auto h-auto object-contain opacity-75 group-hover:opacity-100 transition-all duration-300 filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105";

const partners: Partner[] = [
  {
    name: 'TOTVS',
    renderLogo: () => (
      <img src={totvsLogo} alt="TOTVS" className={imgClass} />
    )
  },
  {
    name: 'Red Bull',
    renderLogo: () => (
      <img src={redBullLogo} alt="Red Bull" className={imgClass} />
    )
  },
  {
    name: 'Sport Recife',
    renderLogo: () => (
      <img src={sportLogo} alt="Sport Recife" className={imgClass} />
    )
  },
  {
    name: 'Batekoo',
    renderLogo: () => (
      <img src={batekooLogo} alt="Batekoo" className={imgClass} />
    )
  },
  {
    name: 'Hemobrás',
    renderLogo: () => (
      <img src={hemobrasLogo} alt="Hemobrás" className={imgClass} />
    )
  },
  {
    name: 'Fiat',
    renderLogo: () => (
      <img src={fiatLogo} alt="Fiat" className={imgClass} />
    )
  },
  {
    name: 'UOL Edtech',
    renderLogo: () => (
      <img src={uolLogo} alt="UOL Edtech" className={imgClass} />
    )
  },
  {
    name: 'Esporte da Sorte',
    renderLogo: () => (
      <img src={esporteDaSorteLogo} alt="Esporte da Sorte" className={imgClass} />
    )
  },
  {
    name: 'Um Telecom',
    renderLogo: () => (
      <img src={umTelecomLogo} alt="Um Telecom" className={imgClass} />
    )
  },
  {
    name: 'Morada da Paz',
    renderLogo: () => (
      <img src={moradaLogo} alt="Morada da Paz" className={imgClass} />
    )
  },
  {
    name: 'Âncora',
    renderLogo: () => (
      <img src={ancoraLogo} alt="Âncora" className={imgClass} />
    )
  },
  {
    name: 'Rio 2016',
    renderLogo: () => (
      <img src={rio2016Logo} alt="Rio 2016" className={imgClass} />
    )
  },
  {
    name: 'Ser Educacional',
    renderLogo: () => (
      <img src={serEducacionalLogo} alt="Ser Educacional" className={imgClass} />
    )
  },
  {
    name: 'Governo de PE',
    renderLogo: () => (
      <img src={govPeLogo} alt="Governo de Pernambuco" className={imgClass} />
    )
  },
  {
    name: 'Prefeitura do Recife',
    renderLogo: () => (
      <img src={prefRecifeLogo} alt="Prefeitura do Recife" className={imgClass} />
    )
  },
];

export default function LogosMarquee() {
  return (
    <section className="py-10 bg-white border-y border-slate-100 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="font-['Inter',sans-serif] text-[11px] font-bold uppercase tracking-widest text-slate-400">
          MARCAS E CLIENTES IMPACTADOS
        </p>
      </div>

      {/* Infinite Marquee Track Container */}
      <div className="marquee-wrapper relative w-full flex overflow-hidden">
        {/* White Gradient Fades on Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Fast Moving Marquee Content with UNIFORM fixed item widths */}
        <div className="flex shrink-0 items-center animate-marquee">
          {partners.map((partner, index) => (
            <div
              key={`p1-${index}`}
              className="w-36 sm:w-48 h-12 shrink-0 flex items-center justify-center px-4 group cursor-pointer"
            >
              {partner.renderLogo()}
            </div>
          ))}
        </div>

        <div className="flex shrink-0 items-center animate-marquee" aria-hidden="true">
          {partners.map((partner, index) => (
            <div
              key={`p2-${index}`}
              className="w-36 sm:w-48 h-12 shrink-0 flex items-center justify-center px-4 group cursor-pointer"
            >
              {partner.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
