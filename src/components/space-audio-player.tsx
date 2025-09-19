"use client";

import { useEffect, useRef } from 'react';

type SpaceAudioPlayerProps = {
  src: string;
  volume?: number;
};

export function SpaceAudioPlayer({ src, volume = 0.1 }: SpaceAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = volume;
      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay was prevented.
          console.log("Audio autoplay was prevented by the browser.");
        });
      }
    }
  }, [volume]);

  // We don't render the controls, it's a background player
  return <audio ref={audioRef} src={src} loop />;
}
