import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 79.99,
    stock: 45,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 49.99,
    stock: 0,
  },
  {
    id: 3,
    name: "Leather Backpack",
    category: "Bags",
    price: 59.99,
    stock: 12,
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 129.99,
    stock: 8,
  },
  {
    id: 5,
    name: "Sunglasses",
    category: "Accessories",
    price: 24.99,
    stock: 60,
  },
  { id: 6, name: "Yoga Mat", category: "Sports", price: 19.99, stock: 0 },
  {
    id: 7,
    name: "Winter Jacket",
    category: "Clothing",
    price: 89.99,
    stock: 30,
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 39.99,
    stock: 22,
  },
];

function ProductsTable() {
  function getStockColor(stock) {
    if (stock === 0) return "error";
    if (stock <= 10) return "warning";
    return "success";
  }

  function getStockLabel(stock) {
    if (stock === 0) return "Out of Stock";
    if (stock <= 10) return `Low (${stock})`;
    return `In Stock (${stock})`;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#1a1a2e", mb: 2 }}
      >
        Products Table
      </Typography>

      <TableContainer
        component={Paper}
        sx={{ borderRadius: 2, boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1a1a2e" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                #
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Product Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Category
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Price
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Stock
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product, index) => (
              <TableRow
                key={product.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                  "&:hover": { backgroundColor: "#f1f1f1" },
                }}
              >
                <TableCell sx={{ color: "gray" }}>{index + 1}</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  {product.name}
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell sx={{ color: "#e94560", fontWeight: "bold" }}>
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Chip
                    label={getStockLabel(product.stock)}
                    color={getStockColor(product.stock)}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ProductsTable;
