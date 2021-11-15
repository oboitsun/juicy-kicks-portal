import React from "react";
import { useDispatch } from "react-redux";
import { setShowModal } from "../reducers/uiReducer";
import Socials from "./Socials";

export default function LoginHeader() {
  const dispatch = useDispatch();
  const links = [
    { text: "Home", href: "https://juicy-kicks.vercel.app" },
    {
      text: "contact us",
      onClick: () => {
        dispatch(setShowModal(true));
      },
    },
  ];
  return (
    <div className="max-w-[1080px] mx-auto flex items-center justify-between relative">
      <div className="flex gap-10">
        {links.map((link) =>
          link.text === "Home" ? (
            <a key={link.text} className="text-white uppercase text-xl" href={link.href}>
              {link.text}
            </a>
          ) : (
            <button key={link.text} className="text-white uppercase text-xl" {...link}>
              {link.text}
            </button>
          )
        )}
      </div>
      <img
        className="w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute"
        src="assets/logo.png"
        alt="Logo"
      />
      <Socials />
    </div>
  );
}
