import {
  FaFacebookF,
  FaInstagram,
  FaRss,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import { SiGooglenews } from "react-icons/si";

import { useTheme } from "../../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="container">
          <div className="footer-wrapper">
            <div
              className={`footer-card ${
                theme === "dark" && "dark-footer-card"
              }`}
            >
              <a
                href="/"
                className={`logo footer-logo ${
                  theme === "dark" && "dark-logo"
                }`}
              >
                logotype
              </a>
              <p className="footer-card-text">
                <h2>Lorem Ipsum is simply dummy</h2>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
              </p>
              <div
                className={`footer-card-icons ${
                  theme === "dark" && "dark-footer-card-icons"
                }`}
              >
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF title="Facebook Link" />
                </a>
                <a
                  href="https://twitter.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTwitter title="Twitter Link" />
                </a>
                <a
                  href="https://instagram.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram title="Instagram Link" />
                </a>
                <a
                  href="https://youtube.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaYoutube title="Youtube Link" />
                </a>
                <a
                  href="https://example.com/feed"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaRss title="Rss Link" />
                </a>
                <a
                  href="https://google.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SiGooglenews title="Google Link" />
                </a>
              </div>
            </div>
            <div className="footer-menu">
              <div className="footer-menu-lists">
                <div className="footer-menu-list-wrapper">
                  <h3 className="footer-list-title footer-list-title-desktop">
                    Categhory
                  </h3>
                  <h3 className="footer-list-title footer-list-title-tablet">
                    Guides and Tips
                  </h3>
                  <ul className="footer-list">
                    <li>
                      <a href="#">item 1</a>
                    </li>
                    <li>
                      <a href="#">item 2</a>
                    </li>
                    <li>
                      <a href="#">item 3</a>
                    </li>
                    <li>
                      <a href="#">item 4</a>
                    </li>
                    <li>
                      <a href="#">item 5</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu-list-wrapper">
                  <h3 className="footer-list-title">Play better</h3>
                  <ul className="footer-list">
                    <li>
                      <a href="#">item 1</a>
                    </li>
                    <li>
                      <a href="#">item 2</a>
                    </li>
                    <li>
                      <a href="#">item 3</a>
                    </li>
                    <li>
                      <a href="#">item 4</a>
                    </li>
                    <li>
                      <a href="#">item 5</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu-list-wrapper">
                  <h3 className="footer-list-title">Useful links</h3>
                  <ul className="footer-list">
                    <li>
                      <a href="#">link</a>
                    </li>
                    <li>
                      <a href="#">link</a>
                    </li>
                    <li>
                      <a href="#">link</a>
                    </li>
                    <li>
                      <a href="#">link</a>
                    </li>
                    <li>
                      <a href="#">link</a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="footer-copyright">
                Copyright &copy; 2024. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
