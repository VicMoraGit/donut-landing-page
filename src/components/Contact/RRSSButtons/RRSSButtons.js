import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import RRSSButton from "./RRSSButton/RRSSButton";
import styles from "./RRSSButtons.module.css";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../../context/theme-context";

const RRSSButtons = () => {
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
    <div className={`${classColors[ctx.colorTheme - 1]} ${styles.container}`}>
      <RRSSButton
        href="https://www.instagram.com/moravictor_"
        icon={faInstagram}
      />
      <RRSSButton href="https://x.com/" icon={faXTwitter} />
      <RRSSButton href="https://facebook.com/" icon={faFacebookF} />
    </div>
  );
};

export default RRSSButtons;
