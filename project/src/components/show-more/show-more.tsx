import { useDispatch } from 'react-redux';
import { RENDER_FILM_CARDS_STEP } from '../../const';
import { changeFilmsAmountToRender } from '../../store/reducer';

function ShowMore(): JSX.Element {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(changeFilmsAmountToRender(RENDER_FILM_CARDS_STEP));

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick = {handleClick}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
