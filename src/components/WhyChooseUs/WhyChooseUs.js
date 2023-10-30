import AdvantagesGrid from "./AdvantagesGrid/AdvantagesGrid";
import styles from "./WhyChooseUs.module.css";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../context/theme-context";
const WhyChooseUs = (props) => {
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
    <section
      className={`${styles.container} ${classColors[ctx.colorTheme - 1]}`}
    >
      <h1 id={props.id}>Why Choose Us</h1>
      <AdvantagesGrid></AdvantagesGrid>
    </section>
  );
};

export default WhyChooseUs;
