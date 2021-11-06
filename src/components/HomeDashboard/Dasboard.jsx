import { Link } from "react-router-dom";
import Banner from "./Banner";

export default function Dasboard() {
  const buttons = [
    {
      name: "my dino",
      icon: "../../assets/my-dino-icon.svg",
      to: "/my-dinos",
      className: "my-dinos",
    },
    {
      name: "my eggs",
      icon: "../../assets/my-eggs-icon.svg",
      to: "/my-eggs",
      className: "my-eggs",
    },
    {
      name: "mini games",
      icon: "../../assets/minigames-icon.svg",
      to: "/minigames",
      className: "minigames",
    },
    {
      name: "leaderboard",
      icon: "../../assets/leaderboard-icon.svg",
      to: "/leaderboard",
      className: "leader",
    },
    {
      name: "store",
      icon: "../../assets/cart-icon.svg",
      to: "/store",
      className: "store",
    },
    {
      name: "marketplace",
      icon: "../../assets/market-icon.svg",
      to: "/marketplace",
      className: "market",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5">
      <Banner />
      {buttons.map((btn) => (
        <Link key={btn.name} to={btn.to}>
          <div key={btn.name} className={`dashboard-button ${btn.className}`}>
            <img className="mb-3" src={btn.icon} alt="icon" />
            {btn.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
