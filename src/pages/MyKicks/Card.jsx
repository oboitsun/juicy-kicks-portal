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
          hey
        </div>
      </div>
    </div>
  );
}
