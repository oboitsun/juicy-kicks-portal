import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./common.scss";
import HomeDashboard from "./components/HomeDashboard";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home/Home";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login/Login";
import Marketplace from "./pages/Marketplace/Marketplace";
import Minigames from "./pages/Minigames";
import MyKicks from "./pages/MyKicks";

import Store from "./pages/Store";
import HelpCenter from "./pages/HelpCenter/HelpCenter";

function App() {
  const location = useLocation();

  return (
    <div className="relative">
      <img
        className="absolute bottom-0 w-full h-auto"
        src="assets/platform.png"
        alt="platform"
      />
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        >
          <AnimatePresence exitBeforeEnter>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/my-kicks" element={<MyKicks />} />

            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/store" element={<Store />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/minigames" element={<Minigames />} />
            <Route path="/help" element={<HelpCenter />} />
          </AnimatePresence>
        </Route>
      </Routes>{" "}
    </div>
  );
}

export default App;
