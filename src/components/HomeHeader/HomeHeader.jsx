import React from "react";
import "./home-header.scss";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/uiReducer";
export default function HomeHeader() {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setUser(null));
  };
  return (
    <div className="home-header">
      <img className="w-1/5 block" src="../../assets/logo.png" alt="Dino logo" />
      <div className="flex items-center gap-5">
        <img className="w-auto" src="../../assets/dfinity-logo.png" alt="Dfinity logo" />
        <div className="header-balance">2.70195258 ICP</div>
        <button onClick={logOut} className="disconnect-button btn-filled">
          <div className="w-1/2 wallet-id">xaj2u-2jdsadasd0dsad0sada0das</div>
          <div className="w-1/2">Disconnect</div>
        </button>
        <button className="settings">my settings</button>
      </div>
    </div>
  );
}
