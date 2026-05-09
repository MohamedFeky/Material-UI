import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const allProducts = [
  "Wireless Headphones",
  "Running Shoes",
  "Leather Backpack",
  "Smart Watch",
  "Sunglasses",
  "Bluetooth Speaker",
  "Winter Jacket",
  "Yoga Mat",
  "Phone Case",
  "Gaming Mouse",
];

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const results = allProducts.filter((product) =>
    product.toLowerCase().includes(searchText.toLowerCase()),
  );

  function handleSelect(product) {
    setSearchText(product);
    setIsOpen(false);
  }

  function handleClear() {
    setSearchText("");
    setIsOpen(false);
  }

  return (
    <Box style={{ position: "relative", maxWidth: 520, margin: "24px auto" }}>
      <Paper
        style={{
          display: "flex",
          alignItems: "center",
          padding: "4px 12px",
          borderRadius: 10,
          border: isOpen ? "2px solid #e94560" : "2px solid #ddd",
        }}
      >
        <SearchIcon style={{ color: "gray", marginRight: 8 }} />

        <InputBase
          placeholder="Search for products..."
          value={searchText}
          fullWidth
          onChange={(e) => {
            setSearchText(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        />

        {searchText && (
          <IconButton size="small" onClick={handleClear}>
            <ClearIcon fontSize="small" />
          </IconButton>
        )}
      </Paper>

      {isOpen && searchText && (
        <Paper
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 10,
            borderRadius: "0 0 10px 10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            maxHeight: 260,
            overflowY: "auto",
          }}
        >
          {results.length > 0 ? (
            <List dense>
              {results.map((product) => (
                <ListItem
                  button
                  key={product}
                  onMouseDown={() => handleSelect(product)}
                >
                  <SearchIcon
                    style={{ color: "gray", marginRight: 10, fontSize: 18 }}
                  />
                  <ListItemText primary={product} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography style={{ padding: 16, color: "gray" }}>
              No results found for "{searchText}"
            </Typography>
          )}
        </Paper>
      )}
    </Box>
  );
}

export default SearchBar;
