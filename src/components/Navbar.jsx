import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = ["Home", "Shop", "Deals", "About"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#1a1a2e" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setMenuOpen(true)}
            sx={{ display: { xs: "block", md: "none" }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            style={{ flexGrow: 1, color: "#e94560", fontWeight: "bold" }}
          >
            ShopZone
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navLinks.map((link) => (
              <Button key={link} style={{ color: "white" }}>
                {link}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box style={{ width: 220 }}>
          <Typography
            variant="h6"
            style={{ padding: 16, color: "#e94560", fontWeight: "bold" }}
          >
            ShopZone
          </Typography>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link} onClick={() => setMenuOpen(false)}>
                <ListItemText primary={link} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
