import { useEffect, useReducer } from "react";
import styles from "./RadialMenu.module.css";

const reducer = (state, action) => {
  const circleStyles = [
    styles.raspberry,
    styles.orange,
    styles.strawberry,
    styles.glazed,
    styles.chocolate,
  ];
  let nextIndex = 1;

  if (action.type === "first") {
    nextIndex = 1;
  } else if (action.type === "next" && state.index <= 5) {
    nextIndex = state.index + 1;
  } else if (action.type === "previous" && state.index >= 0) {
    nextIndex = state.index - 1;
  }

  return {
    index: nextIndex,
    class: circleStyles[nextIndex - 1],
  };
};

const RadialMenu = (props) => {
  const [circleState, dispatchcircleState] = useReducer(reducer, {
    index: props.index,
    class: styles.raspberry,
  });

  useEffect(() => {
    if (props.index === 1) {
      dispatchcircleState({ type: "first" });
    } else if (props.index > circleState.index) {
      dispatchcircleState({ type: "next" });
    } else if (props.index < circleState.index) {
      dispatchcircleState({ type: "previous" });
    }
  }, [circleState.index, props.index]);

  return (
    <svg
      className={styles.svg}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        id="wordsBorder"
        d="
          M -3,50
          a 53,53 0 1,1 106,0"
      />
      <path
        className={styles.drop_shadow}
        stroke="white"
        fill="none"
        strokeWidth=".2"
        id="circleBorder"
        d="
          M 0,50
          a 50,50 0 1,1 100,0"
      />
      <circle
        fill="white"
        r="0.5"
        cy={50}
        className={`${styles.drop_shadow} ${circleState.class}`}
      ></circle>

      <text  id="text">
        <textPath
          href="#wordsBorder"
          className={circleState.index === 1 && styles.drop_shadow}
          startOffset="5%"
        >
          raspberry
        </textPath>
        <textPath
          href="#wordsBorder"
          className={circleState.index === 2 && styles.drop_shadow}
          startOffset="25%"
        >
          orange
        </textPath>
        <textPath
          href="#wordsBorder"
          className={circleState.index === 3 && styles.drop_shadow}
          startOffset="45%"
        >
          strawberry
        </textPath>
        <textPath
          href="#wordsBorder"
          className={circleState.index === 4 && styles.drop_shadow}
          startOffset="69%"
        >
          glazed
        </textPath>
        <textPath
          href="#wordsBorder"
          className={circleState.index === 5 && styles.drop_shadow}
          startOffset="86.6%"
        >
          chocolate
        </textPath>
      </text>
    </svg>
  );
};

export default RadialMenu;
