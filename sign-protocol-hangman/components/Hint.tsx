
import React from 'react';
import { GameStatus } from '../types';

interface HintProps {
  hint: string;
  isHintUsed: boolean;
  onRequestHint: () => void;
  score: number;
  gameStatus: GameStatus;
}

export const Hint: React.FC<HintProps> = ({ hint, isHintUsed, onRequestHint, score, gameStatus }) => {
  const canAffordHint = score >= 2;
  const isDisabled = isHintUsed || !canAffordHint || gameStatus !== GameStatus.Playing;

  return (
    <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5 text-center">
      <button 
        onClick={onRequestHint} 
        disabled={isDisabled}
        className="bg-yellow-200 border-2 border-yellow-400 text-yellow-800 font-semibold px-4 py-2 rounded-lg transition-all hover:bg-yellow-300 disabled:bg-slate-200 disabled:border-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed"
      >
        🔮 Get Hint (-2 points)
      </button>
      {isHintUsed && (
        <div className="text-yellow-900 italic mt-3 text-sm sm:text-base">
          {hint}
        </div>
      )}
    </div>
  );
};
