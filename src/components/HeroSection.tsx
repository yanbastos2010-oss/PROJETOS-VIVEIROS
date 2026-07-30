import React from 'react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="w-full bg-[#f8f5ee] py-10 sm:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading text-black tracking-tight leading-[1.1] max-w-3xl mx-auto">
          +100 Projetos Profissionais de Viveiros para Aves
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto font-desc font-normal leading-relaxed">
          Projetos completos para construir viveiros resistentes, funcionais, seguros e ideais para diferentes espécies de aves.
        </p>

        {/* Banner Image below subheadline */}
        <div className="flex justify-center py-2">
          <img
            src="https://i.ibb.co/KjC0z0pz/Design-sem-nome-4.png"
            alt="Design sem nome (4)"
            className="max-w-full h-auto mx-auto border-none shadow-none rounded-none"
          />
        </div>

        {/* Big Main Orange CTA Button */}
        <div className="pt-2 pb-4">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-5 bg-[#ea880f] hover:bg-[#d87c0a] text-white font-cta text-lg sm:text-xl rounded-md shadow-lg shadow-amber-600/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 uppercase tracking-wide cursor-pointer"
          >
            QUERO MEU ACESSO
          </button>
        </div>

      </div>
    </section>
  );
};
