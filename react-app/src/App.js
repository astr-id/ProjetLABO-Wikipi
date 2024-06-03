import "./App.css";
import Header from "./Components/Header/Header.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Accueil from "./Pages/Home/Accueil.js";
import SideNavigation from "./Components/SideNavigation/SideNavigation.js";
import Connexion from "./Pages/Login/Connexion.js";
import { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function App() {
  const [scrollSideNavigation, setScrollSideNavigation] = useState(false);
  const [connexion, setConnexion] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (connexion === false) {
      navigate("/login"); 
    }
  }, []);

  return (
    <div className="">
      {connexion ? (
        <>
          <Header />
          <div className="flex justify-start items-start">
            <div className="flex justify-between items-start">
              <SideNavigation scrollSideNavigation={scrollSideNavigation} />
              <div className="mt-10">
                <button
                  onClick={() => setScrollSideNavigation(!scrollSideNavigation)}
                  className="pt-5 pb-5 pl-2 pr-2 border-1 border-black rounded-br-2xl rounded-tr-2xl"
                >
                  {scrollSideNavigation ? (
                    <NavigateBeforeIcon className="text-8xl" />
                  ) : (
                    <NavigateNextIcon className="text-8xl" />
                  )}
                </button>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<Accueil />} />{" "}
              {/* 👈 Renders at /app/ */}
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route
            path="/Login"
            element={<Connexion setConnexion={setConnexion} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
