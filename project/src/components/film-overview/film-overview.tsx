import type { Film } from '../../types/film';

type FilmOverviewProps = {
  film: Film;
}

function FilmOverview({ film }: FilmOverviewProps): JSX.Element {
  const { rating, description, starring } = film;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.scores_count} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
