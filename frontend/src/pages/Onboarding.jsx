import React from 'react';

export default function Onboarding({ onNext }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div>
          <h1 
            className="text-5xl sm:text-6xl mb-4 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-testid="onboarding-headline"
          >
            Your fragrance,<br />
            <span className="italic">encoded in you</span>
          </h1>
          <p className="text-base text-[#8C8A84] leading-relaxed">
            For the first time in history, your fragrance is determined by your body, your genes, and your intention — not chosen off a shelf.
          </p>
        </div>
        
        {/* Step Indicators */}
        <div className="flex justify-center gap-8 py-8">
          {[
            { num: 1, label: 'Body data' },
            { num: 2, label: 'Genetic profile' },
            { num: 3, label: 'Intention' }
          ].map(step => (
            <div key={step.num} className="flex flex-col items-center gap-2">
              <div 
                className="w-10 h-10 rounded-full border flex items-center justify-center text-sm"
                style={{ borderColor: '#D4A847', color: '#D4A847' }}
              >
                {step.num}
              </div>
              <div className="text-xs text-[#8C8A84]">{step.label}</div>
            </div>
          ))}
        </div>
        
        <button
          onClick={onNext}
          className="w-full py-4 px-8 text-base font-medium transition-all hover:opacity-90"
          style={{ backgroundColor: '#D4A847', color: '#0e0d0b' }}
          data-testid="get-started-btn"
        >
          Discover your Scent Twin
        </button>
      </div>
    </div>
  );
}
