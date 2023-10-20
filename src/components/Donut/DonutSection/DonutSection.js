import { useContext, useEffect, useReducer } from "react";
import styles from "./DonutSection.module.css";
import RadialMenu from "../../Donut/RadialMenu/RadialMenu";
import Button from "../Button/Button";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../../context/theme-context";
import DonutImg from "../DonutImg/DonutImg";

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

const DonutSection = () => {
  const ctx = useContext(ThemeContext);
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

  useEffect(() => {
    ctx.setTheme(donutState.donutIndex);
  }, [donutState.donutIndex, ctx]);

  return (
    <div className={styles.container}>
      <Button
        onClick={leftClickHandler}
        icon={faArrowLeft}
        disabled={donutState.donutIndex === 1}
      />
      <div className={styles.column}>
        <RadialMenu index={donutState.donutIndex} />
        <DonutImg
          level="bottom"
          index={donutState.bottomImgIndex}
          isSpinning={donutState.isSpinning}
          rotatingStyle={donutState.rotatingStyle}
          alt="Bottom donut image"
        />
        <DonutImg
          level="top"
          index={donutState.topImgIndex}
          isSpinning={donutState.isSpinning}
          rotatingStyle={donutState.rotatingStyle}
          alt="Top donut image"
        />
      </div>
      <Button
        onClick={rightClickHandler}
        icon={faArrowRight}
        disabled={donutState.donutIndex === 5}
      />
    </div>
  );
};

export default DonutSection;
