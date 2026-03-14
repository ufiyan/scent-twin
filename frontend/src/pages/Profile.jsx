import React, { useState } from 'react';
import BiometricSliders from '../components/BiometricSliders';
import GeneticQuiz from '../components/GeneticQuiz';

export default function Profile({ ctx, onNext }) {
  const [activeTab, setActiveTab] = useState('biometrics');
  
  const allAnswered = ctx.geneAnswers.every(answer => answer !== null);
  
  return (
    <div className="space-y-8">
      <div>
        <h1 
          className="text-3xl sm:text-4xl mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Build your profile
        </h1>
        <p className="text-sm text-[#8C8A84]">
          We need two streams of data: your body’s current state and your genetic perception profile.
        </p>
      </div>
      
      {/* Tab Selector */}
      <div 
        className="inline-flex border p-1 rounded-lg"
        style={{ borderColor: 'rgba(212,168,71,0.3)' }}
      >
        {[
          { id: 'biometrics', label: 'Biometrics' },
          { id: 'genetic', label: 'Genetic Profile' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-sm rounded transition-all ${
              activeTab === tab.id
                ? 'bg-[#D4A847] text-[#0e0d0b]'
                : 'text-[#8C8A84] hover:text-[#f0ede8]'
            }`}
            data-testid={`tab-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'biometrics' ? (
          <BiometricSliders
            values={ctx.biometrics}
            onChange={(field, value) => {
              ctx.setBiometrics({ ...ctx.biometrics, [field]: value });
            }}
          />
        ) : (
          <GeneticQuiz
            answers={ctx.geneAnswers}
            onChange={(index, value) => {
              const newAnswers = [...ctx.geneAnswers];
              newAnswers[index] = value;
              ctx.setGeneAnswers(newAnswers);
            }}
          />
        )}
      </div>
      
      <button
        onClick={onNext}
        disabled={!allAnswered}
        className={`w-full py-4 px-8 text-base font-medium transition-all ${
          allAnswered
            ? 'hover:opacity-90'
            : 'opacity-40 cursor-not-allowed'
        }`}
        style={{ backgroundColor: '#D4A847', color: '#0e0d0b' }}
        data-testid="profile-continue-btn"
      >
        Continue
      </button>
      
      {!allAnswered && (
        <p className="text-xs text-center text-[#8C8A84]">
          Complete all five genetic profile questions to continue
        </p>
      )}
    </div>
  );
}
