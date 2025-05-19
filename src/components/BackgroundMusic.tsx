


import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playMusic = () => {
      audioRef.current?.play().catch(() => {});
    };
    window.addEventListener('click', playMusic, { once: true });
    return () => window.removeEventListener('click', playMusic);
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/happy-birthday.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusic;
