import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Utils from "../../../Utils/index";

import stylesheet from "./style.module.scss";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  width?: React.CSSProperties["width"];
  title?: string;
  children: JSX.Element | JSX.Element[];
  closeHandler?: () => void;
}

export default function MenuContainer({
  className,
  style,
  width,
  title,
  children,
  closeHandler,
}: Props) {
  return (
    <div
      className={Utils.mergeClassnames(stylesheet.container, className)}
      style={{ ...style, width }}
    >
      {closeHandler && (
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={closeHandler}
          className={stylesheet.close_icon}
        />
      )}
      {title && <div className={stylesheet.title}>{title}</div>}
      {children}
    </div>
  );
}
