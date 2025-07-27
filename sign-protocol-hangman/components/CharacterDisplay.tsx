import React from 'react';
import { CharacterImages } from './CharacterImages';
import { LEVELS } from '../constants';

interface CharacterDisplayProps {
  levelIndex: number;
  wrongGuesses: number;
}

export const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ levelIndex, wrongGuesses }) => {
  const dangerClass = wrongGuesses >= 4 ? 'animate-danger-shake' : '';
  const Character = CharacterImages[levelIndex] ?? CharacterImages[0];
  const levelName = LEVELS[levelIndex]?.name || 'Character';

  return (
    <div className="text-center">
      <div 
        className={`relative w-[200px] h-[200px] mx-auto mb-4 bg-orange-100/70 rounded-2xl border-4 transition-all duration-300 shadow-lg ${dangerClass} ${wrongGuesses >= 4 ? 'border-red-600 shadow-red-500/40' : 'border-orange-500 shadow-orange-500/20'}`}
        role="img"
        aria-label={`Character for ${levelName}`}
      >
        <Character />
      </div>
    </div>
  );
};
