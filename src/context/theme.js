import React from "react";
import { createTheme } from "@/theme";

const theme = createTheme();
const ThemeContext = React.createContext(theme);

export const ThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};
