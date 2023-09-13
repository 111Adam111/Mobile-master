import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true);
  return (
    <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
      <div id={isLightMode ? "light" : "dark"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
