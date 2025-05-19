


import React from "react";

interface Props {
  images: string[];
}

const CarouselLayout: React.FC<{ images?: string[] }> = ({ images = [] }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative py-10 bg-gradient-to-b from-pink-50 to-yellow-100">
      <h3 className="text-3xl font-bold text-center text-rose-500 mb-8">🎈 Birthday Moments 🎈</h3>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {images.map((img, i) => {
          const rotate = ['-rotate-3', 'rotate-2', '-rotate-6', 'rotate-1', 'rotate-3'];
          return (
            <div
              key={i}
              className={`bg-white p-3 rounded-lg shadow-xl w-52 h-auto transform ${rotate[i % rotate.length]} hover:scale-105 transition-all duration-300`}
            >
              <img
                src={img}
                alt={`Memory ${i}`}
                className="rounded-md w-full object-cover"
              />
              <p className="text-center text-xs mt-2 text-rose-500">📸 Memory #{i + 1}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default CarouselLayout;
