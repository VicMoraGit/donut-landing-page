import styles from "./Feedback.module.css";
import Slider from "./Slider/Slider";

const Feedback = () => {
  return (
    <section className={styles.container}>
      <h1 id="Feedback">Feedback</h1>
      <Slider />
    </section>
  );
};

export default Feedback;
