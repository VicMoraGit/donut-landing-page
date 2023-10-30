import styles from "./Map.module.css";

const Map = () => {
  return (
    <iframe
      className={styles.map}
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d835.9447271024461!2d-3.364404599528952!3d40.482444302915056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1698670394995!5m2!1ses!2ses"
      allowfullscreen=""
      loading="lazy"
      title="Location"
      referrerpolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;
