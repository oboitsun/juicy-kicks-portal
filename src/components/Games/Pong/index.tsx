import {
  faCog,
  faBars,
  faPlayCircle,
  faSignOutAlt,
  faExchangeAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Utils from "../../../Utils/index";
import PongGame from "./Game";

import { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { score } from "./Game/Scenes/Game/Manager";
import IconButton from "../../UI/IconButton";
import MenuContainer from "../../UI/MenuContainer";
import Slider from "../../UI/Slider";

export enum Overlay {
  None,
  Menu,
  Settings,
  Attention,
}

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
      <div className={style.header_container}>
        <div className={style.profile_container}>
          <div
            className={style.profile_image}
            style={{ backgroundImage: "url('assets/player-1.png')" }}
          ></div>
          <div className={style.profile_name}>YOU</div>
        </div>
        <div className={style.data_container}>
          <div
            className={Utils.mergeClassnames(
              style.data_inner_container,
              style.data_inner_container_left
            )}
          >
            <IconButton
              Icon={faCog}
              text="settings"
              background={"#34a3ff"}
              onClick={() => setOverlay(Overlay.Settings)}
            />
          </div>
          <div
            className={Utils.mergeClassnames(
              style.data_inner_container,
              style.data_inner_container_center
            )}
          >
            <div className={style.score_container}>
              <span className={style.score}>{score[0]}</span>
              <span className={style.score_semicolon}>:</span>
              <span className={style.score}>{score[1]}</span>
            </div>
          </div>
          <div
            className={Utils.mergeClassnames(
              style.data_inner_container,
              style.data_inner_container_right
            )}
          >
            <IconButton
              Icon={faBars}
              text="menu"
              background={"#ff8413"}
              onClick={() => setOverlay(Overlay.Menu)}
            />
          </div>
        </div>
        <div className={style.profile_container}>
          <div
            className={style.profile_image}
            style={{ backgroundImage: "url('./assets/player-2.png')" }}
          ></div>
          <div className={style.profile_name}>SHELDON</div>
        </div>
      </div>
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
                return (
                  <MenuContainer
                    title="Settings"
                    closeHandler={() => setOverlay(Overlay.None)}
                  >
                    <Slider
                      className={style.menu_slider}
                      title="sound"
                      min={0}
                      max={1}
                      defaultValue={0.5}
                    />
                    <Slider
                      className={style.menu_slider}
                      title="speed"
                      min={1}
                      max={5}
                      defaultValue={1}
                      valueSuffix="x"
                    />
                    <IconButton
                      Icon={faExchangeAlt}
                      text="change character"
                      background={"#ff8413"}
                      onClick={() => setOverlay(Overlay.Attention)}
                      className={style.menu_container_button}
                    />
                    <IconButton
                      Icon={faSignOutAlt}
                      text="save and back"
                      background={"#755783"}
                      className={style.menu_container_button}
                      onClick={() => setOverlay(Overlay.Menu)}
                    />
                  </MenuContainer>
                );
              case Overlay.Menu:
                return (
                  <MenuContainer
                    title="menu"
                    closeHandler={() => setOverlay(Overlay.None)}
                  >
                    <IconButton
                      Icon={faPlayCircle}
                      text="continue game"
                      background={"#ff8413"}
                      className={style.menu_container_button}
                      onClick={() => setOverlay(Overlay.None)}
                    />
                    <IconButton
                      Icon={faCog}
                      text="settings"
                      background={"#34A3FF"}
                      className={style.menu_container_button}
                      onClick={() => setOverlay(Overlay.Settings)}
                    />
                    <IconButton
                      Icon={faSignOutAlt}
                      text="exit game"
                      background={"#755783"}
                      className={style.menu_container_button}
                    />
                  </MenuContainer>
                );
              case Overlay.Attention:
                return (
                  <MenuContainer
                    closeHandler={() => setOverlay(Overlay.None)}
                    className={style.attention_overlay}
                  >
                    <FontAwesomeIcon
                      icon={faExchangeAlt}
                      className={style.attention_overlay_icon}
                    />
                    <div className={style.attention_overlay_title}>ATTENTION</div>
                    <div className={style.attention_overlay_subtitle}>
                      to change the character,
                      <br /> you will need to exit this game
                    </div>
                    <IconButton
                      Icon={faTimesCircle}
                      text="cancel"
                      background={"#34A3FF"}
                      className={style.attention_overlay_button}
                      onClick={() => setOverlay(Overlay.Settings)}
                    />
                    <IconButton
                      Icon={faSignOutAlt}
                      text="exit game"
                      background={"#755783"}
                      className={style.attention_overlay_button}
                    />
                  </MenuContainer>
                );
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
