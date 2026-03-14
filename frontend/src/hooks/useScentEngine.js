import { useState } from 'react';
import { scoreFamily, generateScentTwin } from '../components/ScentEngine';
import { buildGeneProfile } from '../data/geneProfiles';
import { FAMILIES } from '../data/fragranceFamilies';

/**
 * Custom hook for fragrance generation with state management
 */
export function useScentEngine() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  
  const generate = async (biometrics, geneAnswers, intent) => {
    setLoading(true);
    setError(null);
    
    try {
      // Build genetic profile from quiz answers
      const geneProfile = buildGeneProfile(geneAnswers);
      
      // Score and select best fragrance family
      const familyKey = scoreFamily(biometrics, intent, geneProfile);
      const family = FAMILIES[familyKey];
      
      // Generate personalized fragrance via AI
      const aiResult = await generateScentTwin(biometrics, intent, familyKey, geneProfile);
      
      // Combine all data for result display
      const fullResult = {
        ...aiResult,
        family: family.name,
        familyKey,
        radar: family.radar,
        intent,
        biometrics,
        geneProfile,
        timestamp: new Date().toISOString()
      };
      
      setResult(fullResult);
      return fullResult;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  return { generate, loading, result, error };
}
