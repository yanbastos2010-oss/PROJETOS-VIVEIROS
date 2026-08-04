import React from 'react';
import { BonusItem } from '../types';

const bonusList: BonusItem[] = [
  {
    id: 'bon1',
    number: 1,
    title: 'Planilha de Custos da Construção',
    imageUrl: 'https://i.ibb.co/LzzFwTdR/499ee140-db3f-4ad0-9d87-0f3d9d9d99e4.png',
    description: 'Controle todos os gastos antes de iniciar a construção do viveiro e organize melhor o seu investimento.',
    originalPrice: 'De R$37',
    discountedPrice: 'HOJE: GRÁTIS'
  },
  {
    id: 'bon2',
    number: 2,
    title: 'Guia Completo de Materiais para Viveiros',
    imageUrl: 'https://i.ibb.co/whyCj3NC/bd7dc0d2-5451-4f83-ab89-a7c87f9fb3f5.png',
    description: 'Aprenda como escolher telas, madeira, estruturas metálicas, telhados e demais materiais para construir um viveiro resistente e durável.',
    originalPrice: 'De R$47',
    discountedPrice: 'HOJE: GRÁTIS'
  },
  {
    id: 'bon3',
    number: 3,
    title: 'Checklist Completo da Construção',
    imageUrl: 'https://i.ibb.co/BVRbmMzw/da04cc78-3b03-4b4d-880c-06ad4a9342fe.png',
    description: 'Acompanhe cada etapa da obra e evite esquecer materiais ou processos importantes durante a construção do viveiro.',
    originalPrice: 'De R$27',
    discountedPrice: 'HOJE: GRÁTIS'
  }
];

export const ExclusiveBonuses: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f5ee] py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black uppercase tracking-tight">
            BÔNUS EXCLUSIVOS
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bonusList.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-amber-900/5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Bonus Badge Header */}
                <span className="inline-block text-xs font-extrabold text-[#166534] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                  BÔNUS {bonus.number}
                </span>

                {/* Bonus Image */}
                {bonus.imageUrl && (
                  <div className="w-full aspect-square overflow-hidden flex items-center justify-center py-1">
                    <img
                      src={bonus.imageUrl}
                      alt={bonus.title}
                      width="400"
                      height="400"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      referrerPolicy="no-referrer"
                      className="max-w-[85%] max-h-[85%] object-contain"
                    />
                  </div>
                )}

                {/* Bonus Title */}
                <h3 className="text-base sm:text-lg font-heading text-black leading-snug pt-1">
                  {bonus.title}
                </h3>

                {/* Bonus Description */}
                <p className="text-xs sm:text-sm text-black font-desc font-normal leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              {/* Price Tag */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-sm font-bold font-price">
                <span className="line-through text-red-600 font-bold font-price">
                  {bonus.originalPrice}
                </span>
                <span className="text-[#15803d] font-black uppercase font-price">
                  {bonus.discountedPrice}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Summary Box */}
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-[#fbf8f1] to-[#f4eee2] rounded-2xl p-6 sm:p-8 text-center border border-amber-900/10 shadow-sm space-y-1">
          <p className="text-xs font-heading text-black uppercase tracking-widest">
            TOTAL EM BÔNUS
          </p>
          <p className="text-sm sm:text-base line-through text-red-600 font-bold font-price">
            De R$111
          </p>
          <p className="text-2xl sm:text-3xl font-black text-[#15803d] uppercase tracking-wide font-price">
            HOJE: GRÁTIS
          </p>
        </div>

      </div>
    </section>
  );
};
