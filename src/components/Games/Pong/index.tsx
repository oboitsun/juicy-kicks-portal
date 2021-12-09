import PongGame from "./Game";
import { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { score } from "./Game/Scenes/Game/Manager";
import { Overlay, AttentionOverlay, MenuOverlay, SettingsOverlay } from "./UI/Overlay";
import Header from "./UI/Header";
// import Utils from "../../../utils/";
namespace Utils {
  export function mergeClassnames(...classnames: (string | undefined)[]): string {
    return classnames.filter((classname) => classname).join(" ");
  }

  export const clamp = (value: number, min: number, max: number): number =>
    Math.max(min, Math.min(max, value));

  export const map = (
    value: number,
    min: number,
    max: number,
    dMin: number,
    dMax: number,
    clampValue: boolean = false
  ): number =>
    (((clampValue ? clamp(value, min, max) : value) - min) / (max - min)) *
      (dMax - dMin) +
    dMin;
}

// export default Utils;
export default function Pong() {
  const [score, setScore] = useState<score>([0, 0]);
  const [overlay, setOverlay] = useState<Overlay>(Overlay.None);

  const parent = useRef<HTMLDivElement>(null);
  const Game = useRef<PongGame>();

  useEffect(() => {
    /**
     * Create pong game
     */
    const pongGame = new PongGame(parent.current!);

    /**
     * Check when Game is ready and add listeners
     */
    pongGame.events.once(Phaser.Core.Events.READY, () => {
      /** Get game scene */
      const GameScene = pongGame.scene.getScene("Game");
      /**
       * Update score in react when it updates in game
       */
      GameScene.events.on("score", (score: score) => setScore([...score]));
    });

    /**
     * Save reference got game object
     */
    Game.current = pongGame;

    /** dispose */
    return () => pongGame.dispose();
  }, []);

  useEffect(() => {
    const GameScene = Game.current?.scene.getScene("Game");
    if (!GameScene) return;

    if (overlay === Overlay.None) GameScene.scene.resume();
    else GameScene.scene.pause();
  }, [overlay]);

  return (
    <div className={style.main_container}>
      <Header setOverlay={setOverlay} score={score} />
      <div className={style.canvas_container} ref={parent}>
        <div
          className={Utils.mergeClassnames(
            style.canvas_overlay,
            overlay === Overlay.None
              ? style.canvas_overlay_inactive
              : style.canvas_overlay_active
          )}
        >
          {(() => {
            switch (overlay) {
              case Overlay.Settings:
                return <SettingsOverlay setOverlay={setOverlay} />;
              case Overlay.Menu:
                return <MenuOverlay setOverlay={setOverlay} />;
              case Overlay.Attention:
                return <AttentionOverlay setOverlay={setOverlay} />;
              default:
                return null;
            }
          })()}
        </div>
        <div
          className={Utils.mergeClassnames(style.side_goal, style.side_goal_left)}
        ></div>
        <div
          className={Utils.mergeClassnames(style.side_goal, style.side_goal_right)}
        ></div>
      </div>
    </div>
  );
}
