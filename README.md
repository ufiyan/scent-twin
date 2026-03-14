# Scent Twin — Léoréal Hackathon 2025

**Your fragrance, encoded in you.**

Scent Twin is an AI-powered fragrance personalization platform that creates a unique "Olfactory DNA" for every user by combining:
- Real-time biometric data (stress, energy, body temperature, sleep, activity)
- Genetic olfactory receptor profiles (5 scientifically-grounded perception questions)
- Stated intention mode (experiential, identity, or occasion)

The system uses GPT-4o to generate a bespoke luxury fragrance with:
- Personalized fragrance name and luxury brand storytelling
- Complete fragrance pyramid (top, heart, and base notes)
- Radar chart visualization of your unique scent fingerprint
- Downloadable "Scent Passport" for social sharing

## Tech Stack

- **Frontend**: React 19, Tailwind CSS, Recharts, html2canvas
- **AI**: OpenAI GPT-4o with structured JSON output
- **Design**: Luxury editorial aesthetic (Playfair Display + Inter, dark palette with gold accents)

## Quick Start

### Prerequisites

- Node.js 16+
- Yarn package manager
- OpenAI API key (or Emergent LLM universal key)

### Installation

```bash
cd frontend
yarn install
```

### Environment Setup

Create a `.env` file in the `/frontend` directory:

```bash
REACT_APP_BACKEND_URL=https://your-app-name.preview.emergentagent.com
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
REACT_APP_OPENAI_API_KEY=your-openai-api-key-here
```

### Development

```bash
cd frontend
yarn start
```

The app will open at `http://localhost:3000`

### Production Build

```bash
cd frontend
yarn build
```

## Deployment

### Vercel (Recommended)

```bash
vercel --prod
```

The `vercel.json` configuration is already set up for client-side routing.

## Project Structure

```
frontend/
├── src/
│   ├── data/
│   │   ├── ingredients.js          # 30+ ingredient database
│   │   ├── fragranceFamilies.js     # 7 fragrance family profiles
│   │   └── geneProfiles.js          # Genetic quiz questions
│   ├── components/
│   │   ├── ScentEngine.js           # Core scoring & AI logic
│   │   ├── BiometricSliders.jsx     # 5 biometric sliders
│   │   ├── GeneticQuiz.jsx          # 5-question genetic quiz
│   │   ├── IntentSelector.jsx       # 3 intent mode cards
│   │   ├── ScentResult.jsx          # Result display with radar
│   │   └── ScentPassport.jsx        # Downloadable passport
│   ├── pages/
│   │   ├── Onboarding.jsx           # Entry screen
│   │   ├── Profile.jsx              # Biometrics + genetic quiz
│   │   ├── Intent.jsx               # Intent selection
│   │   ├── Result.jsx               # Fragrance reveal
│   │   └── Passport.jsx             # Shareable passport
│   ├── hooks/
│   │   └── useScentEngine.js        # React hook for AI generation
│   ├── App.js                     # Main app with step routing
│   ├── App.css                    # Luxury design system
│   └── index.css                  # Global styles + fonts
└── package.json
```

## Scientific Foundations

### Aromachology
- Bergamot reduces cortisol (stress hormone) by 17%
- Lavender activates GABA receptors for calming
- Citrus increases serotonin for alertness
- Sandalwood stimulates alpha-2A adrenoreceptor for calmness

### Olfactory Receptor Genetics
- **OR7D4**: Musk perception (warm vs unpleasant vs anosmic)
- **OR6A2**: Aldehyde/classic perfume perception
- **OR11H7**: Sandalwood intensity perception
- **TAS2R38**: Aromatic herb sensitivity
- **ABCC11**: Skin chemistry and fragrance evolution

### Fragrance Architecture
- **Top Notes**: 15-30 minutes (first impression)
- **Heart Notes**: 1-4 hours (emotional core)
- **Base Notes**: 4-8 hours (lasting signature)

## Demo Script (3 minutes)

1. **Onboarding**: Show headline "Your fragrance, encoded in you"
2. **Biometrics**: Set sliders (stress 8, energy 3, etc.)
3. **Genetic Quiz**: Answer 5 questions (30 seconds)
4. **Intent**: Select "Identity Mode"
5. **Generation**: Watch AI create fragrance (10 seconds)
6. **Result**: Show fragrance name, pyramid, radar chart
7. **Passport**: Download and explain social layer

## Hackathon Scoring Alignment

- **Technical Innovation**: Multi-modal AI, genetic proxy mapping, schema-enforced LLM
- **Luxury Brand Alignment**: Léoréal fragrance science, luxury brand language, concentration tiers
- **Feasibility**: Fully functional web app, single API key deployment
- **Storytelling**: "Olfactory DNA" concept, live demo impact, social virality

## Production Roadmap

1. **Phase 1**: Apple HealthKit / Google Fit integration for real biometrics
2. **Phase 2**: 23andMe API for actual genetic data
3. **Phase 3**: Léoréal custom blend manufacturing integration
4. **Phase 4**: Social platform for "scent twins" matching

## License

MIT License - Built for Léoréal Hackathon 2025

---

**Built with ♥ for the future of personalized luxury fragrance**
