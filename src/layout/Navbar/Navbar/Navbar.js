import React from "react";
import logo from "../../../assets/logo.png";
import styles from "./Navbar.module.css";
import NavItem from "../NavItem/NavItem";

const Navbar = () => {
  return (
    <nav className={styles.bar}>
      <div>
        <img className={styles.logo} src={logo} alt="Donut Logo"></img>
      </div>
      <ul className={styles.navList}>
        <NavItem href="#" name="Menu" />
        <NavItem href="#WhyChooseUs" name="About us" />
        <NavItem href="#Feedback" name="Feedback" />
        <NavItem href="#Contact" name="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
