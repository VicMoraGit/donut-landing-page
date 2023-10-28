import styles from "./Slider.module.css";

import fake1 from "../../../assets/FakePeople/fake1.png";
import fake2 from "../../../assets/FakePeople/fake2.png";
import fake3 from "../../../assets/FakePeople/fake3.png";
import SliderCard from "../SliderCard/SliderCard";
import { useRef } from "react";

const Slider = () => {
  const slider = useRef();

  const reviews = [
    {
      key: 1,
      user: "Maria",
      message:
        "This donut business serves up heavenly pastries that are a true delight for the taste buds.        ",
      photo: fake1,
      score: 5,
    },
    {
      key: 2,
      user: "Victor",
      message:
        "Huge variety of tastes. Friendly staff. Convenient location. Thank you!",
      photo: fake2,
      score: 4,
    },
    {
      key: 3,
      user: "Susanne",
      message:
        "This donut business consistently delivers mouthwatering donuts that are worth every calorie.",
      photo: fake3,
      score: 3,
    },
  ];

  return (
    <ul ref={slider} className={styles.slider}>
      {reviews.map((item, index) => (
        <SliderCard
          key={index}
          user={item.user}
          message={item.message}
          photo={item.photo}
          score={item.score}
        />
      ))}
    </ul>
  );
};

export default Slider;
