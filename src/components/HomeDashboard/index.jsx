import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import "./home-dashboard.scss";
import Leaderboard from "./Leaderboard";
import Marketplace from "./Marketplace";
import MiniGames from "./MiniGames";
import MyJuicy from "./MyJuicy";
import Store from "./Store";
export default function HomeDashboard() {
  return (
    <div className="home-dashboard">
      <div className="nav-grid">
        <MyJuicy />

        <MiniGames />
        <Leaderboard />
        <Store />
        <Marketplace />
        <ContactUs />
      </div>
    </div>
  );
}
