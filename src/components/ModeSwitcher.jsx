import { useContext, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./Context";

function ModeSwitcher() {
  const { isLightMode, setIsLightMode } = useContext(ThemeContext);
  const handleClick = () => {
    setIsLightMode(!isLightMode);
    const doc = document.body.classList;
    // adds class to body for start up so it can be toggled later
    // this approach prevents ugly body transition animation on startup
    doc.length == 0 && doc.add("light");
    doc.toggle("light");
    doc.toggle("dark");
  };

  return (
    <div className="mode-switcher" onClick={handleClick}>
      <div className={`icon-container ${isLightMode ? "dark" : "light"}`}>
        {isLightMode ? (
          <FaMoon className={`icon rotate`} />
        ) : (
          <FaSun className={`icon rotate`} />
        )}
        <div className="text-container">
          <div className="light-text">
            <p>Dark</p> <p>Mode</p>
          </div>
          <div className="dark-text">Light Mode</div>
        </div>
      </div>
    </div>
  );
}
export default ModeSwitcher;
