

import React from "react";

interface Props {
  images: string[];
}

const GalleryLayout: React.FC<{ images?: string[] }> = ({ images = [] }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 py-12 px-4">
      <h2 className="text-4xl font-extrabold text-center text-pink-700 mb-12 drop-shadow-lg">
        🎈 Magical Moments
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-64 h-72 bg-white rounded-xl p-3 shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:-rotate-1 animate-float"
          >
            <img
              src={img}
              alt={`Memory ${i}`}
              className="w-full h-full object-cover rounded-xl border-4 border-pink-300 shadow-inner animate-glow"
            />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-pink-600 font-semibold bg-white px-3 py-1 rounded-full shadow mt-2">
              🎁 Memory #{i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryLayout;
