
import React from "react";
import "../App.css";

import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";

const images = [i1, i2, i3, i4, i5];

const Garland = () => {
  return (
    <div className="garland-wrapper overflow-hidden py-6">
      <div className="garland-track flex items-start gap-16">
        {images.map((img, idx) => (
          <div key={idx} className="garland-item flex flex-col items-center">
            <div className="w-1 h-10 bg-black mb-1"></div> {/* hanging string */}
            <img
              src={img}
              alt={`garland-${idx}`}
              className="garland-img shadow-lg rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Garland;