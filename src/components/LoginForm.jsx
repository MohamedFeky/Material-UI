import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleLogin() {
    if (!email || !password) {
      setMessage("Please fill in both fields.");
      setIsError(true);
      return;
    }

    setMessage("Login successful! Welcome back 👋");
    setIsError(false);
  }

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card style={{ width: 370, borderRadius: 16, padding: 8 }}>
        <CardContent>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", textAlign: "center", marginBottom: 4 }}
          >
            Welcome Back
          </Typography>

          <Typography
            variant="body2"
            style={{ textAlign: "center", color: "gray", marginBottom: 20 }}
          >
            Log in to your ShopZone account
          </Typography>

          {message && (
            <Alert
              severity={isError ? "error" : "success"}
              style={{ marginBottom: 16 }}
            >
              {message}
            </Alert>
          )}

          <TextField
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: 16 }}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: 8 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Typography
            variant="body2"
            style={{
              textAlign: "right",
              color: "#e94560",
              cursor: "pointer",
              marginBottom: 20,
            }}
          >
            Forgot Password?
          </Typography>

          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            style={{
              backgroundColor: "#1a1a2e",
              color: "white",
              fontWeight: "bold",
              padding: "10px 0",
            }}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            style={{ textAlign: "center", color: "gray", marginTop: 16 }}
          >
            Don't have an account?{" "}
            <span
              style={{
                color: "#e94560",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginForm;
