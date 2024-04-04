/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "10%": "10%",
        "30%": "30%",
        "300px": "300px",
      },
      height: {
        inherit: "inherit !important",
      },
      minHeight: {
        "100vh": "100vh",
      },
      fontSize: {
        "30px": "30px !important",
        "2rem": "2rem !important",
        "3.5rem": "3.5rem !important",
        "3rem": "3rem !important",
      },
      backgroundColor: {
        "252525": "#252525 !important",
        efefef: "#efefef !important",
        "7e7e7e": "#7e7e7e !important",
        "2c2c2c": "#2c2c2c !important",
        "222222": "#222222 !important",
        "662626": "#662626 !important",
        "651111": "#651111 !important",
        "681E1E": "#681E1E !important",
        d1d1d1: "#d1d1d1 !important",
        AEAEAE: "#aeaeae !important",
        "4E4E4E": "#4E4E4E !important",
        "464646": "#464646 !important",
        C8C8C8: "#C8C8C8 !important",
        D35656: "#D35656 !important",
        C95353: "#C95353 !important",
      },
      textColor: {
        "252525": "#252525",
        "808080": "#808080",
        white: "#fff !important",
        "4E4E4E": "#4E4E4E",
      },
      padding: {
        "lr-10px_tb-20px": "10px 20px",
        "10px": "10px",
        "1px": "1px",
        "5px_0px": "5px 0px !important",
      },
      borderRadius: {
        "26px": "26px",
      },
      borderColor: {
        C95353: "#C95353 !important",
        "681E1E": "#681E1E !important",
      },
    },
  },
  plugins: [],
};