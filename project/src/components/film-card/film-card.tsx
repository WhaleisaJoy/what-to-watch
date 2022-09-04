import { Link } from 'react-router-dom';
import type { film } from '../../types/film';

type FilmCardProps = {
  film: film;
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <Link to={`/films/${film.id}`} title="/films/">
          <img
            src={film.preview_image}
            alt={film.name}
            width="280"
            height="175"
          />
        </Link>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`} title="/films/">
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
