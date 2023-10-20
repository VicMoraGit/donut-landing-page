import React from "react";
import styles from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={styles.item}>
      <a href={props.href}>{props.name}</a>
    </li>
  );
};

export default NavItem;
