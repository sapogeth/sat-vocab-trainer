"use client";

import { useEffect, useState } from "react";

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

const INTERVAL_MS = 480000; // 8 minutes
const TOAST_DURATION_MS = 6000; // 6 seconds
const STORAGE_KEY = "sat_vocab_motivation_enabled";
const LAST_NOTIFICATION_KEY = "sat_vocab_last_notification";

export default function MotivationToast() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);

  // Load enabled state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      setIsEnabled(saved === "true");
    }
  }, []);

  // Show notification
  const showNotification = () => {
    if (!isEnabled) return;

    // Get random message
    const randomMessage =
      MOTIVATION_MESSAGES[Math.floor(Math.random() * MOTIVATION_MESSAGES.length)];
    setMessage(randomMessage);
    setShowToast(true);

    // Store timestamp
    localStorage.setItem(LAST_NOTIFICATION_KEY, Date.now().toString());

    // Hide after duration
    setTimeout(() => {
      setShowToast(false);
    }, TOAST_DURATION_MS);
  };

  // Setup interval for notifications
  useEffect(() => {
    if (!isEnabled) return;

    // Check if we should show a notification on mount
    const lastNotification = localStorage.getItem(LAST_NOTIFICATION_KEY);
    const now = Date.now();

    if (lastNotification) {
      const timeSinceLastNotification = now - parseInt(lastNotification);

      // If more than 8 minutes have passed, show immediately
      if (timeSinceLastNotification >= INTERVAL_MS) {
        showNotification();
      } else {
        // Schedule next notification for remaining time
        const remainingTime = INTERVAL_MS - timeSinceLastNotification;
        const timeoutId = setTimeout(() => {
          showNotification();
        }, remainingTime);

        // Setup regular interval after first notification
        const intervalId = setInterval(() => {
          showNotification();
        }, INTERVAL_MS);

        return () => {
          clearTimeout(timeoutId);
          clearInterval(intervalId);
        };
      }
    } else {
      // First time - show after 8 minutes
      const timeoutId = setTimeout(() => {
        showNotification();
      }, INTERVAL_MS);

      // Setup regular interval
      const intervalId = setInterval(() => {
        showNotification();
      }, INTERVAL_MS);

      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }

    // Setup regular interval
    const intervalId = setInterval(() => {
      showNotification();
    }, INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
    };
  }, [isEnabled]);

  // Toggle enabled state
  const toggleEnabled = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    localStorage.setItem(STORAGE_KEY, newState.toString());

    // Hide toast if disabling
    if (!newState) {
      setShowToast(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleEnabled}
        className={`fixed bottom-4 left-4 z-50 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95 shadow-lg ${
          isEnabled
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-400 text-white hover:bg-gray-500"
        }`}
        title={isEnabled ? "Disable motivational notifications" : "Enable motivational notifications"}
      >
        🔔 Motivation {isEnabled ? "On" : "Off"}
      </button>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="fixed bottom-4 right-4 z-50 max-w-sm animate-slideIn"
          style={{
            animation: showToast ? "slideIn 0.4s ease-out" : "slideOut 0.4s ease-out",
          }}
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-2xl p-4 border border-indigo-300">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-2xl">💡</div>
              <div className="flex-1">
                <p className="text-sm sm:text-base font-medium leading-relaxed">
                  {message}
                </p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4"
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
        </div>
      )}
    </>
  );
}
