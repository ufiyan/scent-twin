// Master ingredient database for fragrance composition
// Each ingredient is mapped to its fragrance family, mood associations,
// pyramid tier, and luxury perception score

export const INGREDIENTS = {
  // Citrus & Fresh
  bergamot: {
    family: 'citrus',
    mood: ['uplifting', 'calming'],
    pyramid: 'top',
    luxury: 8
  },
  lemon: {
    family: 'citrus',
    mood: ['energizing', 'clean'],
    pyramid: 'top',
    luxury: 6
  },
  grapefruit: {
    family: 'citrus',
    mood: ['fresh', 'invigorating'],
    pyramid: 'top',
    luxury: 7
  },
  mandarin: {
    family: 'citrus',
    mood: ['joyful', 'bright'],
    pyramid: 'top',
    luxury: 7
  },
  neroli: {
    family: 'citrus',
    mood: ['serene', 'sophisticated'],
    pyramid: 'top',
    luxury: 9
  },
  petitgrain: {
    family: 'citrus',
    mood: ['balanced', 'green'],
    pyramid: 'top',
    luxury: 7
  },

  // Floral
  rose: {
    family: 'floral',
    mood: ['romantic', 'classic'],
    pyramid: 'heart',
    luxury: 10
  },
  jasmine: {
    family: 'floral',
    mood: ['sensual', 'opulent'],
    pyramid: 'heart',
    luxury: 10
  },
  ylangYlang: {
    family: 'floral',
    mood: ['exotic', 'warm'],
    pyramid: 'heart',
    luxury: 8
  },
  iris: {
    family: 'floral',
    mood: ['powdery', 'elegant'],
    pyramid: 'heart',
    luxury: 9
  },
  lily: {
    family: 'floral',
    mood: ['fresh', 'delicate'],
    pyramid: 'heart',
    luxury: 7
  },
  tuberose: {
    family: 'floral',
    mood: ['intoxicating', 'heady'],
    pyramid: 'heart',
    luxury: 9
  },
  magnolia: {
    family: 'floral',
    mood: ['soft', 'creamy'],
    pyramid: 'heart',
    luxury: 8
  },

  // Woody
  sandalwood: {
    family: 'woody',
    mood: ['grounding', 'creamy'],
    pyramid: 'base',
    luxury: 9
  },
  cedarwood: {
    family: 'woody',
    mood: ['dry', 'confident'],
    pyramid: 'base',
    luxury: 7
  },
  vetiver: {
    family: 'woody',
    mood: ['earthy', 'sophisticated'],
    pyramid: 'base',
    luxury: 8
  },
  patchouli: {
    family: 'woody',
    mood: ['deep', 'mysterious'],
    pyramid: 'base',
    luxury: 7
  },
  oakmoss: {
    family: 'chypre',
    mood: ['classic', 'complex'],
    pyramid: 'base',
    luxury: 8
  },

  // Oriental
  oud: {
    family: 'oriental',
    mood: ['powerful', 'luxurious'],
    pyramid: 'base',
    luxury: 10
  },
  amber: {
    family: 'oriental',
    mood: ['warm', 'enveloping'],
    pyramid: 'base',
    luxury: 8
  },
  vanilla: {
    family: 'oriental',
    mood: ['comforting', 'sweet'],
    pyramid: 'base',
    luxury: 7
  },
  tonkaBean: {
    family: 'oriental',
    mood: ['gourmand', 'cozy'],
    pyramid: 'base',
    luxury: 8
  },
  incense: {
    family: 'oriental',
    mood: ['spiritual', 'meditative'],
    pyramid: 'base',
    luxury: 9
  },

  // Aromatic & Herbal
  lavender: {
    family: 'aromatic',
    mood: ['calming', 'clean'],
    pyramid: 'heart',
    luxury: 7
  },
  rosemary: {
    family: 'aromatic',
    mood: ['fresh', 'herbal'],
    pyramid: 'top',
    luxury: 6
  },
  sage: {
    family: 'aromatic',
    mood: ['crisp', 'sophisticated'],
    pyramid: 'top',
    luxury: 7
  },
  basil: {
    family: 'aromatic',
    mood: ['green', 'vibrant'],
    pyramid: 'top',
    luxury: 6
  },

  // Spicy
  blackPepper: {
    family: 'spicy',
    mood: ['bold', 'assertive'],
    pyramid: 'heart',
    luxury: 7
  },
  cardamom: {
    family: 'spicy',
    mood: ['warm', 'exotic'],
    pyramid: 'heart',
    luxury: 8
  },
  ginger: {
    family: 'spicy',
    mood: ['energizing', 'sharp'],
    pyramid: 'top',
    luxury: 7
  },
  clove: {
    family: 'spicy',
    mood: ['intense', 'rich'],
    pyramid: 'heart',
    luxury: 7
  },

  // Aquatic & Fresh
  seaNotes: {
    family: 'aquatic',
    mood: ['clean', 'modern'],
    pyramid: 'top',
    luxury: 6
  },
  cucumber: {
    family: 'aquatic',
    mood: ['fresh', 'crisp'],
    pyramid: 'top',
    luxury: 5
  },
  whiteMusk: {
    family: 'musk',
    mood: ['clean', 'skin-like'],
    pyramid: 'base',
    luxury: 7
  },

  // Musk
  animalicMusk: {
    family: 'musk',
    mood: ['sensual', 'warm'],
    pyramid: 'base',
    luxury: 8
  }
};
