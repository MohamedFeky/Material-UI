import { Box, Container, Typography } from "@mui/material";

const links = [
  "Privacy Policy",
  "Terms of Service",
  "Contact Us",
  "Twitter",
  "LinkedIn",
];

export function FooterDay2() {
  return (
    <Box component="footer" sx={{ borderTop: "1px solid #c1c6d4", py: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h6" fontWeight={700} color="primary">
            My Landing Page
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {links.map((link) => (
              <Typography
                key={link}
                component="a"
                href="#"
                sx={{
                  color: "#414752",
                  textDecoration: "none",
                  "&:hover": { color: "#006a60" },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          <Typography variant="caption" color="secondary">
            © 2024 bla bla All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default FooterDay2;
