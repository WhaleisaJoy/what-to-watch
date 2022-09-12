import { Link, useParams } from 'react-router-dom';
import type { Film } from '../../../types/film';
import type { Comment } from '../../../types/comment';
import type { ActiveCard } from '../../../types/types';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';
import FilmTabs from '../../film-tabs/film-tabs';
import UserBlock from '../../user-block/user-block';
import FilmCardList from '../../film-card-list/film-card-list';

type FilmPageProps = {
  films: Film[];
  comments: Comment[];
  handleCardMouseOver: (card: ActiveCard) => void;
};

type Param = {
  id: string;
}

function FilmPage({films, comments, handleCardMouseOver}: FilmPageProps): JSX.Element {
  const { id } = useParams<Param>();
  const currentFilm = films[parseInt(id, 10)];
  const currentComments = comments.filter((comment) => comment.id === parseInt(id, 10));
  const similarFilms = films.filter((film) => film.genre === currentFilm.genre).slice(0, 4);
  const { name, genre, released } = currentFilm;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.background_image} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review`} title={`/films/${id}/review`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.poster_image} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">

              <FilmTabs
                film = {currentFilm}
                comments = {currentComments}
              />

              {/* <div className="film-rating">
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{currentFilm.scores_count} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{description}</p>
                <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>
                <p className="film-card__starring"><strong>Starring: {starring.join(', ')} and other</strong></p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCardList
            filmCardsAmount={similarFilms.length}
            films={similarFilms}
            handleCardMouseOver={handleCardMouseOver}
          />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
