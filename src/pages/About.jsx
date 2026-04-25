import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import aboutHeroImage from "../assets/about.JPG";

const About = () => {
    return (
        <Box>

            {/* 🛕 HERO SECTION */}
            <Box
                sx={{
                    height: { xs: "55vh", md: "70vh" },
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {/* 🖼️ Background Image FIX */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${aboutHeroImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.5)", // 🔥 makes text visible
                    }}
                />

                {/* 🟠 Gradient Overlay (Premium Look) */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.7)"
                    }}
                />

                {/* ✨ Content */}
                <Container sx={{ position: "relative", zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Small Heading */}
                        <Typography
                            sx={{
                                color: "#FFE0B2",
                                letterSpacing: 3,
                                fontWeight: "600",
                                mb: 1,
                                fontSize: { xs: "12px", md: "16px" },
                            }}
                        >
                            🪔 Dharmasangh
                        </Typography>

                        {/* Main Heading */}
                        <Typography
                            sx={{
                                fontSize: { xs: "32px", md: "64px" },
                                fontWeight: "bold",
                                color: "#fff",
                                mb: 2,
                                textShadow: "0 6px 25px rgba(0,0,0,0.7)",
                                letterSpacing: 1,
                            }}
                        >
                            About Us
                        </Typography>

                        {/* Premium Divider */}
                        <Box
                            sx={{
                                width: "100px",
                                height: "4px",
                                background: "linear-gradient(to right, #F57C00, #FFD180)",
                                mx: "auto",
                                borderRadius: "10px",
                                mb: 3,
                            }}
                        />

                        {/* Subtitle */}
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "20px" },
                                color: "#FFF3E0",
                                maxWidth: "750px",
                                mx: "auto",
                                lineHeight: 1.6,
                            }}
                        >
                            Discover our journey of spirituality, service, and devotion,
                            rooted in the sacred land of Rishikesh where faith meets peace.
                        </Typography>
                    </motion.div>
                </Container>
            </Box>
            {/* 📜 CONTENT SECTION */}
            <Container sx={{ py: { xs: 6, md: 10 } }}>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Intro */}
                    <Typography
                        sx={{
                            fontSize: { xs: "16px", md: "20px" },
                            color: "#4E342E",
                            mb: 5,
                            lineHeight: 1.9,
                            fontWeight: "500",
                        }}
                    >
                        Established in the serene lands of Rishikesh, Uttarakhand, India, in
                        the year 1967, the Dharmasangh resonates with a
                        profound legacy of spirituality, service, and community upliftment.
                    </Typography>

                    {/* 🔥 GRID SECTIONS */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                            gap: 4,
                            alignItems: "stretch", // ✅ IMPORTANT
                        }}
                    >

                        {/* LEFT */}
                        <Box>
                            <Typography sx={{ mb: 3, color: "#6D4C41", lineHeight: 1.8 }}>
                                Rooted in the sacred soil of Rishikesh, our journey began with a
                                vision to nurture the spiritual essence and cultural richness of
                                our heritage. Since our inception, we have been dedicated to
                                fostering a deep sense of belonging and reverence among devotees.
                            </Typography>

                            <Typography sx={{ mb: 3, color: "#6D4C41", lineHeight: 1.8 }}>
                                At the heart of our endeavors lie our commitment to organizing
                                vibrant cultural festivals that celebrate the diversity of our
                                traditions and unite communities.
                            </Typography>

                            <Typography sx={{ mb: 3, color: "#6D4C41", lineHeight: 1.8 }}>
                                As guardians of our sacred heritage, we undertake temple
                                restoration, preserving ancient sanctuaries as living symbols of
                                faith and devotion.
                            </Typography>
                            {/* MORE TEXT */}
                            <Box mt={4}>
                                <Typography sx={{ mb: 3, color: "#6D4C41", lineHeight: 1.8 }}>
                                    In our pursuit of knowledge, we uphold Gurukul education,
                                    nurturing wisdom and understanding of our scriptures and
                                    traditions.
                                </Typography>

                                <Typography sx={{ mb: 3, color: "#6D4C41", lineHeight: 1.8 }}>
                                    Through health camps, we extend compassion and essential
                                    healthcare to underserved communities, embodying the true spirit
                                    of seva.
                                </Typography>

                                <Typography sx={{ mb: 3, color: "#6D4C41", lineHeight: 1.8 }}>
                                    For over five decades, the Dharmasangh has stood as
                                    a beacon of light, guiding souls on their spiritual journey and
                                    inspiring positive change.
                                </Typography>

                                <Typography sx={{ color: "#6D4C41", lineHeight: 1.8 }}>
                                    Together, let us continue to walk the path of dharma, weaving
                                    spirituality and service into the fabric of our lives.
                                </Typography>
                            </Box>
                        </Box>

                        {/* RIGHT IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80"
                                alt="rishikesh"
                                sx={{
                                    width: "100%",
                                    height: { xs: "250px", md: "100%" }, // ✅ FULL HEIGHT
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                }}
                            />
                        </motion.div>
                    </Box>

                </motion.div>
            </Container>

        </Box>
    );
};

export default About;