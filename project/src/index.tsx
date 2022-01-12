import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films, promoFilm } from './mock/film';

const Setting = {
  FILM_CARDS_COUNT: 20,
  PROMO_FILM: promoFilm,
  FILMS: films,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmCardsCount = {Setting.FILM_CARDS_COUNT}
      promoFilm = { Setting.PROMO_FILM }
      films = { Setting.FILMS }
    />
  </React.StrictMode>,
  document.getElementById('root'));
