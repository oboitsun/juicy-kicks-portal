import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
export default function LoginFooter({ login = false, ...props }) {
  const currentYear = new Date();
  return (
    <div className="flex items-center justify-center mx-auto gap-10 uppercase text-white text-xl">
      <Socials />
      <img
        className="w-auto block"
        src="../../assets/dfinity-logo.png"
        alt="dfinity logo"
      />

      <p className="">Juicy kicks {currentYear.getFullYear()}</p>
    </div>
  );
}
