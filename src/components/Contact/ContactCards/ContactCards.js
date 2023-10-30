import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactCard from "./ContactCard/ContactCard";
import styles from "./ContactCards.module.css";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../../context/theme-context";

const ContactCards = () => {
  const ctx = useContext(ThemeContext);
  const classColors = useMemo(
    () => [
      styles.mint,
      styles.orange,
      styles.strawberry,
      styles.glazed,
      styles.chocolate,
    ],
    []
  );

  return (
    <div className={`${styles.row} ${classColors[ctx.colorTheme - 1]}`}>
      <ContactCard
        icon={faLocationDot}
        CName="Address"
        CFirstOption="Cervantes Square, 21, 28801"
        CSecondOption="Alcalá de Henares, Madrid, España"
      />
      <ContactCard
        className={styles.phone}
        icon={faPhone}
        CName="Phone"
        CFirstOption="+34 635 859 524"
        CSecondOption="+34 695 547 558"
      />
      <ContactCard
        icon={faEnvelope}
        CName="Email"
        CFirstOption="donutforyou@gmail.com"
        CSecondOption="donutforyou@outlook.com"
      />
    </div>
  );
};
export default ContactCards;
