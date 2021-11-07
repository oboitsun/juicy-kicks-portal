import React from "react";
import { Link } from "react-router-dom";

export default function LoginFooter({ login = false, ...props }) {
  return (
    <div className="flex items-center justify-center mx-auto gap-10 uppercase text-white text-xl">
      <img
        className="w-auto block"
        src="../../assets/dfinity-logo.png"
        alt="dfinity logo"
      />

      {!login ? (
        <Link to="/help">
          <button className="px-6 py-4 leading-none bg-myBlack rounded-full">
            need help ?
          </button>
        </Link>
      ) : (
        <button {...props} className="px-6 py-4 leading-none bg-myBlack rounded-full">
          need help ?
        </button>
      )}
      <p className="">Dino world</p>
    </div>
  );
}
