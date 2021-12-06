import React from "react";
import "./home-header.scss";
import { useDispatch } from "react-redux";
import { setUser, setShowModal } from "../../reducers/uiReducer";
import { Link } from "react-router-dom";
export default function HomeHeader() {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setUser(null));
  };
  const links = [
    { text: "home", href: "https://www.juicykicks.io" },
    {
      text: "contact us",
      onClick: () => {
        dispatch(setShowModal(true));
      },
    },
  ];
  return (
    <div className="home-header">
      <div className="flex gap-10">
        {links.map((link, i) => (
          <a key={link.text} className="text-white uppercase text-xl " {...link}>
            {link.text}
          </a>
        ))}
      </div>
      <img
        className="w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute"
        src="assets/logo.png"
        alt="Logo"
      />
      <div className="text-white flex gap-6 items-center font-extrabold  uppercase">
        <p className="text-xl ">2.70195258 ICP</p>
        <button onClick={logOut} className="btn-disconnect font-extrabold uppercase">
          Disconnect
        </button>
      </div>
    </div>
  );
}
