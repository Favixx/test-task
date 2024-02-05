import "./ArticleHeading.css";

import ArticleImage from "../../assets/images/article-image.png";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple, FaDownload } from "react-icons/fa";
import { ReactComponent as BurgerIcon } from "../../assets/icons/burger-menu.svg";
import { useBannerMenu } from "../../contexts/BannerMenuContext";
import Voting from "../Voting/Voting";
import Rating from "../Rating/Rating";
import BannerMenu from "./BannerMenu/BannerMenu";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const ArticleHeading = () => {
  const { isBannerMenuOpen, setIsBannerMenuOpen } = useBannerMenu();
  const { theme } = useTheme();

  return (
    <section
      className={`article-heading-section ${
        theme === "dark" && "dark-article-heading"
      }`}
    >
      <div className="article-heading">
        <img src={ArticleImage} alt="Article Image" className="article-image" />
        <div className="heading-wrapper">
          <div className="heading-container">
            <h1>Lorem Ipsum is simply dummy</h1>
            <ul className="button-list">
              <li>
                <a href="#">
                  <IoLogoAndroid /> Android
                </a>
              </li>
              <li>
                <a href="#">
                  <FaApple /> iOS
                </a>
              </li>
              <li>
                <a href="#" download>
                  <FaDownload /> Download on PC
                </a>
              </li>
            </ul>
          </div>
          <Rating />
        </div>
      </div>
      <div className="article-categories">
        <div className="categories-wrapper">
          <div className="mobile-categories">
            <button
              onClick={() => {
                setIsBannerMenuOpen(!isBannerMenuOpen);
              }}
            >
              More info <BurgerIcon />
            </button>
            <AnimatePresence initial={false}>
              {isBannerMenuOpen && <BannerMenu />}
            </AnimatePresence>
          </div>
          <div className="desktop-categories">
            <ul>
              <li>
                <p>
                  Lorem Ipsum is simply dummy
                  <div className="bar"></div>
                </p>
              </li>
              <li>
                <p>
                  item
                  <div className="bar"></div>
                </p>
              </li>
              <li>
                <p>
                  item
                  <div className="bar"></div>
                </p>
              </li>
              <li>
                <p>
                  item
                  <div className="bar"></div>
                </p>
              </li>
              <li>
                <p>item</p>
              </li>
            </ul>
            <Voting />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHeading;
