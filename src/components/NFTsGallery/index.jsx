import { useState } from "react";
import ThumbsSlide from "../../components/ThumbsSlide/";
import MainSlide from "../../components/MainSlide/";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import StoreButton from "../../components/StoreButton";
import "./nft-gallery.scss";

export default function NFTsGallery({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="nft-gallery-page">
      <div className="grid grid-cols-2 gap-10 auto-rows-max h-full flex-grow">
        <div className="w-full h-auto relative">
          <SectionHeaderBackNav pageName="My Dino" />
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-darkTurf"></div>
        </div>
        <StoreButton />
        <div className="w-full  flex-grow  gallery auto-rows-min grid  grid-cols-4 gap-x-5 gap-y-6 max-h-[572px] overflow-y-auto">
          {slides.map((slide, i) => (
            <ThumbsSlide
              onClick={() => {
                setCurrentSlide(i);
              }}
              key={i}
              slide={slide}
              active={i === currentSlide}
            />
          ))}
        </div>
        <div className="picture pb-[100%] relative">
          <MainSlide slide={slides[currentSlide]} bg />
        </div>
      </div>
    </div>
  );
}
