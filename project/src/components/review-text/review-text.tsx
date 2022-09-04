import { ChangeEvent } from 'react';

type ReviewTextProps = {
  handleTextChange: ({target}: ChangeEvent<HTMLTextAreaElement>) => void;
}

function ReviewText({ handleTextChange }: ReviewTextProps): JSX.Element {
  return (
    <div className="add-review__text">
      <textarea
        className="add-review__textarea"
        name="review-text"
        id="review-text"
        placeholder="Review text"
        onChange={handleTextChange}
      >
      </textarea>
      <div className="add-review__submit">
        <button className="add-review__btn" type="submit">Post</button>
      </div>

    </div>
  );
}

export default ReviewText;
