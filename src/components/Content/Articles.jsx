import React from "react";

import Article from "./Article";
import { useTheme } from "../../contexts/ThemeContext";

const Articles = () => {
  const { theme } = useTheme();
  return (
    <div className="atricles-container">
      <h4 className={`simi-heading ${theme === "dark" && "dark-info"}`}>
        Similar articles
      </h4>
      <div className="divider-atricles-container" />

      <div className="articles">
        {[...Array(4)].map((_, index) => (
          <Article key={index} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
