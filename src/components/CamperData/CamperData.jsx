import { useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import LocationInfo from "../LocationInfo/LocationInfo";
import css from "./CamperData.module.css";

function CamperData({
  camper: { gallery, name, price, rating, reviews, location, description },
}) {
  const [visibleItem, setVisibleItem] = useState(4);
  const handleLoadMore = () => {
    setVisibleItem((prevItem) => prevItem + 4);
  };
  return (
    <div className={css.wrap}>
      <div className={css.details}>
        <h2 className={css.name}>{name}</h2>
        <LocationInfo rating={rating} reviews={reviews} location={location} />
        <p className={css.price}>
          €<span>{price}</span>.00
        </p>
      </div>
      <ul className={css.gallery}>
        {gallery.slice(0, visibleItem).map((item, index) => (
          <li key={index}>
            <img className={css.photo} src={item.thumb} alt={name} />
          </li>
        ))}
      </ul>
      {visibleItem < gallery.length && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      <p className={css.description}>{description}</p>
    </div>
  );
}

export default CamperData;
