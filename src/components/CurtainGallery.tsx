

import React from "react";
import "../App.css";


import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.jpg';
import i3 from '../assets/i3.jpg';
import i4 from '../assets/i4.jpg';
import i5 from '../assets/i5.jpg';
import i6 from '../assets/i6.jpg';
import i7 from '../assets/i7.jpg';
import Garland from "./Garland";
const images = [i1, i2, i3, i4, i5, i6, i7];

const CurtainSlider = () => {
  return (
    <div className="curtain-container">
        {/* <Garland/> */}
      <div className="curtain-bar" />
      <div className="image-strip">
        {[...images, ...images].map((img, idx) => (
          <div className="curtain-image-wrapper" key={idx}>
            <div className="rope" />
            <img src={img} alt={`img-${idx}`} className="curtain-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurtainSlider;