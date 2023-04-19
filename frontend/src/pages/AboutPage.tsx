import { Box, Card, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AboutBackground from '../assets/about_background.jpg';
import Logo from '../assets/logo.png';

type AboutPageProps = {
  homePageAudio: HTMLAudioElement;
};

function AboutPage({ homePageAudio }: AboutPageProps) {
  useEffect(() => {
    homePageAudio.load();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
        <Typography
          sx={{ fontSize: '50px', marginTop: '30px', position: 'absolute' }}
          variant='h1'
          color='secondary'
        >
          Hey there, I'm Jeming
        </Typography>
        <img src={AboutBackground} style={{ width: '100vw', height: '35vh', objectFit: 'cover' }}></img>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img style={{ margin: '10px 0px' }} src={Logo} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Card sx={{ margin: '10px 5px', padding: '20px 20px', width: '25%' }}>
          <Typography variant='h3'>🇦🇺</Typography>
          <Typography sx={{ margin: '5px 0px' }} variant='h3'>
            My name’s Jeming and I’m from Sydney, Australia!
          </Typography>
          <Typography variant='body1'>
            I’m currently working as a Software Engineer. Previously, I studied a Bachelor’s of Commerce and a
            Bachelor's of Computer Science at the University of New South Wales (UNSW Sydney).
          </Typography>
        </Card>
        <Card sx={{ margin: '10px 5px', padding: '20px 20px', width: '25%' }}>
          <Typography variant='h3'>❤️</Typography>
          <Typography sx={{ margin: '5px 0px' }} variant='h3'>
            I am passionate about a variety of topics and fields.
          </Typography>
          <Typography variant='body1'>
            My interests range from Technology to Data & AI, Startups, Consulting, Finance and Education!
            Prior to working in industry, I’ve always loved teaching, and have taught students of all ages
            from primary and high school to university.
          </Typography>
        </Card>
        <Card sx={{ margin: '10px 5px', padding: '20px 20px', width: '25%' }}>
          <Typography variant='h3'>🌱</Typography>
          <Typography sx={{ margin: '5px 0px' }} variant='h3'>
            I believe in life-long learning and improvement.
          </Typography>
          <Typography variant='body1'>
            As someone who loves teaching, I naturally also love learning, whether it be academically,
            professionally, or personally. I believe that life is too short to stop exploring and experiencing
            different things.
          </Typography>
        </Card>
        <Card sx={{ margin: '10px 5px', padding: '20px 20px', width: '25%' }}>
          <Typography variant='h3'>☀️</Typography>
          <Typography sx={{ margin: '5px 0px' }} variant='h3'>
            Basketball, Gym, Cooking, Video Games, Chess.
          </Typography>
          <Typography variant='body1'>
            These are some of the things I enjoy doing in my free time. I’m always keen to try out different
            hobbies whenever I can! I also love walking my dog, Milo (he's a poodle!).
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}

export default AboutPage;
