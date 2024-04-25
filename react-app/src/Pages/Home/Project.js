import React from "react";
import { ThemeState } from "../../Context/UseContext";
import logo from "../../images/Logo_wikiPi_panda.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

function Project() {
  const {
    state: { theme },
  } = ThemeState();
  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-252525"
      } flex justify-start items-start w-full flex-col min-h-100vh`}
    >
      <div className="w-full flex items-start">
        <div className="flex justify-end w-7/12">
          <img className="max-w-2xl w-full" src={logo} alt="Error" />
        </div>
        <div className="flex flex-col gap-3 justify-center mt-20 ml-20 w-full max-w-221px">
          <div className="flex justify-around items-center w-full">
            <div
              style={{ alignContent: "center" }}
              className="text-center alignContent w-47px h-43px bg-E03636"
            >
              <XIcon className="w-41px h-38px text-white" />
            </div>
            <div
              style={{ alignContent: "center" }}
              className="text-center alignContent w-47px h-43px bg-E03636"
            >
              <FacebookIcon className="h-38px w-41px text-white" />
            </div>
            <div
              style={{ alignContent: "center" }}
              className="text-center w-47px h-43px bg-E03636"
            >
              <LinkedInIcon className="h-38px w-41px text-white" />
            </div>
          </div>
          <div className="bg-FF0000 h-0.5 w-full"></div>
        </div>
      </div>
      <div className="w-full flex items-center ">
        <div
          className={`${
            theme === "light" ? "bg-C81B1B" : "bg-6A1414"
          }  w-45px h-260px`}
        ></div>
        <div
          className={`${
            theme === "light"
              ? "bg-E03636 after:border-b-white after:border-t-white after:border-solid"
              : "bg-742020 after:border-b-252525 after:border-t-252525 after:border-solid"
          } w-full h-242px relative triangle-bottomright triangle-topright`}
        >
          <div className=" mt-5 ml-10">
            <h1 className="uppercase text-5xl text-white">Qui sommes-nous?</h1>
            <div className="border-2 max-w-491px mt-2 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
