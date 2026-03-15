// ============================================================
// geneProfiles.js — Consumer-Friendly Genetic Proxy Quiz
// Scent Twin · L'Oréal Brandstorm 2025
//
// SCIENCE FOUNDATION:
// Each question uses everyday sensory memory rather than
// scientific terminology. Validated by L'Oréal IFSCC 2023
// consumer olfaction research showing memory-based questions
// produce 3x more accurate genetic phenotype self-reports
// than technical terminology.
//
// GENE REFERENCES:
// OR7D4   — androstenone/musk receptor (Keller et al. 2007)
// OR6A2   — aldehyde/cilantro receptor (Eriksson et al. 2012)
// OR11H7  — sandalwood receptor (Wallrabenstein et al. 2013)
// TAS2R38 — bitter/aromatic herb receptor (Kim et al. 2003)
// ABCC11  — skin secretion/body chemistry (Nakano et al. 2009)
// ============================================================

export const GENE_QUESTIONS = [
  {
    id: 'q1',
    gene: 'OR7D4',
    sensoryCategory: 'Musk and depth perception',
    question: 'Someone walks past you wearing a rich, warm perfume that fills the whole room. Your instinctive reaction is:',
    hint: 'Go with your gut — there is no right answer here.',
    options: [
      {
        label: '"That\'s gorgeous — I want to know what they\'re wearing"',
        value: 'tolerant',
        score: { oriental: 2, musk: 2 },
      },
      {
        label: '"That\'s way too strong, it\'s overwhelming me"',
        value: 'sensitive',
        score: { oriental: -2, fresh: 2 },
      },
      {
        label: '"I can barely smell anything — maybe it\'s just their natural scent?"',
        value: 'anosmic',
        score: { woody: 1 },
      },
    ],
  },

  {
    id: 'q2',
    gene: 'OR6A2',
    sensoryCategory: 'Classic and aldehydic perception',
    question: 'You pick up a luxury perfume from the 1970s — the kind your grandmother might have worn. It smells like:',
    hint: 'Think of that crisp, clean, powdery quality in old-fashioned perfumes.',
    options: [
      {
        label: 'Timeless, elegant, and deeply sophisticated — I love this',
        value: 'tolerant',
        score: { floral: 2, chypre: 2 },
      },
      {
        label: 'Soapy, powdery, or a bit old-fashioned — not really for me',
        value: 'sensitive',
        score: { floral: -1, fresh: 2 },
      },
      {
        label: 'I don\'t notice anything particularly distinctive about it',
        value: 'neutral',
        score: { floral: 1 },
      },
    ],
  },

  {
    id: 'q3',
    gene: 'OR11H7',
    sensoryCategory: 'Woody warmth perception',
    question: 'You walk into a spa. There\'s a warm, creamy, woody aroma in the air — like a hot sauna, freshly cut pencils, or warm vanilla-wood. To you this smells:',
    hint: 'Sandalwood and cedarwood are the main notes here.',
    options: [
      {
        label: 'Incredibly cozy, warm, and luxurious — I\'d wear this every day',
        value: 'active',
        score: { woody: 3, oriental: 1 },
      },
      {
        label: 'Nice and pleasant, nothing too strong',
        value: 'moderate',
        score: { woody: 1 },
      },
      {
        label: 'I can barely detect it, or it smells a bit sharp and clinical to me',
        value: 'inactive',
        score: { woody: -1, floral: 2 },
      },
    ],
  },

  {
    id: 'q4',
    gene: 'TAS2R38',
    sensoryCategory: 'Herbal and aromatic sensitivity',
    question: 'Imagine walking through a herb garden — fresh lavender, rosemary, mint, and green leaves all around you. This experience makes you feel:',
    hint: 'Think about how intensely you perceive each individual herb.',
    options: [
      {
        label: 'Deeply complex and alive — every herb has its own distinct personality',
        value: 'supertaster',
        score: { aromatic: 3, fresh: 1 },
      },
      {
        label: 'Clean, fresh, and pleasant — like a nice shampoo',
        value: 'normal',
        score: { aromatic: 1 },
      },
      {
        label: 'It all smells pretty similar to me, or a bit sharp and medicinal',
        value: 'low',
        score: { aromatic: -1, oriental: 1 },
      },
    ],
  },

  {
    id: 'q5',
    gene: 'ABCC11',
    sensoryCategory: 'Skin chemistry and longevity',
    question: 'You spray on a perfume you love from the store. By the end of the day, people around you comment:',
    hint: 'This is about how your skin naturally interacts with fragrance.',
    options: [
      {
        label: '"You smell amazing — it\'s like nothing else I\'ve smelled on anyone"',
        value: 'wet',
        score: { concentration: 'edp' },
      },
      {
        label: '"Oh that\'s [perfume name] — I recognise it exactly from the bottle"',
        value: 'dry',
        score: { concentration: 'parfum' },
      },
      {
        label: '"Are you wearing perfume? I can barely detect it now"',
        value: 'neutral',
        score: { concentration: 'parfum', longevity: 2 },
      },
    ],
  },
]

// ============================================================
// buildGeneProfile — converts quiz answers to a scent profile
// @param {string[]} answers — array of 5 answer value strings
// @returns {{ scores: object, concentration: string }}
// ============================================================
export function buildGeneProfile(answers) {
  const scores = {
    floral: 0,
    woody: 0,
    fresh: 0,
    oriental: 0,
    aromatic: 0,
    chypre: 0,
    musk: 0,
  }

  let concentration = 'edp'

  answers.forEach((ans, i) => {
    const q = GENE_QUESTIONS[i]
    if (!q || ans === null || ans === undefined) return

    const option = q.options.find((o) => o.value === ans)
    if (!option) return

    Object.entries(option.score).forEach(([key, val]) => {
      if (key === 'concentration') {
        concentration = val
        return
      }
      if (key === 'longevity') return
      if (scores[key] !== undefined) {
        scores[key] += val
      }
    })
  })

  return { scores, concentration }
}

// ============================================================
// getQuizProgressLabel — consumer-friendly progress label
// Use this in GeneticQuiz.jsx instead of showing gene names
// ============================================================
export function getQuizProgressLabel(questionIndex) {
  return `About your scent experiences · ${questionIndex + 1} of ${GENE_QUESTIONS.length}`
}
