import HomeVideo from '../assets/home_video.mp4';
import { Box, Typography } from '@mui/material';

type HomePageProps = {
  homePageAudio: HTMLAudioElement;
};

function HomePage({ homePageAudio }: HomePageProps) {
  return (
    <Box sx={{ marginTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Remove Me When Website is Complete! */}
      <Typography sx={{ fontSize: '50px', position: 'absolute' }} variant='h1' color='secondary'>
        Coming Soon...
      </Typography>
      {/* Remove Me When Website is Complete! */}
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
