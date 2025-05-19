


import { useState, useEffect } from 'react';
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";

// const images = [i1, i2, i3, i4];

const images = [
  { src: i1, caption: "Throwback to good times!" },
  { src: i2, caption: "Fun moments!" },
  { src: i3, caption: "Unforgettable day!" },
  { src: i4, caption: "Celebrating together!" },
];

const PhotoSlideshow = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true); // fade-in next image
      }, 500); // match transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mt-12 px-4">
      <div
        className={`transition-opacity duration-500 rounded-3xl shadow-2xl overflow-hidden w-full max-w-3xl ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={images[index].src}
          alt="Birthday Moment"
          className="w-full h-[400px] object-cover"
        />
      </div>
      <p className="mt-4 text-center text-lg text-gray-700 font-medium italic">
        {images[index].caption}
      </p>
    </div>
  );
};

export default PhotoSlideshow;