import styles from "./ActionButtons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ActionButtons = (props) => {
  const leftClickHandler = () => {
    props.onLeftClick();
  };
  const rightClickHandler = () => {
    props.onRightClick();
  };

  return (
    <div className={styles.actions}>
      <button onClick={leftClickHandler}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button onClick={rightClickHandler}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ActionButtons;
