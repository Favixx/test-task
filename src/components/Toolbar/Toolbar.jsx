import ThemeSwitcher from "../ThemeChanger/ThemeChanger";
import "./Toolbar.css";

import ToolbarMenu from "./ToolbarMenu/ToolbarMenu";
import ToolbarSocialLinks from "./ToolbarSocialLinks/ToolbarSocialLinks";

const Toolbar = () => {
  return (
    <section className="toolbar-section">
      <div className="container">
        <div className="toolbar-inner-container">
          <div className="toolbar-section-container">
            <ToolbarMenu />
            <ToolbarSocialLinks />
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </section>
  );
};

export default Toolbar;
