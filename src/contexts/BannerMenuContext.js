
import { createContext, useContext, useState } from "react";

const BannerMenuContext = createContext();

export const BannerMenuProvider = ({ children }) => {
  const [isBannerMenuOpen, setIsBannerMenuOpen] = useState(false);

  const value = { isBannerMenuOpen, setIsBannerMenuOpen };

  return (
    <BannerMenuContext.Provider value={value}>
      {children}
    </BannerMenuContext.Provider>
  );
};

export const useBannerMenu = () => useContext(BannerMenuContext);
