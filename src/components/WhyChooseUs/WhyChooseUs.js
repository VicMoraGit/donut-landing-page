import AdvantagesGrid from "./AdvantagesGrid/AdvantagesGrid";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section className={styles.container}>
      <h1>Why Choose Us</h1>
      <AdvantagesGrid></AdvantagesGrid>
    </section>
  );
};

export default WhyChooseUs;
