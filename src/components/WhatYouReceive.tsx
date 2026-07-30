import React from 'react';
import { BenefitItem } from '../types';
import { 
  FileSpreadsheet, 
  LayoutGrid, 
  Home, 
  ScrollText, 
  ClipboardCheck, 
  Layers 
} from 'lucide-react';

const benefits: BenefitItem[] = [
  {
    id: 'b1',
    iconName: 'FileSpreadsheet',
    title: 'Mais de 100 Projetos Profissionais de Viveiros para Aves',
    description: 'Projetos completos para diversos tamanhos e espécies de aves, ideais para sítios, chácaras, quintais e propriedades rurais.'
  },
  {
    id: 'b2',
    iconName: 'LayoutGrid',
    title: 'Plantas Baixas Otimizadas',
    description: 'Layouts inteligentes que facilitam a construção, aproveitam melhor o espaço e proporcionam um ambiente mais organizado e seguro para as aves.'
  },
  {
    id: 'b3',
    iconName: 'Home',
    title: 'Projetos Estruturais',
    description: 'Projetos completos com medidas detalhadas da estrutura, cobertura, telas, divisórias e viveiros internos e externos.'
  },
  {
    id: 'b4',
    iconName: 'ScrollText',
    title: 'Memorial Descritivo',
    description: 'Especificações técnicas detalhadas para facilitar a execução da obra e reduzir erros durante a construção.'
  },
  {
    id: 'b5',
    iconName: 'ClipboardCheck',
    title: 'Lista Completa de Materiais',
    description: 'Saiba exatamente quais materiais utilizar em cada projeto para comprar apenas o necessário e evitar desperdícios.'
  },
  {
    id: 'b6',
    iconName: 'Layers',
    title: 'Projetos para Diferentes Espécies e Tamanhos',
    description: 'Modelos de viveiros adaptados para diferentes portes e espécies de aves, do pequeno porte a viveiros comunitários.'
  }
];

export const WhatYouReceive: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-emerald-700" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-emerald-700" />;
      case 'Home': return <Home className="w-5 h-5 text-emerald-700" />;
      case 'ScrollText': return <ScrollText className="w-5 h-5 text-emerald-700" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5 text-emerald-700" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-700" />;
      default: return <FileSpreadsheet className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section className="w-full bg-[#f8f5ee] py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black uppercase tracking-tight">
            O QUE VOCÊ VAI RECEBER
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-amber-900/5 flex flex-col justify-start hover:shadow-md transition-shadow"
            >
              {/* Green Icon Circle Badge */}
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-4">
                {getIcon(benefit.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-heading text-black leading-snug">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-poppins text-zinc-600 leading-relaxed mt-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
