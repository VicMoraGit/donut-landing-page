import styles from "./RRSSButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RRSSButton = (props) => {
  return (
    <a target="_blank" href={props.href} className={styles.button}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};

export default RRSSButton;
