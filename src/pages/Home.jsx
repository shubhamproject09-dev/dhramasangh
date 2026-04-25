import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import templeImg from "../assets/heroImg.JPG";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import BookingModal from "../components/BookingModal";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <Box>

            <Box
                sx={{
                    minHeight: "90vh",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textAlign: "center",
                    backgroundImage: `url(${templeImg})`, // ✅ local image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* 🌑 Overlay */}
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
                {/* ✨ Content */}
                <Container sx={{ position: "relative", zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Main Quote */}
                        <Typography
                            sx={{
                                fontSize: { xs: "22px", md: "42px" },
                                fontWeight: "bold",
                                mb: 2,
                                lineHeight: 1.3,
                            }}
                        >
                            Once you choose hope,
                            <br /> anything is possible...
                        </Typography>

                        {/* Sub Text */}
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "20px" },
                                mb: 4,
                                maxWidth: "700px",
                                mx: "auto",
                                color: "#FFE0B2",
                            }}
                        >
                            Step into a world of peace, devotion, and divine energy.
                            Let your soul connect with spirituality and experience
                            the serenity of Dharmasangh.
                        </Typography>

                        {/* Buttons */}
                        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button
                                    variant="contained"
                                    onClick={() => setOpen(true)}
                                    sx={{
                                        backgroundColor: "#F57C00",
                                        px: 3,
                                        py: 1,
                                        fontWeight: "bold",
                                        "&:hover": {
                                            backgroundColor: "#E65100",
                                        },
                                    }}
                                >
                                    Book Your Stay
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button
                                    variant="outlined"
                                    onClick={() => navigate('/contact')}
                                    sx={{
                                        borderColor: "#fff",
                                        color: "#fff",
                                        px: 3,
                                        py: 1,
                                        fontWeight: "bold",
                                        "&:hover": {
                                            backgroundColor: "rgba(255,255,255,0.1)",
                                        },
                                    }}
                                >
                                    Contact
                                </Button>
                            </motion.div>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            <Container sx={{ py: { xs: 6, md: 10 } }}>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                            gap: 4,
                            alignItems: "center",
                        }}
                    >

                        {/* 📝 LEFT SIDE TEXT */}
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: { xs: "22px", md: "34px" },
                                    fontWeight: "bold",
                                    color: "#E65100",
                                    mb: 2,
                                }}
                            >
                                🪷 About Us
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: "16px", md: "20px" },
                                    fontWeight: "600",
                                    color: "#5D4037",
                                    mb: 2,
                                }}
                            >
                                Dharmasangh
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                    color: "#6D4C41",
                                    mb: 2,
                                    lineHeight: 1.7,
                                }}
                            >
                                Founded in 1967, with a religious vision, is a representation of
                                commitment, cooperation, and service. Our trust was established by a
                                group of pious people who were united in their desire to preserve
                                Hinduism’s core principles.
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                    color: "#6D4C41",
                                    mb: 3,
                                    lineHeight: 1.7,
                                }}
                            >
                                Its mission is to protect and promote our rich cultural legacy.
                                At Dharmasangh, we believe that faith has the power to brighten
                                people’s lives and inspire positive change.
                            </Typography>

                            {/* 🔘 Button */}
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button
                                    variant="contained"
                                    onClick={() => navigate('/about')}
                                    sx={{
                                        backgroundColor: "#F57C00",
                                        px: 3,
                                        py: 1,
                                        fontWeight: "bold",
                                        "&:hover": {
                                            backgroundColor: "#E65100",
                                        },
                                    }}
                                >
                                    More About
                                </Button>
                            </motion.div>
                        </Box>

                        {/* 🖼️ RIGHT SIDE IMAGE (Ganga Aarti) */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1600&q=80"
                                alt="ganga aarti"
                                sx={{
                                    width: "100%",
                                    height: { xs: "250px", md: "400px" },
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                    transition: "0.4s",
                                    "&:hover": {
                                        transform: "scale(1.03)",
                                    },
                                }}
                            />
                        </motion.div>

                    </Box>
                </motion.div>
            </Container>

            <Container sx={{ py: { xs: 6, md: 10 } }}>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* 🔥 Heading */}
                    <Typography
                        sx={{
                            fontSize: { xs: "22px", md: "34px" },
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "#E65100",
                            mb: 6,
                        }}
                    >
                        🪔 Our Mission & Values
                    </Typography>

                    {/* 🧱 GRID */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "1fr 1fr",
                                md: "1fr 1fr 1fr 1fr",
                            },
                            gap: 4,
                        }}
                    >
                        {[
                            {
                                title: "Happiness in Many Forms",
                                icon: <FavoriteIcon sx={{ fontSize: 40, color: "#F57C00" }} />,
                            },
                            {
                                title: "Spreading Culture",
                                icon: <TempleHinduIcon sx={{ fontSize: 40, color: "#F57C00" }} />,
                            },
                            {
                                title: "Educating People",
                                icon: <SchoolIcon sx={{ fontSize: 40, color: "#F57C00" }} />,
                            },
                            {
                                title: "Improving Society",
                                icon: <PublicIcon sx={{ fontSize: 40, color: "#F57C00" }} />,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: "#FFF3E0",
                                        p: 4,
                                        borderRadius: "16px",
                                        textAlign: "center",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                        transition: "0.3s",
                                        cursor: "pointer",

                                        height: "100%",              // ✅ important
                                        display: "flex",             // ✅ flex layout
                                        flexDirection: "column",     // ✅ vertical alignment
                                        justifyContent: "center",    // ✅ center content

                                        "&:hover": {
                                            transform: "translateY(-10px)",
                                            boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                                            backgroundColor: "#FFE0B2",
                                        },
                                    }}
                                >
                                    {/* 🔥 Icon */}
                                    <Box sx={{ mb: 2 }}>{item.icon}</Box>

                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "16px", md: "18px" },
                                            fontWeight: "600",
                                            color: "#5D4037",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </motion.div>
            </Container>

            <Container sx={{ py: { xs: 6, md: 10 } }}>
                {/* 🔥 Heading */}
                <Typography
                    sx={{
                        fontSize: { xs: "22px", md: "34px" },
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#E65100",
                        mb: 6,
                    }}
                >
                    🪔 Objectives
                </Typography>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        600: { slidesPerView: 2 },
                        960: { slidesPerView: 3 },
                    }}
                >
                    {[
                        {
                            title: "Festive Celebration",
                            subtitle: "Organising Cultural Programs",
                            desc: "Uniting communities through diverse cultural expressions in our program.",
                            img: "https://ekantkutiyamandirtrust.org/wp-content/uploads/2024/02/2151248411-1536x1024.jpg",
                        },
                        {
                            title: "Temple Restoration",
                            subtitle: "Temple Restoration",
                            desc: "Reviving sacred spaces, restoring spiritual sanctuaries through temple renovation.",
                            img: "https://ekantkutiyamandirtrust.org/wp-content/uploads/2024/02/travelling-nepal-1536x1024.jpg",
                        },
                        {
                            title: "Educating People",
                            subtitle: "Gurukuls",
                            desc: "Nurturing minds and fostering wisdom in the timeless embrace of Gurukuls.",
                            img: "https://ekantkutiyamandirtrust.org/wp-content/uploads/2024/02/2151142572-1536x861.jpg",
                        },
                        {
                            title: "Medical Camp",
                            subtitle: "Organising Health Camps",
                            desc: "Empowering communities through accessible healthcare via organized health camps.",
                            img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
                        },
                        {
                            title: "Feeding People",
                            subtitle: "Feeding People",
                            desc: "Bringing sustenance where it's needed most, one meal, one smile.",
                            img: "https://ekantkutiyamandirtrust.org/wp-content/uploads/2024/02/Feeding-Needy-1536x1024.jpg",
                        },
                    ].map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Box
                                    sx={{
                                        borderRadius: "16px",
                                        overflow: "hidden",
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                                        backgroundColor: "#fff",
                                        transition: "0.3s",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                        },
                                    }}
                                >
                                    {/* 🖼 Image */}
                                    <Box
                                        component="img"
                                        src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                                        alt={item.title}
                                        sx={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                    />

                                    {/* 📄 Content */}
                                    <Box sx={{ p: 3 }}>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: "bold",
                                                color: "#E65100",
                                                mb: 1,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                color: "#5D4037",
                                                mb: 1,
                                            }}
                                        >
                                            {item.subtitle}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: "13px",
                                                color: "#6D4C41",
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>

            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    background: "linear-gradient(to right, #FFF3E0, #FFE0B2)",
                    textAlign: "center",
                }}
            >
                <Container>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* 🔥 Heading */}
                        <Typography
                            sx={{
                                fontSize: { xs: "24px", md: "36px" },
                                fontWeight: "bold",
                                color: "#E65100",
                                mb: 2,
                            }}
                        >
                            📞 Contact Us
                        </Typography>

                        {/* ✨ Sub Heading */}
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "18px" },
                                color: "#5D4037",
                                mb: 2,
                            }}
                        >
                            Connect with us to plan and organise programs to help people
                        </Typography>

                        {/* 💬 Highlight Line */}
                        <Typography
                            sx={{
                                fontSize: { xs: "16px", md: "20px" },
                                fontWeight: "600",
                                color: "#BF360C",
                                mb: 4,
                            }}
                        >
                            Get In Touch
                        </Typography>

                        {/* 🔘 Buttons */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: 2,
                                flexWrap: "wrap",
                            }}
                        >
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Button
                                    variant="contained"
                                    onClick={() => navigate('/contact')}
                                    sx={{
                                        backgroundColor: "#F57C00",
                                        px: 4,
                                        py: 1.5,
                                        fontWeight: "bold",
                                        "&:hover": {
                                            backgroundColor: "#E65100",
                                        },
                                    }}
                                >
                                    Contact Now
                                </Button>
                            </motion.div>
                        </Box>

                    </motion.div>

                </Container>
            </Box>
            <BookingModal open={open} handleClose={() => setOpen(false)} />
        </Box>
    );
};

export default Home;