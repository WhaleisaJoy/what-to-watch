import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MAX_GENRE_AMOUNT } from '../../const';
import { changeGenre } from '../../store/reducer';
import { getAllGenres, getCurrentGenre } from '../../store/selectors';

function Genres(): JSX.Element {
  const currentGenre = useSelector(getCurrentGenre);
  const allGenres = useSelector(getAllGenres).slice(0, MAX_GENRE_AMOUNT);

  const dispatch = useDispatch();
  const handleGenreChange = (genre: string) => dispatch(changeGenre(genre));

  return (
    <ul className="catalog__genres-list">
      {
        allGenres.map((genre) => {
          const activeClass = genre === currentGenre ? 'catalog__genres-item--active' : '';

          return (
            <li
              className = {`catalog__genres-item ${activeClass}`}
              key = {genre}
            >
              <Link
                to="#"
                className="catalog__genres-link"
                onClick={() => handleGenreChange(genre)}
              >
                {genre}
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}

export default Genres;
