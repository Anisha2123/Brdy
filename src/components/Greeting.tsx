

import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useEffect, useState } from 'react';

const emojis = ["🎉", "🎂", "🥳", "🎈", "🍰", "🎁"];

const EmojiRain = () => {
  const [emojiList, setEmojiList] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiList((prev) => [...prev, emojis[Math.floor(Math.random() * emojis.length)]]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {emojiList.map((emoji, index) => (
        <div
          key={index}
          className="absolute text-3xl animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

const Greeting = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-200 text-center px-4 overflow-hidden">
      <Confetti width={width} height={height} numberOfPieces={250} />
      <EmojiRain />

      <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 drop-shadow-glow animate-bounce mb-4">
        🎉 Happy Birthday Anshuman! 🎂
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 bg-white/70 px-6 py-4 rounded-xl shadow-lg">
        Wishing you a day full of laughter, joy, cake, and all things amazing. 🥳🎈
      </p>

      <p className="mt-6 text-lg italic text-purple-700 animate-fadeInSlow">
        "You’re not getting older, just more legendary!"
      </p>
    </div>
  );
};

export default Greeting;
