import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {

    const inputStyle = {
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        outline: "none",
        fontSize: "14px",
    };

    const btnStyle = {
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#F57C00",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
    };

    return (
        <Box>

            {/* 🛕 HERO SECTION */}
            <Box
                sx={{
                    height: { xs: "50vh", md: "60vh" },
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textAlign: "center",
                    backgroundImage:
                        "url('https://ekantkutiyamandirtrust.org/wp-content/uploads/2024/02/india-architecture-scaled.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.7)",
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ position: "relative", zIndex: 2 }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "28px", md: "50px" },
                            fontWeight: "bold",
                        }}
                    >
                        Get in Touch
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "14px", md: "18px" },
                            color: "#FFE0B2",
                            mt: 2,
                        }}
                    >
                        We are here to connect and serve you
                    </Typography>
                </motion.div>
            </Box>

            {/* 📞 CONTACT DETAILS */}
            <Container sx={{ py: { xs: 6, md: 10 } }}>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <Grid container spacing={4} alignItems="stretch">

                        {/* 🟠 LEFT SIDE (CONTACT INFO) */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box
                                sx={{
                                    p: 4,
                                    borderRadius: "16px",
                                    backgroundColor: "#FFF3E0",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    sx={{ fontWeight: "bold", mb: 3, color: "#E65100", fontSize: "20px" }}
                                >
                                    📞 Contact Details
                                </Typography>

                                {/* Email */}
                                <Typography sx={{ mb: 1, fontWeight: "600" }}>📧 Email</Typography>
                                <Typography sx={{ mb: 2, color: "#5D4037" }}>
                                    info@dharmasangh.org
                                </Typography>

                                {/* Phone */}
                                <Typography sx={{ mb: 1, fontWeight: "600" }}>📞 Phone</Typography>
                                <Typography sx={{ mb: 3, color: "#5D4037" }}>
                                    85069 19191
                                </Typography>

                                {/* Address */}
                                <Typography sx={{ mb: 1, fontWeight: "600" }}>📍 Location</Typography>
                                <Typography sx={{ color: "#5D4037" }}>
                                    361, 361/1, Haridwar Rd, Palika Nagar,
                                    Rishikesh, Uttarakhand 249201
                                </Typography>
                            </Box>
                        </Grid>

                        {/* 🟢 RIGHT SIDE (FORM) */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box
                                component="form"
                                sx={{
                                    p: 4,
                                    borderRadius: "16px",
                                    backgroundColor: "#fff",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    sx={{ fontWeight: "bold", mb: 3, color: "#E65100", fontSize: "20px" }}
                                >
                                    ✉️ Send Message
                                </Typography>

                                <Grid container spacing={2}>

                                    <Grid size={{ xs: 12 }}>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            style={inputStyle}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            style={inputStyle}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <input
                                            type="tel"
                                            placeholder="Your Contact Number"
                                            style={inputStyle}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <textarea
                                            rows="4"
                                            placeholder="Your Message"
                                            style={{ ...inputStyle, resize: "none" }}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12 }}>
                                        <button style={btnStyle}>
                                            Send Message
                                        </button>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Grid>

                    </Grid>
                </motion.div>
            </Container>

        </Box>
    );
};

export default Contact;