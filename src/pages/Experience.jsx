import { Box, Typography, Container, Grid, Button } from "@mui/material";

import heroImg from "../assets/heroImg.JPG";
import templeImg from "../assets/heroImg.JPG";
import aartiImg from "../assets/heroImg.JPG";
import stayImg from "../assets/heroImg.JPG";
import aroundImg from "../assets/heroImg.JPG";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Experience() {
    return (
        <Box>

            {/* HERO */}
            <Box
                sx={{
                    height: { xs: "65vh", md: "85vh" },
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,.65)"
                    }}
                />

                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center"
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "42px", md: "72px" },
                            fontWeight: "bold",
                            color: "#fff"
                        }}
                    >
                        Divine Experiences
                    </Typography>

                    <Typography
                        sx={{
                            mt: 3,
                            fontSize: { xs: "18px", md: "24px" },
                            color: "#FFE0B2"
                        }}
                    >
                        Live spirituality, devotion and sacred moments
                    </Typography>

                </Box>
            </Box>

            <Container sx={{ py: 12 }}>

                <Typography
                    sx={{
                        fontSize: "48px",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#6D1B1B",
                        mb: 7
                    }}
                >
                    Divine Experiences
                </Typography>

                <Grid container spacing={5}>

                    {[
                        {
                            title: "Temple Experience",
                            image: templeImg
                        },
                        {
                            title: "Ganga Aarti",
                            image: aartiImg
                        },
                        {
                            title: "Stay Experience",
                            image: stayImg
                        },
                        {
                            title: "Spiritual Surroundings",
                            image: aroundImg
                        },
                        {
                            title: "Satvik Dining",
                            image: heroImg
                        }
                    ].map((item) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>

                            <Box
                                sx={{
                                    height: "420px",
                                    borderRadius: "30px",
                                    overflow: "hidden",
                                    position: "relative",
                                    cursor: "pointer",

                                    "&:hover img": {
                                        transform: "scale(1.08)"
                                    },

                                    "&:hover .overlay": {
                                        background: "rgba(0,0,0,.45)"
                                    }
                                }}
                            >

                                {/* IMAGE */}
                                <Box
                                    component="img"
                                    src={item.image}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "0.6s"
                                    }}
                                />

                                {/* OVERLAY */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.25))",
                                        transition: "0.4s"
                                    }}
                                />

                                {/* CONTENT ON IMAGE */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 35,
                                        left: 30,
                                        right: 30,
                                        zIndex: 2
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            fontSize: "34px",
                                            fontWeight: "bold",
                                            color: "#fff",
                                            lineHeight: 1.2
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            width: "60px",
                                            height: "4px",
                                            background: "#FFD54F",
                                            mt: 2,
                                            borderRadius: "10px"
                                        }}
                                    />

                                </Box>

                            </Box>

                        </Grid>
                    ))}

                </Grid>

            </Container>

            {/* DAILY EXPERIENCE TIMELINE */}
            <Container sx={{ py: 12 }}>

                <Typography
                    sx={{
                        fontSize: "42px",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#6D1B1B",
                        mb: 8
                    }}
                >
                    Daily Spiritual Journey
                </Typography>

                <Grid container spacing={4}>

                    {[
                        "🌅 Morning Aarti",
                        "🧘 Meditation",
                        "🍲 Satvik Prasad",
                        "📿 Satsang",
                        "🪔 Evening Ganga Aarti"
                    ].map((item) => (
                        <Grid size={{ xs: 12, md: 4 }} key={item}>
                            <Box
                                sx={{
                                    p: 4,
                                    textAlign: "center",
                                    borderRadius: "20px",
                                    background: "#FFF8F0",
                                    boxShadow: "0 8px 20px rgba(0,0,0,.08)"
                                }}
                            >
                                <Typography fontWeight="bold">
                                    {item}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}

                </Grid>

            </Container>



            {/* FINAL CTA */}
            <Box
                sx={{
                    py: 12,
                    textAlign: "center",
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                }}
            >

                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,.65)"
                    }}
                />

                <Box sx={{ position: "relative", zIndex: 2 }}>

                    <Typography
                        sx={{
                            fontSize: { xs: "40px", md: "64px" },
                            fontWeight: "bold",
                            color: "#fff"
                        }}
                    >
                        Come Experience Divine Peace
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            mt: 5,
                            background: "#FFD54F",
                            color: "#6D1B1B",
                            fontWeight: "bold"
                        }}
                    >
                        Plan Your Visit
                    </Button>

                </Box>

            </Box>

        </Box>
    );
}