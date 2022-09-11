import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';
import { films, promoFilm } from './mock/film';
import { comments } from './mock/comment';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const Setting = {
  FILM_CARDS_COUNT: 15,
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        filmCardsCount = {Setting.FILM_CARDS_COUNT}
        promoFilm = {promoFilm}
        films = {films}
        comments = {comments}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
