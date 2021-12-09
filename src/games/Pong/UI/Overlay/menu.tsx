import { Overlay } from "./";

import MenuContainer from "../../../../components/MenuContainer";
import IconButton from "../../../../components/IconButton";

import style from "./style.module.scss";

import {
  faCog,
  faPlayCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  setOverlay: React.Dispatch<React.SetStateAction<Overlay>>;
}

export default function MenuOverlay({ setOverlay }: Props) {
  return (
    <MenuContainer title="menu" closeHandler={() => setOverlay(Overlay.None)}>
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
}
