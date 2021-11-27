import React, { useEffect, useRef, useState } from "react";
import Utils from "../../../Utils/index";
import stylesheet from "./style.module.scss";

export interface Props {
  title: string;
  min: number;
  max: number;
  defaultValue: number;
  displayPrecision?: number;
  valueSuffix?: string;
  onChange?: (value: number) => void;
  onChangeStart?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  className?: string;
  accentColor?: React.CSSProperties["background"];
}

export default function Slider({
  title,
  min,
  max,
  defaultValue,
  displayPrecision = 0,
  valueSuffix = "",
  onChange,
  onChangeEnd,
  onChangeStart,
  className,
  accentColor,
}: Props) {
  const [thumbActive, setThumbActive] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const trackBoundingBox = useRef<DOMRect>();

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      trackBoundingBox.current = trackRef.current?.getBoundingClientRect();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={Utils.mergeClassnames(stylesheet.container, className)}
      onPointerUp={() => {
        if (!thumbActive) return;
        setThumbActive(false);
        onChangeEnd && onChangeEnd(value);
      }}
      onPointerLeave={() => {
        if (!thumbActive) return;
        setThumbActive(false);
        onChangeEnd && onChangeEnd(value);
      }}
      onPointerMove={(pointer) => {
        if (!thumbActive) return;
        setValue(
          Utils.map(
            pointer.clientX - trackBoundingBox.current!.left,
            0,
            trackBoundingBox.current!.width,
            min,
            max,
            true
          )
        );
        onChange && onChange(value);
      }}
    >
      <div className={stylesheet.title}>{title + ":"}</div>
      <div ref={trackRef} className={stylesheet.track}>
        <div
          className={stylesheet.track_highlighted}
          style={{
            width: `clamp(16px,${Utils.map(value, min, max, 0, 100) + "%"},100%)`,
            background: accentColor,
          }}
        ></div>
        <div
          onPointerDown={() => {
            setThumbActive(true);
            onChangeStart && onChangeStart(value);
          }}
          className={stylesheet.thumb}
          style={{
            left: `clamp(15px,${
              Utils.map(value, min, max, 0, 100) + "%"
            },calc(100% - 15px))`,
            background: accentColor,
          }}
        >
          {value.toFixed(displayPrecision) + valueSuffix}
        </div>
      </div>
    </div>
  );
}
