import React from "react";
import "./leaderboard.scss";
export default function Leaderboard() {
  const leaderboard = [
    {
      user: "sergey",
      pts: 1000.0,
    },
    {
      user: "emma",
      pts: 500.0,
    },
    {
      user: "sheldon",
      pts: 300.0,
    },
    {
      user: "oleksii",
      pts: 100.0,
    },
  ];
  return (
    <div className="nav-grid-item ">
      <div className="flex flex-col gap-5 h-full">
        <div className="w-full h-full flex-grow-0">
          <div className="h-full grid leaderboard-grid">
            {leaderboard.map((user, i) => (
              <div key={i} className={`w-full   place-grid place-${i + 1} `}>
                <div className="relative mr-1.5">
                  <img src="assets/star.svg" alt="star" />
                  <span className="abs-centering text-sm pt-1 pr-px">{i + 1}</span>
                </div>
                <p className="mr-auto">{user.user}</p>
                <p className="">{user.pts}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="nav-grid-item-button leaderboard">all leaderboard</button>
      </div>
    </div>
  );
}
