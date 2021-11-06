import { Link } from "react-router-dom";
import HomeSlider from "../HomeSlider";
import Dasboard from "./Dasboard";
import "./home-dashboard.scss";
export default function HomeDashboard() {
  return (
    <div className="home-dashboard">
      <Dasboard />
      <HomeSlider />
    </div>
  );
}
