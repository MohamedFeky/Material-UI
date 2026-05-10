import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import AlbumRoundedIcon from "@mui/icons-material/AlbumRounded";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import AnchorRoundedIcon from "@mui/icons-material/AnchorRounded";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";

const features = [
  {
    icon: <AlbumRoundedIcon />,
    title: "Modular Components",
    description:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    iconBg: "#1976d2",
    iconColor: "#ffffff",
  },
  {
    icon: <AcUnitRoundedIcon />,
    title: "Flat Design",
    description:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    iconBg: "#85f6e5",
    iconColor: "#007166",
  },
  {
    icon: <AnchorRoundedIcon />,
    title: "MUI Ready",
    description:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    iconBg: "#ba5b00",
    iconColor: "#ffffff",
  },
  {
    icon: <BedtimeRoundedIcon />,
    title: "consistant",
    description:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
    iconBg: "#3d94d7",
    iconColor: "#ffffff",
  },
];

export function BodySection() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ mb: 5, color: "#5164e1", textAlign: "center", fontWeight: 600 }}
        >
          Core Features
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.id}>
              <Card
                elevation={0}
                sx={{
                  border: "1px solid #c1c6d4",
                  borderRadius: "4px",
                  height: "100%",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "4px",
                      backgroundColor: feature.iconBg,
                      color: feature.iconColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={600} color="#181c21">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default BodySection;
