import { film } from '../../types/film';
import { ActiceCard } from '../../types/types';
import FilmCard from '../film-card/film-card';

type FilmCardListProps = {
  filmCardsCount: number;
  films: film[];
  handleCardMouseOver: (card: ActiceCard) => void;
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