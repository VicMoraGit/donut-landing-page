import { useContext, useMemo } from "react";
import CardStars from "./CardStars/CardStars";
import styles from "./SliderCard.module.css";
import { ThemeContext } from "../../../context/theme-context";

const SliderCard = (props) => {
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
    <li className={`${styles.card} ${classColors[ctx.colorTheme - 1]}`}>
      <img src={props.photo} alt="profile" />
      <span>{props.user}</span>
      <p>{props.message}</p>
      <CardStars classColor={ctx.colorTheme - 1} score={props.score} />
    </li>
  );
};

export default SliderCard;
