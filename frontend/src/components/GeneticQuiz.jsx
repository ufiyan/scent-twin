import React from 'react';
import { GENE_QUESTIONS, getQuizProgressLabel } from '../data/geneProfiles';

export default function GeneticQuiz({ answers, onChange }) {
  return (
    <div className="space-y-8">
      {GENE_QUESTIONS.map((question, index) => (
        <div key={question.id} className="space-y-3">
          <div className="space-y-1">
            <div className="text-[11px] uppercase tracking-wider text-[#D4A847] font-medium">
              {getQuizProgressLabel(index)}
            </div>
            <div className="text-base leading-relaxed">{question.question}</div>
            {question.hint && (
              <div className="text-xs text-[#8C8A84] italic">{question.hint}</div>
            )}
          </div>
          <div className="space-y-2">
            {question.options.map(option => (
              <button
                key={option.value}
                onClick={() => onChange(index, option.value)}
                className={`w-full p-4 text-left border transition-all ${
                  answers[index] === option.value
                    ? 'border-[#D4A847] bg-[#D4A847]/5'
                    : 'border-[rgba(212,168,71,0.3)] hover:border-[#D4A847]/60'
                }`}
                style={{ borderWidth: '0.5px' }}
                data-testid={`gene-option-${question.id}-${option.value}`}
              >
                <span className="text-sm">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
