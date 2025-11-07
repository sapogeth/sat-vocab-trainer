"use client";

import { useState } from "react";
import { words } from "@/data/words";
import Quiz from "@/components/Quiz";
import ProgressBar from "@/components/ProgressBar";
import Dashboard from "@/components/Dashboard";
import { useProgress } from "@/hooks/useProgress";
import { useErrorAnalytics } from "@/hooks/useErrorAnalytics";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedWord, setExpandedWord] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState("");

  // Use custom hooks for progress tracking and error analytics
  const { progress, recordAnswer, isWordLearned, resetProgress } = useProgress();
  const { topErrorCategories, hardestWords, totalStats } = useErrorAnalytics(
    progress.wordProgress,
    words
  );

  // Motivation messages
  const MOTIVATION_MESSAGES = [
    "⚡ Genius is consistency. Keep going.",
    "🎯 One word now = one step closer to 1500 SAT.",
    "💪 Don't stop when you're tired — stop when you're done.",
    "🧠 Precision in words builds precision in thinking.",
    "📈 Small progress is still progress — 8 minutes closer to mastery.",
    "🔥 Excellence is a habit, not an act.",
    "⭐ Your future self will thank you for this effort.",
    "🚀 Every word mastered is a door unlocked.",
    "💎 Consistency beats talent when talent doesn't work hard.",
    "🎓 Knowledge compounds. Keep building.",
    "🌟 The difference between ordinary and extraordinary is practice.",
    "⏰ You don't have to be great to start, but you have to start to be great.",
    "🎯 Success is the sum of small efforts repeated day in and day out.",
    "💡 Learning is not a sprint, it's a marathon. Pace yourself.",
    "🏆 Champions are made when no one is watching.",
    "🌱 Every expert was once a beginner. Keep growing.",
    "✨ Your only limit is the amount of effort you're willing to give.",
    "🔑 Vocabulary is the key that unlocks the door to comprehension.",
    "🎨 Words are the paint with which you color your thoughts.",
    "⚖️ Discipline is choosing between what you want now and what you want most.",
  ];

  // Handle motivation button click
  const handleMotivationClick = () => {
    const randomMessage = MOTIVATION_MESSAGES[Math.floor(Math.random() * MOTIVATION_MESSAGES.length)];
    setMotivationMessage(randomMessage);
    setShowMotivation(true);

    // Hide after 6 seconds
    setTimeout(() => {
      setShowMotivation(false);
    }, 6000);
  };

  // Handle modal close with animation
  const handleCloseModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setExpandedWord(null);
      setIsModalClosing(false);
    }, 300);
  };

  // Filter words based on search
  const filteredWords = words.filter((word) =>
    word.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show Quiz Mode
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-4 sm:py-8 px-3 sm:px-4">
        <Quiz
          words={words}
          onBack={() => setShowQuiz(false)}
          onQuizComplete={(score) => {
            // Quiz completion handled by recordAnswer callback
            setShowQuiz(false);
          }}
          onRecordAnswer={recordAnswer}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">
            SAT Vocabulary Trainer
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Master {words.length} essential SAT words
          </p>
        </header>

        {/* Progress Bar */}
        <ProgressBar
          learnedWords={progress.totalWordsLearned}
          totalWords={words.length}
        />

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
          <button
            onClick={() => setShowQuiz(true)}
            className="flex-1 sm:flex-none bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            Start Quiz
          </button>
          <button
            onClick={() => setShowDashboard(!showDashboard)}
            className="flex-1 sm:flex-none bg-white text-orange-600 border-2 border-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all hover:scale-105 active:scale-95"
          >
            {showDashboard ? "Hide" : "Show"} Analytics
          </button>
          <button
            onClick={handleMotivationClick}
            className="flex-1 sm:flex-none bg-white text-orange-600 border-2 border-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all hover:scale-105 active:scale-95"
          >
            😩 I'm tired
          </button>
          <button
            onClick={() => window.open("https://forms.gle/SbdTwuxGyP1yndKb6", "_blank")}
            className="flex-1 sm:flex-none bg-white text-orange-600 border-2 border-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all hover:scale-105 active:scale-95"
          >
            💬 Feedback
          </button>
          <button
            onClick={() => {
              if (confirm("Reset all progress? This cannot be undone.")) {
                resetProgress();
              }
            }}
            className="flex-1 sm:flex-none bg-white text-gray-600 border-2 border-gray-300 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all hover:scale-105 active:scale-95"
          >
            Reset Progress
          </button>
        </div>

        {/* Motivation Card */}
        {showMotivation && (
          <div
            className="mb-6 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg shadow-xl p-4 sm:p-6 animate-slideIn"
            style={{
              animation: "slideIn 0.4s ease-out",
            }}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-3xl">💡</div>
              <div className="flex-1">
                <p className="text-base sm:text-lg font-medium leading-relaxed">
                  {motivationMessage}
                </p>
              </div>
              <button
                onClick={() => setShowMotivation(false)}
                className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Dashboard - Error Analytics */}
        {showDashboard && (
          <div
            style={{
              animation: "fadeIn 0.3s ease-out",
            }}
          >
            <Dashboard
              topErrorCategories={topErrorCategories}
              hardestWords={hardestWords}
              totalStats={totalStats}
            />
          </div>
        )}

        {/* Search Bar */}
        <div className="mb-4 sm:mb-6">
          <input
            type="text"
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-base sm:text-lg"
          />
        </div>

        {/* Results count */}
        <div className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600">
          {filteredWords.length === words.length
            ? `Showing all ${words.length} words`
            : `Found ${filteredWords.length} word${
                filteredWords.length !== 1 ? "s" : ""
              }`}
        </div>

        {/* 5-Word Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredWords.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500 text-sm sm:text-base">
              No words found matching &quot;{searchTerm}&quot;
            </div>
          ) : (
            filteredWords.map((word) => {
              const isLearned = isWordLearned(word.word);

              return (
                <div
                  key={word.word}
                  className={`bg-white rounded-lg border-2 overflow-hidden transition-all hover:shadow-lg cursor-pointer hover:scale-105 ${
                    isLearned
                      ? "border-orange-400 bg-orange-50/50"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                  onClick={() => setExpandedWord(word.word)}
                >
                  {/* Word Card - Collapsed View */}
                  <div className="p-3 sm:p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-tight">
                        {word.word}
                      </h3>
                      {isLearned && (
                        <span className="text-orange-600 text-sm flex-shrink-0 ml-1">✓</span>
                      )}
                    </div>

                    {/* Short definition - always visible */}
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                      {word.definition.split(";")[0]}
                    </p>

                    {/* Part of Speech Badge */}
                    {word.partOfSpeech && (
                      <span className="inline-block mt-2 px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded">
                        {word.partOfSpeech}
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal for Word Details */}
        {expandedWord && (
          <div
            className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
              isModalClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={handleCloseModal}
            style={{
              animation: isModalClosing ? "fadeOut 0.3s ease-out" : "fadeIn 0.3s ease-out",
            }}
          >
            <div
              className={`bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ${
                isModalClosing
                  ? "scale-95 opacity-0"
                  : "scale-100 opacity-100"
              }`}
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: isModalClosing
                  ? "modalClose 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)"
                  : "modalOpen 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                ×
              </button>

              {(() => {
                const word = words.find((w) => w.word === expandedWord);
                if (!word) return null;
                const isLearned = isWordLearned(word.word);

                return (
                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-3">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                          {word.word}
                        </h2>
                        {isLearned && (
                          <span className="text-orange-600 text-2xl flex-shrink-0 ml-2">
                            ✓
                          </span>
                        )}
                      </div>
                      {word.partOfSpeech && (
                        <span className="inline-block px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full font-medium">
                          {word.partOfSpeech}
                        </span>
                      )}
                    </div>

                    {/* Definition */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Definition
                      </h3>
                      <p className="text-base sm:text-lg text-gray-800">
                        {word.definition}
                      </p>
                    </div>

                    {/* Russian Translation */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Russian Translation
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700">
                        {word.russian}
                      </p>
                    </div>

                    {/* Example */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        Example
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 italic">
                        {word.example}
                      </p>
                    </div>

                    {/* Tip */}
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                      <h3 className="text-sm font-semibold text-orange-700 uppercase mb-2">
                        Memory Tip
                      </h3>
                      <p className="text-base text-orange-900">{word.tip}</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-8 sm:mt-12 text-center text-gray-500 text-xs sm:text-sm pb-4">
          <p>Click on any word card to see full details</p>
          <p className="mt-2">Good luck with your SAT preparation!</p>
        </footer>
      </div>
    </div>
  );
}
