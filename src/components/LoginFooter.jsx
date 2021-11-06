import React from "react";

export default function LoginFooter() {
  return (
    <div className="flex items-center justify-center mx-auto gap-10 uppercase text-white text-xl">
      <img
        className="w-auto block"
        src="../../assets/dfinity-logo.png"
        alt="dfinity logo"
      />
      <button className="px-6 py-4 leading-none bg-myBlack rounded-full">
        need help ?
      </button>
      <p className="">Dino world</p>
    </div>
  );
}
