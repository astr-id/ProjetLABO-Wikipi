import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import { ThemeState } from "../../Context/UseContext";
function SideNavigation() {
  const {
    state: { theme },
  } = ThemeState();
  return (
    <div
      className={`${
        theme === "light" ? "bg-D35656" : "bg-662626"
      } w-300px justify-self-start  min-h-100vh`}
    >
      <ul className="flex flex-col gap-2 items-center w-full">
        <li className="w-full flex justify-center">
          <NavLink
            to="/"
            className={`${
              theme === "light"
                ? "bg-D35656 text-black"
                : "bg-662626 text-white"
            } text-xl w-full text-center p-10px`}
          >
            Projects
          </NavLink>
        </li>
        <div className="w-full">
          <li className="w-full">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className={`${
                  theme === "light"
                    ? "bg-D35656 text-black"
                    : "bg-651111 text-white"
                } text-lg`}
              >
                Titre Categorie 1
              </AccordionSummary>
              <div className="p-1px bg-222222"></div>
              <AccordionDetails
                className={`${
                  theme === "light"
                    ? "bg-D35656 text-black"
                    : "bg-662626 text-white"
                } w-full flex flex-col gap-1 text-center p-5px_0px`}
              >
                <NavLink
                  className={`${
                    theme === "light"
                      ? " bg-C95353 border-C95353"
                      : "bg-681E1E border-681E1E"
                  } text-base p-10px rounded-lg border-2`}
                >
                  Titre projet 1
                </NavLink>
                <NavLink
                  className={`${
                    theme === "light"
                      ? " bg-C95353 border-C95353"
                      : "bg-681E1E border-681E1E"
                  } text-base p-10px rounded-lg border-2`}
                >
                  Titre projet 2
                </NavLink>
                <NavLink
                  className={`${
                    theme === "light"
                      ? " bg-C95353 border-C95353"
                      : "bg-681E1E border-681E1E"
                  } text-base p-10px rounded-lg border-2`}
                >
                  Titre projet 3
                </NavLink>
              </AccordionDetails>
            </Accordion>
          </li>
          <div className="p-1px bg-222222"></div>
          <li className="w-full">
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className={`${
                  theme === "light"
                    ? "bg-D35656 text-black"
                    : "bg-651111 text-white"
                } text-lg`}
              >
                Titre Categorie 2
              </AccordionSummary>
              <div className="p-1px bg-222222"></div>
              <AccordionDetails
                className={`${
                  theme === "light"
                    ? "bg-D35656 text-black"
                    : "bg-662626 text-white"
                } w-full flex flex-col gap-1 text-center p-5px_0px`}
              >
                <NavLink
                  className={`${
                    theme === "light"
                      ? " bg-C95353 border-C95353"
                      : "bg-681E1E border-681E1E"
                  } text-base p-10px rounded-lg border-2`}
                >
                  Titre projet 1
                </NavLink>
                <NavLink
                  className={`${
                    theme === "light"
                      ? " bg-C95353 border-C95353"
                      : "bg-681E1E border-681E1E"
                  } text-base p-10px rounded-lg border-2`}
                >
                  Titre projet 2
                </NavLink>
                <NavLink
                  className={`${
                    theme === "light"
                      ? " bg-C95353 border-C95353"
                      : "bg-681E1E border-681E1E"
                  } text-base p-10px rounded-lg border-2`}
                >
                  Titre projet 3
                </NavLink>
              </AccordionDetails>
            </Accordion>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default SideNavigation;
