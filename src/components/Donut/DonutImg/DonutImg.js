import styles from "./DonutImg.module.css";

import DonutFresa from "../../../assets/Donuts/DonutFresa.png";
import DonutMenta from "../../../assets/Donuts/DonutMenta.png";
import DonutGlaseado from "../../../assets/Donuts/DonutGlaseado.png";
import DonutNaranja from "../../../assets/Donuts/DonutNaranja.png";
import DonutChocolate from "../../../assets/Donuts/DonutChocolate.png";
import { useMemo } from "react";

const DonutImg = (props) => {
  const donuts = useMemo(
    () => [
      { index: 1, src: DonutMenta },
      { index: 2, src: DonutNaranja },
      { index: 3, src: DonutFresa },
      { index: 4, src: DonutGlaseado },
      { index: 5, src: DonutChocolate },
    ],
    []
  );

  const classes = useMemo(() => {
    if (props.level === "top") {
      return `${styles.donut} ${props.isSpinning !== 0 && styles.fade_out}`;
    } else if (props.level === "bottom") {
      return `${styles.donut}
        ${styles.opacity_0} 
        ${props.isSpinning !== 0 && styles.fade_in}`;
    }
  }, [props.level, props.isSpinning]);

  return (
    <>
      <img
        style={props.rotatingStyle}
        className={classes}
        alt={props.alt}
        src={donuts[props.index].src}
      />
      <img
        style={props.rotatingStyle}
        className={classes}
        alt={props.alt}
        src={donuts[props.index].src}
      />
    </>
  );
};

export default DonutImg;
