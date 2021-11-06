import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/uiReducer";
import { useNavigate, useLocation } from "react-router-dom";
import "./login-page.scss";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import loginBG from "/assets/bg-login.png";

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
    { name: "stoic", onClick: handleLogin },
    { name: "plug", onClick: handleLogin },
    { name: "earth", onClick: handleLogin },
  ];
  return (
    <div id="login-page" className="w-full min-h-screen overflow-hidden relative">
      <div className="absolute top-10 w-full left-0 z-[2]">
        <LoginHeader />
      </div>
      <img className="background" src={loginBG} alt="bg" />
      <div className="login-window ">
        <img className="logo w-full" src="../assets/logo.png" alt="logo" />
        <p className="heading text-border">Lorem Ipsum is simply dummy text</p>
        <div className="grid gap-6 w-full">
          {wallets.map((wallet, i) => (
            <button key={i} className={`wallet ${wallet.name}`} onClick={wallet.onClick}>
              connect {wallet.name} wallet
            </button>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 w-full left-0 z-[2]">
        <LoginFooter />
      </div>
    </div>
  );
}
