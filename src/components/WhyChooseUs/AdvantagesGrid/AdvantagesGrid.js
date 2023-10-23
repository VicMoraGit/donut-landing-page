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
      { text: "A huge variety of tastes", icon: faFaceGrinTongue },
      { text: "Organic products", icon: faSeedling },
      { text: "Made by hand", icon: faHand },
      { text: "Convenient location in the city center", icon: faLocationDot },
      { text: "Only professional confectioners", icon: faStar },
      { text: "Atmosphere of warmth and coziness", icon: faFireBurner },
    ],

    []
  );
  return (
    <div className={styles.grid}>
      {advantages.map((item) => (
        <AdvantageItem className content={item.text} icon={item.icon} />
      ))}
    </div>
  );
};

export default AdvantagesGrid;
