import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeaderBackNav({ pageName = "" }) {
  return (
    <div className="w-full flex items-center justify-between">
      <Link to="/">
        <button className="nav-button nav-button__back">
          <img
            className="h-full relative bottom-px"
            src="assets/back-arrow.svg"
            alt="back"
          />
          <span className="ml-2 text-xs font-extrabold uppercase ">back to home</span>
        </button>
      </Link>
      <p className="font-black text-[48px]  leading-none text-white uppercase">
        {pageName}
      </p>
      <Link to="/marketplace">
        <button className="nav-button nav-button__buy">
          <img
            className="h-full relative bottom-px"
            src="assets/shopping-bag.svg"
            alt="back"
          />
          <span className="ml-2 text-xs font-extrabold uppercase ">Buy now juicy</span>
        </button>
      </Link>
    </div>
  );
}
