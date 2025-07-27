
import React from 'react';
import { GameStatus } from '../types';

interface GameModalProps {
  gameStatus: GameStatus;
  word: string;
  onPlayAgain: () => void;
  onNextLevel: () => void;
}

export const GameModal: React.FC<GameModalProps> = ({ gameStatus, word, onPlayAgain, onNextLevel }) => {
  if (gameStatus === GameStatus.Playing) {
    return null;
  }

  const isWin = gameStatus === GameStatus.Won;
  const title = isWin ? 'You Won! 🎉' : 'Game Over 💀';
  const message = isWin ? `Excellent work! You guessed the word.` : `The word was: ${word}`;

  const handlePrimaryAction = () => {
    if (isWin) {
      onPlayAgain(); // Will function as "Next Word"
    } else {
      onPlayAgain();
    }
  };

  const buttonText = isWin ? 'Next Word' : 'Try Again';

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full animate-modal-slide-in">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-4">{title}</h2>
        <p className="text-slate-600 text-lg mb-6">{message}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={handlePrimaryAction}
            className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:from-orange-600 hover:to-yellow-600 hover:-translate-y-0.5 shadow-lg shadow-orange-500/30"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
