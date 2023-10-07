import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
    components: {
        MuiButton: {
            variants: [{
                props: {
                    variant: "contained"

                },
                style: {
                    color: "var(--md-sys-color-on-primary)",
                    background: "var(--md-sys-color-primary)",
                    border: "none",
                    borderRadius: "100vh",
                    minHeight:"48px",
                    transition:"all 0.3s",
                    "&:hover ": {
                        color: "var(--md-sys-color-on-primary)",
                        background: "var(--md-sys-color-primary)",
                        filter:"brightness(1.15)"
                    
                    }

                }

            },
            {
                props: {
                    variant: "outlined"

                },
                style: {
                    background: "transparent",
                    color: "var(--md-sys-color-on-primary-container)",
                    borderRadius: "100vh",
                    border: "2px solid var(--md-sys-color-primary)",
                    minHeight:"48px",
                    "&:hover ": {
                        
                        background: "transparent",
                        color: "var(--md-sys-color-on-primary-container)",
                    border: "2px solid var(--md-sys-color-primary)",

                        filter:"brightness(1.2)"

                    }
                }

            },

            ]
        }
    }
})

const MUIThemeProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default MUIThemeProvider