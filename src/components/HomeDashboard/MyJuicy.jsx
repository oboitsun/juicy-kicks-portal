import React from "react";
import { Link } from "react-router-dom";
import "./my-juicy.scss";
export default function MyJuicy() {
  const cards = [
    {
      imgSrc: "assets/cards/pear.png",
      alt: "pear",
    },
    {
      imgSrc: "assets/cards/fig.png",
      alt: "fig",
    },
    {
      imgSrc: "assets/cards/pineapple.png",
      alt: "pineapple",
    },
    {
      imgSrc: "assets/cards/cherry.png",
      alt: "cherry",
    },
  ];
  return (
    <div className="nav-grid-item">
      <div className="flex flex-col justify-between h-full w-full gap-5">
        <div className="relative flex  my-juicy-container w-full h-full flex-grow">
          {cards.map((card, i) => (
            <img
              key={i}
              className={`card card-${i + 1}`}
              src={card.imgSrc}
              alt={card.alt}
            />
          ))}
        </div>

        <Link to="my-kicks">
          <button className="nav-grid-item-button my-juicy">my juicy</button>
        </Link>
      </div>
    </div>
  );
}
