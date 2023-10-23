import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AdvantageItem.module.css";

const AdvantageItem = (props) => {
  return (
    <div className={styles.item}>
      <FontAwesomeIcon className={styles.icon} icon={props.icon} />
      <span className={styles.text}>{props.content}</span>
    </div>
  );
};

export default AdvantageItem;
