import React from "react";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import Pong from "../../components/Games/Pong";
export default function Minigames() {
  return (
    <div className="w-full">
      <SectionHeaderBackNav pageName="Mini games" />
      <div className="flex pt-10 justify-center">
        <Pong />
      </div>
    </div>
  );
}
