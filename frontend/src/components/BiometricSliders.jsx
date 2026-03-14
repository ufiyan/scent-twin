import React from 'react';

const SLIDERS = [
  {
    id: 'stress',
    label: 'Stress level',
    low: 'Completely calm',
    high: 'Highly stressed'
  },
  {
    id: 'energy',
    label: 'Energy level',
    low: 'Drained',
    high: 'Fully energized'
  },
  {
    id: 'bodyWarmth',
    label: 'Body warmth',
    low: 'Cool and crisp',
    high: 'Warm and flushed'
  },
  {
    id: 'sleepQuality',
    label: 'Sleep quality',
    low: 'Exhausted',
    high: 'Well rested'
  },
  {
    id: 'activity',
    label: 'Activity today',
    low: 'Still and quiet',
    high: 'Active and moving'
  }
];

export default function BiometricSliders({ values, onChange }) {
  return (
    <div className="space-y-6">
      {SLIDERS.map(slider => (
        <div key={slider.id} className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">{slider.label}</label>
            <span className="text-sm text-[#D4A847]">{values[slider.id]}</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={values[slider.id]}
            onChange={(e) => onChange(slider.id, parseInt(e.target.value))}
            className="w-full h-1 bg-[#2a2823] rounded-lg appearance-none cursor-pointer accent-[#D4A847]"
            data-testid={`${slider.id}-slider`}
          />
          <div className="flex justify-between text-xs text-[#8C8A84]">
            <span>{slider.low}</span>
            <span>{slider.high}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
