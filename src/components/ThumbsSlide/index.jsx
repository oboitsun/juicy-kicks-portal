import React from "react";
import "./thumbs-slide.scss";
export default function ThumbSlide({ slide, active = false, ...props }) {
  return (
    <div
      {...props}
      className={`cursor-pointer flex flex-col justify-between h-full ${
        active ? "active" : ""
      }`}
    >
      <div className="slide-wrapper thumbs h-full">
        <img className="slide-bg" src="../../assets/slider1-bg.png" alt="bg" />
        <img className="slide-pic" src={slide.pic} alt={slide.name} />
      </div>
      <div className=" flex flex-col items-center pt-2 bio-wrapper">
        <p className="text-border text-sm text-white">{slide.name}</p>
        <div className="relative -top-1">
          <img src="../../assets/age-pic.png" alt="age" />
          <span className="slide-age">{slide.age}</span>
        </div>
      </div>
    </div>
  );
}
