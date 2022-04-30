import { Container, CssBaseline } from "@mui/material";
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { useState } from "react";
import Catalog from "../../feature/catalog/Catalog";
import Header from "./Header";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eqeqeq' : '#121212'
      }
    },
  });

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Catalog />
      </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
