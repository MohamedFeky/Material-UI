import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const footerLinks = [
  {
    title: "Shop",
    links: ["New Arrivals", "Best Sellers", "Deals", "Gift Cards"],
  },
  {
    title: "Help",
    links: ["Contact Us", "Track Order", "Returns", "FAQ"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press"],
  },
];

function Footer() {
  return (
    <Box
      style={{
        backgroundColor: "#1a1a2e",
        color: "white",
        padding: "40px 32px 20px",
        marginTop: 40,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            style={{ color: "#e94560", fontWeight: "bold", marginBottom: 8 }}
          >
            ShopZone
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "#aaa", lineHeight: 1.8 }}
          >
            Your one-stop shop for great products at great prices.
          </Typography>

          <Box style={{ marginTop: 12 }}>
            <IconButton style={{ color: "#aaa" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton style={{ color: "#aaa" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton style={{ color: "#aaa" }}>
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>

        {footerLinks.map((section) => (
          <Grid item xs={6} md={2} key={section.title}>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold", marginBottom: 12 }}
            >
              {section.title}
            </Typography>

            {section.links.map((link) => (
              <Typography
                key={link}
                variant="body2"
                style={{ color: "#aaa", marginBottom: 8, cursor: "pointer" }}
              >
                {link}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      <Divider style={{ borderColor: "#333", margin: "24px 0" }} />

      <Typography
        variant="body2"
        style={{ color: "#aaa", textAlign: "center" }}
      >
        © 2025 ShopZone. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
