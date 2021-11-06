import React from "react";
import Socials from "./Socials";
const links = [
  { text: "home", href: "/" },
  { text: "about", href: "/" },
  { text: "team", href: "/" },
  { text: "roadmap", href: "/" },
  { text: "market", href: "/" },
];
export default function LoginHeader() {
  return (
    <div className="max-w-[1080px] mx-auto flex items-center justify-between">
      <div className="flex gap-10">
        {links.map((link) => (
          <a key={link.text} className="text-white uppercase text-xl" href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
      <Socials />
    </div>
  );
}
