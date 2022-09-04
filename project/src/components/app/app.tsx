import type { film } from '../../types/film';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import FilmPage from '../pages/film-page/film-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import PlayerPage from '../pages/player-page/player-page';

type AppProps = {
  filmCardsCount: number;
  promoFilm: film;
  films: film[];
}

function App({filmCardsCount, promoFilm, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            filmCardsCount = {filmCardsCount}
            promoFilm = {promoFilm}
            films = {films}
          />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/mylist" exact>
          <MyListPage />
        </Route>
        <Route path="/films/:id" exact>
          <FilmPage />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReviewPage />
        </Route>
        <Route path="/player/:id" exact>
          <PlayerPage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
