import React from 'react';
import { X } from 'lucide-react';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptDiscount: () => void;
  onDeclineDiscount: () => void;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({
  isOpen,
  onClose,
  onAcceptDiscount,
  onDeclineDiscount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fadeIn overflow-hidden">
      {/* Backdrop overlay listener */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div
        className="discount-popup relative w-full max-w-md sm:max-w-lg bg-white rounded-2xl p-5 sm:p-7 shadow-2xl z-10 border-2 border-[#ea880f] text-center flex flex-col my-auto overflow-hidden select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="discount-close absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 text-slate-400 hover:text-slate-700 font-bold text-lg w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100 transition cursor-pointer"
          aria-label="Fechar"
          id="755db266-a4d6-b24a-ed13-c874f7602892"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Badge */}
        <div>
          <span className="discount-badge inline-block bg-amber-500 text-white font-poppins font-extrabold text-[11px] sm:text-xs tracking-wider uppercase px-3 py-0.5 rounded-full mb-1">
            OFERTA ESPECIAL
          </span>
        </div>

        {/* Title */}
        <h2
          id="discount-title"
          className="text-xl sm:text-2xl font-poppins font-black text-black uppercase tracking-wide leading-tight mb-1"
        >
          QUE TAL UM DESCONTO?
        </h2>

        {/* Copy */}
        <p className="discount-copy text-xs sm:text-sm font-poppins text-slate-700 leading-tight mb-2">
          Leve o Pacote Completo de Projetos de Viveiros para Aves com um desconto especial, disponível somente nessa página.
        </p>

        {/* Price Box: Red value on top, green value on bottom */}
        <div className="discount-price flex flex-col items-center justify-center gap-0.5 my-1 bg-emerald-50 py-2 px-3 rounded-xl border border-emerald-200 shrink-0">
          <span className="text-[16px] line-through text-red-600 font-poppins font-bold">
            R$27
          </span>
          <strong className="text-[34px] sm:text-[42px] font-poppins font-black text-[#15803d] leading-none">
            R$19,90
          </strong>
        </div>

        {/* List of Benefits with Tight Spacing ("coladinho") without divider lines */}
        <ul className="discount-list space-y-1.5 text-xs sm:text-sm font-poppins text-slate-800 my-2 text-left shrink-0">
          <li className="flex items-center gap-2">
            <svg className="check-icon w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6"></path>
            </svg>
            <span className="leading-tight font-medium">Mais de 100 Projetos de Viveiros para Aves</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="check-icon w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6"></path>
            </svg>
            <span className="leading-tight font-medium">Plantas Baixas e Projetos Estruturais</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="check-icon w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6"></path>
            </svg>
            <span className="leading-tight font-medium">Memorial Descritivo e Lista de Materiais</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="check-icon w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6"></path>
            </svg>
            <span className="leading-tight font-medium">Projetos para Diferentes Espécies e Tamanhos</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="check-icon w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6"></path>
            </svg>
            <span className="leading-tight font-medium">🎁 BÔNUS 1: Planilha de Custos da Construção</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="check-icon w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6"></path>
            </svg>
            <span className="leading-tight font-medium">🎁 BÔNUS 2: Guia Completo de Materiais</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="check-icon w-4 h-4 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6"></path>
            </svg>
            <span className="leading-tight font-medium">🎁 BÔNUS 3: Checklist Completo da Construção</span>
          </li>
        </ul>

        {/* Actions */}
        <div className="discount-actions space-y-2 pt-1 shrink-0">
          <button
            className="cta-primary w-full py-3.5 px-3 bg-[#ea880f] hover:bg-[#d87c0a] text-white font-poppins font-black text-base sm:text-lg tracking-tight uppercase rounded-xl shadow-lg shadow-amber-600/30 transition transform hover:-translate-y-0.5 cursor-pointer leading-tight"
            data-popup-accept=""
            id="a8b8ba04-bc1b-b8d0-f89d-c0dbbffed49c"
            onClick={onAcceptDiscount}
          >
            QUERO O COMPLETO COM DESCONTO
          </button>
          <button
            className="discount-decline w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-black font-poppins font-extrabold text-xs sm:text-sm uppercase border border-slate-300 rounded-xl transition cursor-pointer"
            data-popup-decline=""
            id="b3d34a9d-09a9-055a-0033-8fa441c807d8"
            onClick={onDeclineDiscount}
          >
            QUERO FICAR COM O BÁSICO
          </button>
        </div>
      </div>
    </div>
  );
};
