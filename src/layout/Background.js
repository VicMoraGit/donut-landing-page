import { useState } from "react";
import "./Background.css";

const Background = (props) => {
  const [color, setColor] = useState("pink");
  return <div className={color}>{props.children}</div>;
};

export default Background;
