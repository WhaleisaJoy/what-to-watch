import { Link } from 'react-router-dom';
import type { Film } from '../../types/film';
import { ActiceCard } from '../../types/types';

type FilmCardProps = {
  film: Film;
  handleCardMouseOver: (card: ActiceCard) => void;
}

function FilmCard({film, handleCardMouseOver}: FilmCardProps): JSX.Element {
  const { id, name } = film;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => {
        handleCardMouseOver(id);
      }}
    >
      <div className="small-film-card__image">
        <Link to={`/films/${id}`} title="/films/">
          <img
            src={film.preview_image}
            alt={name}
            width="280"
            height="175"
          />
        </Link>
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
