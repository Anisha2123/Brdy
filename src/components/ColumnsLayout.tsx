import React from "react";

const ColumnsLayout: React.FC<{ images?: string[] }> = ({ images = [] }) => {
  if (!images.length) return null;

  return (
    <div className="columns-2 md:columns-3 gap-4 space-y-4 h-max">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Memory ${i}`}
          className="w-full rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 border-2 border-white"
        />
      ))}
    </div>
  );
};

export default ColumnsLayout;
