import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ShowNavButton.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ShowNavButton = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };

  return (
    <button
      className={`${styles.button} ${
        props.showNavbar ? styles.showNavbar : null
      } `}
      onClick={onClickHandler}
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default ShowNavButton;
