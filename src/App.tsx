

// src/App.tsx
import React from 'react';
import "./App.css";


// import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import Gallery from './components/Gallery';
import Greeting from './components/Greeting';
import Letter from './components/Letter';
import Quiz from './components/Quiz';
import GiftBox from './components/GiftBox';
import PhotoSlideshow from './components/PhotoSlideshow';
import FireworksEffect from './components/FireworksEffect';
// import WishesBoard from './components/WishesBoard';
import SurpriseSection from './components/SurpriseSection';
import CurtainGallery from './components/CurtainGallery';
import CarouselLayout from './components/CarouselLayout';
import GalleryLayout from './components/GalleryLayout';
import ColumnsLayout from './components/ColumnsLayout';
// import BirthdayGallery from './components/Gallery';
import BirthdayGallery from './components/BirthdayGallery';
// import i1 from "../assets/i1.jpg";
import i2 from "./assets/i2.jpg";
import i3 from "./assets/i3.jpg";
import i4 from "./assets/i4.jpg";
import i5 from "./assets/i5.jpg";
import i6 from "./assets/i6.jpg";
import i7 from "./assets/i7.jpg";
import i8 from "./assets/i8.jpg";
import i9 from "./assets/i9.jpg";
import i10 from "./assets/i10.jpg";
import i11 from "./assets/i11.jpg";
import i12 from "./assets/i12.jpg";
import i13 from "./assets/i13.jpg";
import i14 from "./assets/i14.jpg";
import i15 from "./assets/i15.jpg";
import i16 from "./assets/i16.jpg";
import i17 from "./assets/i17.jpg";
import i18 from "./assets/i18.jpg";
import i19 from "./assets/i19.jpg";
import i20 from "./assets/i20.jpg";
import i21 from "./assets/i21.jpg";
import i22 from "./assets/i22.jpg";
import i23 from "./assets/i23.jpg";
const App: React.FC = () => {
  // const { width, height } = useWindowSize();


const childhoodImages = [i16, i17, i18, i19, i20, i21];
const carouselImages = [i11, i12, i13, i14, i15, i22, i23];
const galleryImages = [i6, i7, i9, i10];
  return (

    
    <div className="text-center p-6 bg-pink-50 min-h-screen">
    
{/* <BirthdayGallery /> */}
       <Greeting />
       {/* <FireworksEffect /> */}
        <CurtainGallery />
      <Letter />
      {/* <Gallery /> */}
          <CarouselLayout images={carouselImages} />
      <Quiz />
      
      {/* <GiftBox /> */}
        <GalleryLayout images={galleryImages} />
      {/* <WishesBoard /> */}
      <SurpriseSection />
        <ColumnsLayout images={childhoodImages} />
    </div>
  );
};

export default App;