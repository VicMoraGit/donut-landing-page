import { useContext, useMemo } from "react";
import styles from "./Background.module.css";

import { ThemeContext } from "../../context/theme-context";

const Background = (props) => {
  const ctx = useContext(ThemeContext);
  const classColors = useMemo(
    () => [
      styles.mint,
      styles.orange,
      styles.strawberry,
      styles.glazed,
      styles.chocolate,
    ],
    []
  );

  return (
    <div className={`${styles.background} ${classColors[ctx.colorTheme - 1]}`}>
      {props.children}
      <svg className={styles.drip} viewBox="0 0 100 19">
        <path
          fill="white"
          d="m 0 19 L 0 0 q 2 6 2 9 q 0 4 2 4 q 2 0 2 -4 q 0 -2 1 -3 a 1 1 0 0 1 1 0 q 1 1 1 2 q 0 4 2 2 q 1 -1 1 -4 q 0 -2 2 -1 q 2 1 4 -2 q 2 -3 4 -2 q 4 2 3 7 q -1 3 0 4 q 2 2 4 -2 q 1 -2 1 -4 q 0 -1 1 -1 q 1 0 2 2 q 1 2 1 4 q 0 3 1 3 q 2 0 2 -4 q 0 -4 2 -5 q 3 -1 4 2 q 2 4 4 3 q 2 -1 3 -4 q 1 -2 4 -2 q 3 0 6 1 q 4 1 8 -1 q 5 -2 2 6 q -2 5 0 7 q 2 2 4 1 q 3 -2 1 -5 q -2 -3 0 -5 q 5 -5 12 -5 q 4 0 7 1 q 4 2 4 0 q 0 -2 2 -4 L 100 19 z"
        />
      </svg>
    </div>
  );
};

export default Background;
