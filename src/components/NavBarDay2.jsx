import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

import { useContext } from "react";
import { ThemeContext } from "../utility/ThemeContext";

export function NavBarDay2() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.default",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1280px",
          width: "100%",
          mx: "auto",
          px: "24px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight={700} color="primary">
          My Landing Page
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {["Home", "About Us", "Pricing", "Contact Us"].map((link) => (
            <Button
              key={link}
              href="#"
              sx={{
                color: "text.primary",
                textTransform: "none",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {link}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="text"
            sx={{
              textTransform: "none",
              color: "primary.main",
            }}
          >
            Login
          </Button>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "4px",
            }}
          >
            Get Started
          </Button>

          <Button
            color="inherit"
            onClick={toggleTheme}
            startIcon={mode === "dark" ? <LightModeIcon /> : <NightlightIcon />}
          >
            {mode === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBarDay2;
