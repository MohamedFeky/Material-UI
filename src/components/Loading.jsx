import React, { useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "300px",
        gap: "16px",
      }}
    >
      {isLoading && (
        <>
          <CircularProgress size={60} style={{ color: "#e94560" }} />
          <Typography variant="h6" style={{ color: "#1a1a2e" }}>
            Loading products...
          </Typography>
          <Typography variant="body2" style={{ color: "gray" }}>
            Please wait a moment
          </Typography>
        </>
      )}
    </Box>
  );
}

export default Loading;
