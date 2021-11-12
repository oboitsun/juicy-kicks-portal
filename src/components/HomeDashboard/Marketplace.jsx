import React from "react";
import { Link } from "react-router-dom";

export default function Marketplace() {
  return (
    <div className="nav-grid-item">
      <div className="flex flex-col gap-5 justify-between h-full">
        <div className="w-full h-full">
          <img
            className="h-full object-cover"
            src="assets/marketplace.png"
            alt="marketplace"
          />
        </div>
        <Link to="/marketplace">
          <button className="nav-grid-item-button marketplace">marketplace</button>
        </Link>
      </div>
    </div>
  );
}
