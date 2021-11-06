import React from "react";

export default function Banner() {
  return (
    <div className="dashboard-banner col-span-2">
      <img className="eggs-banner" src="../../assets/eggs-banner.png" alt="eggs banner" />
      <div className="w-full leading-[0.8]  uppercase flex flex-col justify-center text-yellow">
        <p className="text-[93px]">new </p>
        <p className="text-[57px] text-white">unique </p>
        <p className="text-[32px] leading-none">eggs part #2</p>
      </div>
    </div>
  );
}
