//color based on donut index

import { createContext, useState } from "react";

export const ThemeContext = createContext({
  colorTheme: 1,
  setTheme: () => {},
});

const ThemeContextProvider = (props) => {
  const [colorTheme, setColorTheme] = useState(1);

  return (
    <ThemeContext.Provider
      value={{ colorTheme: colorTheme, setTheme: setColorTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
