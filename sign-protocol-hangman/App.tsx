
import React from 'react';
import { Header } from './components/Header';
import { CharacterDisplay } from './components/CharacterDisplay';
import { Gallows } from './components/Gallows';
import { Scoreboard } from './components/Scoreboard';
import { WordDisplay } from './components/WordDisplay';
import { Keyboard } from './components/Keyboard';
import { Hint } from './components/Hint';
import { Controls } from './components/Controls';
import { GameModal } from './components/GameModal';
import { useGameLogic } from './hooks/useGameLogic';
import { SpinnerIcon } from './components/icons';

export default function App() {
  const {
    gameState,
    level,
    wordToGuess,
    handleGuess,
    requestNewWord,
    handleNextLevel,
    handleResetGame,
    handleRequestHint,
  } = useGameLogic();

  const {
    currentWord,
    guessedLetters,
    wrongGuesses,
    score,
    streak,
    hint,
    isHintUsed,
    gameStatus,
    isLoading,
  } = gameState;

  return (
    <div className="bg-orange-500 min-h-screen flex items-center justify-center p-4 sm:p-6 font-sans">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-7xl w-full z-10 overflow-hidden">
        <Header />
        <main className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-[280px_1fr_240px] gap-8">
          {/* Left Panel */}
          <div className="flex flex-col gap-6 lg:order-1">
            <CharacterDisplay levelIndex={level.levelIndex} wrongGuesses={wrongGuesses} />
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white p-4 rounded-xl text-center font-semibold text-lg shadow-md">
              Level {level.levelIndex + 1}: {level.name}
            </div>
            <Gallows wrongGuesses={wrongGuesses} />
          </div>

          {/* Center Panel */}
          <div className="flex flex-col gap-6 lg:order-2 min-h-[400px]">
            <WordDisplay
              word={wordToGuess}
              category={level.category}
              isLoading={isLoading}
            />
            {isLoading ? (
              <div className="flex-grow flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-slate-600">
                  <SpinnerIcon className="w-12 h-12" />
                  <p className="font-semibold">Generating new word...</p>
                </div>
              </div>
            ) : (
              <>
                <Keyboard guessedLetters={guessedLetters} onGuess={handleGuess} gameStatus={gameStatus} />
                <Hint hint={hint} isHintUsed={isHintUsed} onRequestHint={handleRequestHint} score={score} gameStatus={gameStatus} />
              </>
            )}
          </div>

          {/* Right Panel */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 lg:order-3">
             <Scoreboard
                score={score}
                wrongGuesses={wrongGuesses}
                levelIndex={level.levelIndex}
                streak={streak}
             />
          </div>
        </main>
        
        <Controls
          onNewWord={() => requestNewWord(level.levelIndex)}
          onNextLevel={handleNextLevel}
          onResetGame={handleResetGame}
          gameStatus={gameStatus}
          isLoading={isLoading}
          isLastLevel={level.levelIndex === 5}
        />
      </div>

      <GameModal
        gameStatus={gameStatus}
        word={currentWord}
        onPlayAgain={() => requestNewWord(level.levelIndex)}
        onNextLevel={handleNextLevel}
      />
    </div>
  );
}
