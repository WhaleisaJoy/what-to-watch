import type { Film } from '../../types/film';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import FilmPage from '../pages/film-page/film-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import PlayerPage from '../pages/player-page/player-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';

type AppProps = {
  filmCardsCount: number;
  promoFilm: Film;
  films: Film[];
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
        <PrivateRoute
          exact
          path="/mylist"
          render={() => <MyListPage />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route path="/films/:id" exact>
          <FilmPage
            films={films}
          />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReviewPage />
        </Route>
        <Route path="/player/:id" exact>
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
