import { Film } from '../../types/film';
import { ActiveCard } from '../../types/types';
import FilmCard from '../film-card/film-card';

type FilmCardListProps = {
  filmCardsAmount: number;
  films: Film[];
  handleCardMouseOver: (card: ActiveCard) => void;
};

function FilmCardList({filmCardsAmount, films, handleCardMouseOver}: FilmCardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
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
