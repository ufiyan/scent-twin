import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

export default function ScentPassport({ result, onRestart }) {
  const passportRef = useRef(null);
  
  const radarData = Object.entries(result.radar).map(([subject, value]) => ({
    subject,
    value
  }));
  
  const downloadPassport = async () => {
    if (!passportRef.current) return;
    
    try {
      const canvas = await html2canvas(passportRef.current, {
        backgroundColor: '#0e0d0b',
        scale: 2
      });
      
      const link = document.createElement('a');
      const filename = `scent-twin-${result.scentName.replace(/\s/g, '-').toLowerCase()}.png`;
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download passport. Please try again.');
    }
  };
  
  const sharePassport = async () => {
    const text = `${result.scentName}\n${result.tagline}\n\n#MyScentTwin #OlfactoryDNA`;
    
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Share failed:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(text);
        alert('Copied to clipboard! Ready to share.');
      } catch (error) {
        console.error('Clipboard copy failed:', error);
        alert('Failed to copy. Please try again.');
      }
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Passport Card */}
      <div
        ref={passportRef}
        className="p-8 border space-y-6"
        style={{
          borderWidth: '2px',
          borderColor: '#D4A847',
          backgroundColor: '#0e0d0b'
        }}
        data-testid="scent-passport"
      >
        {/* Header */}
        <div className="text-center border-b pb-4" style={{ borderColor: 'rgba(212,168,71,0.3)' }}>
          <div className="text-xs uppercase tracking-widest text-[#D4A847] mb-2">
            Olfactory Identity Passport
          </div>
          <h1 
            className="text-3xl" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {result.scentName}
          </h1>
          <p 
            className="text-sm italic text-[#D4A847] mt-2" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {result.tagline}
          </p>
        </div>
        
        {/* Compact Radar */}
        <div>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 9 }}
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
        
        {/* Metadata */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-[#8C8A84] uppercase tracking-wider mb-1">Family</div>
            <div>{result.family}</div>
          </div>
          <div>
            <div className="text-[#8C8A84] uppercase tracking-wider mb-1">Concentration</div>
            <div>{result.concentration}</div>
          </div>
          <div>
            <div className="text-[#8C8A84] uppercase tracking-wider mb-1">Intent Mode</div>
            <div className="capitalize">{result.intent}</div>
          </div>
          <div>
            <div className="text-[#8C8A84] uppercase tracking-wider mb-1">Generated</div>
            <div>{new Date(result.timestamp).toLocaleDateString()}</div>
          </div>
        </div>
        
        {/* Story */}
        <p className="text-xs leading-relaxed border-t pt-4" style={{ borderColor: 'rgba(212,168,71,0.3)' }}>
          {result.story}
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={downloadPassport}
          className="flex-1 py-3 px-6 border text-sm font-medium transition-all hover:bg-[#D4A847]/10"
          style={{ borderColor: '#D4A847', color: '#D4A847' }}
          data-testid="download-passport-btn"
        >
          Download passport
        </button>
        <button
          onClick={sharePassport}
          className="flex-1 py-3 px-6 text-sm font-medium transition-all"
          style={{ backgroundColor: '#D4A847', color: '#0e0d0b' }}
          data-testid="share-passport-btn"
        >
          Share #MyScentTwin
        </button>
      </div>
      
      <button
        onClick={onRestart}
        className="w-full py-3 px-6 border text-sm transition-all hover:border-[#D4A847]/60"
        style={{ borderWidth: '0.5px', borderColor: 'rgba(212,168,71,0.3)' }}
        data-testid="restart-btn"
      >
        Create another fragrance
      </button>
    </div>
  );
}
