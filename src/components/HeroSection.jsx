import { Box, Container, Grid, Typography, Button } from "@mui/material";

export function HeroSection() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography
              variant="h2"
              fontWeight={700}
              color="#181c21"
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              material ui is Open Source Lib
            </Typography>
            <Typography variant="h5" fontWeight={400} color="text.secondary">
              consistent user interfaces in React
            </Typography>
            <Box sx={{ display: "flex", gap: 2, pt: 1 }}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#005dac",
                  borderRadius: "4px",
                  px: 3,
                  py: 1.25,
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderColor: "#005dac",
                  color: "#005dac",
                  borderRadius: "4px",
                  px: 3,
                  py: 1.25,
                }}
              >
                Documentation
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: 400,
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid #c1c6d4",
            }}
          >
            <Box
              component="img"
              src="src\assets\unnamed.png"
              alt="Coding workspace"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HeroSection;
