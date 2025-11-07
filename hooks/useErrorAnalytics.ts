import { useMemo } from 'react';
import { WordProgress } from './useProgress';
import { Word } from '@/data/words';

export interface CategoryError {
  category: string;
  errorCount: number;
  totalAttempts: number;
  errorRate: number;
}

export interface HardestWord {
  word: string;
  incorrectCount: number;
  correctCount: number;
  errorRate: number;
}

export function useErrorAnalytics(
  wordProgress: Record<string, WordProgress>,
  allWords: Word[]
) {
  // Group errors by part of speech (category)
  const categoryErrors = useMemo(() => {
    const categoryMap: Record<string, { errors: number; total: number }> = {};

    allWords.forEach((word) => {
      const category = word.partOfSpeech || 'other';
      const prog = wordProgress[word.word];

      if (prog) {
        if (!categoryMap[category]) {
          categoryMap[category] = { errors: 0, total: 0 };
        }
        categoryMap[category].errors += prog.incorrectCount;
        categoryMap[category].total += prog.correctCount + prog.incorrectCount;
      }
    });

    const categories: CategoryError[] = Object.entries(categoryMap)
      .map(([category, data]) => ({
        category,
        errorCount: data.errors,
        totalAttempts: data.total,
        errorRate: data.total > 0 ? (data.errors / data.total) * 100 : 0,
      }))
      .sort((a, b) => b.errorCount - a.errorCount);

    return categories;
  }, [wordProgress, allWords]);

  // Get top 5 categories with most mistakes
  const topErrorCategories = useMemo(() => {
    return categoryErrors.slice(0, 5);
  }, [categoryErrors]);

  // Get top 10 hardest words (by wrong answers)
  const hardestWords = useMemo(() => {
    const words: HardestWord[] = Object.values(wordProgress)
      .filter((wp) => wp.incorrectCount > 0)
      .map((wp) => ({
        word: wp.word,
        incorrectCount: wp.incorrectCount,
        correctCount: wp.correctCount,
        errorRate:
          wp.correctCount + wp.incorrectCount > 0
            ? (wp.incorrectCount / (wp.correctCount + wp.incorrectCount)) * 100
            : 0,
      }))
      .sort((a, b) => b.incorrectCount - a.incorrectCount);

    return words.slice(0, 10);
  }, [wordProgress]);

  // Get total error stats
  const totalStats = useMemo(() => {
    let totalCorrect = 0;
    let totalIncorrect = 0;

    Object.values(wordProgress).forEach((wp) => {
      totalCorrect += wp.correctCount;
      totalIncorrect += wp.incorrectCount;
    });

    const totalAttempts = totalCorrect + totalIncorrect;

    return {
      totalCorrect,
      totalIncorrect,
      totalAttempts,
      accuracy: totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0,
    };
  }, [wordProgress]);

  return {
    categoryErrors,
    topErrorCategories,
    hardestWords,
    totalStats,
  };
}
