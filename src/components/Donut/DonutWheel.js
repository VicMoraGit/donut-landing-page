import { useState } from "react";
import styles from "./DonutWheel.module.css";
import RadialMenu from "./RadialMenu";
import DonutFresa from "../../assets/Donuts/DonutFresa.png";
import ActionButtons from "./ActionButtons";
/*
import DonutMenta from "../../assets/Donuts/DonutMenta.png";
import DonutGlaseado from "../../assets/Donuts/DonutGlaseado.png";
import DonutNaranja from "../../assets/Donuts/DonutNaranja.png";
import DonutChocolate from "../../assets/Donuts/DonutChocolate.png";
*/
const DonutWheel = () => {
  const [donutIndex, setDonutIndex] = useState(1);
  const leftClickHandler = () => {
    setDonutIndex((prevState) => (prevState > 1 ? prevState - 1 : 1));
  };
  const rightClickHandler = () => {
    setDonutIndex((prevState) => (prevState < 5 ? prevState + 1 : 5));
  };
  /*
  const donuts = [
    { index: 1, src: DonutMenta },
    { index: 2, src: DonutNaranja },
    { index: 3, src: DonutGlaseado },
    { index: 4, src: DonutFresa },
    { index: 5, src: DonutChocolate },
  ];*/

  return (
    <div className={styles.container}>
      <img alt="donut" src={DonutFresa} />
      <div className={styles.dot}></div>
      <RadialMenu index={donutIndex} />
      <div className={styles.container}>
        <ActionButtons
          onLeftClick={leftClickHandler}
          onRightClick={rightClickHandler}
        />
      </div>
    </div>
  );
};

export default DonutWheel;
