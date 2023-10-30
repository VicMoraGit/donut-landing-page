import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactCard.module.css";

const ContactCard = (props) => {
  const classes = `${styles.card}  ${props.className}`;

  return (
    <div className={classes}>
      <FontAwesomeIcon className={styles.icon} icon={props.icon} />
      <h3 className={styles.title}>{props.CName}</h3>
      <span>
        {props.CFirstOption}
        <br />
      </span>

      <span>{props.CSecondOption}</span>
    </div>
  );
};
export default ContactCard;
