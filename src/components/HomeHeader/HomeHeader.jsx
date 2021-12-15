import React from "react";
import "./home-header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setShowModal } from "../../reducers/uiReducer";
import { Link } from "react-router-dom";
export default function HomeHeader() {
  const dispatch = useDispatch();
  const { walletId, balance } = useSelector((state) => state.uiState.user);
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
  console.log(walletId, balance);
  return (
    <div className="home-header">
      <div className="flex gap-10">
        {links.map((link, i) => (
          <a
            key={link.text}
            className="text-white uppercase text-xl "
            {...link}
          >
            {link.text}
          </a>
        ))}
      </div>
      <div className="w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute flex  items-center gap-2">
        <img className="pb-3 w-32" src="assets/logo-svg.svg" alt="Logo" />
        <p className="text-white text-xl font-bold leading-none pt-1">PORTAL</p>
      </div>
      <div className="text-white flex gap-6 items-center font-extrabold  uppercase">
        <p className="text-xl min-w-max ">
          {balance !== null ? balance : "sorry"} ICP
        </p>
        <div className="flex flex-col items-start w-full max-w-[128px]  relative">
          <p className="absolute w-full  left-0 -top-4 text-xs font-normal overflow-hidden overflow-ellipsis  whitespace-nowrap ">
            {walletId}
          </p>
          <button
            onClick={logOut}
            className="btn-disconnect font-extrabold uppercase"
          >
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
}
