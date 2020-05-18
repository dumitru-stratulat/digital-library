const white = "#FFFFFF";
const black = "#161617";
const gray = "#F8F8F9";
const shadowBlack = "1px 10px 21px -2px rgba(0,0,0,0.39)"; 
const shadowOrange = "1px 10px 21px -2px rgba(130,85,36,0.39)"; 
const borderTomato = "1px solid rgba(255,99,71,0.2)"
const gradientDark = "linear-gradient(#fefefe,black)"
const gradientLight = "linear-gradient(#fefefe,black)"

const themeLight = {
  background: gray,
  body: black,
  shadow: shadowBlack,
  gradient: gradientLight
};

const themeDark = {
  background: black,
  body: white,
  shadow: shadowOrange,
  border: borderTomato,
  gradient: gradientDark
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;