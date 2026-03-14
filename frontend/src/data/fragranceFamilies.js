// Seven primary fragrance families with complete profiles
// Each family includes radar chart values, ingredient pools, and luxury brand references

export const FAMILIES = {
  floralCitrus: {
    name: 'Floral Citrus',
    description: 'Bright, uplifting, and effortlessly elegant',
    concentration: 'Eau de Parfum',
    luxuryBrands: ['Chanel Chance Eau Tendre', 'Dior Miss Dior Blooming Bouquet', 'Jo Malone Peony & Blush Suede'],
    radar: {
      Floral: 85,
      Woody: 10,
      Fresh: 90,
      Oriental: 5,
      Spicy: 15
    },
    top: ['bergamot', 'lemon', 'mandarin', 'neroli', 'grapefruit'],
    heart: ['rose', 'jasmine', 'lily', 'magnolia'],
    base: ['whiteMusk', 'cedarwood'],
    intent: ['experiential', 'positive']
  },

  woodyOriental: {
    name: 'Woody Oriental',
    description: 'Powerful, commanding, and unforgettable',
    concentration: 'Parfum',
    luxuryBrands: ['Tom Ford Oud Wood', 'Dior Sauvage Elixir', 'Yves Saint Laurent La Nuit de l\'Homme'],
    radar: {
      Floral: 10,
      Woody: 95,
      Fresh: 15,
      Oriental: 90,
      Spicy: 70
    },
    top: ['bergamot', 'cardamom', 'ginger'],
    heart: ['blackPepper', 'clove', 'jasmine'],
    base: ['oud', 'sandalwood', 'vetiver', 'patchouli', 'amber'],
    intent: ['identity', 'power']
  },

  softFloral: {
    name: 'Soft Floral',
    description: 'Delicate, romantic, and timelessly feminine',
    concentration: 'Eau de Parfum',
    luxuryBrands: ['Chanel No. 5', 'Lancôme La Vie Est Belle', 'Viktor & Rolf Flowerbomb'],
    radar: {
      Floral: 95,
      Woody: 20,
      Fresh: 40,
      Oriental: 30,
      Spicy: 10
    },
    top: ['bergamot', 'neroli', 'mandarin'],
    heart: ['rose', 'iris', 'jasmine', 'ylangYlang', 'tuberose'],
    base: ['sandalwood', 'vanilla', 'whiteMusk'],
    intent: ['experiential', 'calm']
  },

  aromaticFougere: {
    name: 'Aromatic Fougère',
    description: 'Crisp, herbal, and effortlessly refined',
    concentration: 'Eau de Toilette',
    luxuryBrands: ['Dior Homme', 'Hermès Terre d\'Hermès', 'Prada L\'Homme'],
    radar: {
      Floral: 20,
      Woody: 60,
      Fresh: 85,
      Oriental: 15,
      Spicy: 40
    },
    top: ['bergamot', 'lavender', 'rosemary', 'sage'],
    heart: ['lavender', 'iris', 'blackPepper'],
    base: ['vetiver', 'cedarwood', 'oakmoss'],
    intent: ['identity', 'professional']
  },

  chypreWoody: {
    name: 'Chypre Woody',
    description: 'Sophisticated, complex, and connoisseur-level',
    concentration: 'Parfum',
    luxuryBrands: ['Chanel Sycomore', 'Hermès Équipé', 'Tom Ford Noir de Noir'],
    radar: {
      Floral: 30,
      Woody: 85,
      Fresh: 50,
      Oriental: 40,
      Spicy: 55
    },
    top: ['bergamot', 'grapefruit', 'petitgrain'],
    heart: ['rose', 'jasmine', 'blackPepper'],
    base: ['oakmoss', 'patchouli', 'vetiver', 'sandalwood'],
    intent: ['identity', 'occasion']
  },

  orientalAmber: {
    name: 'Oriental Amber',
    description: 'Warm, sensual, and enveloping',
    concentration: 'Eau de Parfum',
    luxuryBrands: ['Yves Saint Laurent Opium', 'Guerlain Shalimar', 'Thierry Mugler Angel'],
    radar: {
      Floral: 40,
      Woody: 50,
      Fresh: 10,
      Oriental: 95,
      Spicy: 75
    },
    top: ['mandarin', 'bergamot', 'cardamom'],
    heart: ['ylangYlang', 'tuberose', 'clove', 'blackPepper'],
    base: ['amber', 'vanilla', 'tonkaBean', 'incense', 'patchouli'],
    intent: ['occasion', 'evening']
  },

  freshAquatic: {
    name: 'Fresh Aquatic',
    description: 'Clean, energetic, and modern',
    concentration: 'Eau de Toilette',
    luxuryBrands: ['Acqua di Giò', 'Calvin Klein CK One', 'Issey Miyake L\'Eau d\'Issey'],
    radar: {
      Floral: 25,
      Woody: 30,
      Fresh: 95,
      Oriental: 5,
      Spicy: 20
    },
    top: ['seaNotes', 'cucumber', 'bergamot', 'lemon', 'grapefruit'],
    heart: ['lily', 'jasmine', 'rosemary'],
    base: ['whiteMusk', 'cedarwood', 'amber'],
    intent: ['experiential', 'active']
  }
};
