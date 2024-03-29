import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilmsAmountToRender } from '../../../store/reducer';
// import { INITIAL_MAX_FILM_CARDS_AMOUNT } from '../../../const';
// import { changeRenderedFilmCardsAmount } from '../../../store/reducer';
import { getCurrentGenre, getrenderedFilmCardsAmount } from '../../../store/selectors';
import type { Film } from '../../../types/film';
import { ActiveCard } from '../../../types/types';
import { getFilmsByGenre } from '../../../utils';
import FilmCardList from '../../film-card-list/film-card-list';
import Footer from '../../footer/footer';
import Genres from '../../genres/genres';
import Logo from '../../logo/logo';
import ShowMore from '../../show-more/show-more';
import UserBlock from '../../user-block/user-block';

type MainPageProps = {
  promoFilm: Film;
  films: Film[];
  handleCardMouseOver: (card: ActiveCard) => void;
}

function MainPage({promoFilm, films, handleCardMouseOver}: MainPageProps): JSX.Element {
  const dispatch = useDispatch();

  const currentGenre = useSelector(getCurrentGenre);
  const filmsByCurrentGenre = getFilmsByGenre(films, currentGenre);

  const renderedFilmCardsAmount = useSelector(getrenderedFilmCardsAmount);
  const filmsForRender = filmsByCurrentGenre.slice(0, renderedFilmCardsAmount);

  const isShowMore = filmsForRender.length < filmsByCurrentGenre.length;

  useEffect(() => {
    dispatch(resetFilmsAmountToRender());
  }, [dispatch]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres />

          <FilmCardList
            filmCardsAmount = {filmsForRender.length}
            films={filmsForRender}
            handleCardMouseOver={handleCardMouseOver}
          />

          { isShowMore && <ShowMore /> }

        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
