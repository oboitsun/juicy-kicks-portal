import React from "react";
import Socials from "./Socials";
const links = [
  { text: "about us", href: "/" },
  { text: "contact us", href: "/" },
];
export default function LoginHeader() {
  return (
    <div className="max-w-[1080px] mx-auto flex items-center justify-between relative">
      <div className="flex gap-10">
        {links.map((link) => (
          <a key={link.text} className="text-white uppercase text-xl" href={link.href}>
            {link.text}
          </a>
        ))}
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
