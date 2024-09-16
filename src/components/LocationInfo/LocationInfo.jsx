import MapIcon from "../Icons/MapIcon/MapIcon.jsx";
import StarIcon from "../Icons/StarIcon/StarIcon.jsx";
import css from "./LocationInfo.module.css";

function LocationInfo({ rating, reviews, location }) {
    const reviewsCount = reviews.length;
  
    return (
      <div className={css.row}>
        <div className={css.wrap}>
          <span className={css.iconWrap}>
            <StarIcon />
          </span>
          <p className={css.line}>
            {rating} ({reviewsCount} Reviews)
          </p>
        </div>
        <div className={css.wrap}>
          <span className={css.iconWrap}>
            <MapIcon />
          </span>
          <p>{location}</p>
        </div>
      </div>
    );
  }

export default LocationInfo;
