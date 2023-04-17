import { Box } from '@mui/material';
import React, { useEffect } from 'react';

type ExperiencePageProps = {
  homePageAudio: HTMLAudioElement;
};

function ExperiencePage({ homePageAudio }: ExperiencePageProps) {
  useEffect(() => {
    homePageAudio.load();
  }, []);

  return <Box sx={{}}>ExperiencePage</Box>;
}

export default ExperiencePage;
