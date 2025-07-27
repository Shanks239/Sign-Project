
import React from 'react';
import { MAX_WRONG_GUESSES } from '../constants';

interface ScoreItemProps {
  label: string;
  value: string | number;
  className?: string;
}

const ScoreItem: React.FC<ScoreItemProps> = ({ label, value, className }) => (
  <div className="bg-white border-2 border-slate-200 rounded-xl p-4 text-center transition-all hover:border-orange-400 hover:shadow-lg flex-1">
    <div className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1">
      {label}
    </div>
    <div className={`text-2xl sm:text-3xl font-bold text-orange-500 ${className}`}>
      {value}
    </div>
  </div>
);

interface ScoreboardProps {
  score: number;
  wrongGuesses: number;
  levelIndex: number;
  streak: number;
}

export const Scoreboard: React.FC<ScoreboardProps> = ({ score, wrongGuesses, levelIndex, streak }) => {
  return (
    <>
      <ScoreItem label="Score" value={score} />
      <ScoreItem label="Wrong" value={`${wrongGuesses}/${MAX_WRONG_GUESSES}`} className={wrongGuesses > 0 ? 'text-red-500' : 'text-green-500'} />
      <ScoreItem label="Level" value={`${levelIndex + 1}/6`} />
      <ScoreItem label="Streak" value={streak} />
    </>
  );
};
