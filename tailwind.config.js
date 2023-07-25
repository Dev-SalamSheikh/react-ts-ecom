/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeBlack: "#212121",
        themeBlackBold: "#171B26",
        themeOrange: "#DE3435",
        dropdownText: "#3D424D",
        dropdownHoverBG: "#F7F7F7",
        navBG: "#F8F2EF",
        dashboardBorder: "#EBEBEB",
        placeholderColor: "#737780",
        placeholderColor2: "#3D424D",
        categoryText: "#1e1e1e",
        categoryBorder: "#D2D3D6",
        uploadImageBG: "#fbfbfb",
      },
      boxShadow: {
        dropdown: "0px 20px 44px 0px rgba(16, 24, 40, 0.16)",
      },
    },
  },
  plugins: [],
};
