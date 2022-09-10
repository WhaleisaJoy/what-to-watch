import { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

const TIMER_TIME = 1000;

type PlayerProps = {
  film: Film;
  isActive: boolean;
}

function VideoPlayer({film, isActive}: PlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    const timer = setTimeout(() => isActive && videoRef.current?.play(), TIMER_TIME);

    !isActive && videoRef.current?.load();

    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <video
      width="280"
      height="175"
      ref={videoRef}
      muted
      loop
      poster={film.poster_image}
      src={film.preview_video_link}
    />
  );
}

export default VideoPlayer;
