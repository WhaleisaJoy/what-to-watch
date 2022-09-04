import { ChangeEvent } from 'react';

type RatingStarProps = {
  count: number;
  handleRatingChange: ({target}: ChangeEvent<HTMLInputElement>) => void;
};

function RatingStar({ count, handleRatingChange }: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${count}`}
        type="radio"
        name="rating"
        value={count}
        onChange={handleRatingChange}
      />
      <label className="rating__label" htmlFor={`star-${count}`}>{`Rating ${count}`}</label>
    </>
  );
}

export default RatingStar;
