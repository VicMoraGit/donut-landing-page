import { useState } from "react";
import "./Background.css";

const Background = () => {
  const [color, setColor] = useState("pink");
  return <div className={color} />;
};

export default Background;
