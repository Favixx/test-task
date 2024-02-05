import React, { useEffect } from "react";
import { useMenu } from "../../contexts/MenuContext";

import "./MobileMenu.css";
import { headerElems } from "../../constants/constants";

import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple, FaFilter } from "react-icons/fa";
import Search from "../Search/Search";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const { theme } = useTheme();

  const handleClose = () => setIsMenuOpen(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);
  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    close: {
      x: "-100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };
  return (
    <motion.div
      initial="close"
      animate="open"
      exit="close"
      variants={menuVariants}
      className={`mobile-menu ${isMenuOpen ? "open" : "closed"} ${
        theme === "dark" && "dark-mobile-menu"
      }`}
    >
      <div className="mobile-menu-top-part">
        <a href="#" className={`logo ${theme === "dark" && "dark-logo"}`}>
          logotype
        </a>
        <button className="close-menu" onClick={handleClose}>
          <CloseIcon />
        </button>
      </div>
      <Search type="text" placeholder="Search for..." />
      <ul className="items">
        {headerElems.map((el) => {
          return (
            <li key={el.id} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <a href="#">{el.value}</a>
            </li>
          );
        })}
      </ul>
      <ul
        className={`mobile-menu-bottom-part ${
          theme === "dark" && "dark-mobile-menu-bottom-part"
        }`}
      >
        <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <a href="#">
            <PhoneIcon title="Phone icon" size={18} />
            Menu Item 1
          </a>
        </li>
        <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <a href="#">
            <FaFilter title="Filter icon" size={14} />
            Menu Item 2
          </a>
        </li>
        <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <a href="#">
            <IoLogoAndroid title="Android icon" size={22} />
            Menu Item 3
          </a>
        </li>
        <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <a href="#">
            <FaApple title="Apple icon" size={18} />
            Menu Item 4
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
