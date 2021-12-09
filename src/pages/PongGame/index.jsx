import React from "react";
import Pong from "../../components/Games/Pong";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";

export default function PongGame() {
  return (
    <div>
      <SectionHeaderBackNav pageName="Ping Pong" backTo="minigames" />
      <div className="w-full flex justify-center items-center pt-10">
        <Pong />
      </div>
    </div>
  );
}
