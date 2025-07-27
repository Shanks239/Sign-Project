
import React from 'react';
import { HANGMAN_STAGES } from '../constants';

interface GallowsProps {
  wrongGuesses: number;
}

export const Gallows: React.FC<GallowsProps> = ({ wrongGuesses }) => {
  const stage = HANGMAN_STAGES[wrongGuesses];

  return (
    <div className="bg-slate-100 border-2 border-slate-200 rounded-xl p-4 font-mono text-sm sm:text-base text-slate-600 text-center min-h-[160px] flex items-center justify-center whitespace-pre">
      {stage}
    </div>
  );
};
