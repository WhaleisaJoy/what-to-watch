import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films, promoFilm } from './mock/film';
import { comments } from './mock/comment';

const Setting = {
  FILM_CARDS_COUNT: 15,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmCardsCount = {Setting.FILM_CARDS_COUNT}
      promoFilm = {promoFilm}
      films = {films}
      comments = {comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
