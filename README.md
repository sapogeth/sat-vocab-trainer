# SAT Vocabulary Trainer

A modern, interactive web application for mastering 742 essential SAT words with intelligent progress tracking, error analytics, and motivational features.

## Features

### Core Functionality
- **742 SAT Words** - Comprehensive vocabulary database with definitions, Russian translations, examples, and usage tips
- **Interactive Quiz Mode** - 10-question quizzes with controlled randomization (no word repetition)
- **Smart Progress Tracking** - Words marked as "learned" after 5+ correct answers
- **Error Analytics Dashboard** - View top 5 error categories and top 10 hardest words
- **Searchable Word List** - Fast search across all vocabulary
- **5-Word Responsive Grid** - Optimized layout for desktop, tablet, and mobile

### UX Enhancements
- **Custom Cursor** - Glowing cursor with hover effects (desktop only)
- **Motivational Notifications** - Smart toast messages every 8 minutes to keep you focused
- **Smooth Animations** - macOS-style modal animations for a polished experience
- **localStorage Persistence** - All progress saved locally in your browser

## Tech Stack

- **Next.js 15** with App Router and Turbopack
- **TypeScript** for type safety
- **TailwindCSS** for responsive styling
- **React Hooks** for state management
- **localStorage** for data persistence

## Quick Start

### Installation

```bash
# Clone the repository
cd sat-vocab-trainer

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
sat-vocab-trainer/
├── app/
│   ├── layout.tsx          # Root layout with CustomCursor & MotivationToast
│   ├── page.tsx            # Main homepage with 5-word grid & modals
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Quiz.tsx            # Interactive quiz component
│   ├── ProgressBar.tsx     # Visual progress indicator
│   ├── Dashboard.tsx       # Error analytics & statistics
│   ├── CustomCursor.tsx    # Custom cursor UX feature
│   └── MotivationToast.tsx # Motivational notification system
├── hooks/
│   ├── useProgress.ts      # Progress tracking logic
│   └── useErrorAnalytics.ts # Error analysis logic
├── data/
│   └── words.ts            # 742 SAT words database
└── types/
    └── word.ts             # TypeScript interfaces
```

## Usage Guide

### Homepage
1. **Browse Words** - Scroll through the 5-word grid layout
2. **Search** - Use the search bar to filter words
3. **View Details** - Click any word to open a detailed modal with definition, translation, example, and tip
4. **Close Modal** - Click outside the modal, press the X button, or press Escape

### Quiz Mode
1. **Start Quiz** - Click the "Start Quiz" button
2. **Answer Questions** - Choose from 4 multiple-choice options
3. **Get Feedback** - See immediate correct/incorrect feedback
4. **Track Progress** - Words are marked as "learned" after 5+ correct answers
5. **Complete Quiz** - View your score and return to the homepage

### Dashboard
1. **View Statistics** - See total words, learned count, accuracy rate
2. **Top Error Categories** - Identify which word categories need more practice
3. **Hardest Words** - Focus on the 10 most challenging words

### Motivational Notifications
- **Toggle On/Off** - Use the button in the bottom-left corner
- **Timing** - Notifications appear every 8 minutes
- **Smart Resume** - System remembers your last notification time

## Key Features Explained

### Progress Tracking
- Words are tracked individually with correct/incorrect counts
- A word is "learned" after answering correctly 5+ times in quizzes
- All progress persists in localStorage (survives page refresh)
- Reset progress anytime from the Dashboard

### Controlled Quiz Randomization
- Each quiz shows 10 unique words
- Words don't repeat across multiple quizzes until the pool is exhausted
- Once all words are used, the pool resets automatically
- Ensures comprehensive vocabulary coverage

### Error Analytics
- Tracks errors by semantic category (e.g., verbs, adjectives)
- Calculates error rates for each category
- Identifies your 10 hardest words based on error rate
- Helps focus study efforts on weak areas

### Custom Cursor (Desktop Only)
- Small glowing circle that follows your mouse
- Enlarges when hovering over interactive elements
- Automatically disabled on touch devices
- Uses hardware acceleration for smooth performance

### Motivational System
- 10 unique motivational messages rotate randomly
- Appears every 8 minutes to maintain focus
- User can toggle on/off with persistent preference
- Auto-dismisses after 6 seconds

## Customization

### Change Word Database
Edit [data/words.ts](data/words.ts) to add/modify vocabulary words.

### Adjust Learned Threshold
In [hooks/useProgress.ts:82](hooks/useProgress.ts#L82), change the threshold value:
```typescript
return wordProg ? wordProg.correctCount >= 5 : false; // Change 5 to desired value
```

### Modify Notification Interval
In [components/MotivationToast.tsx:18](components/MotivationToast.tsx#L18), change the interval:
```typescript
const INTERVAL_MS = 480000; // Change to desired milliseconds
```

### Customize Colors
The app uses Tailwind's `indigo` and `purple` color schemes. Update component classes to change colors globally.

## Performance Optimizations

- **Efficient Rendering** - React hooks minimize re-renders
- **Hardware Acceleration** - CSS transforms for smooth animations
- **localStorage Caching** - Reduces computation on repeat visits
- **Responsive Images** - Optimized for all screen sizes
- **Code Splitting** - Next.js automatically splits code for faster loads

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Data Privacy

All data is stored locally in your browser's localStorage. No data is sent to external servers. Your progress is private and only accessible on your device.

## Known Issues

- Custom cursor may flicker briefly on page load (visual only, doesn't affect functionality)
- localStorage has a ~5-10MB limit per domain (sufficient for this app)

## Future Enhancements

- Export progress to CSV/JSON
- Spaced repetition algorithm (SRS) for optimal review timing
- Audio pronunciations
- Flashcard mode
- Dark mode toggle
- Multi-language support beyond Russian

## Documentation

For comprehensive technical documentation, see [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md).

For detailed UX feature documentation, see [UX_FEATURES.md](UX_FEATURES.md).

## License

MIT License - Feel free to use this project for personal or educational purposes.

## Support

If you encounter issues or have questions:
1. Check [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md) for detailed technical info
2. Review the code comments in each component
3. Ensure you're using Node.js 18+ and pnpm

---

**Built with Next.js 15 + TypeScript + TailwindCSS**

Happy learning! Master those 742 SAT words and ace your exam.
