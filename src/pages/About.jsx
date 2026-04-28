import { Box, Typography, Container, Grid, Avatar, Chip, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutHeroImage from "../assets/about.JPG";
import sadhuImg from "../assets/sadhu.jpg";

// Custom motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// Stagger children animation
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {

    const achievements = [
        { icon: "🏆", title: "Spiritual Excellence", desc: "Recognized for preserving Sanatan Dharma" },
        { icon: "🌍", title: "Global Presence", desc: "Devotees spanning across 20+ countries" },
        { icon: "💝", title: "Community Service", desc: "Serving 50,000+ lives annually" },
        { icon: "📿", title: "Sacred Pilgrimage", desc: "annual spiritual yatras" },
    ];

    return (
        <Box sx={{ overflowX: "hidden" }}>
            {/* 🎨 HERO SECTION - Enhanced */}
            <Box
                sx={{
                    height: { xs: "60vh", md: "90vh" },
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
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
                        backgroundAttachment: { md: "fixed" },
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 100%)",
                    }}
                />

                <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Chip
                            label="🪔 Dharmasangh Since 1967"
                            sx={{
                                bgcolor: "rgba(245, 124, 0, 0.2)",
                                color: "#FFE0B2",
                                backdropFilter: "blur(10px)",
                                mb: 3,
                                fontSize: "14px",
                                letterSpacing: 2,
                            }}
                        />

                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: "42px", sm: "64px", md: "84px" },
                                fontWeight: 800,
                                color: "#fff",
                                mb: 2,
                                textShadow: "0 4px 30px rgba(0,0,0,0.5)",
                                letterSpacing: 2,
                            }}
                        >
                            About Us
                        </Typography>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "120px" }}
                            transition={{ duration: 1, delay: 0.3 }}
                            style={{
                                height: "4px",
                                background: "linear-gradient(90deg, #F57C00, #FFD180)",
                                margin: "0 auto 24px auto",
                                borderRadius: "4px",
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: { xs: "16px", md: "22px" },
                                color: "#FFF3E0",
                                maxWidth: "800px",
                                mx: "auto",
                                lineHeight: 1.6,
                                fontWeight: 400,
                            }}
                        >
                            Discover our journey of spirituality, service, and devotion,
                            rooted in the sacred land of Rishikesh where faith meets peace.
                        </Typography>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Box sx={{ mt: 5 }}>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <Typography sx={{ color: "#FFE0B2", fontSize: "14px", letterSpacing: 2 }}>
                                        SCROLL TO EXPLORE ↓
                                    </Typography>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </motion.div>
                </Container>
            </Box>

            {/* 📜 MAIN CONTENT - Enhanced */}
            <Container sx={{ py: { xs: 8, md: 12 } }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <MotionTypography variants={itemVariants} sx={{ textAlign: "center", mb: 2 }}>
                        <Chip
                            label="Our Journey"
                            sx={{
                                bgcolor: "#FFF3E0",
                                color: "#E65100",
                                fontSize: "14px",
                                fontWeight: 600,
                                letterSpacing: 1,
                            }}
                        />
                    </MotionTypography>

                    <MotionTypography
                        variants={itemVariants}
                        sx={{
                            fontSize: { xs: "32px", md: "48px" },
                            fontWeight: 800,
                            color: "#3E2723",
                            textAlign: "center",
                            mb: 4,
                        }}
                    >
                        A Legacy of Faith & Service
                    </MotionTypography>

                    <MotionTypography
                        variants={itemVariants}
                        sx={{
                            fontSize: { xs: "18px", md: "22px" },
                            color: "#6D4C41",
                            textAlign: "center",
                            maxWidth: "900px",
                            mx: "auto",
                            mb: 6,
                            lineHeight: 1.6,
                            fontStyle: "italic",
                        }}
                    >
                        "Rooted in the sacred soil of Rishikesh, our journey began with a
                        vision to nurture the spiritual essence and cultural richness of our heritage."
                    </MotionTypography>

                    <Grid container spacing={6} alignItems="stretch">
                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
                            <motion.div variants={itemVariants}>
                                <Box sx={{ position: "relative" }}>
                                    <Box
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            background: "linear-gradient(135deg, #FFF8E1 0%, #FFE0B2 100%)",
                                            p: 4,
                                            borderRadius: "30px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: -50,
                                                right: -50,
                                                width: "150px",
                                                height: "150px",
                                                background: "radial-gradient(circle, rgba(245,124,0,0.1) 0%, rgba(245,124,0,0) 70%)",
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <Typography sx={{ mb: 3, color: "#5D4037", lineHeight: 1.8, fontSize: "16px" }}>
                                            At the heart of our endeavors lie our commitment to organizing
                                            vibrant cultural festivals that celebrate the diversity of our
                                            traditions and unite communities. As guardians of our sacred heritage,
                                            we undertake temple restoration, preserving ancient sanctuaries as
                                            living symbols of faith and devotion.
                                        </Typography>

                                        <Typography sx={{ mb: 3, color: "#5D4037", lineHeight: 1.8, fontSize: "16px" }}>
                                            In our pursuit of knowledge, we uphold Gurukul education,
                                            nurturing wisdom and understanding of our scriptures and traditions.
                                            Through health camps, we extend compassion and essential healthcare
                                            to underserved communities, embodying the true spirit of seva.
                                        </Typography>

                                        <Typography sx={{ color: "#5D4037", lineHeight: 1.8, fontSize: "16px" }}>
                                            For over five decades, the Dharmasangh has stood as a beacon of light,
                                            guiding souls on their spiritual journey and inspiring positive change.
                                            Together, let us continue to walk the path of dharma, weaving spirituality
                                            and service into the fabric of our lives.
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        borderRadius: "30px",
                                        overflow: "hidden",
                                        height: "100%",              // 🔥 IMPORTANT
                                        display: "flex",             // 🔥 IMPORTANT
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={sadhuImg}
                                        alt="Rishikesh spiritual landscape"
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            flex: 1,                 // 🔥 THIS FIXES EVERYTHING
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%)",
                                        }}
                                    />

                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>

            {/* 🎯 VISION SECTION - Enhanced */}
            <Box sx={{ background: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)", py: 10 }}>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Typography
                            sx={{
                                fontSize: "36px",
                                fontWeight: 800,
                                textAlign: "center",
                                color: "#BF360C",
                                mb: 2,
                            }}
                        >
                            Our Vision & Mission
                        </Typography>
                        <Box
                            sx={{
                                width: "80px",
                                height: "3px",
                                background: "#BF360C",
                                mx: "auto",
                                mb: 4,
                            }}
                        />
                        <Typography
                            sx={{
                                maxWidth: "900px",
                                mx: "auto",
                                textAlign: "center",
                                color: "#4E342E",
                                lineHeight: 1.8,
                                fontSize: "18px",
                                fontWeight: 500,
                            }}
                        >
                            To preserve and promote the eternal values of Sanatan Dharma,
                            inspire spiritual awakening, and serve society through compassion, education,
                            and devotion. We aim to create a harmonious world rooted in dharma and seva.
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            {/* 🏆 ACHIEVEMENTS SECTION */}
            <Container sx={{ py: 10 }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <MotionTypography variants={itemVariants} sx={{ textAlign: "center", mb: 2 }}>
                        <Chip label="Recognition" sx={{ bgcolor: "#FFF3E0", color: "#E65100" }} />
                    </MotionTypography>
                    <MotionTypography
                        variants={itemVariants}
                        sx={{
                            fontSize: "36px",
                            fontWeight: 800,
                            textAlign: "center",
                            color: "#3E2723",
                            mb: 6,
                        }}
                    >
                        Our Achievements
                    </MotionTypography>

                    <Grid container spacing={3}>
                        {achievements.map((achievement, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ rotateY: 180 }}
                                    transition={{ duration: 0.6 }}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <Box
                                        sx={{
                                            p: 4,
                                            textAlign: "center",
                                            background: "linear-gradient(135deg, #FFF8E1 0%, #fff 100%)",
                                            borderRadius: "20px",
                                            border: "1px solid rgba(245,124,0,0.2)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                background: "linear-gradient(135deg, #FFE0B2 0%, #FFF8E1 100%)",
                                            },
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "48px", mb: 2 }}>{achievement.icon}</Typography>
                                        <Typography sx={{ fontWeight: 700, color: "#E65100", mb: 1 }}>
                                            {achievement.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: "14px", color: "#6D4C41" }}>
                                            {achievement.desc}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>

            {/* 🔗 CONNECTIONS - Enhanced */}
            <Box sx={{ background: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)", py: 10, mb: 6 }}>
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <MotionTypography variants={itemVariants} sx={{ textAlign: "center", mb: 2 }}>
                            <Chip label="Partners" sx={{ bgcolor: "#fff", color: "#E65100" }} />
                        </MotionTypography>
                        <MotionTypography
                            variants={itemVariants}
                            sx={{
                                fontSize: "36px",
                                fontWeight: 800,
                                textAlign: "center",
                                color: "#3E2723",
                                mb: 6,
                            }}
                        >
                            Our Connections
                        </MotionTypography>

                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                                    <Box
                                        onClick={() => window.open("https://ekantkutiyamandirtrust.org/", "_blank")}
                                        sx={{
                                            p: 4,
                                            borderRadius: "30px",
                                            background: "#fff",
                                            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                                            transition: "all 0.3s ease",
                                            cursor: "pointer",
                                            "&:hover": {
                                                transform: "scale(1.03)",
                                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                                            },
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "32px", mb: 2 }}>🏛️</Typography>
                                        <Typography sx={{ fontWeight: 800, fontSize: "22px", mb: 2, color: "#E65100" }}>
                                            Ekant Kutiya Mandir Trust
                                        </Typography>
                                        <Typography sx={{ color: "#5D4037", lineHeight: 1.8 }}>
                                            Our organization works closely with Ekant Kutiya Mandir Trust in
                                            preserving spiritual traditions, organizing religious activities, and
                                            maintaining sacred spaces for devotees worldwide.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
                                    <Box
                                        onClick={() => window.open("https://shrikrishnagaushala.in/", "_blank")}
                                        sx={{
                                            p: 4,
                                            borderRadius: "30px",
                                            background: "#fff",
                                            boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                                            transition: "all 0.3s ease",
                                            cursor: "pointer",
                                            "&:hover": {
                                                transform: "scale(1.03)",
                                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                                            },
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "32px", mb: 2 }}>🐄</Typography>
                                        <Typography sx={{ fontWeight: 800, fontSize: "22px", mb: 2, color: "#E65100" }}>
                                            Shri Krishna Gaushala
                                        </Typography>
                                        <Typography sx={{ color: "#5D4037", lineHeight: 1.8 }}>
                                            We are dedicated to cow protection and service through Shri Krishna
                                            Gaushala, ensuring compassionate care, proper shelter, and complete
                                            nourishment for cows in need.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
};

export default About;