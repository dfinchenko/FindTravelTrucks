import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import Categories from "../Categories/Categories.jsx";
import LocationInfo from "../LocationInfo/LocationInfo.jsx";
import Heart from "../Icons/Heart/Heart.jsx";
import HeartActive from "../Icons/Heart/HeartActive.jsx";
import css from "./CamperItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice.js";

function CamperItem({
  camper: {
    id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    transmission,
    AC,
    engine,
    kitchen,
    radio,
    bathroom,
  },
}) {
  const url = gallery[0].thumb;

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorited = favorites.includes(id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={css.card}>
      <img className={css.photo} src={url} alt={name} />
      <div className={css.info}>
        <div className={css.main}>
          <h2 className={css.name}>{name}</h2>
          <div className={css.main} onClick={handleToggleFavorite}>
            <p className={css.name}>
              €<span>{price}</span>.00
            </p>
            {!isFavorited ? <Heart /> : <HeartActive />}
          </div>
        </div>

        <LocationInfo rating={rating} reviews={reviews} location={location} />

        <p className={css.description}>{description}</p>

        <Categories
          transmission={transmission}
          AC={AC}
          engine={engine}
          kitchen={kitchen}
          radio={radio}
          bathroom={bathroom}
        />

        <Link to={`/catalog/${id}`}>
          <Button btnText={"Show more"} />
        </Link>
      </div>
    </div>
  );
}

export default CamperItem;
