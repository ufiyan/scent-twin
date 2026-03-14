import React from 'react';

const INTENTS = [
  {
    id: 'experiential',
    title: 'Experiential',
    subtitle: 'Emotional uplift',
    description: 'Seeking positive energy and an uplifted emotional state',
    icon: '◈',
    color: 'teal'
  },
  {
    id: 'identity',
    title: 'Identity',
    subtitle: 'Signature presence',
    description: 'Asserting self-confidence and projecting a unique signature',
    icon: '◆',
    color: 'gold'
  },
  {
    id: 'occasion',
    title: 'Occasion',
    subtitle: 'Event energy',
    description: 'Dressing the energy of a specific moment or gathering',
    icon: '◇',
    color: 'purple'
  }
];

export default function IntentSelector({ value, onChange }) {
  return (
    <div className="space-y-4">
      {INTENTS.map(intent => (
        <button
          key={intent.id}
          onClick={() => onChange(intent.id)}
          className={`w-full p-6 text-left border transition-all ${
            value === intent.id
              ? 'border-[#D4A847] bg-[#D4A847]/5'
              : 'border-[rgba(212,168,71,0.3)] hover:border-[#D4A847]/60'
          }`}
          style={{ borderWidth: '0.5px' }}
          data-testid={`intent-card-${intent.id}`}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl text-[#D4A847] mt-1">{intent.icon}</span>
            <div className="flex-1 space-y-1">
              <div className="text-lg font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
                {intent.title}
              </div>
              <div className="text-sm text-[#8C8A84]">{intent.subtitle}</div>
              <div className="text-sm mt-2">{intent.description}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
