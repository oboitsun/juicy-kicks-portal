import { Link } from "react-router-dom";
import HomeSlider from "../HomeSlider";
import Navigation from "./Navigation";
import "./home-dashboard.scss";
export default function HomeDashboard() {
  return (
    <div className="home-dashboard">
      <div className="w-1/2">
        <Navigation />
      </div>
      <div className="w-1/2">
        <HomeSlider />
      </div>
    </div>
  );
}
