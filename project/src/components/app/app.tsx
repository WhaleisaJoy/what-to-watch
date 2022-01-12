import type { film } from '../../types/film';
import MainPage from '../pages/main-page/main-page';

type AppProps = {
  filmCardsCount: number;
  promoFilm: film;
  films: film[];
}

function App({filmCardsCount, promoFilm, films}: AppProps): JSX.Element {
  return (
    <MainPage
      filmCardsCount = {filmCardsCount}
      promoFilm = {promoFilm}
      films = {films}
    />
  );
}

export default App;
