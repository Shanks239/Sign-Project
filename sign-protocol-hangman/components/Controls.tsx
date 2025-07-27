
import React from 'react';
import { GameStatus } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'default';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'default', ...props }) => {
  const baseClasses = 'font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none';
  
  const variantClasses = {
    default: 'bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 hover:-translate-y-0.5',
    primary: 'bg-gradient-to-br from-orange-500 to-yellow-500 border-2 border-orange-600 text-white hover:from-orange-600 hover:to-yellow-600 hover:-translate-y-0.5 shadow-orange-300/50',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
};


interface ControlsProps {
  onNewWord: () => void;
  onNextLevel: () => void;
  onResetGame: () => void;
  gameStatus: GameStatus;
  isLoading: boolean;
  isLastLevel: boolean;
}

export const Controls: React.FC<ControlsProps> = ({ onNewWord, onNextLevel, onResetGame, gameStatus, isLoading, isLastLevel }) => {
  const showNextLevelButton = gameStatus === GameStatus.Won && !isLastLevel;
  
  return (
    <div className="bg-slate-100 p-4 sm:p-6 flex justify-center items-center gap-4 flex-wrap border-t border-slate-200">
      <Button onClick={onNewWord} disabled={isLoading || gameStatus === GameStatus.Playing}>
        🔄 New Word
      </Button>
      {showNextLevelButton && (
        <Button onClick={onNextLevel} disabled={isLoading} variant="primary">
          ⬆️ Next Level
        </Button>
      )}
      <Button onClick={onResetGame} disabled={isLoading}>
        🎯 Reset Game
      </Button>
    </div>
  );
};
