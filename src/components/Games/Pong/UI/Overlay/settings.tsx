import { Overlay } from ".";

import MenuContainer from "../../../../MenuContainer";
import Slider from "../../../../Slider";
import IconButton from "../../../../IconButton";

import style from "./style.module.scss";

import { faSignOutAlt, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
  setOverlay: React.Dispatch<React.SetStateAction<Overlay>>;
}

export default function SettingsOverlay({ setOverlay }: Props) {
  return (
    <MenuContainer title="Settings" closeHandler={() => setOverlay(Overlay.None)}>
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
}
