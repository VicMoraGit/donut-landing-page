import { useContext, useMemo } from "react";
import styles from "./Description.module.css";
import { ThemeContext } from "../../context/theme-context";

const Description = () => {
  const ctx = useContext(ThemeContext);

  const flavours = useMemo(
    () => ["mint", "orange", "strawberry", "glazed", "chocolate"],
    []
  );

  return (
    <div className={styles.description}>
      <h2 className={styles.title}>
        {flavours[ctx.colorTheme - 1]} iced glazed doughnut with sprinkles
      </h2>
      <p className={styles.subtitle}>
        What is better than our {flavours[ctx.colorTheme - 1]} iced glazed
        doughnut? our chocolate iced glazed doughnut with sprinkles!
      </p>
    </div>
  );
};

export default Description;
