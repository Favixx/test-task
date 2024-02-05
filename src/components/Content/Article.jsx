import React from "react";

import SimilarArticle from "../../assets/images/similar-article.jpg";

import { FaUser } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import { useTheme } from "../../contexts/ThemeContext";

const Article = () => {
  const { theme } = useTheme();
  return (
    <div className={`article ${theme === "dark" && "article-dark"}`}>
      <img src={SimilarArticle} alt="Similar Article" />

      <h3 className="title-article">Lorem Ipsum is simply dummy</h3>

      <div className="info-article">
        <span className={`${theme === "dark" && "dark-info"}`}>
          <FaUser
            className={`icons-info-article ${
              theme === "dark" && "dark-icons-info-article"
            }`}
          />
          ALCO
        </span>
        <span className={` ${theme === "dark" && "dark-info"}`}>
          <LuClock9
            className={`icons-info-article ${
              theme === "dark" && "dark-icons-stroke"
            }`}
          />
          26 janvier 2023
        </span>
      </div>
    </div>
  );
};

export default Article;
