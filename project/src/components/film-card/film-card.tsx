import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Film } from '../../types/film';
import { ActiveCard } from '../../types/types';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  handleCardMouseOver: (card: ActiveCard) => void;
}

function FilmCard({film, handleCardMouseOver}: FilmCardProps): JSX.Element {
  const { id, name } = film;

  const [isActive, setActive] = useState<boolean>(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => {
        handleCardMouseOver(id);
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >

      <div className="small-film-card__image">
        <VideoPlayer film={film} isActive = {isActive} />
      </div>

      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`} title="/films/">
          {name}
        </Link>
      </h3>

    </article>
  );
}

export default FilmCard;
