interface ProgressBarProps {
  learnedWords: number;
  totalWords: number;
}

export default function ProgressBar({ learnedWords, totalWords }: ProgressBarProps) {
  const percentage = totalWords > 0 ? (learnedWords / totalWords) * 100 : 0;
  const remaining = totalWords - learnedWords;

  return (
    <div className="bg-white rounded-lg border-2 border-blue-200 p-4 sm:p-6 mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">Learning Progress</h2>
        <span className="text-sm sm:text-base font-semibold text-blue-600">
          {percentage.toFixed(1)}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 sm:h-6 mb-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        >
          {percentage > 10 && (
            <span className="text-xs font-bold text-white drop-shadow">
              {learnedWords}
            </span>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
        <div className="bg-blue-50 rounded-lg p-2 sm:p-3">
          <div className="text-xl sm:text-2xl font-bold text-blue-600">{totalWords}</div>
          <div className="text-xs sm:text-sm text-gray-600">Total Words</div>
        </div>
        <div className="bg-green-50 rounded-lg p-2 sm:p-3">
          <div className="text-xl sm:text-2xl font-bold text-green-600">{learnedWords}</div>
          <div className="text-xs sm:text-sm text-gray-600">Learned</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-2 sm:p-3">
          <div className="text-xl sm:text-2xl font-bold text-orange-600">{remaining}</div>
          <div className="text-xs sm:text-sm text-gray-600">Remaining</div>
        </div>
      </div>

      {/* Helper Text */}
      <p className="mt-3 text-xs sm:text-sm text-gray-500 text-center">
        A word is &quot;learned&quot; after answering correctly 5+ times in quiz mode
      </p>
    </div>
  );
}
