import "./ToolbarSocialLinks.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaRss,
} from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";

const ToolbarSocialLinks = () => {
  return (
    <ul className="social-link-list">
      <li>
        <a
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebookF title="Facebook Link" size={14} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter title="Twitter Link" size={14} />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram title="Instagram Link" size={14} />
        </a>
      </li>
      <li>
        <a
          href="https://youtube.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaYoutube title="Youtube Link" size={14} />
        </a>
      </li>
      <li>
        <a href="https://google.com/" rel="noopener noreferrer" target="_blank">
          <SiGooglenews title="Google Link" size={14} />
        </a>
      </li>
      <li>
        <a
          href="https://example.com/feed"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaRss title="RSS Link" size={14} />
        </a>
      </li>
    </ul>
  );
};

export default ToolbarSocialLinks;
