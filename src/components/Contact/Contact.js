import styles from "./Contact.module.css";
import ContactCards from "./ContactCards/ContactCards";
import Map from "./Map/Map";
import RRSSButtons from "./RRSSButtons/RRSSButtons";

const Contact = (props) => {
  return (
    <section className={styles.container}>
      <h1 id={props.id}>Contact</h1>
      <Map></Map>
      <ContactCards />
      <RRSSButtons />
    </section>
  );
};

export default Contact;
