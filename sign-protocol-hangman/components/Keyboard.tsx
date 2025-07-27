
import React from 'react';
import { ALPHABET } from '../constants';
import { GameStatus } from '../types';

interface KeyboardProps {
  guessedLetters: {
    correct: string[];
    incorrect: string[];
  };
  onGuess: (letter: string) => void;
  gameStatus: GameStatus;
}

export const Keyboard: React.FC<KeyboardProps> = ({ guessedLetters, onGuess, gameStatus }) => {
  const isPlaying = gameStatus === GameStatus.Playing;

  return (
    <div className="grid grid-cols-7 sm:grid-cols-9 md:grid-cols-13 gap-2 px-2">
      {ALPHABET.map((letter) => {
        const isCorrect = guessedLetters.correct.includes(letter);
        const isIncorrect = guessedLetters.incorrect.includes(letter);
        const isGuessed = isCorrect || isIncorrect;

        const buttonClass = `
          font-bold text-lg rounded-lg p-2 aspect-square flex items-center justify-center transition-all duration-200
          focus:outline-none focus:ring-4 focus:ring-orange-300
          ${
            isCorrect
              ? 'bg-green-200 border-2 border-green-400 text-green-800'
              : isIncorrect
              ? 'bg-red-200 border-2 border-red-400 text-red-800 opacity-70'
              : 'bg-white border-2 border-slate-300 text-slate-600 hover:bg-orange-100 hover:border-orange-400 hover:-translate-y-1'
          }
          ${!isPlaying && !isGuessed ? 'opacity-50 cursor-not-allowed' : ''}
          ${isPlaying && !isGuessed ? 'cursor-pointer' : 'cursor-not-allowed'}
        `;

        return (
          <button
            key={letter}
            onClick={() => onGuess(letter)}
            disabled={!isPlaying || isGuessed}
            className={buttonClass}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};
