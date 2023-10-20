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
    </div>
  );
};

export default Background;
