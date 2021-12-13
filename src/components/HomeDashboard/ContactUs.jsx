import React from "react";

export default function ContactUs() {
  return (
    <div className="nav-grid-item contact">
      <div className="flex flex-col gap-5">
        <div className="faq relative w-full h-full flex-grow">
          <img className="w-full " src="assets/faq.png" alt="faq" />
          <p className="text-lime text-7xl font-bold abs-centering">?</p>
        </div>
        <button className="nav-grid-item-button contact-us">contact us</button>
      </div>
    </div>
  );
}
