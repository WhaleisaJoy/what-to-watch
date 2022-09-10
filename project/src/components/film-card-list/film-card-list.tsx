import { Film } from '../../types/film';
import { ActiveCard } from '../../types/types';
import FilmCard from '../film-card/film-card';

type FilmCardListProps = {
  filmCardsCount: number;
  films: Film[];
  handleCardMouseOver: (card: ActiveCard) => void;
};

function FilmCardList({filmCardsCount, films, handleCardMouseOver}: FilmCardListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        new Array(filmCardsCount)
          .fill('')
          .map((_, index) => (
            <FilmCard
              key={films[index].name}
              film = {films[index]}
              handleCardMouseOver={handleCardMouseOver}
            />
          ))
      }
    </div>
  );
}

export default FilmCardList;
