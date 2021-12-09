import React from "react";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import Pong from "../../components/Games/Pong";
import { Link, Route, Outlet } from "react-router-dom";
export default function Minigames() {
  return (
    <div className="w-full">
      <SectionHeaderBackNav pageName="Mini games" />
      <Link to="/pong">pong</Link>
    </div>
  );
}
