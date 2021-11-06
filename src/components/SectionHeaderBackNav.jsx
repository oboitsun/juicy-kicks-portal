import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeaderBackNav({ pageName = "" }) {
  return (
    <div className="w-full flex items-center">
      <Link to="/">
        <img className="" src="/assets/header-back-button.svg" alt="back to home" />
      </Link>
      <p className="text-border text-3xl text-white ml-6">{pageName}</p>
    </div>
  );
}
