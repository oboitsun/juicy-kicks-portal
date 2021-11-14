import React from "react";
import { Link } from "react-router-dom";
import { slides } from "../../pages/Marketplace/db";
import "./marketplace.scss";
export default function Marketplace() {
  return (
    <div className="nav-grid-item">
      <div className="flex flex-col gap-5 justify-between h-full">
        <div className="w-full h-full relative overflow-hidden">
          <div className="   market-grid">
            {slides.map((card, i) => (
              <div key={i} className="w-full h-auto">
                <img className="w-full h-auto" src={card.imgSrc} alt={card.character} />
              </div>
            ))}
          </div>
        </div>
        <Link to="/marketplace">
          <button className="nav-grid-item-button marketplace">marketplace</button>
        </Link>
      </div>
    </div>
  );
}
