import React, { useEffect } from 'react';

type TechStackPageProps = {
  homePageAudio: HTMLAudioElement;
};

function TechStackPage({ homePageAudio }: TechStackPageProps) {
  useEffect(() => {
    homePageAudio.load();
  }, []);

  return <div>TechStackPage</div>;
}

export default TechStackPage;
