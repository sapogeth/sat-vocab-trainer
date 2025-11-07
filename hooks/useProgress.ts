import { useState, useEffect } from 'react';

export interface WordProgress {
  word: string;
  correctCount: number;
  incorrectCount: number;
  lastAttempt: string;
}

export interface Progress {
  wordProgress: Record<string, WordProgress>;
  totalWordsLearned: number;
}

const STORAGE_KEY = 'sat_vocab_progress';

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({
    wordProgress: {},
    totalWordsLearned: 0,
  });

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to parse progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Record answer for a word
  const recordAnswer = (word: string, isCorrect: boolean) => {
    setProgress((prev) => {
      const wordProg = prev.wordProgress[word] || {
        word,
        correctCount: 0,
        incorrectCount: 0,
        lastAttempt: new Date().toISOString(),
      };

      const updated = {
        ...wordProg,
        correctCount: isCorrect ? wordProg.correctCount + 1 : wordProg.correctCount,
        incorrectCount: !isCorrect ? wordProg.incorrectCount + 1 : wordProg.incorrectCount,
        lastAttempt: new Date().toISOString(),
      };

      const newWordProgress = {
        ...prev.wordProgress,
        [word]: updated,
      };

      // Count words with 5+ correct answers as "learned"
      const learnedCount = Object.values(newWordProgress).filter(
        (wp) => wp.correctCount >= 5
      ).length;

      return {
        wordProgress: newWordProgress,
        totalWordsLearned: learnedCount,
      };
    });
  };

  // Check if a word is learned (5+ correct answers)
  const isWordLearned = (word: string): boolean => {
    const wordProg = progress.wordProgress[word];
    return wordProg ? wordProg.correctCount >= 5 : false;
  };

  // Get progress for a specific word
  const getWordProgress = (word: string): WordProgress | null => {
    return progress.wordProgress[word] || null;
  };

  // Reset all progress
  const resetProgress = () => {
    setProgress({
      wordProgress: {},
      totalWordsLearned: 0,
    });
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    recordAnswer,
    isWordLearned,
    getWordProgress,
    resetProgress,
  };
}
