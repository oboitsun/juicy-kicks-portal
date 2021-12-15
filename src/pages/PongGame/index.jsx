import React, { useState } from "react";
import Pong from "../../components/Games/Pong";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import Menu from "./Menu";

export default function PongGame() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div>
      <SectionHeaderBackNav pageName="Juicy Pong" backTo="games" />
      {showMenu ? (
        <Menu setShowMenu={setShowMenu} />
      ) : (
        <div className="w-full flex justify-center items-center pt-10">
          <Pong />
        </div>
      )}
    </div>
  );
}
