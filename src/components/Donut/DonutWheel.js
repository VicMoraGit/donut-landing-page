import { useReducer, useState } from "react";
import styles from "./DonutWheel.module.css";
import RadialMenu from "./RadialMenu";
import Button from "./Button";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import DonutFresa from "../../assets/Donuts/DonutFresa.png";
import DonutMenta from "../../assets/Donuts/DonutMenta.png";
import DonutGlaseado from "../../assets/Donuts/DonutGlaseado.png";
import DonutNaranja from "../../assets/Donuts/DonutNaranja.png";
import DonutChocolate from "../../assets/Donuts/DonutChocolate.png";

const reducer = (state, action) => {
  if (action.type === "stopright" && state.donutIndex <= 5) {
    return {
      ...state,
      topImgIndex: state.topImgIndex < 4 ? state.topImgIndex + 1 : 4,
      isSpinning: 0,
    };
  } else if (action.type === "stopleft" && state.donutIndex >= 1) {
    return {
      ...state,
      topImgIndex: state.topImgIndex > 0 ? state.topImgIndex - 1 : 0,

      isSpinning: 0,
    };
  } else if (action.type === "startright" && state.donutIndex < 5) {
    return {
      ...state,
      donutIndex: state.donutIndex < 5 ? state.donutIndex + 1 : 5,
      bottomImgIndex: state.topImgIndex < 4 ? state.topImgIndex + 1 : 4,
      rotatingStyle: {
        transform: `rotate(${
          90 * (state.donutIndex < 5 ? state.donutIndex + 1 : 5)
        }deg)`,
      },
      isSpinning: 1,
    };
  } else if (action.type === "startleft" && state.donutIndex > 1) {
    return {
      ...state,
      donutIndex: state.donutIndex > 1 ? state.donutIndex - 1 : 1,
      bottomImgIndex: state.topImgIndex > 0 ? state.topImgIndex - 1 : 0,
      rotatingStyle: {
        transform: `rotate(${
          90 * (state.donutIndex > 1 ? state.donutIndex - 1 : 1)
        }deg)`,
      },
      isSpinning: 2,
    };
  }
  return state;
};

const DonutWheel = () => {
  const [donutState, dispatchDonutState] = useReducer(reducer, {
    donutIndex: 1,
    topImgIndex: 0,
    bottomImgIndex: 0,
    isSpinning: 0,
    rotatingStyle: {},
  });

  const leftClickHandler = () => {
    dispatchDonutState({ type: "startleft" });

    setTimeout(() => {
      dispatchDonutState({ type: "stopleft" });
    }, 150);
  };
  const rightClickHandler = () => {
    dispatchDonutState({ type: "startright" });

    setTimeout(() => {
      dispatchDonutState({ type: "stopright" });
    }, 150);
  };

  const donuts = [
    { index: 1, src: DonutMenta },
    { index: 2, src: DonutNaranja },
    { index: 3, src: DonutFresa },
    { index: 4, src: DonutGlaseado },
    { index: 5, src: DonutChocolate },
  ];

  return (
    <div className={styles.container}>
      <Button onClick={leftClickHandler} icon={faArrowLeft} />
      <div className={styles.column}>
        <RadialMenu index={donutState.donutIndex} />
        <img
          style={donutState.rotatingStyle}
          className={`
          ${styles.opacity_0} 
          ${donutState.isSpinning !== 0 && styles.fade_in}
          `}
          alt="Bottom donut"
          src={donuts[donutState.bottomImgIndex].src}
        />
        <img
          style={donutState.rotatingStyle}
          className={`
          ${donutState.isSpinning !== 0 && styles.fade_out}`}
          alt="Top donut"
          src={donuts[donutState.topImgIndex].src}
        />
      </div>
      <Button onClick={rightClickHandler} icon={faArrowRight} />
    </div>
  );
};

export default DonutWheel;
