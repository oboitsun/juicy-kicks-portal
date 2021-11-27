import Phaser from "phaser";
import { Plugin as NineSlicePlugin } from "phaser3-nineslice";

import GameSene from "./Scenes/Game";
import PreloadSene from "./Scenes/Preload";

export default class PongGame extends Phaser.Game {
  constructor(parent: HTMLDivElement) {
    super({
      type: Phaser.WEBGL,
      title: "Pong",
      scale: {
        width: 880,
        height: 450,
        parent,
        mode: Phaser.Scale.NONE,
      },
      physics: {
        default: "arcade",
        arcade: {
          x: 0,
          y: 0,
          overlapBias: 20,
          fixedStep: false,
        },
      },
      backgroundColor: 0xff8514,
      scene: [PreloadSene, GameSene],
      plugins: {
        global: [NineSlicePlugin.DefaultCfg],
      },
    });
  }

  dispose() {
    super.destroy(true, false);
  }
}
