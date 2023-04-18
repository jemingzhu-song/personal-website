import { AppBar, Box, Button, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: '#000000',
  });

  return (
    <AppBar sx={{ justifyContent: 'center', height: '80px', boxShadow: 'none' }} color='secondary'>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box>
          <Button sx={{ textTransform: 'none', textDecoration: 'none', margin: '0px 20px' }} variant='text'>
            <StyledLink to='/'>
              <Typography variant='body2'>🏡 Home</Typography>
            </StyledLink>
          </Button>
          <Button sx={{ textTransform: 'none', textDecoration: 'none', margin: '0px 20px' }} variant='text'>
            <StyledLink to='/about'>
              <Typography variant='body2'>🧑‍💻 About</Typography>
            </StyledLink>
          </Button>
          <Button sx={{ textTransform: 'none', textDecoration: 'none', margin: '0px 20px' }} variant='text'>
            <StyledLink to='/experience'>
              <Typography variant='body2'>🎓 Experience</Typography>
            </StyledLink>
          </Button>
          <Button sx={{ textTransform: 'none', textDecoration: 'none', margin: '0px 20px' }} variant='text'>
            <StyledLink to='/technology'>
              <Typography variant='body2'>📟 Technology Stack</Typography>
            </StyledLink>
          </Button>
        </Box>
        <Box>
          <Button sx={{ textTransform: 'none', textDecoration: 'none', margin: '0px 20px' }} variant='text'>
            <a
              style={{ textDecoration: 'none', color: '#000000' }}
              href='https://medium.com/@jeming.zhusong/'
            >
              <Typography variant='body2'>✏️ Blog</Typography>
            </a>
          </Button>
          <Button sx={{ textTransform: 'none', textDecoration: 'none', margin: '0px 20px' }} variant='text'>
            <a
              style={{ textDecoration: 'none', color: '#000000' }}
              href='https://www.linkedin.com/in/jeming-zhu-song-181119178/'
            >
              <Typography variant='body2'>🤠 Jeming Zhu-Song</Typography>
            </a>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
