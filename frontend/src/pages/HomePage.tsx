import HomeVideo from '../assets/home_video.mp4';
import { Box, Typography } from '@mui/material';
import Logo from '../assets/logo.png';

type HomePageProps = {
  homePageAudio: HTMLAudioElement;
};

function HomePage({ homePageAudio }: HomePageProps) {
  return (
    <Box sx={{ marginTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <video
        src={HomeVideo}
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
        autoPlay
        loop={true}
        muted
        onClick={() => {
          homePageAudio.play();
        }}
        onMouseEnter={() => {
          homePageAudio.play();
        }}
      ></video>
    </Box>
  );
}

export default HomePage;
