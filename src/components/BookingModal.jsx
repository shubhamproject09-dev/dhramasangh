import {
    Box,
    Typography,
    Modal,
    TextField,
    Grid,
    MenuItem,
    Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBooking } from "../features/BookingSlice";

const BookingModal = ({ open, handleClose }) => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        persons: "",
        rooms: "",
        roomType: "",
        checkIn: "",
        checkOut: "",
        specialMessage: "",
    });

    // 🧠 handle change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // 🚀 submit
    const handleSubmit = async () => {
        try {
            await dispatch(createBooking(form)).unwrap();

            alert("Booking submitted ✅");

            handleClose();

            // reset form
            setForm({
                name: "",
                email: "",
                phone: "",
                persons: "",
                rooms: "",
                roomType: "",
                checkIn: "",
                checkOut: "",
                specialMessage: "",
            });

        } catch (err) {
            alert("Error: " + err?.message || "Something went wrong");
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                component={motion.div}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                sx={{
                    width: { xs: "90%", md: "750px" },
                    bgcolor: "#fff",
                    borderRadius: "16px",
                    p: 4,
                    mx: "auto",
                    mt: { xs: "20%", md: "5%" },
                    boxShadow: 24,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        color: "#E65100",
                        mb: 3,
                        textAlign: "center",
                    }}
                >
                    🛏️ Book Your Stay
                </Typography>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Contact Number"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="No. of Persons"
                            type="number"
                            name="persons"
                            value={form.persons}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="No. of Rooms"
                            type="number"
                            name="rooms"
                            value={form.rooms}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            select
                            fullWidth
                            label="Room Type"
                            name="roomType"
                            value={form.roomType}
                            onChange={handleChange}
                        >
                            <MenuItem value="2 Sharing">2 Sharing</MenuItem>
                            <MenuItem value="3 Sharing">3 Sharing</MenuItem>
                        </TextField>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Check-In"
                            name="checkIn"
                            value={form.checkIn}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Check-Out"
                            name="checkOut"
                            value={form.checkOut}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <TextField
                            fullWidth
                            label="Special Message"
                            multiline
                            rows={3}
                            name="specialMessage"
                            value={form.specialMessage}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{
                                mt: 2,
                                backgroundColor: "#F57C00",
                                fontWeight: "bold",
                                py: 1.5,
                            }}
                        >
                            Book Now
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default BookingModal;