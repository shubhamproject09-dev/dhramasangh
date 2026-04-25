import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { useState } from "react";
import BookingModal from "../components/BookingModal";

import room1 from "../assets/Rooms/1.jpg";
import room2 from "../assets/Rooms/2.jpg";
import room3 from "../assets/Rooms/3.jpg";
import room4 from "../assets/Rooms/4.jpg";
import room5 from "../assets/Rooms/5.jpg";
import room6 from "../assets/Rooms/6.jpg";
import room7 from "../assets/Rooms/7.jpg";
import room9 from "../assets/Rooms/9.jpg";
import room10 from "../assets/Rooms/10.jpg";
import room11 from "../assets/Rooms/11.jpg";
import room12 from "../assets/Rooms/12.jpg";

import gangaImg from "../assets/river.JPG";
import satvikImg from "../assets/satvik.webp";

export default function Accommodation() {

    const [openBooking, setOpenBooking] = useState(false);

    const handleOpenBooking = () => {
        setOpenBooking(true);
    };

    const handleCloseBooking = () => {
        setOpenBooking(false);
    };

    const roomGallery = [
        room1,
        room2,
        room3,
        room4,
        room5,
        room6,
        room7,
        room9,
        room10,
        room11,
        room12
    ];

    return (
        <Box>

            {/* HERO */}
            <Box
                sx={{
                    height: { xs: "65vh", md: "85vh" },
                    backgroundImage: `url(${gangaImg})`,
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
                        background: "rgba(0,0,0,.7)"
                    }}
                />

                <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>

                    <Typography
                        sx={{
                            fontSize: { xs: "38px", md: "72px" },
                            fontWeight: "bold",
                            color: "#fff"
                        }}
                    >
                        Divine Accommodation
                    </Typography>

                    <Typography
                        sx={{
                            mt: 2,
                            fontSize: { xs: "18px", md: "24px" },
                            color: "#FFE0B2"
                        }}
                    >
                        Sacred Stay with Ganga Ji just behind the property
                    </Typography>

                </Box>

            </Box>



            {/* BOOK STRIP */}
            <Box
                sx={{
                    maxWidth: "1100px",
                    mx: "auto",
                    mt: "-60px",
                    position: "relative",
                    zIndex: 5,
                    px: 2
                }}
            >
                <Box
                    sx={{
                        background: "#fff",
                        borderRadius: "24px",
                        p: 4,
                        boxShadow: "0 20px 50px rgba(0,0,0,.18)",
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        gap: 3
                    }}
                >

                    <Typography fontWeight="bold">Check-In</Typography>
                    <Typography fontWeight="bold">Check-Out</Typography>
                    <Typography fontWeight="bold">Guests</Typography>

                    <Button
                        variant="contained"
                        onClick={handleOpenBooking}
                        sx={{
                            background: "#6D1B1B",
                            color: "#fff"
                        }}
                    >
                        Book Stay
                    </Button>

                </Box>
            </Box>



            {/* ROOMS */}
            <Container sx={{ py: 12 }}>

                <Typography
                    sx={{
                        fontSize: "42px",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#6D1B1B",
                        mb: 6
                    }}
                >
                    Accommodation Options
                </Typography>

                <Grid container spacing={5}>

                    {[
                        {
                            title: "Deluxe Ganga View Rooms",
                            desc: "Peaceful private rooms designed for spiritual seekers and families.",
                            image: room1
                        },
                        {
                            title: "Ashram Retreat Stay",
                            desc: "Ideal stay for meditation, satsang and extended spiritual retreats.",
                            image: room2
                        }
                    ].map((room) => (
                        <Grid size={{ xs: 12, md: 6 }} key={room.title}>

                            <Box
                                sx={{
                                    borderRadius: "28px",
                                    overflow: "hidden",
                                    background: "#fff",
                                    boxShadow: "0 12px 30px rgba(0,0,0,.15)"
                                }}
                            >

                                <Box
                                    component="img"
                                    src={room.image}
                                    sx={{
                                        width: "100%",
                                        height: "340px",
                                        objectFit: "cover"
                                    }}
                                />

                                <Box p={4}>

                                    <Typography
                                        sx={{
                                            fontSize: "32px",
                                            fontWeight: "bold",
                                            color: "#6D1B1B"
                                        }}
                                    >
                                        {room.title}
                                    </Typography>

                                    <Typography mt={3}>
                                        {room.desc}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        onClick={handleOpenBooking}
                                        sx={{
                                            mt: 4,
                                            background: "#6D1B1B",
                                            color: "#fff"
                                        }}
                                    >
                                        Book Now
                                    </Button>

                                </Box>

                            </Box>

                        </Grid>
                    ))}

                </Grid>

            </Container>



            {/* ROOM GALLERY */}
            <Container sx={{ pb: 12 }}>

                <Typography
                    sx={{
                        fontSize: "42px",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#6D1B1B",
                        mb: 6
                    }}
                >
                    Room Gallery
                </Typography>

                <Grid container spacing={3}>

                    {roomGallery.map((img, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>

                            <Box
                                sx={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 25px rgba(0,0,0,.12)"
                                }}
                            >

                                <Box
                                    component="img"
                                    src={img}
                                    alt={`Room ${index + 1}`}
                                    sx={{
                                        width: "100%",
                                        height: "280px",
                                        objectFit: "cover",
                                        transition: "0.4s",

                                        "&:hover": {
                                            transform: "scale(1.08)"
                                        }
                                    }}
                                />

                            </Box>

                        </Grid>
                    ))}

                </Grid>

            </Container>



            {/* FACILITIES */}
            <Box sx={{ background: "#FFF8F0", py: 10 }}>
                <Container>

                    <Typography
                        sx={{
                            fontSize: "42px",
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "#6D1B1B",
                            mb: 7
                        }}
                    >
                        Amenities & Facilities
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: 4,
                            textAlign: "center"
                        }}
                    >

                        <Box>
                            <Typography fontSize="42px">🚗</Typography>
                            <Typography fontWeight="bold">Car Parking</Typography>
                        </Box>

                        <Box>
                            <Typography fontSize="42px">🍲</Typography>
                            <Typography fontWeight="bold">Satvik Food</Typography>
                        </Box>

                        <Box>
                            <Typography fontSize="42px">🌊</Typography>
                            <Typography fontWeight="bold">Ganga Access</Typography>
                        </Box>

                        <Box>
                            <Typography fontSize="42px">📶</Typography>
                            <Typography fontWeight="bold">WiFi</Typography>
                        </Box>

                    </Box>

                </Container>
            </Box>



            {/* FOOD */}
            <Container sx={{ py: 12 }}>
                <Grid container spacing={8} alignItems="center">

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src={satvikImg}
                            sx={{
                                width: "100%",
                                borderRadius: "30px"
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            sx={{
                                fontSize: "46px",
                                fontWeight: "bold",
                                color: "#6D1B1B"
                            }}
                        >
                            Pure Satvik Dining
                        </Typography>

                        <Typography mt={4}>✔ Breakfast</Typography>
                        <Typography mt={2}>✔ Lunch</Typography>
                        <Typography mt={2}>✔ Dinner</Typography>

                    </Grid>

                </Grid>
            </Container>



            {/* GANGA */}
            <Box
                sx={{
                    height: "75vh",
                    backgroundImage: `url(${gangaImg})`,
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
                        background: "rgba(0,0,0,.8)"
                    }}
                />

                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        color: "#fff"
                    }}
                >

                    <Typography
                        sx={{
                            fontSize: { xs: "42px", md: "64px" },
                            fontWeight: "bold"
                        }}
                    >
                        Property Backside Opens to Ganga Ji
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={handleOpenBooking}
                        sx={{
                            mt: 5,
                            background: "#FFD54F",
                            color: "#6D1B1B"
                        }}
                    >
                        Reserve Your Stay
                    </Button>

                </Box>

            </Box>


            <BookingModal
                open={openBooking}
                handleClose={handleCloseBooking}
            />

        </Box>
    );
}