import React from "react";
import styles from "./NavItem.module.css";

const NavItem = (props) => {
  const onClickHandler = () => props.onClick();
  return (
    <li className={styles.item}>
      <a onClick={onClickHandler} href={props.href}>
        {props.name}
      </a>
    </li>
  );
};

export default NavItem;
