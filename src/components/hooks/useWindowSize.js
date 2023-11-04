import { useEffect, useState } from "react";

const getWindowSize = () => {
  const { innerHeight: height, innerWidth: width } = window;

  return {
    height,
    width,
  };
};

const useWindowSize = () => {
  const [size, setSize] = useState(getWindowSize());

  
  useEffect(() => {
    const handleResize = () => setSize(getWindowSize());
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
};

export default useWindowSize;
