import React from "react";
import { Link } from "react-router-dom";
import "./mini-games.scss";
export default function MiniGames() {
  return (
    <div className="nav-grid-item mini-games">
      <div className="flex flex-col gap-5 h-full">
        <div className="game-over-banner">
          <img className="w-3/4" src="assets/game-over.svg" alt="game over" />
          <div className="flex w-full justify-between">
            <img className="joy1" src="assets/joystick.svg" alt="joystick" />
            <img className="joy2" src="assets/joystick2.svg" alt="joystick" />
          </div>
        </div>
        <Link to="/minigames">
          {" "}
          <button className="nav-grid-item-button minigames">GAMES</button>
        </Link>
      </div>
    </div>
  );
}
