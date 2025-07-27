
export interface WordData {
  word: string;
  hint: string;
}

export interface Level {
  levelIndex: number;
  name: string;
  category: string;
  color: string;
  words: WordData[];
}

export enum GameStatus {
  Playing = 'PLAYING',
  Won = 'WON',
  Lost = 'LOST',
}

export interface GameState {
  currentWord: string;
  hint: string;
  guessedLetters: {
    correct: string[];
    incorrect: string[];
  };
  wrongGuesses: number;
  score: number;
  streak: number;
  isHintUsed: boolean;
  gameStatus: GameStatus;
  isLoading: boolean;
}
