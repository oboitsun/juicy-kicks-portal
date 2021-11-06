import React from "react";
import MarketplaceCard from "../../components/MarketplaceCard";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
const cards = [
  {
    id: 1,
    name: " yellow egg",
    rarity: "common",
    text: "common",
    imgSrc: "assets/nfts/nft-egg-1.png",
    price: 10,
  },
  {
    id: 2,
    name: "orange dino",
    rarity: "uncommon",
    text: "uncommon",
    imgSrc: "assets/nfts/nft-dino-1.png",
    price: 10,
  },
  {
    id: 3,
    name: "egg",
    rarity: "rare",
    text: "rare",
    imgSrc: "assets/nfts/nft-egg-1.png",
    price: 12,
  },
  {
    id: 4,
    name: "egg",
    rarity: "rare",
    text: "rare",
    imgSrc: "assets/nfts/nft-dino-1.png",
    price: 22,
  },
  {
    id: 5,
    name: " oraange egg",
    rarity: "ultraRare",
    text: "ultra rare",
    imgSrc: "assets/nfts/nft-egg-1.png",
    price: 5,
  },
];
export default function Marketplace() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center pb-6 relative">
        <SectionHeaderBackNav pageName="Marketplace" />
        <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-darkTurf"></div>
      </div>
      <div className="grid grid-cols-4 gap-x-5 gap-y-10 pt-10">
        {cards.map((card) => (
          <MarketplaceCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
