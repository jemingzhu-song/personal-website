import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './App.css';
import NavigationBar from './navigation/NavigationBar';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import TechStackPage from './pages/TechStackPage';
import ContactPage from './pages/ContactPage';
import { Box } from '@mui/material';
import HomePage from './pages/HomePage';
import HomeMusic from './assets/home_music.mp3';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
    typography: {
      fontFamily: 'Nunito',
      h1: {
        fontSize: 24,
        fontWeight: 700,
      },
      h2: {
        fontSize: 30,
        fontWeight: 600,
      },
      h3: {
        fontSize: 24,
        fontWeight: 600,
      },
      body1: {
        fontSize: 18,
        fontWeight: 500,
      },
      body2: {
        fontSize: 18,
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: 14,
        fontWeight: 500,
      },
    },
  });

  const HomePageAudio = new Audio(HomeMusic);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Router>
        <ThemeProvider theme={theme}>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<HomePage homePageAudio={HomePageAudio} />} />
            <Route path='/about' element={<AboutPage homePageAudio={HomePageAudio} />} />
            <Route path='/experience' element={<ExperiencePage homePageAudio={HomePageAudio} />} />
            <Route path='/technology' element={<TechStackPage homePageAudio={HomePageAudio} />} />
            <Route path='/contact' element={<ContactPage homePageAudio={HomePageAudio} />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </Box>
  );
}

export default App;
