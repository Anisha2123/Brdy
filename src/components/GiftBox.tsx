

import { useState } from 'react';

const GiftBox = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex justify-center items-center mt-12">
      {!opened ? (
        <button
          onClick={() => setOpened(true)}
          className="bg-pink-500 text-white px-6 py-4 rounded-lg text-lg shadow-xl hover:bg-pink-600 transition transform hover:scale-105"
        >
          🎁 Click to Open Your Gift
        </button>
      ) : (
        <div className="text-center animate-fadeInSlow">
          <h3 className="text-3xl font-bold text-green-600">🎊 Surprise! 🎊</h3>
          <p className="text-lg mt-2 text-gray-700">
            You’ve unlocked a year full of happiness and amazing memories ahead!
          </p>
        </div>
      )}
    </div>
  );
};

export default GiftBox;
