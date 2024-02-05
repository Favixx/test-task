import React from "react";

import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import Toolbar from "./components/Toolbar/Toolbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import {useMenu } from "./contexts/MenuContext";
import ArticleHeading from "./components/ArticleHeading/ArticleHeading";
import MainContent from "./components/Content/MainContent";
import { BannerMenuProvider } from "./contexts/BannerMenuContext";
import SocialShare from "./components/SocialShare/SocialShare";
import Footer from "./components/Footer/Footer";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import { AnimatePresence } from "framer-motion";

function App() {
  const { isMenuOpen } = useMenu();
  return (
    <ThemeProvider>
      <Toolbar />
      <div className="container">
        <Navigation />
        <BannerMenuProvider>
          <ArticleHeading />
        </BannerMenuProvider>
        <MainContent />
      </div>
      <Footer />
      <AnimatePresence>

      {isMenuOpen && <MobileMenu />}
      </AnimatePresence>
      <SocialShare />
    </ThemeProvider>
  );
}

export default App;
