import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import ExperienceBackground from '../assets/experience_background.png';

type ExperiencePageProps = {
  homePageAudio: HTMLAudioElement;
};

function ExperiencePage({ homePageAudio }: ExperiencePageProps) {
  useEffect(() => {
    homePageAudio.load();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
        <Typography
          sx={{ fontSize: '50px', marginTop: '30px', position: 'absolute' }}
          variant='h1'
          color='secondary'
        >
          Experience
        </Typography>
        <img src={ExperienceBackground} style={{ width: '100vw', height: '35vh', objectFit: 'cover' }}></img>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ marginTop: '40px' }} variant='h4'>
          Professional Experience
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', minWidth: '400px' }}>
          <Typography sx={{ margin: '3px 0px' }} variant='body2'>
            Atlassian
          </Typography>
          <Typography sx={{ margin: '3px 0px', fontStyle: 'italic' }} variant='body1'>
            Nov 2022 - Feb 2023
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='body1'>
            Software Engineer Intern
          </Typography>
          <Typography sx={{ color: '#939393', fontWeight: '700', margin: '3px 0px' }} variant='subtitle1'>
            DEVELOPMENT TOOLS & FRAMEWORKS
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='subtitle1'>
            Java • Kotlin • Spring Boot • Typescript • React • AWS • Docker
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', minWidth: '400px' }}>
          <Typography sx={{ margin: '3px 0px' }} variant='body2'>
            Macquarie Group
          </Typography>
          <Typography sx={{ margin: '3px 0px', fontStyle: 'italic' }} variant='body1'>
            Jun 2022 - Nov 2022
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='body1'>
            Software Developer Part-Time
          </Typography>
          <Typography sx={{ color: '#939393', fontWeight: '700', margin: '3px 0px' }} variant='subtitle1'>
            DEVELOPMENT TOOLS & FRAMEWORKS
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='subtitle1'>
            Java • Spring • Swing (Java) • AWS • Docker • SQL
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', minWidth: '400px' }}>
          <Typography sx={{ margin: '3px 0px' }} variant='body2'>
            UNSW Sydney
          </Typography>
          <Typography sx={{ margin: '3px 0px', fontStyle: 'italic' }} variant='body1'>
            May 2022 - Aug 2022
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='body1'>
            Casual Academic
          </Typography>
          <Typography sx={{ color: '#939393', fontWeight: '700', margin: '3px 0px' }} variant='subtitle1'>
            DEVELOPMENT TOOLS & FRAMEWORKS
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='subtitle1'>
            Java
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', minWidth: '400px' }}>
          <Typography sx={{ margin: '3px 0px' }} variant='body2'>
            Macquarie Group
          </Typography>
          <Typography sx={{ margin: '3px 0px', fontStyle: 'italic' }} variant='body1'>
            Dec 2021 - Feb 2022
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='body1'>
            Software Developer Intern
          </Typography>
          <Typography sx={{ color: '#939393', fontWeight: '700', margin: '3px 0px' }} variant='subtitle1'>
            DEVELOPMENT TOOLS & FRAMEWORKS
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='subtitle1'>
            Java • Spring • Swing (Java) • AWS • Docker • SQL
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', minWidth: '400px' }}>
          <Typography sx={{ margin: '3px 0px' }} variant='body2'>
            Optus
          </Typography>
          <Typography sx={{ margin: '3px 0px', fontStyle: 'italic' }} variant='body1'>
            Mar 2021 - Aug 2021
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='body1'>
            Software Engineer Intern
          </Typography>
          <Typography sx={{ color: '#939393', fontWeight: '700', margin: '3px 0px' }} variant='subtitle1'>
            DEVELOPMENT TOOLS & FRAMEWORKS
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='subtitle1'>
            Java • Spring Boot • Docker • Red Hat Openshift • Kubernetes
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: '40px' }}></Box>
    </Box>
  );
}

export default ExperiencePage;
