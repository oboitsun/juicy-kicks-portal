import { faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../../../IconButton";
import Utils from "../../../utils/index";
import { score } from "../../Game/Scenes/Game/Manager";
import { Overlay } from "../Overlay";

import style from "./style.module.scss";

interface Props {
  setOverlay: React.Dispatch<React.SetStateAction<Overlay>>;
  score: score;
}

export default function Header({ setOverlay, score }: Props) {
  return (
    <div className={style.header_container}>
      <div className={style.profile_container}>
        <div
          className={style.profile_image}
          style={{ backgroundImage: "url('./assets/player-1.png')" }}
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
  );
}
