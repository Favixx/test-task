import "./Search.css";
import { useState } from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { useMenu } from "../../contexts/MenuContext";
import { useTheme } from "../../contexts/ThemeContext";

const Search = ({ type, placeholder }) => {
  const [value, setValue] = useState("");
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const { theme } = useTheme();

  const handleClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <form className="search-form">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`input ${theme === "dark" && "dark-input"}`}
      />
      <button
        type="button"
        className="submit-button"
        onClick={() => handleClick()}
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
