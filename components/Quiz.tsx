"use client";

import { useState, useEffect } from "react";
import { Word } from "@/data/words";

interface QuizProps {
  words: Word[];
  onBack: () => void;
  onQuizComplete: (score: number) => void;
  onRecordAnswer?: (word: string, isCorrect: boolean) => void;
}

interface Question {
  word: Word;
  options: string[];
  correctAnswer: string;
}

const USED_WORDS_KEY = 'sat_vocab_used_words';

export default function Quiz({ words, onBack, onQuizComplete, onRecordAnswer }: QuizProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = () => {
    // Get previously used words from localStorage
    const usedWordsJson = localStorage.getItem(USED_WORDS_KEY);
    const usedWords: string[] = usedWordsJson ? JSON.parse(usedWordsJson) : [];

    // Filter out already used words
    let availableWords = words.filter((w) => !usedWords.includes(w.word));

    // If we don't have enough unused words, reset and use all words
    if (availableWords.length < 10) {
      availableWords = [...words];
      localStorage.removeItem(USED_WORDS_KEY);
    }

    // Shuffle and pick 10 random words from available ones
    const shuffled = [...availableWords].sort(() => Math.random() - 0.5);
    const selectedWords = shuffled.slice(0, 10);

    // Store the newly used words
    const newUsedWords = [...usedWords, ...selectedWords.map((w) => w.word)];
    localStorage.setItem(USED_WORDS_KEY, JSON.stringify(newUsedWords));

    const newQuestions = selectedWords.map((word) => {
      // Get 3 random wrong answers
      const wrongAnswers = words
        .filter((w) => w.word !== word.word)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((w) => w.definition);

      // Combine and shuffle options
      const options = [...wrongAnswers, word.definition].sort(
        () => Math.random() - 0.5
      );

      return {
        word,
        options,
        correctAnswer: word.definition,
      };
    });

    setQuestions(newQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    const isCorrect = answer === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }

    // Record answer for progress tracking
    if (onRecordAnswer) {
      onRecordAnswer(questions[currentQuestion].word.word, isCorrect);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      onQuizComplete(score);
      setShowResults(true);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-base sm:text-lg text-gray-600">Loading quiz...</div>
      </div>
    );
  }

  if (showResults) {
    const isPerfectScore = score === questions.length;

    return (
      <div className="max-w-2xl mx-auto p-4 sm:p-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">Quiz Complete!</h2>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 sm:p-8 mb-6 shadow-md">
          <div className="text-5xl sm:text-6xl font-bold text-orange-600 mb-2">
            {score}/{questions.length}
          </div>
          <div className="text-lg sm:text-xl text-gray-700">
            {isPerfectScore
              ? "Perfect score! Outstanding!"
              : score >= 7
              ? "Great job!"
              : score >= 5
              ? "Good effort! Keep practicing!"
              : "Keep studying! You'll improve!"}
          </div>
        </div>

        {/* Feedback message for perfect score */}
        {isPerfectScore && (
          <div className="bg-white border-2 border-orange-300 rounded-lg p-4 sm:p-6 mb-6 shadow-md">
            <p className="text-base sm:text-lg text-gray-700 mb-3">
              If this site helped you, please leave your feedback!
            </p>
            <button
              onClick={() => window.open("https://forms.gle/SbdTwuxGyP1yndKb6", "_blank")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              💬 Leave Feedback
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={generateQuestions}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            Try Again
          </button>
          <button
            onClick={onBack}
            className="bg-white text-gray-600 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all hover:scale-105 active:scale-95"
          >
            Back to Words
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-3 sm:p-6">
      <div className="mb-4 sm:mb-6">
        <button
          onClick={onBack}
          className="text-orange-600 hover:text-orange-700 font-medium mb-3 sm:mb-4 inline-block text-sm sm:text-base"
        >
          ← Back to Words
        </button>
        <div className="flex justify-between items-center mb-2 gap-2">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Quiz Mode</h2>
          <span className="text-gray-600 text-sm sm:text-base whitespace-nowrap">
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-8 mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          {question.word.word}
        </h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">What does this word mean?</p>

        <div className="space-y-2 sm:space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === question.correctAnswer;
            const showCorrect = isAnswered && isCorrect;
            const showWrong = isAnswered && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all text-sm sm:text-base ${
                  showCorrect
                    ? "bg-orange-50 border-orange-500 text-orange-900"
                    : showWrong
                    ? "bg-red-50 border-red-500 text-red-900"
                    : isSelected
                    ? "bg-orange-50 border-orange-500 text-gray-900"
                    : "bg-white border-gray-300 hover:border-orange-400 hover:bg-orange-50 text-gray-900"
                } ${isAnswered ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="font-semibold text-gray-700 flex-shrink-0 text-sm sm:text-base">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="flex-1 text-gray-900">{option}</span>
                  {showCorrect && (
                    <span className="text-orange-600 font-bold flex-shrink-0">
                      ✓
                    </span>
                  )}
                  {showWrong && (
                    <span className="text-red-600 font-bold flex-shrink-0">
                      ✗
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered && (
        <div className="space-y-3 sm:space-y-4">
          <div
            className={`p-3 sm:p-4 rounded-lg ${
              selectedAnswer === question.correctAnswer
                ? "bg-orange-50 border-2 border-orange-200"
                : "bg-red-50 border-2 border-red-200"
            }`}
          >
            <p
              className={`font-semibold mb-2 text-sm sm:text-base ${
                selectedAnswer === question.correctAnswer
                  ? "text-orange-800"
                  : "text-red-800"
              }`}
            >
              {selectedAnswer === question.correctAnswer
                ? "✅ Correct!"
                : "❌ Wrong!"}
            </p>
            <p className="text-gray-700 mb-2 text-sm sm:text-base">
              <strong>Russian:</strong> {question.word.russian}
            </p>
            <p className="text-gray-700 mb-2 text-sm sm:text-base">
              <strong>Example:</strong> {question.word.example}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              <strong>Tip:</strong> {question.word.tip}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all hover:scale-105 active:scale-95 shadow-md text-sm sm:text-base"
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
          </button>
        </div>
      )}

      <div className="mt-4 sm:mt-6 text-center text-gray-600 text-sm sm:text-base">
        Current Score: {score} / {currentQuestion + (isAnswered ? 1 : 0)}
      </div>
    </div>
  );
}
