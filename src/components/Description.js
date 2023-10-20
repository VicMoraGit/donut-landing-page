import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.description}>
      <h2 className={styles.title}>
        Raspberry iced glazed doughnut with sprinkles
      </h2>
      <p className={styles.subtitle}>
        What is better than our Raspberry iced glazed doughnut? our chocolate
        iced glazed doughnut with sprinkles!
      </p>
    </div>
  );
};

export default Description;
