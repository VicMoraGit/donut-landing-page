import { useMemo } from "react";
import styles from "./AdvantagesGrid.module.css";
import AdvantageItem from "./AdvantageItem/AdvantageItem";
import {
  faFaceGrinTongue,
  faFireBurner,
  faHand,
  faLocationDot,
  faSeedling,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const AdvantagesGrid = () => {
  const advantages = useMemo(
    () => [
      { key: 1, text: "A huge variety of tastes", icon: faFaceGrinTongue },
      { key: 2, text: "Organic products", icon: faSeedling },
      { key: 3, text: "Made by hand", icon: faHand },
      {
        key: 4,
        text: "Convenient location in the city center",
        icon: faLocationDot,
      },
      { key: 5, text: "Only professional confectioners", icon: faStar },
      { key: 6, text: "Atmosphere of warmth and coziness", icon: faFireBurner },
    ],

    []
  );
  return (
    <div className={styles.grid}>
      {advantages.map((item) => (
        <AdvantageItem
          key={item.key}
          className
          content={item.text}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default AdvantagesGrid;
