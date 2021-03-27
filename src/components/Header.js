import React from "react";
import theme from "../theme";

// Components
import Weather from "./Weather";
import Clock from "./Clock";

const Header = () => {
  return (
    <header style={headerStyles}>
      <Weather />
      <h1 style={h1}>NoteCards</h1>
      <Clock />
    </header>
  );
};

const headerStyles = {
  fontSize: theme.lengthMd3,
  color: theme.colorText,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "2rem",
};
const h1 = {
  fontWeight: "100",
  borderRadius: "5px",
  paddingTop: "1rem",
};

export default Header;
