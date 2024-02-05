import "./ThemeChanger.css";
import { useTheme } from "../../contexts/ThemeContext";

import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`switcher ${theme === "dark" ? "switcher-dark" : ""}`}
      onClick={() => toggleTheme()}
    >
      <div
        className={`switcher-state  ${
          theme === "dark" ? "switcher-state-dark" : ""
        }`}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
