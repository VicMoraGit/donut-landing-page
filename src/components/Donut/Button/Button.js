import styles from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  const clickHandler = () => {
    props.onClick();
  };

  return (
    <button
      className={`
      ${props.right && styles.right}  
      ${styles.action}
      ${props.left && styles.left}  
  
       `}
      onClick={clickHandler}
      disabled={props.disabled}
    >
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
};

export default Button;
