import "./ToolbarMenu.css";

import { IoLogoAndroid } from "react-icons/io";
import { FaFilter, FaApple } from "react-icons/fa";

import { ReactComponent as PhoneIcon } from "../../../assets/icons/phone.svg";

const ToolbarMenu = () => {
  return (
    <ul className="toolbar">
      <li>
        <a href="#">
          <PhoneIcon title="Phone icon" size={18} />
          <p>Menu Item 1</p>
        </a>
      </li>
      <li>
        <a href="#">
          <FaFilter title="Filter icon" size={14} />
          <p>Menu Item 2</p>
        </a>
      </li>
      <li>
        <a href="#">
          <IoLogoAndroid title="Android icon" size={22} />
          <p>Menu Item 3</p>
        </a>
      </li>
      <li>
        <a href="#">
          <FaApple title="Apple icon" size={18} />
          <p>Menu Item 4</p>
        </a>
      </li>
    </ul>
  );
};

export default ToolbarMenu;
