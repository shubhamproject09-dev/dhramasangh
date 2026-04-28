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
import logo from "../assets/dharamlogo.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import PetsIcon from "@mui/icons-material/Pets";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [ashramOpen, setAshramOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                    width: { xs: 80, md: 200 },
                                    objectFit: "contain",
                                }}
                            />
                        </motion.div>
                    </Box>

                    {/* 💻 Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <Box key={item.text} sx={{ position: "relative", display: "flex" }}>

                                    {/* 🔥 MENU BUTTON */}
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            component={Link}
                                            to={item.path}
                                            sx={{
                                                color: "#fff",
                                                fontWeight: "700",
                                                px: 2,
                                                borderRadius: "30px",
                                                position: "relative",
                                                overflow: "hidden",

                                                "&::before": {
                                                    content: '""',
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "0%",
                                                    height: "100%",
                                                    background: "#FFD54F",
                                                    transition: "0.4s",
                                                    zIndex: 0,
                                                },

                                                "&:hover::before": {
                                                    width: "100%",   // 🔥 LEFT → RIGHT EFFECT
                                                },

                                                "&:hover": {
                                                    color: "#6D1B1B",
                                                },
                                            }}
                                        >
                                            <Box sx={{ position: "relative", zIndex: 1 }}>
                                                {item.text}
                                            </Box>
                                        </Button>
                                    </motion.div>

                                    {/* 🔥 ACTIVE LINE */}
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
                                            }}
                                        />
                                    )}

                                    {/* 🔥 👇 YAHI ADD HOGA ASHRAM (Experience ke baad) */}
                                    {item.text === "Experience" && (
                                        <Box
                                            sx={{ position: "relative" }}
                                            onMouseEnter={(e) => setAnchorEl(e.currentTarget)}   // 🔥 hover open
                                            onMouseLeave={() => setAnchorEl(null)}               // 🔥 hover out close
                                        >

                                            <motion.div whileHover={{ scale: 1.1 }}>
                                                <Button
                                                    endIcon={<ExpandMoreIcon />}
                                                    sx={{
                                                        color: "#fff",
                                                        fontWeight: "700",
                                                        px: 2,
                                                        borderRadius: "30px",
                                                        position: "relative",
                                                        overflow: "hidden",

                                                        "&::before": {
                                                            content: '""',
                                                            position: "absolute",
                                                            left: 0,
                                                            top: 0,
                                                            width: "0%",
                                                            height: "100%",
                                                            background: "#FFD54F",
                                                            transition: "0.4s",
                                                            zIndex: 0,
                                                        },

                                                        "&:hover::before": {
                                                            width: "100%",
                                                        },

                                                        "&:hover": {
                                                            color: "#6D1B1B",
                                                        },
                                                    }}
                                                >
                                                    <Box sx={{ position: "relative", zIndex: 1 }}>
                                                        Ashram
                                                    </Box>
                                                </Button>
                                            </motion.div>

                                            {/* 🔥 DROPDOWN */}
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={openMenu}
                                                onClose={() => setAnchorEl(null)}
                                                MenuListProps={{
                                                    onMouseEnter: () => setAnchorEl(anchorEl), // stay open
                                                    onMouseLeave: () => setAnchorEl(null),     // close
                                                }}
                                                PaperProps={{
                                                    sx: {
                                                        borderRadius: "16px",
                                                        mt: 1,
                                                        minWidth: "250px",
                                                        boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                                                        overflow: "hidden",
                                                    },
                                                }}
                                            >
                                                <MenuItem
                                                    onClick={() => {
                                                        window.open("https://ekantkutiyamandirtrust.org/", "_blank");
                                                        handleClose();
                                                    }}
                                                    sx={{
                                                        gap: 2,
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        py: 1.5,

                                                        "&::before": {
                                                            content: '""',
                                                            position: "absolute",
                                                            left: 0,
                                                            top: 0,
                                                            width: "0%",
                                                            height: "100%",
                                                            background: "#FFE0B2",
                                                            transition: "0.4s",
                                                            zIndex: 0,
                                                        },

                                                        "&:hover::before": {
                                                            width: "100%",   // 🔥 LEFT → RIGHT EFFECT
                                                        },
                                                    }}
                                                >
                                                    <TempleHinduIcon sx={{ zIndex: 1, color: "#E65100" }} />
                                                    <Box sx={{ zIndex: 1 }}>
                                                        Ekant Kutiya Mandir Trust
                                                    </Box>
                                                </MenuItem>

                                                {/* 🔥 LINE */}
                                                <Divider />

                                                <MenuItem
                                                    onClick={() => {
                                                        window.open("https://shrikrishnagaushala.in/", "_blank");
                                                        handleClose();
                                                    }}
                                                    sx={{
                                                        gap: 2,
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        py: 1.5,

                                                        "&::before": {
                                                            content: '""',
                                                            position: "absolute",
                                                            left: 0,
                                                            top: 0,
                                                            width: "0%",
                                                            height: "100%",
                                                            background: "#FFE0B2",
                                                            transition: "0.4s",
                                                            zIndex: 0,
                                                        },

                                                        "&:hover::before": {
                                                            width: "100%",
                                                        },
                                                    }}
                                                >
                                                    <PetsIcon sx={{ zIndex: 1, color: "#E65100" }} />
                                                    <Box sx={{ zIndex: 1 }}>
                                                        Shri Krishna Gaushala
                                                    </Box>
                                                </MenuItem>
                                            </Menu>

                                        </Box>
                                    )}

                                </Box>
                            );
                        })}
                    </Box>

                    {/* 📱 Mobile Icon */}
                    <IconButton
                        onClick={() => setOpen(true)}
                        sx={{
                            display: { xs: "block", md: "none" },
                            background: "linear-gradient(135deg, #FFD54F, #FFB300)",
                            borderRadius: "12px",
                            p: 1,
                            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                            transition: "0.3s",

                            "&:hover": {
                                transform: "scale(1.1)",
                                boxShadow: "0 6px 25px rgba(0,0,0,0.4)",
                            },
                        }}
                    >
                        <MenuIcon sx={{ color: "#6D1B1B", fontSize: 28 }} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* 📱 Mobile Drawer */}
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                transitionDuration={400}
                PaperProps={{
                    sx: {
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                    },
                }}
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
                                    <Box key={item.text}>

                                        {/* 🔥 NORMAL MENU */}
                                        <motion.div
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
                                                        fontWeight: "600",
                                                        color: isActive ? "#E65100" : "#4E342E",   // 🔥 black → themed color
                                                    }}
                                                />
                                            </ListItem>
                                        </motion.div>

                                        {/* 🔥 EXPERIENCE KE BAAD ASHRAM */}
                                        {item.text === "Experience" && (
                                            <>
                                                <Divider sx={{ height: "1px" }} />
                                                {/* 🔥 Ashram Toggle */}
                                                <ListItem
                                                    onClick={() => setAshramOpen(!ashramOpen)}
                                                    sx={{
                                                        pl: 3,
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        background: ashramOpen ? "#FFE0B2" : "transparent",
                                                        transition: "0.3s",

                                                        "&:hover": {
                                                            backgroundColor: "#FFF3E0",
                                                        },
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary="Ashram"
                                                        primaryTypographyProps={{
                                                            fontWeight: "700",
                                                            color: "#6D1B1B",
                                                        }}
                                                    />
                                                    <ExpandMoreIcon
                                                        sx={{
                                                            transform: ashramOpen ? "rotate(180deg)" : "rotate(0deg)",
                                                            transition: "0.3s",
                                                        }}
                                                    />
                                                </ListItem>

                                                {/* 🔥 DROPDOWN */}
                                                {ashramOpen && (
                                                    <>
                                                        <ListItem
                                                            onClick={() => {
                                                                window.open("https://ekantkutiyamandirtrust.org/", "_blank");
                                                                setOpen(false);
                                                            }}
                                                            sx={{
                                                                pl: 6,
                                                                cursor: "pointer",
                                                                "&:hover": {
                                                                    backgroundColor: "#FFE0B2",
                                                                },
                                                            }}
                                                        >
                                                            <TempleHinduIcon sx={{ mr: 1 }} />
                                                            Ekant Kutiya Mandir Trust
                                                        </ListItem>

                                                        <ListItem
                                                            onClick={() => {
                                                                window.open("https://shrikrishnagaushala.in/", "_blank");
                                                                setOpen(false);
                                                            }}
                                                            sx={{
                                                                pl: 6,
                                                                cursor: "pointer",
                                                                "&:hover": {
                                                                    backgroundColor: "#FFE0B2",
                                                                },
                                                            }}
                                                        >
                                                            <PetsIcon sx={{ mr: 1 }} />
                                                            Shri Krishna Gaushala
                                                        </ListItem>
                                                    </>
                                                )}
                                            </>
                                        )}

                                        <Divider />
                                    </Box>
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