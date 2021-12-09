import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Utils from "../utils/index";
import stylesheet from "./style.module.scss";

export interface Props {
  className?: string;
  background?: React.CSSProperties["background"];
  style?: React.CSSProperties;
  Icon: IconProp;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({
  className,
  background,
  style,
  Icon,
  text,
  onClick,
}: Props) {
  return (
    <button
      style={{ ...style, background }}
      className={Utils.mergeClassnames(stylesheet.button, className)}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={Icon} className={stylesheet.button_icon} />
      <span className={stylesheet.button_text}>{text}</span>
    </button>
  );
}
