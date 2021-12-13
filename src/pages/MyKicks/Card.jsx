import React, { useState } from "react";

export default function Card({ slide }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="card-container"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <div className="card-body">
        <img
          className={`card-side side-front  ${hovered ? "side-front-hovered" : ""}`}
          src={slide.imgSrc}
          alt="slide"
        />
        <img className="w-full front opacity-0 z-0" src={slide.imgSrc} alt="slide" />
        <div className={`card-side side-back ${hovered ? "side-back-hovered" : ""}`}>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={slide.imgSrc}
            alt="slide"
          />
          <div className="relative z-10 flex flex-col gap-2.5 justify-center h-full">
            <button className="side-button">List now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
