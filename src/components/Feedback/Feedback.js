import styles from "./Feedback.module.css";
import Slider from "./Slider/Slider";

const Feedback = (props) => {
  return (
    <section className={styles.container}>
      <h1 id={props.id}>Feedback</h1>
      <Slider />
    </section>
  );
};

export default Feedback;
