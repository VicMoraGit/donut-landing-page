import styles from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  const clickHandler = () => {
    props.onClick();
  };

  return (
    <button className={styles.action} onClick={clickHandler}>
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
};

export default Button;
