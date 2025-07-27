
import React from 'react';
import { SpinnerIcon } from './icons';

interface WordDisplayProps {
  word: string;
  category: string;
  isLoading: boolean;
}

export const WordDisplay: React.FC<WordDisplayProps> = ({ word, category, isLoading }) => {
  return (
    <div className="text-center p-4 sm:p-8">
      <div className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-4">
        {category}
      </div>
      <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 min-h-[4rem] flex items-center justify-center flex-wrap gap-x-6 gap-y-3 px-2">
        {isLoading ? <SpinnerIcon className="w-8 h-8" /> : word.split(' ').map((wordPart, index) => (
          <div key={index} className="flex tracking-[0.2em] sm:tracking-[0.3em]">
            {wordPart.split('').map((char, i) => (
              <span key={i} className="inline-block w-8 text-center">{char}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};