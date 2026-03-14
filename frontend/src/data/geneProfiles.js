// Genetic proxy quiz questions and profile builder
// Each question probes a specific olfactory receptor gene variant

export const GENE_QUESTIONS = [
  {
    id: 'q1',
    gene: 'OR7D4',
    question: 'How do you experience heavy musk and animalic fragrances?',
    options: [
      {
        label: 'Warm, sensual, and deeply appealing',
        value: 'musk_positive',
        score: { musk: 30, oriental: 20, woody: 15 }
      },
      {
        label: 'Overwhelming or unpleasant',
        value: 'musk_negative',
        score: { musk: -40, oriental: -20, fresh: 25, aquatic: 20 }
      },
      {
        label: 'Barely noticeable or neutral',
        value: 'musk_neutral',
        score: { floral: 15, fresh: 15, woody: 10 }
      }
    ]
  },
  {
    id: 'q2',
    gene: 'OR6A2',
    question: 'Classic perfumes like Chanel No. 5 (aldehydic notes) smell to you:',
    options: [
      {
        label: 'Elegantly retro and sophisticated',
        value: 'aldehyde_positive',
        score: { floral: 25, chypre: 30, luxury: 20 }
      },
      {
        label: 'Soapy or dated',
        value: 'aldehyde_negative',
        score: { fresh: 20, aquatic: 20, woody: 15 }
      }
    ]
  },
  {
    id: 'q3',
    gene: 'OR11H7',
    question: 'Sandalwood and cedarwood fragrances are:',
    options: [
      {
        label: 'Luxuriously warm, creamy, and enveloping',
        value: 'sandalwood_high',
        score: { woody: 35, oriental: 20 }
      },
      {
        label: 'Pleasant but subtle',
        value: 'sandalwood_medium',
        score: { woody: 15, aromatic: 10 }
      },
      {
        label: 'Faint or slightly medicinal',
        value: 'sandalwood_low',
        score: { fresh: 15, citrus: 15, aquatic: 10 }
      }
    ]
  },
  {
    id: 'q4',
    gene: 'TAS2R38',
    question: 'Aromatic barbershop fragrances (lavender, fougère) feel:',
    options: [
      {
        label: 'Complex, sophisticated, and powerful',
        value: 'aromatic_super',
        score: { aromatic: 35, chypre: 20 }
      },
      {
        label: 'Clean and pleasant',
        value: 'aromatic_medium',
        score: { aromatic: 15, fresh: 10 }
      },
      {
        label: 'Weak or medicinal',
        value: 'aromatic_low',
        score: { fresh: 20, aquatic: 15, citrus: 10 }
      }
    ]
  },
  {
    id: 'q5',
    gene: 'ABCC11',
    question: 'When you wear fragrance, it typically:',
    options: [
      {
        label: 'Evolves into something unique and personal on my skin',
        value: 'skin_reactive',
        score: { concentration: 'edp' }
      },
      {
        label: 'Stays true to the bottle scent all day',
        value: 'skin_stable',
        score: { concentration: 'edt' }
      },
      {
        label: 'Fades quickly and needs reapplication',
        value: 'skin_fade',
        score: { concentration: 'parfum' }
      }
    ]
  }
];

// Build gene profile from quiz answers
export function buildGeneProfile(answers) {
  const scores = {
    musk: 0,
    oriental: 0,
    woody: 0,
    floral: 0,
    fresh: 0,
    aquatic: 0,
    citrus: 0,
    chypre: 0,
    aromatic: 0
  };
  
  let concentration = 'edp'; // default
  
  answers.forEach((answer, index) => {
    if (!answer) return;
    
    const question = GENE_QUESTIONS[index];
    const option = question.options.find(opt => opt.value === answer);
    
    if (option && option.score) {
      Object.entries(option.score).forEach(([key, value]) => {
        if (key === 'concentration') {
          concentration = value;
        } else {
          scores[key] = (scores[key] || 0) + value;
        }
      });
    }
  });
  
  return { scores, concentration };
}
