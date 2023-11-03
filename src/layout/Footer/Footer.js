import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img alt="logo" src={logo} />
      <div className={styles.license}>
        <span>Donut Business © 2023</span>
        <span>Made with ❤️ by Víctor Mora</span>
      </div>
    </footer>
  );
};

export default Footer;
