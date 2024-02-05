import { useBannerMenu } from "../../../contexts/BannerMenuContext";
import "./BannerMenu.css";

import { motion } from 'framer-motion'

const BannerMenu = () => {
  const { isBannerMenuOpen } = useBannerMenu();
  return (
    <motion.ul
      initial="close"
      animate="open"
      exit="close"
      variants={{
        open: { opacity: 1, height: "auto" },
        close: {
          opacity: 0, height: 0
        }
      }}
      transition={{ duration: 0.2 }}
    
    className={`mobile-banner-menu ${isBannerMenuOpen ? "" : "hidden"}`}>
      <li className="banner-menu-heading">Lorem Ipsum is simply dummy</li>
      {[...Array(4).keys()].map((el, id) => (
        <li key={id}>Item</li>
      ))}
    </motion.ul>
  );
};

export default BannerMenu;
