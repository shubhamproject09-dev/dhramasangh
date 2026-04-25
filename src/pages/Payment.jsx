import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import qrImage from "../assets/Payment/scan.jpeg";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";


const Payment = () => {

    const bankDetails = `
Account Name: Ekant Kutiya Mandir Trust
Account Type: Current Account
A/C No: 43743951076
IFSC: SBIN0050303
PAN: AABTE3618D
Branch: Parliament Street Delhi
`;

    const handleCopyBankDetails = async () => {
        try {
            await navigator.clipboard.writeText(bankDetails);
            alert("Bank details copied successfully!");
        } catch (err) {
            alert("Copy failed");
        }
    };

    return (
        <Box>

            {/* HERO */}
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
                        "url('https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
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

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ position: "relative", zIndex: 2 }}
                >
                    <Typography sx={{ fontSize: { xs: "28px", md: "50px" }, fontWeight: "bold" }}>
                        Payment Options
                    </Typography>

                    <Typography sx={{ mt: 2, color: "#FFE0B2" }}>
                        🔒 100% Secure Payment Processing
                    </Typography>
                </motion.div>
            </Box>

            {/* BANK DETAILS */}
            <Container sx={{ py: { xs: 6, md: 10 } }}>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <Typography
                        sx={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#E65100",
                            mb: 4
                        }}
                    >
                        🏦 Net Banking
                    </Typography>

                    {/* Equal Height Grid */}
                    <Grid
                        container
                        spacing={4}
                        alignItems="stretch"
                    >

                        {/* LEFT SIDE */}
                        <Grid
                            size={{ xs: 12, md: 6 }}
                            sx={{ display: "flex" }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    width: "100%"
                                }}
                            >

                                {/* Bank Box */}
                                <Box
                                    sx={{
                                        p: 4,
                                        mb: 2,
                                        borderRadius: "16px",
                                        backgroundColor: "#FFF3E0",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                        position: "relative"
                                    }}
                                >

                                    {/* Copy Icon Top Right */}
                                    <IconButton
                                        onClick={handleCopyBankDetails}
                                        sx={{
                                            position: "absolute",
                                            top: 16,
                                            right: 16
                                        }}
                                    >
                                        <ContentCopyIcon />
                                    </IconButton>

                                    <Typography sx={{ fontWeight: "bold", mb: 3, fontSize: "20px" }}>
                                        State Bank of India
                                    </Typography>

                                    <Typography sx={{ mb: 1 }}>
                                        <strong>Account Name:</strong> Ekant Kutiya Mandir Trust
                                    </Typography>

                                    <Typography sx={{ mb: 1 }}>
                                        <strong>Account Type:</strong> Current Account
                                    </Typography>

                                    <Typography sx={{ mb: 1 }}>
                                        <strong>A/C No:</strong> 43743951076
                                    </Typography>

                                    <Typography sx={{ mb: 1 }}>
                                        <strong>IFSC:</strong> SBIN0050303
                                    </Typography>

                                    <Typography sx={{ mb: 1 }}>
                                        <strong>PAN:</strong> AABTE3618D
                                    </Typography>

                                    <Typography sx={{ mb: 1 }}>
                                        <strong>Branch:</strong> Parliament Street Delhi
                                    </Typography>

                                </Box>

                                {/* Card Box */}
                                <Box
                                    sx={{
                                        p: 4,
                                        flexGrow: 1,
                                        borderRadius: "16px",
                                        backgroundColor: "#fff",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                            mb: 2,
                                            color: "#E65100"
                                        }}
                                    >
                                        💳 Card / UPI Payment
                                    </Typography>

                                    <Typography sx={{ mb: 2 }}>
                                        All cards accepted
                                    </Typography>

                                    <input
                                        type="number"
                                        placeholder="Enter Amount (₹)"
                                        style={inputStyle}
                                    />

                                    <button style={btnStyle}>
                                        Pay Now
                                    </button>

                                </Box>

                            </Box>
                        </Grid>

                        {/* RIGHT SIDE */}
                        <Grid
                            size={{ xs: 12, md: 6 }}
                            sx={{ display: "flex" }}
                        >
                            <Box
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "16px",
                                    backgroundColor: "#FFF3E0",
                                    textAlign: "center",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center"
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        mb: 2,
                                        color: "#E65100"
                                    }}
                                >
                                    📱 Scan to Pay
                                </Typography>

                                <img
                                    src={qrImage}
                                    alt="Scan To Pay"
                                    style={{
                                        width: "220px",
                                        maxWidth: "100%",
                                        borderRadius: "12px",
                                        margin: "0 auto"
                                    }}
                                />

                            </Box>
                        </Grid>

                    </Grid>

                </motion.div>
            </Container>

        </Box>
    );
};

const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    marginBottom: "12px"
};

const btnStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#F57C00",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
};

export default Payment;