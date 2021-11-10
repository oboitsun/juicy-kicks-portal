import React from "react";
import "./mini-games.scss";
export default function MiniGames() {
  return (
    <div className="nav-grid-item mini-games">
      <div className="flex flex-col gap-5 h-full">
        <div className="game-over-banner">
          <img className="w-3/4" src="assets/game-over.svg" alt="game over" />
          <div className="flex w-full justify-between">
            <img className="" src="assets/joystick.svg" alt="joystick" />
            <img className="" src="assets/joystick2.svg" alt="joystick" />
          </div>
        </div>
        <button className="nav-grid-item-button minigames">my juicy</button>
      </div>
    </div>
  );
}
