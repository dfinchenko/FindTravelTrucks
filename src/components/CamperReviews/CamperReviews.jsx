import StarIconDef from "../Icons/StarIconDef/StarIconDef.jsx";
import StarIcon from "../Icons/StarIcon/StarIcon.jsx";
import css from "./CamperReviews.module.css";

function CamperReviews({ camper: { reviews } }) {
  return (
    <ul className={css.reviewsList}>
      {reviews.map((review, index) => (
        <li key={index}>
          <div className={css.name}>
            <div className={css.circle}>{review.reviewer_name.charAt(0)}</div>
            <div>
              <p>{review.reviewer_name}</p>
              <span>
                {Array.from({ length: review.reviewer_rating }, (_, i) => (
                  <StarIcon key={i} />
                ))}
                {Array.from({ length: 5 - review.reviewer_rating }, (_, i) => (
                  <StarIconDef key={i} />
                ))}
              </span>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}

export default CamperReviews;
