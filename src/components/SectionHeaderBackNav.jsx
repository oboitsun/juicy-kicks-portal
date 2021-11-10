import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeaderBackNav({ pageName = "" }) {
  return (
    <div className="w-full flex items-center justify-between">
      <Link to="/">
        <button className="flex items-center text-white px-4 py-2 leading-none border-2 border-white rounded-lg">
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
      <button className="flex items-center text-white px-4 py-2 leading-none border-2 border-white rounded-lg">
        <img
          className="h-full relative bottom-px"
          src="assets/back-arrow.svg"
          alt="back"
        />
        <span className="ml-2 text-xs font-extrabold uppercase ">back to home</span>
      </button>
    </div>
  );
}
