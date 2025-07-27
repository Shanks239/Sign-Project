import React from 'react';

const SvgProps: React.SVGProps<SVGSVGElement> = {
  'aria-hidden': 'true',
  width: '100%',
  height: '100%',
  viewBox: '0 0 200 200',
  stroke: '#4A2E2E',
  strokeWidth: '4',
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const BaseCharacter: React.FC = () => (
  <>
    {/* Head */}
    <circle cx="100" cy="80" r="20" />
    {/* Body */}
    <line x1="100" y1="100" x2="100" y2="150" />
    {/* Arms */}
    <path d="M70 120 L 100 130 L 130 120" />
    {/* Legs */}
    <path d="M100 150 L 80 180" />
    <path d="M100 150 L 120 180" />
  </>
);

const Level0: React.FC = () => (
  <svg {...SvgProps}>
    <title>Level 1 Character: Signer</title>
    <BaseCharacter />
    {/* Smile */}
    <path d="M94 85 A 6 6 0 0 1 106 85" />
  </svg>
);

const Level1: React.FC = () => (
  <svg {...SvgProps}>
    <title>Level 2 Character: Builder</title>
    <BaseCharacter />
    {/* Builder's Hard Hat */}
    <path d="M80 62.5 A 20 20 0 0 1 120 62.5" stroke="#4A2E2E" strokeWidth="4" fill="#f59e0b" />
    <path d="M75 65 L 125 65" stroke="#4A2E2E" strokeWidth="5" />
  </svg>
);

const Level2: React.FC = () => (
  <svg {...SvgProps}>
    <title>Level 3 Character: Verifier</title>
    <BaseCharacter />
    {/* Verifier's Glasses */}
    <circle cx="93" cy="78" r="5" />
    <circle cx="107" cy="78" r="5" />
    <line x1="98" y1="78" x2="102" y2="78" />
  </svg>
);

const Level3: React.FC = () => (
  <svg {...SvgProps}>
    <title>Level 4 Character: Architect</title>
    <BaseCharacter />
    {/* Architect's Blueprint */}
     <g transform="translate(50, 100) rotate(-15)">
        <rect x="0" y="0" width="25" height="35" rx="3" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="2" />
        <line x1="5" y1="8" x2="20" y2="8" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="5" y1="16" x2="20" y2="16" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="5" y1="24" x2="15" y2="24" stroke="#3b82f6" strokeWidth="1.5" />
    </g>
  </svg>
);

const Level4: React.FC = () => (
    <svg {...SvgProps}>
        <title>Level 5 Character: Innovator</title>
        <BaseCharacter />
        {/* Innovator's Lightbulb */}
        <g transform="translate(115, 45)">
            <path d="M 0 10 A 10 10 0 1 1 20 10 C 20 15 15 15 15 20 L 5 20 C 5 15 0 15 0 10" fill="#fef08a" stroke="#facc15"/>
            <rect x="7" y="20" width="6" height="4" rx="1" fill="#a1a1aa" stroke="#71717a"/>
            {/* Sparkles */}
            <g stroke="#facc15" strokeWidth="2.5">
                <line x1="-5" y1="5" x2="-8" y2="2" />
                <line x1="25" y1="5" x2="28" y2="2" />
                <line x1="10" y1="-5" x2="10" y2="-8" />
            </g>
        </g>
    </svg>
);

const Level5: React.FC = () => (
  <svg {...SvgProps}>
    <title>Level 6 Character: Protocol Master</title>
    <BaseCharacter />
    {/* Master's Cape */}
    <path d="M90 105 C 50 120, 50 180, 75 180 L 125 180 C 150 180, 150 120, 110 105 Z" fill="rgba(239, 68, 68, 0.8)" stroke="#dc2626" />
    {/* Master's Crown */}
    <path d="M85 65 L 80 50 L 92.5 58 L 100 50 L 107.5 58 L 120 50 L 115 65 Z" fill="#f59e0b" stroke="#f59e0b" />
  </svg>
);

export const CharacterImages: React.FC[] = [Level0, Level1, Level2, Level3, Level4, Level5];
