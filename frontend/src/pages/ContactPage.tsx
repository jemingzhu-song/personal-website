import React, { useEffect } from 'react';

type ContactPageProps = {
  homePageAudio: HTMLAudioElement;
};

function ContactPage({ homePageAudio }: ContactPageProps) {
  useEffect(() => {
    homePageAudio.load();
  }, []);

  return <div>ContactPage</div>;
}

export default ContactPage;
