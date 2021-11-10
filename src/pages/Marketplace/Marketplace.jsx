import React, { useState } from "react";
import Dropdown from "../../components/Dropdown";
import MarketplaceCard from "../../components/MarketplaceCard";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import { cards } from "./db";
import Pagination from "./Pagination";
const sortBy = [
  {
    value: "rarity",
    label: "rarity",
  },
];
const types = [
  {
    value: "all",
    label: "All",
  },
  { value: "egg", label: "Eggs" },
  { value: "dino", label: "Dinos" },
];
const rarities = [
  { value: "all", label: "All" },
  { value: "common", label: "Common" },
  { value: "uncommon", label: "Uncommon" },
  { value: "rare", label: "Rare" },
  { value: "ultraRare", label: "Ultra Rare" },
];
export default function Marketplace() {
  const [type, setType] = useState("all");
  const [rarity, setRarity] = useState("all");

  const sortedFiltered = cards
    .filter((card) => card.type === type || (type === "all" && card))
    .filter((card) => card.rarity === rarity || (rarity === "all" && card));
  const [page, setPage] = useState(1);
  const perPage = 10;
  const paginated = sortedFiltered.slice(page * perPage - perPage, page * perPage);
  return (
    <div className="w-full ">
      <SectionHeaderBackNav pageName="Marketplace" />

      <div className="w-full flex justify-between items-center pb-6 relative">
        <div className="flex w-full h-full items-center  flex-grow">
          <Dropdown options={sortBy} disabled heading={"Sort by"} />
          <div className="h-10 w-1 bg-darkTurf mr-3 flex-shrink-0"></div>
          <Dropdown
            setStateFunc={setType}
            value={types[types.findIndex((el) => el.value === type)]}
            options={types}
            heading={"Show"}
          />
          <div className="h-10 w-1 bg-darkTurf mr-3 flex-shrink-0"></div>
          <Dropdown
            setStateFunc={setRarity}
            value={rarities[rarities.findIndex((el) => el.value === rarity)]}
            options={rarities}
            heading={"Rarity"}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-darkTurf"></div>
      </div>

      {paginated.length > 0 ? (
        <div className="grid grid-cols-4 gap-x-5 gap-y-10 pt-10">
          {paginated.map((card, i) => (
            <MarketplaceCard key={i} card={card} />
          ))}
        </div>
      ) : (
        <div className="py-10 flex flex-col items-center">
          <p className="text-white text-4xl text-center py-10">
            Sorry no NFTs matching your filter options :(
          </p>
          <button
            onClick={() => {
              setType("all");
              setRarity("all");
            }}
            className="text-yellow text-2xl"
          >
            Clear filters
          </button>
        </div>
      )}
      <div className="flex">
        <Pagination
          perPage={perPage}
          total={cards.length}
          currentPage={page}
          setCurrentPage={setPage}
        />
      </div>
    </div>
  );
}
