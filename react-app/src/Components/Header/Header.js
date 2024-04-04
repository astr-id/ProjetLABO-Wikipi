import React from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Navigation from "./Navigation/Navigation";
import "../../media.css";
import { ThemeState } from "../../Context/UseContext";

function Header() {
  const {
    state: { theme },
  } = ThemeState();
  return (
    <div>
      <nav className={theme === "light" ? "bg-d1d1d1" : "bg-252525"}>
        <Navigation />
        <BurgerMenu id="BurgerMenu" />
      </nav>
    </div>
  );
}

export default Header;
