import { Film } from '../../../types/film';
import { ActiveCard } from '../../../types/types';
import FilmCardList from '../../film-card-list/film-card-list';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';

type MyListPageProps = {
  films: Film[];
  handleCardMouseOver: (card: ActiveCard) => void;
};

function MyListPage({films, handleCardMouseOver}: MyListPageProps): JSX.Element {
  const favoriteFilms = films.filter((film) => film.is_favorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardList
          filmCardsAmount={favoriteFilms.length}
          films={favoriteFilms}
          handleCardMouseOver={handleCardMouseOver}
        />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
