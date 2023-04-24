import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import NavigationBar from './navigation/NavigationBar';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import { Box } from '@mui/material';
import HomePage from './pages/HomePage';
import HomeMusic from './assets/home_music.mp3';
import SkillsAndQualificationsPage from './pages/SkillsAndQualificationsPage';

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
        fontSize: 22,
        fontWeight: 700,
      },
      h4: {
        fontSize: 32,
        fontWeight: 700,
      },
      body1: {
        fontSize: 16,
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
      subtitle2: {
        fontSize: 16,
        fontWeight: 700,
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
            <Route path='/skills' element={<SkillsAndQualificationsPage homePageAudio={HomePageAudio} />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </Box>
  );
}

export default App;
