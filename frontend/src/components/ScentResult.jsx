import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

export default function ScentResult({ result }) {
  // Transform radar data for Recharts
  const radarData = Object.entries(result.radar).map(([subject, value]) => ({
    subject,
    value
  }));
  
  return (
    <div className="space-y-8" data-testid="scent-result">
      {/* Hero Fragrance Card */}
      <div 
        className="p-8 border space-y-4" 
        style={{ 
          borderWidth: '0.5px',
          borderColor: 'rgba(212,168,71,0.3)',
          background: 'linear-gradient(135deg, rgba(212,168,71,0.03) 0%, rgba(212,168,71,0.01) 100%)'
        }}
        data-testid="fragrance-hero-card"
      >
        <div>
          <h1 
            className="text-4xl mb-2" 
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-testid="fragrance-name"
          >
            {result.scentName}
          </h1>
          <p 
            className="text-lg italic text-[#D4A847] mb-3" 
            style={{ fontFamily: 'Playfair Display, serif' }}
            data-testid="fragrance-tagline"
          >
            {result.tagline}
          </p>
        </div>
        <p className="text-base leading-relaxed" data-testid="fragrance-story">{result.story}</p>
        <div className="flex gap-3 flex-wrap">
          <span 
            className="px-3 py-1 text-xs rounded-full border" 
            style={{ 
              borderColor: '#D4A847',
              backgroundColor: 'rgba(212,168,71,0.1)',
              color: '#D4A847'
            }}
          >
            {result.concentration}
          </span>
          <span 
            className="px-3 py-1 text-xs rounded-full border" 
            style={{ 
              borderColor: '#D4A847',
              backgroundColor: 'rgba(212,168,71,0.1)',
              color: '#D4A847'
            }}
          >
            {result.family}
          </span>
        </div>
      </div>

      {/* Fragrance Pyramid */}
      <div className="space-y-4" data-testid="fragrance-pyramid">
        <h2 className="text-xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
          Fragrance Pyramid
        </h2>
        {[
          { tier: 'Top notes', time: '15-30 minutes', notes: result.topNotes },
          { tier: 'Heart notes', time: '1-4 hours', notes: result.heartNotes },
          { tier: 'Base notes', time: '4-8 hours', notes: result.baseNotes }
        ].map(({ tier, time, notes }) => (
          <div 
            key={tier} 
            className="flex flex-col sm:flex-row sm:items-start gap-3 pb-4 border-b"
            style={{ borderColor: 'rgba(212,168,71,0.2)' }}
          >
            <div className="sm:w-32 flex-shrink-0">
              <div className="text-sm font-medium text-[#D4A847]">{tier}</div>
              <div className="text-xs text-[#8C8A84]">{time}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {notes.map(note => (
                <span
                  key={note}
                  className="px-3 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: 'rgba(212,168,71,0.1)',
                    border: '0.5px solid rgba(212,168,71,0.3)',
                    color: '#f0ede8'
                  }}
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Olfactory DNA Radar Chart */}
      <div className="space-y-4" data-testid="olfactory-dna">
        <h2 className="text-xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
          Your Olfactory DNA
        </h2>
        <div className="p-6 border" style={{ borderWidth: '0.5px', borderColor: 'rgba(212,168,71,0.3)' }}>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }}
              />
              <Radar
                dataKey="value"
                stroke="#D4A847"
                fill="#D4A847"
                fillOpacity={0.15}
                strokeWidth={1.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ritual and Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          className="p-6 border space-y-2" 
          style={{ borderWidth: '0.5px', borderColor: 'rgba(212,168,71,0.3)' }}
        >
          <h3 className="text-sm font-medium text-[#D4A847] uppercase tracking-wider">
            Wearing Ritual
          </h3>
          <p className="text-sm">{result.ritual}</p>
        </div>
        <div 
          className="p-6 border space-y-2" 
          style={{ borderWidth: '0.5px', borderColor: 'rgba(212,168,71,0.3)' }}
        >
          <h3 className="text-sm font-medium text-[#D4A847] uppercase tracking-wider">
            Closest To
          </h3>
          <p className="text-sm">{result.luxuryComparison}</p>
        </div>
      </div>
    </div>
  );
}
