import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeState } from "../../../../Context/UseContext";

function SearchBar({ setData }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const data = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setData(data);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  const {
    state: { theme },
  } = ThemeState();
  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-2c2c2c"
      } w-full h-9 pl-4 flex items-center`}
    >
      <input
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Rechercher"
        className={`h-full ${
          theme === "light" ? "bg-white text-black" : "bg-2c2c2c text-white"
        } text-sm focus:outline-none w-full`}
      />
      <SearchIcon
        className={`${
          theme === "light" ? "bg-AEAEAE text-808080" : "text-808080 bg-black"
        } text-30px h-inherit cursor-pointer w-full pl-1 pr-1`}
      />
    </div>
  );
}

export default SearchBar;
