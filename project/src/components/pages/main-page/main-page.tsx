import { useState } from 'react';
import type { Film } from '../../../types/film';
import { ActiceCard } from '../../../types/types';
import FilmCardList from '../../film-card-list/film-card-list';
import Footer from '../../footer/footer';
import Genres from '../../genres/genres';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';

type MainPageProps = {
  filmCardsCount: number;
  promoFilm: Film;
  films: Film[];
}

function MainPage({filmCardsCount, promoFilm, films}: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<ActiceCard>();

  const handleCardMouseOver = (card: ActiceCard) => {
    setActiveCard(card);
  };

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
        <section className="catalog" data-active-card={activeCard}>
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres />

          <FilmCardList
            filmCardsCount={filmCardsCount}
            films={films}
            handleCardMouseOver={handleCardMouseOver}
          />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
