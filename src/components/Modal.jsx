import React from "react";
import ContactUs from "./ContactUs/ContactUs";

export default function Modal({ showModal, setShowModal }) {
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center transition-all ${
        showModal ? "z-30 opacity-100" : "z-0 opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={() => {
          setShowModal(false);
        }}
        className="backdrop absolute w-full h-full top-0 left-0 bg-black/70"
      ></div>
      <div className="relative z-30 w-3/4 max-w-lg bg-turf rounded-[20px] p-6">
        <div className="flex items-center justify-between">
          <p className="text-border text-white text-3xl">
            Contact <span className="text-yellow ml-1.5"> Us</span>
          </p>
          <img
            onClick={() => {
              setShowModal(false);
            }}
            className="block w-auto"
            src="assets/close-icon.svg"
            alt="close"
          />
        </div>
        <ContactUs />
      </div>
    </div>
  );
}
