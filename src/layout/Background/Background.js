import { useContext, useMemo } from "react";
import styles from "./Background.module.css";

import { ThemeContext } from "../../context/theme-context";
import DripSeparator from "./DripSeparator";

const Background = (props) => {
  const ctx = useContext(ThemeContext);
  const elements = [
    props.children,
    <DripSeparator
      key="DripSeparator"
      reversed={props.reversed}
      donut_section={props.donut_section}
    />,
  ];
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
    <div
      className={`${styles.background} ${props.reversed && styles.reversed} ${
        classColors[ctx.colorTheme - 1]
      }`}
    >
      {props.reversed ? elements.reverse() : elements}
    </div>
  );
};

export default Background;
