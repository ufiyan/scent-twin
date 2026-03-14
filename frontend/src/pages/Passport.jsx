import React from 'react';
import ScentPassport from '../components/ScentPassport';

export default function Passport({ ctx, onRestart }) {
  if (!ctx.result) return null;
  
  return (
    <div className="space-y-8">
      <div>
        <h1 
          className="text-3xl sm:text-4xl mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Scent Passport
        </h1>
        <p className="text-sm text-[#8C8A84]">
          Your shareable olfactory identity. Download and share with #MyScentTwin.
        </p>
      </div>
      
      <ScentPassport result={ctx.result} onRestart={onRestart} />
    </div>
  );
}
