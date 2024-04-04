import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ThemeState } from "../../../Context/UseContext";

function User() {
  const [userMenu, setUserMenu] = useState(false);
  const {
    state: { theme },
  } = ThemeState();

  const handleClick = (value) => {
    setUserMenu(value);
  };

  let menu = [
    "Mes Articles",
    "Mes Favoris",
    "Validation des Articles",
    "Articles en Attente",
    "Déconnexion",
  ];

  return (
    <div className="relative">
      <AccountCircleIcon
        value={userMenu}
        onClick={() => handleClick(!userMenu)}
        className={`${
          theme === "light" ? "text-black" : "text-4E4E4E"
        } text-3.5rem cursor-pointer`}
      />
      {userMenu ? (
        <div
          className={`${
            theme === "light" ? "bg-C8C8C8" : "bg-464646"
          } w-60 right-0 top-20 rounded-26px pt-2 pb-2 flex flex-col gap-1 text-white absolute`}
        >
          {menu.map((item, key) => (
            <h3
              key={key}
              onClick={() => handleClick(!userMenu)}
              className={`${
                theme === "light" ? "text-black" : "text-white"
              } p-3 mt-3 cursor-pointer hover:bg-7e7e7e hover:text-white rounded-26px`}
            >
              {item}
            </h3>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default User;
