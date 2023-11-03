import React, { useCallback, useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import styles from "./Navbar.module.css";
import NavItem from "../NavItem/NavItem";
import ShowNavButton from "../ShowNavButton/ShowNavButton";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const onClickHandler = () => setShowNavbar((prevState) => !prevState);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useCallback((ev) => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <nav className={styles.bar}>
      <div>
        <img className={styles.logo} src={logo} alt="Donut Logo"></img>
      </div>
      {width <= 700 && (
        <ShowNavButton onClick={onClickHandler} showNavbar={showNavbar} />
      )}
      <ul className={`${showNavbar ? styles.show : null}  ${styles.navList}`}>
        <NavItem onClick={onClickHandler} href="#WhyChooseUs" name="About us" />
        <NavItem onClick={onClickHandler} href="#Feedback" name="Feedback" />
        <NavItem onClick={onClickHandler} href="#Contact" name="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
