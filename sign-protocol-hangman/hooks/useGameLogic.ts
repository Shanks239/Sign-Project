
import { useState, useEffect, useCallback, useMemo } from 'react';
import { GameState, GameStatus, Level, WordData } from '../types';
import { LEVELS, MAX_WRONG_GUESSES } from '../constants';
import { generateWord } from '../services/geminiService';

const initialGameState: GameState = {
  currentWord: '',
  hint: '',
  guessedLetters: { correct: [], incorrect: [] },
  wrongGuesses: 0,
  score: 0,
  streak: 0,
  isHintUsed: false,
  gameStatus: GameStatus.Playing,
  isLoading: true,
};

export const useGameLogic = () => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const level = useMemo(() => LEVELS[levelIndex], [levelIndex]);

  const startNewRound = useCallback((wordData: WordData, resetScore = false, resetStreak = false) => {
    setGameState(prev => ({
      ...initialGameState,
      currentWord: wordData.word.toUpperCase(),
      hint: wordData.hint,
      score: resetScore ? 0 : prev.score,
      streak: resetStreak ? 0 : prev.streak,
      isLoading: false,
      gameStatus: GameStatus.Playing,
    }));
  }, []);

  const requestNewWord = useCallback(async (currentLevelIndex: number) => {
    setGameState(prev => ({ ...prev, isLoading: true }));
    const currentLevel = LEVELS[currentLevelIndex];
    let newWordData = await generateWord(currentLevel.category);

    if (!newWordData) {
      console.log("Using fallback word.");
      const fallbackWords = currentLevel.words;
      newWordData = fallbackWords[Math.floor(Math.random() * fallbackWords.length)];
    }
    
    startNewRound(newWordData, false, true);
  }, [startNewRound]);

  useEffect(() => {
    requestNewWord(levelIndex);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelIndex]);

  const handleGuess = useCallback((letter: string) => {
    if (gameState.gameStatus !== GameStatus.Playing) return;

    const upperLetter = letter.toUpperCase();
    if (gameState.guessedLetters.correct.includes(upperLetter) || gameState.guessedLetters.incorrect.includes(upperLetter)) {
      return;
    }

    if (gameState.currentWord.includes(upperLetter)) {
      setGameState(prev => {
        const newCorrect = [...prev.guessedLetters.correct, upperLetter];
        const wordSolved = prev.currentWord.split('').every(char => newCorrect.includes(char) || char === ' ');
        
        if (wordSolved) {
          return {
            ...prev,
            guessedLetters: { ...prev.guessedLetters, correct: newCorrect },
            score: prev.score + 10,
            streak: prev.streak + 1,
            gameStatus: GameStatus.Won,
          };
        }
        return {
          ...prev,
          guessedLetters: { ...prev.guessedLetters, correct: newCorrect },
        };
      });
    } else {
      setGameState(prev => {
        const newWrongGuesses = prev.wrongGuesses + 1;
        const newIncorrect = [...prev.guessedLetters.incorrect, upperLetter];
        
        if (newWrongGuesses >= MAX_WRONG_GUESSES) {
          return {
            ...prev,
            guessedLetters: { ...prev.guessedLetters, incorrect: newIncorrect },
            wrongGuesses: newWrongGuesses,
            streak: 0,
            gameStatus: GameStatus.Lost,
          };
        }
        return {
          ...prev,
          guessedLetters: { ...prev.guessedLetters, incorrect: newIncorrect },
          wrongGuesses: newWrongGuesses,
        };
      });
    }
  }, [gameState.gameStatus, gameState.currentWord, gameState.guessedLetters]);
  
  const handleNextLevel = () => {
    if (levelIndex < LEVELS.length - 1) {
      setLevelIndex(prev => prev + 1);
    }
  };

  const handleResetGame = () => {
    if(levelIndex === 0) {
       requestNewWord(0);
       setGameState(prev => ({...prev, score: 0, streak: 0}));
    } else {
       setLevelIndex(0);
    }
  };

  const handleRequestHint = () => {
    if (!gameState.isHintUsed && gameState.score >= 2) {
      setGameState(prev => ({
        ...prev,
        isHintUsed: true,
        score: prev.score - 2,
      }));
    }
  };

  const wordToGuess = useMemo(() => {
    return gameState.currentWord
      .split('')
      .map(char => (gameState.guessedLetters.correct.includes(char) || char === ' ' ? char : '_'))
      .join('');
  }, [gameState.currentWord, gameState.guessedLetters.correct]);

  return {
    gameState,
    level,
    wordToGuess,
    handleGuess,
    requestNewWord,
    handleNextLevel,
    handleResetGame,
    handleRequestHint,
  };
};