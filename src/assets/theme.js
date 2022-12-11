import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: { fontFamily: "'Manrope', sans-serif" },
    h2: {
      fontFamily: `var(--font-secondary)`,
    },
    // body: {
    //   fontFamily: "'Nunito Sans', sans-serif"
    // },
    // fontFamily: "'Nunito Sans', sans-serif",
  },
});

export default theme;
