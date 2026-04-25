import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.webp";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { text: "Home", path: "/" },
        { text: "About", path: "/about" },
        { text: "Accommodation", path: "/accommodation" },
        { text: "Experience", path: "/experience" },
        { text: "Contact", path: "/contact" },
        { text: "Payment", path: "/payment" },
    ];

    return (
        <>
            {/* 🔥 Animated AppBar */}
            <AppBar
                component={motion.div}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                position="sticky"
                elevation={2}
                sx={{
                    backgroundColor: "#6D1B1B",
                    borderBottom: "1px solid #FFD54F",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
                }}
            >
                <Toolbar>

                    {/* 🪔 Logo */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt="logo"
                                sx={{
                                    height: 70,
                                    width: 200,
                                    objectFit: "contain",
                                }}
                            />
                        </motion.div>
                    </Box>

                    {/* 💻 Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <Box key={item.text} sx={{ position: "relative" }}>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            component={Link}
                                            to={item.path}
                                            sx={{
                                                color: "#fff",
                                                fontWeight: "700",
                                                px: 2,
                                                borderRadius: "30px",

                                                "&:hover": {
                                                    backgroundColor: "#FFD54F",
                                                    color: "#6D1B1B"
                                                }
                                            }}
                                        >
                                            {item.text}
                                        </Button>
                                    </motion.div>

                                    {/* 🔥 Active underline */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            style={{
                                                height: "3px",
                                                background: "#FFD54F",
                                                borderRadius: "2px",
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                boxShadow: "0 0 8px rgba(255,255,255,0.8)",
                                            }}
                                        />
                                    )}
                                </Box>
                            );
                        })}
                    </Box>

                    {/* 📱 Mobile Icon */}
                    <IconButton
                        sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* 📱 Mobile Drawer */}
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                transitionDuration={400}
            >
                <Box sx={{ width: 250, height: "100%" }}>

                    {/* 🟠 Top Logo Section */}
                    <Box
                        sx={{
                            backgroundColor: "#6D1B1B",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            py: 2,
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="logo"
                            sx={{
                                height: 60,
                                width: 200,
                                objectFit: "contain",
                            }}
                        />
                    </Box>

                    {/* ⚪ Menu Section */}
                    <Box sx={{ backgroundColor: "#fff", height: "100%" }}>
                        <List>
                            {menuItems.map((item, index) => {
                                const isActive = location.pathname === item.path;

                                return (
                                    <motion.div
                                        key={item.text}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <ListItem
                                            button
                                            component={Link}
                                            to={item.path}
                                            onClick={() => setOpen(false)}
                                            sx={{
                                                pl: 3,
                                                backgroundColor: isActive ? "#FFE0B2" : "transparent",
                                                "&:hover": {
                                                    backgroundColor: "#FFF3E0",
                                                },
                                            }}
                                        >
                                            <ListItemText
                                                primary={item.text}
                                                primaryTypographyProps={{
                                                    fontWeight: isActive ? "bold" : "500",
                                                    color: isActive ? "#E65100" : "#000",
                                                }}
                                            />
                                        </ListItem>

                                        {/* Divider */}
                                        <Divider sx={{ backgroundColor: "#ddd" }} />
                                    </motion.div>
                                );
                            })}
                        </List>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;