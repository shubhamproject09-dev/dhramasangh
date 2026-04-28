import { Box, Typography, IconButton, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import logo from "../assets/dharamlogo.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#6D1B1B",
                color: "#fff",
                pt: 7,
                pb: 3,
                borderTop: "4px solid #FFD54F"
            }}
        >
            <Container>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1.5fr 1fr 1fr"
                        },
                        gap: 5,
                        alignItems: "start"
                    }}
                >

                    {/* Logo + About */}
                    <Box>
                        <Box
                            component="img"
                            src={logo}
                            alt="logo"
                            sx={{
                                height: 130,
                                width: 120,
                                mb: 1
                            }}
                        />

                        <Typography
                            sx={{
                                lineHeight: 1.8,
                            }}
                        >
                            Empowering hearts, uplifting souls:
                            Dharmasangh,
                            where kindness finds a home.
                        </Typography>
                    </Box>


                    {/* Quick Links */}
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                mb: 2,
                                color: "#FFD54F"
                            }}
                        >
                            Quick Links
                        </Typography>

                        {[
                            "Home",
                            "About",
                            "Accommodation",
                            "Experience",
                            "Contact",
                            "Payment"
                        ].map((item) => (
                            <Box
                                key={item}
                                component={Link}
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: 1.2,   // arrow aur text ke beech spacing
                                    mb: 1.5,
                                    color: "#fff",
                                    textDecoration: "none",
                                    transition: "0.3s",

                                    "&:hover": {
                                        color: "#FFD54F",
                                        pl: 1
                                    }
                                }}
                            >

                                <KeyboardArrowRightIcon
                                    sx={{
                                        fontSize: "20px",
                                        display: "flex"
                                    }}
                                />

                                <Typography
                                    sx={{
                                        lineHeight: 1,
                                        display: "flex",
                                        alignItems: "center"
                                    }}
                                >
                                    {item}
                                </Typography>

                            </Box>
                        ))}
                    </Box>


                    {/* Social */}
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "20px",
                                mb: 2,
                                color: "#FFD54F"
                            }}
                        >
                            Follow Us
                        </Typography>

                        <Box sx={{ display: "flex", gap: 2 }}>

                            <IconButton
                                sx={{
                                    background: "#fff",
                                    color: "#1877F2",

                                    "&:hover": {
                                        background: "#1877F2",
                                        color: "#fff",
                                        transform: "scale(1.1)"
                                    }
                                }}
                            >
                                <FacebookIcon />
                            </IconButton>


                            <IconButton
                                sx={{
                                    background: "#fff",
                                    color: "#E4405F",

                                    "&:hover": {
                                        background: "#E4405F",
                                        color: "#fff",
                                        transform: "scale(1.1)"
                                    }
                                }}
                            >
                                <InstagramIcon />
                            </IconButton>


                            <IconButton
                                sx={{
                                    background: "#fff",
                                    color: "#FF0000",

                                    "&:hover": {
                                        background: "#FF0000",
                                        color: "#fff",
                                        transform: "scale(1.1)"
                                    }
                                }}
                            >
                                <YouTubeIcon />
                            </IconButton>

                        </Box>

                        <Typography sx={{ mt: 1 }}>
                            📧 info@dharmasangh.org
                        </Typography>

                    </Box>

                </Box>


                {/* Bottom Strip */}
                <Box
                    sx={{
                        borderTop: "1px solid rgba(255,213,79,0.3)",
                        mt: 5,
                        pt: 3,
                        textAlign: "center"
                    }}
                >
                    <Typography
                    >
                        © {new Date().getFullYear()} Dharmasangh.
                        All Rights Reserved.
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};

export default Footer;