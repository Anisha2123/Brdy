import React, { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import '../App.css';

// ✅ Use direct paths (videos placed in /public)
const videos = ['/friend1.mp4', '/friend2.mp4', '/friend3.mp4'];

const confettiConfigs = [
  { colors: ['#ff69b4', '#ffb6c1', '#db7093'], numberOfPieces: 200 },
  { colors: ['#8a2be2', '#dda0dd', '#ba55d3'], numberOfPieces: 150 },
  { colors: ['#00bfff', '#1e90ff', '#87cefa'], numberOfPieces: 180 },
];

const SurpriseSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideos, setShowVideos] = useState(false);
  const [confettiIndex, setConfettiIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const interval = setInterval(() => {
      setConfettiIndex((prev) => (prev + 1) % confettiConfigs.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex]?.play();
    }
  }, [currentIndex]);

  const handleEnded = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 min-h-[30vh] px-4 relative overflow-hidden">
      {!showVideos && (
        <button
          onClick={() => setShowVideos(true)}
          className="bg-gradient-to-r from-pink-500 via-red-400 to-purple-500 text-white px-8 py-4 rounded-full text-2xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 animate-pulse"
        >
          💌 Tap to Reveal Birthday Wishes from Your Friends 🎥
        </button>
      )}

      {showVideos && (
        <>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            colors={confettiConfigs[confettiIndex].colors}
            numberOfPieces={confettiConfigs[confettiIndex].numberOfPieces}
            recycle={true}
          />
          <h2 className="text-4xl font-bold text-purple-700 mb-10 mt-4 animate-bounce">
            🎉 Birthday Surprise 🎉
          </h2>
          <div className="flex overflow-x-auto gap-6 custom-scroll transition-all duration-1000 ease-in-out pb-10">
            {videos.map((src, i) => (
              <video
                key={i}
                src={src}
                autoPlay
                muted
                loop
                ref={(el) => (videoRefs.current[i] = el)}
                onEnded={handleEnded}
                className={`rounded-xl shadow-2xl transition-all duration-700 ${
                  i === currentIndex
                    ? 'scale-110 border-4 border-pink-400 shadow-pink-500'
                    : 'opacity-50 scale-90 grayscale'
                }`}
                controls={i === currentIndex}
                style={{
                  width: i === currentIndex ? '500px' : '300px',
                  height: 'auto',
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SurpriseSection;
