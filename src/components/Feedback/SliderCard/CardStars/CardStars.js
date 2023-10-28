import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CardStars.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

const CardStars = (props) => {
  const starsElements = [];
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
  for (let i = 0; i < props.score; i++) {
    starsElements.push(
      <FontAwesomeIcon
        key={i}
        className={`${styles.star} ${styles.active}`}
        icon={faStar}
      ></FontAwesomeIcon>
    );
  }
  for (let i = 0; i < 5 - props.score; i++) {
    starsElements.push(
      <FontAwesomeIcon
        key={5 - i}
        className={`${styles.star} ${styles.inactive}`}
        icon={faStar}
      ></FontAwesomeIcon>
    );
  }
  return (
    <div className={`${styles.container} ${classColors[props.classColor]}`}>
      {starsElements}
    </div>
  );
};

export default CardStars;
