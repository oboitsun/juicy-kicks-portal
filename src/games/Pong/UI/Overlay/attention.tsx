import { Overlay } from "./";

import MenuContainer from "../../../../components/MenuContainer";
import IconButton from "../../../../components/IconButton";

import style from "./style.module.scss";

import {
  faSignOutAlt,
  faExchangeAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  setOverlay: React.Dispatch<React.SetStateAction<Overlay>>;
}

export default function AttentionOverlay({ setOverlay }: Props) {
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
}
