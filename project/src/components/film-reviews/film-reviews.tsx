import type { Comment } from '../../types/comment';
import FilmReview from '../film-review/film-review';

type FilmReviewsProps = {
  comments: Comment[];
}

function FilmReviews({ comments }: FilmReviewsProps): JSX.Element {
  const half = (comments.length / 2) >= 1 ? Math.round(comments.length / 2) : 0;
  const end = half > 1 ? half : 1;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          comments.slice(0, end).map((comment) => (
            <FilmReview
              key = {comment.comment}
              review = {comment}
            />),
          )
        }
      </div>

      {
        half >= 1 && (
          <div className="film-card__reviews-col">
            {
              comments.slice(half).map((comment) => (
                <FilmReview
                  key = {comment.comment}
                  review = {comment}
                />),
              )
            }
          </div>
        )
      }
    </div>
  );
}

export default FilmReviews;
