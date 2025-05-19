


import React from "react";
import ColumnsLayout from "./ColumnsLayout";
import CarouselLayout from "./CarouselLayout";
import GalleryLayout from "./GalleryLayout";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";
import i10 from "../assets/i10.jpg";
import i11 from "../assets/i11.jpg";
import i12 from "../assets/i12.jpg";
import i13 from "../assets/i13.jpg";
import i14 from "../assets/i14.jpg";
import i15 from "../assets/i15.jpg";
import i16 from "../assets/i16.jpg";
import i17 from "../assets/i17.jpg";
import i18 from "../assets/i18.jpg";
import i19 from "../assets/i19.jpg";
import i20 from "../assets/i20.jpg";
import i21 from "../assets/i21.jpg";
import i22 from "../assets/i22.jpg";
import i23 from "../assets/i23.jpg";

const sets = [
  { title: "💕 Childhood Vibes", images: [i16, i17, i18, i19, i20,i21], layout: "columns" },
  { title: "", images: [i11, i12, i13, i14, i15, i22, i23], layout: "carousel" },
  { title: "", images: [i6, i7, i9, i10], layout: "gallery" },
];

const BirthdayGallery: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-pink-50 py-10 px-4">
        
      {sets.map((set, idx) => (
        
        <div key={idx} className="mb-16">
          {set.title && (
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">{set.title}</h2>
          )}

          {set.layout === "columns" && <ColumnsLayout images={set.images} />}
          {set.layout === "carousel" && <CarouselLayout images={set.images} />}
          {set.layout === "gallery" && <GalleryLayout images={set.images} />}
        </div>
      ))}
    </div>
  );
};

export default BirthdayGallery;
