import { Film } from '../../types/film';
import { ActiveCard } from '../../types/types';
import FilmCard from '../film-card/film-card';

type FilmCardListProps = {
  filmCardsCount: number;
  films: Film[];
  handleCardMouseOver: (card: ActiveCard) => void;
};

function FilmCardList({filmCardsCount, films, handleCardMouseOver}: FilmCardListProps): JSX.Element {
  const filmsForRender = films.length > filmCardsCount
    ? films.slice(0, filmCardsCount)
    : films;

  return (
    <div className="catalog__films-list">
      {
        filmsForRender.map((film) => (
          <FilmCard
            key={film.name}
            film = {film}
            handleCardMouseOver={handleCardMouseOver}
          />
        ))
      }
    </div>
  );
}

export default FilmCardList;
