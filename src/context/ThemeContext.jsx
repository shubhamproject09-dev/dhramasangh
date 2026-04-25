import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ColorModeContext = createContext();

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            main: "#FF9933", // saffron
        },
        secondary: {
            main: "#FFD700", // gold
        },
        text: {
            primary: mode === "light" ? "#4E342E" : "#FFF3E0",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
});

export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};