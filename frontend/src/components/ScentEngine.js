import { FAMILIES } from '../data/fragranceFamilies';
import { INGREDIENTS } from '../data/ingredients';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

/**
 * Score each fragrance family based on biometrics, intent, and genetic profile
 * Returns the key of the best-matching family
 */
export function scoreFamily(biometrics, intent, geneProfile) {
  const scores = {};
  
  Object.entries(FAMILIES).forEach(([familyKey, family]) => {
    let score = 0;
    
    // Intent matching (highest weight: 30 points)
    if (family.intent && family.intent.includes(intent)) {
      score += 30;
    }
    
    // Biometric scoring rules (10-20 points each)
    const { stress, energy, bodyWarmth, sleepQuality, activity } = biometrics;
    
    // High stress favors calming fresh/citrus families
    if (stress > 7 && family.radar.Fresh > 70) score += 20;
    if (stress > 7 && family.radar.Oriental > 70) score -= 10;
    
    // Low energy favors stimulating citrus
    if (energy < 4 && family.radar.Fresh > 70) score += 15;
    
    // Cool body temperature favors warm orientals
    if (bodyWarmth < 4 && family.radar.Oriental > 60) score += 15;
    if (bodyWarmth > 7 && family.radar.Fresh > 70) score += 15;
    
    // Poor sleep favors calming florals and fresh
    if (sleepQuality < 4 && family.radar.Floral > 60) score += 10;
    
    // High activity favors fresh aquatic
    if (activity > 7 && familyKey === 'freshAquatic') score += 20;
    
    // Genetic profile scoring (multiply gene scores by 3 for strong affinities)
    const geneScores = geneProfile.scores || {};
    
    if (familyKey === 'woodyOriental') {
      score += (geneScores.woody || 0) * 2;
      score += (geneScores.oriental || 0) * 2;
      score += (geneScores.musk || 0) * 1.5;
    } else if (familyKey === 'floralCitrus' || familyKey === 'softFloral') {
      score += (geneScores.floral || 0) * 2;
      score += (geneScores.citrus || 0) * 2;
    } else if (familyKey === 'freshAquatic') {
      score += (geneScores.fresh || 0) * 2;
      score += (geneScores.aquatic || 0) * 2;
    } else if (familyKey === 'aromaticFougere') {
      score += (geneScores.aromatic || 0) * 2;
    } else if (familyKey === 'chypreWoody') {
      score += (geneScores.chypre || 0) * 2;
      score += (geneScores.woody || 0) * 1.5;
    }
    
    // Penalty for genetic sensitivities
    if (geneScores.musk && geneScores.musk < -20 && familyKey === 'woodyOriental') {
      score -= 30;
    }
    
    scores[familyKey] = score;
  });
  
  // Return family with highest score
  return Object.entries(scores).reduce((best, [key, score]) => 
    score > best.score ? { key, score } : best
  , { key: 'floralCitrus', score: -Infinity }).key;
}

/**
 * Generate personalized fragrance using backend API (which calls GPT-4o)
 */
export async function generateScentTwin(biometrics, intent, familyKey, geneProfile) {
  const family = FAMILIES[familyKey];
  
  try {
    const response = await fetch(`${BACKEND_URL}/api/generate-fragrance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        biometrics,
        intent,
        familyKey,
        familyName: family.name,
        familyIngredients: {
          top: family.top,
          heart: family.heart,
          base: family.base
        },
        geneProfile
      })
    });
    
    if (!response.ok) {
      throw new Error('API request failed');
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Backend API Error:', error);
    throw new Error('Failed to generate fragrance. Please try again.');
  }
}
