import React from 'react';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'João Batista',
    quote: 'Os projetos são muito bem elaborados. Consegui construir um viveiro bonito, seguro e muito mais econômico do que imaginava.',
    rating: 5
  },
  {
    id: 't2',
    author: 'Carlos Henrique',
    quote: 'A lista de materiais facilitou muito. Comprei exatamente o necessário e evitei desperdícios.',
    rating: 5
  },
  {
    id: 't3',
    author: 'Antônio Ribeiro',
    quote: 'Excelente material. Tem projetos para diferentes tamanhos e espécies de aves. Tudo muito fácil de entender.',
    rating: 5
  },
  {
    id: 't4',
    author: 'José Roberto',
    quote: 'Usei um dos projetos como base e adaptei perfeitamente ao espaço disponível na minha propriedade. Ficou excelente.',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f5ee] py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black uppercase tracking-tight">
            O QUE DIZEM DO MATERIAL
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-amber-900/5 flex flex-col justify-between space-y-4"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-black italic font-desc font-normal leading-relaxed">
                "{t.quote}"
              </p>

              {/* Author */}
              <p className="text-xs sm:text-sm font-extrabold text-black pt-2">
                — {t.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
