declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.mp3'; // '*.wav' if you're using wav format
