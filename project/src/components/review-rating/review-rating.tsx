import { ChangeEvent } from 'react';
import { RatingSettings } from '../../database';
import RatingStar from '../rating-star/rating-star';

type ReviewRatingProps = {
  handleRatingChange: ({target}: ChangeEvent<HTMLInputElement>) => void;
}

function ReviewRating({ handleRatingChange }: ReviewRatingProps): JSX.Element {
  return (
    <div className="rating">
      <div className="rating__stars">
        {
          RatingSettings.map(({ value, title }) => (
            <RatingStar
              key={title}
              count={value}
              handleRatingChange={handleRatingChange}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ReviewRating;
