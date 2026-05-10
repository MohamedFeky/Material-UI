import { createContext, useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import getTheme from "../utility/theme";

export const ThemeContext = createContext();

export default function ThemeProvidr({ children }) {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = getTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
