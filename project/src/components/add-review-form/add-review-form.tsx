import { ChangeEvent, FormEvent, useState } from 'react';
import ReviewRating from '../review-rating/review-rating';
import ReviewText from '../review-text/review-text';

function AddReviewForm(): JSX.Element {
  const [form, setForm] = useState({
    rating: '0',
    text: '',
  });

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const handleRatingChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      rating: target.value,
    });
  };

  const handleTextChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      text: target.value,
    });
  };

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={handleSubmit}
      >
        <ReviewRating handleRatingChange={handleRatingChange} />
        <ReviewText handleTextChange={handleTextChange}  />
      </form>
    </div>
  );
}

export default AddReviewForm;
