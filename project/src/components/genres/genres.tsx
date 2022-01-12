import { genres } from '../../database';

function Genres(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        new Array(genres.length).fill('').map((_, index) => {
          const activeClass = genres[index] === 'All genres' ? 'catalog__genres-item--active' : '';

          return (
            <li
              className = {`catalog__genres-item ${activeClass}`}
              key = {genres[index]}
            >
              <a href="#" className="catalog__genres-link">
                {genres[index]}
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export default Genres;
