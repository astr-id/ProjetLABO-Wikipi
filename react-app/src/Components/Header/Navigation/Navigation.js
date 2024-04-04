import React from "react";
import { NavLink } from "react-router-dom";
import logoIPI from "../../../images/Logo_wikiPi_panda.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import Search from "../Search/Search";
import User from "../User/User";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { ThemeState } from "../../../Context/UseContext";

function Navigation() {
  const {
    state: { theme },
    dispatch,
  } = ThemeState();

  const toggleTheme = () => {
    const action = { type: "TOGGLE_THEME" };
    dispatch(action);
  };
  return (
    <div id="Navigation">
      <ul className="flex items-center justify-around">
        <li className="w-10%">
          <NavLink to="/">
            <img className="w-40" src={logoIPI} alt="Error" />
          </NavLink>
        </li>
        <li className="flex items-center justify-center w-30%">
          <Search />
        </li>
        <li className="flex justify-end items-center gap-10 w-1/5">
          <div className="rounded-full p-2 bg-7e7e7e">
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <NightsStayIcon className="text-2rem text-black cursor-pointer" />
              ) : (
                <LightModeIcon className="text-2rem text-white cursor-pointer" />
              )}
            </button>
          </div>
          <div className="flex justify-end w-auto gap-2 items-center">
            <p
              className={`${
                theme === "light" ? "text-black" : "text-white"
              } text-nowrap`}
            >
              Nom Prénom
            </p>
            <User />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
