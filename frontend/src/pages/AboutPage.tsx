import React, { useEffect } from 'react';

type AboutPageProps = {
  homePageAudio: HTMLAudioElement;
};

function AboutPage({ homePageAudio }: AboutPageProps) {
  useEffect(() => {
    homePageAudio.load();
  }, []);

  return <div>AboutPage</div>;
}

export default AboutPage;
