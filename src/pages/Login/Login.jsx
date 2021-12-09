import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/uiReducer";
import { useNavigate, useLocation } from "react-router-dom";
import "./login-page.scss";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import Modal from "../../components/Modal";

export default function Login(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  let state = location.state;
  let from = state ? state.from.pathname : "/";
  const handleLogin = () => {
    dispatch(setUser(true));
    navigate(from, { replace: true });
  };
  const wallets = [
    { name: "stoic", onClick: handleLogin, imgSrc: "assets/stoic-wallet.png" },
    { name: "plug", onClick: handleLogin, imgSrc: "assets/plug-wallet.png" },
    { name: "earth", onClick: handleLogin, imgSrc: "assets/earth-wallet.png" },
  ];
  const [showModal, setShowModal] = useState(false);
  return (
    <div id="login-page" className="w-full min-h-screen overflow-hidden relative">
      <div className="absolute top-10 w-full left-0 z-[2]">
        <LoginHeader />
      </div>
      <div className="my-container wallets-container">
        <div className="grid grid-cols-3 gap-10 w-full relative z-10">
          {wallets.map((wallet, i) => (
            <div
              key={i}
              className="w-full bg-white flex flex-col items-center p-8 rounded-lg"
            >
              {wallet.name === "earth" ? (
                <div className="flex items-center">
                  <img
                    className="h-10 mr-2"
                    src="assets/earth-wallet-icon.png"
                    alt="wallet-icon"
                  />
                  <img className="h-10" src={wallet.imgSrc} alt="wallet-icon" />
                </div>
              ) : (
                <img className="h-10" src={wallet.imgSrc} alt="wallet-icon" />
              )}
              <button onClick={wallet.onClick} className={`btn ${wallet.name}`}>
                connect wallet
              </button>
            </div>
          ))}
        </div>
      </div>
      <img className="gang" src="assets/squad-bottom.png" alt="gang" />
      <img
        className="w-1/2 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 z-[0]"
        src="assets/burst.png"
        alt="gang"
      />
      <div className="absolute bottom-10 w-full left-0 z-[2]">
        <LoginFooter
          onClick={() => {
            setShowModal(true);
          }}
          login
        />
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
