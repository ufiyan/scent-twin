import React from 'react';
import ScentResult from '../components/ScentResult';

export default function Result({ ctx, onPassport }) {
  if (!ctx.result) return null;
  
  return (
    <div className="space-y-8">
      <div>
        <h1 
          className="text-3xl sm:text-4xl mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Your Scent Twin
        </h1>
        <p className="text-sm text-[#8C8A84]">
          A fragrance created from your unique olfactory DNA.
        </p>
      </div>
      
      <ScentResult result={ctx.result} />
      
      <button
        onClick={onPassport}
        className="w-full py-4 px-8 text-base font-medium transition-all hover:opacity-90"
        style={{ backgroundColor: '#D4A847', color: '#0e0d0b' }}
        data-testid="view-passport-btn"
      >
        View your Scent Passport
      </button>
    </div>
  );
}
