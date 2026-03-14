import React, { useState } from 'react';
import './App.css';
import { useScentEngine } from './hooks/useScentEngine';
import Onboarding from './pages/Onboarding';
import Profile from './pages/Profile';
import Intent from './pages/Intent';
import Result from './pages/Result';
import Passport from './pages/Passport';

function App() {
  // Step management
  const [step, setStep] = useState('onboarding');
  
  // User data state
  const [biometrics, setBiometrics] = useState({
    stress: 5,
    energy: 5,
    bodyWarmth: 5,
    sleepQuality: 5,
    activity: 5
  });
  const [geneAnswers, setGeneAnswers] = useState([null, null, null, null, null]);
  const [intent, setIntent] = useState(null);
  
  // Scent generation hook
  const { generate, loading, result, error } = useScentEngine();
  
  // Context object passed to all pages
  const ctx = {
    biometrics,
    setBiometrics,
    geneAnswers,
    setGeneAnswers,
    intent,
    setIntent,
    generate,
    loading,
    result,
    error
  };
  
  // Restart flow
  const handleRestart = () => {
    setBiometrics({
      stress: 5,
      energy: 5,
      bodyWarmth: 5,
      sleepQuality: 5,
      activity: 5
    });
    setGeneAnswers([null, null, null, null, null]);
    setIntent(null);
    setStep('onboarding');
  };
  
  return (
    <div className="App">
      <div className="app-container">
        {step === 'onboarding' && (
          <Onboarding onNext={() => setStep('profile')} />
        )}
        {step === 'profile' && (
          <Profile ctx={ctx} onNext={() => setStep('intent')} />
        )}
        {step === 'intent' && (
          <Intent ctx={ctx} onNext={() => setStep('result')} />
        )}
        {step === 'result' && (
          <Result ctx={ctx} onPassport={() => setStep('passport')} />
        )}
        {step === 'passport' && (
          <Passport ctx={ctx} onRestart={handleRestart} />
        )}
      </div>
    </div>
  );
}

export default App;
