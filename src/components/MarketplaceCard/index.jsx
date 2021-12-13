import React from "react";
import "./marketplace-card.scss";
import RarityButton from "./RarityButton";
export default function MarketplaceCard({ card }) {
  const rarityColors = {
    common: "#6FCD93",
    uncommon: "#61C8F7",
    rare: "#D88535",
    ultraRare: "#F0CB64",
  };
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full relative">
        <div
          style={{ background: rarityColors[card.rarity] }}
          className="absolute top-5 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-white  text-xs border-4 border-myBlack min-w-[70px] text-center"
        >
          {card.text}
        </div>
        <img className="w-full" src={card.imgSrc} alt="nft-card" />
      </div>
      <div className="w-full flex items-center text-2xl py-1 justify-between px-1">
        <p className="text-border text-white">{card.name}</p>
        <p className="text-yellow text-border">{card.price} ICP</p>
      </div>
      <a className="w-full block" href="/">
        <img className="w-full" src="assets/buy-now.svg" alt="buy now" />
      </a>
    </div>
  );
}
