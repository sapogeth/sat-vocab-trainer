import { CategoryError, HardestWord } from '@/hooks/useErrorAnalytics';

interface DashboardProps {
  topErrorCategories: CategoryError[];
  hardestWords: HardestWord[];
  totalStats: {
    totalCorrect: number;
    totalIncorrect: number;
    totalAttempts: number;
    accuracy: number;
  };
}

export default function Dashboard({
  topErrorCategories,
  hardestWords,
  totalStats,
}: DashboardProps) {
  if (totalStats.totalAttempts === 0) {
    return (
      <div className="bg-white rounded-lg border-2 border-orange-200 p-6 mb-6 shadow-md">
        <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">Error Analytics</h2>
        <p className="text-gray-600 text-center py-8">
          Start taking quizzes to see your error analytics and identify areas for improvement!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border-2 border-orange-200 p-4 sm:p-6 mb-6 shadow-md">
      <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">Error Analytics</h2>

      {/* Overall Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
        <div className="bg-orange-50 rounded-lg p-3 text-center border border-orange-200">
          <div className="text-xl sm:text-2xl font-bold text-orange-600">
            {totalStats.totalAttempts}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Total Attempts</div>
        </div>
        <div className="bg-white rounded-lg p-3 text-center border-2 border-orange-500">
          <div className="text-xl sm:text-2xl font-bold text-orange-600">
            {totalStats.totalCorrect}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Correct</div>
        </div>
        <div className="bg-red-50 rounded-lg p-3 text-center border border-red-200">
          <div className="text-xl sm:text-2xl font-bold text-red-600">
            {totalStats.totalIncorrect}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Incorrect</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
          <div className="text-xl sm:text-2xl font-bold text-gray-700">
            {totalStats.accuracy.toFixed(1)}%
          </div>
          <div className="text-xs sm:text-sm text-gray-600">Accuracy</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Top 5 Error Categories */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
            Top 5 Categories with Most Mistakes
          </h3>
          {topErrorCategories.length === 0 ? (
            <p className="text-gray-500 text-sm">No errors recorded yet</p>
          ) : (
            <div className="space-y-2">
              {topErrorCategories.map((cat, index) => (
                <div
                  key={cat.category}
                  className="bg-white rounded-lg p-3 border-2 border-orange-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-orange-600">
                        #{index + 1}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-gray-800 capitalize">
                        {cat.category}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-red-600 font-medium">
                      {cat.errorCount} errors
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                      style={{ width: `${Math.min(cat.errorRate, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Error rate: {cat.errorRate.toFixed(1)}% ({cat.totalAttempts} attempts)
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top 10 Hardest Words */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
            Top 10 Hardest Words
          </h3>
          {hardestWords.length === 0 ? (
            <p className="text-gray-500 text-sm">No errors recorded yet</p>
          ) : (
            <div className="space-y-2">
              {hardestWords.map((word, index) => (
                <div
                  key={word.word}
                  className="bg-white rounded-lg p-3 border-2 border-orange-200 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-orange-600">
                        #{index + 1}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-gray-800">
                        {word.word}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="text-red-600 font-medium">{word.incorrectCount}✗</span>
                      {' / '}
                      <span className="text-orange-600 font-medium">{word.correctCount}✓</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                      style={{ width: `${Math.min(word.errorRate, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Error rate: {word.errorRate.toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
