import "./Navigation.css";
import Search from "../Search/Search";

import { ReactComponent as BurgerIcon } from "../../assets/icons/burger-menu.svg";

import { headerElems } from "../../constants/constants";
import { useMenu } from "../../contexts/MenuContext";

import { useTheme } from "../../contexts/ThemeContext";

const Navigation = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  const { theme } = useTheme();
  return (
    <header className="header">
      <a href="#" className={`logo ${theme === "dark" && "dark-logo"}`}>
        logotype
      </a>
      <nav>
        <ul className="navigation-items">
          {headerElems.map((el) => {
            return (
              <li key={el.id}>
                <a href="#">{el.value}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="search-wrapper">
        <Search type="text" placeholder="Search for…" />
      </div>
      <button
        type="button"
        className="burger-menu"
        onClick={() => {
          console.log("click");
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <BurgerIcon />
      </button>
    </header>
  );
};

export default Navigation;
