import React, { useState } from "react";
import Pong from "../../components/Games/Pong";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import Menu from "./Menu";
import "./PongGame.scss";
export default function PongGame() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="PongGame">
      <SectionHeaderBackNav pageName="Juicy Pong" backTo="games" />
      {showMenu ? (
        <Menu setShowMenu={setShowMenu} />
      ) : (
        <div className="w-full flex justify-center items-center pt-10 relative ">
          <img
            className="game-char char-1"
            src="assets/game-char-1.png"
            alt="game-char"
          />
          <img
            className="game-char char-2"
            src="assets/game-char-2.png"
            alt="game-char"
          />
          <div className="relative z-10">
            <Pong />
          </div>
        </div>
      )}
    </div>
  );
}
