import React from "react";

import AdBar from "../../assets/images/ad-bar.png";

import "./MainContent.css";
import Navigation from "./Navigation";
import Info from "./Info";
import Articles from "./Articles";

const MainContent = () => {
  return (
    <div className="content-container">
      <div className="leftside-content-container">
        {/* <section> */}
        <Navigation />
        <Info />
        {/* </section> */}
        <Articles />
      </div>
      <aside className="rightside-content-container">
        <a href="#" target="_blank" rel="noopener noreferrer"></a>
        <img src={AdBar} alt="" width="300" height="600" />
      </aside>
    </div>
  );
};

export default MainContent;
