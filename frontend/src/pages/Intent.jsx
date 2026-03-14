import React from 'react';
import IntentSelector from '../components/IntentSelector';

export default function Intent({ ctx, onNext }) {
  const handleReveal = async () => {
    if (!ctx.intent) return;
    
    try {
      await ctx.generate(ctx.biometrics, ctx.geneAnswers, ctx.intent);
      onNext();
    } catch (error) {
      console.error('Generation failed:', error);
    }
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h1 
          className="text-3xl sm:text-4xl mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          What is your intention?
        </h1>
        <p className="text-sm text-[#8C8A84]">
          Your body and genes are one part. Your intention completes the picture.
        </p>
      </div>
      
      <IntentSelector
        value={ctx.intent}
        onChange={ctx.setIntent}
      />
      
      <button
        onClick={handleReveal}
        disabled={!ctx.intent || ctx.loading}
        className={`w-full py-4 px-8 text-base font-medium transition-all ${
          ctx.intent && !ctx.loading
            ? 'hover:opacity-90'
            : 'opacity-40 cursor-not-allowed'
        }`}
        style={{ backgroundColor: '#D4A847', color: '#0e0d0b' }}
        data-testid="reveal-scent-btn"
      >
        {ctx.loading ? 'Decoding your Olfactory DNA...' : 'Reveal my Scent Twin'}
      </button>
    </div>
  );
}
