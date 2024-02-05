import {
  FaFacebookF,
  FaHeart,
  FaPinterestP,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import "./SocialShare.css";

const SocialShare = () => {
  return (
    <ul className="social-widget">
      <li className="fb-link">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaFacebookF title="Facebook Link" size={20} />
        </a>
      </li>
      <li className="twitter-link">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTwitter title="Twitter Link" size={20} />
        </a>
      </li>
      <li className="telegram-link">
        <a
          href="https://telegram.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTelegramPlane title="Telegram Link" size={20} />
        </a>
      </li>
      <li className="pinterest-link">
        <a
          href="https://pinterest.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaPinterestP title="Pinterest Link" size={20} />
        </a>
      </li>
      <li className="reddit-link">
        <a
          href="https://www.reddit.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaRedditAlien title="Reddit Link" size={20} />
        </a>
      </li>
      <li className="heart-link">
        <a href="#" target="_blank" rel="noreferrer noopener">
          <FaHeart title="Heart Icon" size={20} />
        </a>
      </li>
    </ul>
  );
};

export default SocialShare;
