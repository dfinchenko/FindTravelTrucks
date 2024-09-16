import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CamperItem from "../CamperItem/CamperItem.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import { selectFilteredCampers } from "../../redux/campersSlice.js";
import { loadFavorites } from "../../redux/favoritesSlice.js";
import css from "./CampersList.module.css";

function CampersList({ loadMore, visibleItem }) {
  const dispatch = useDispatch();
  const visibleCampers = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {visibleCampers.slice(0, visibleItem).map((camper) => (
          <li key={camper.id}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
      {visibleItem < visibleCampers.length && (
        <LoadMoreBtn loadMore={loadMore} />
      )}
    </div>
  );
}

export default CampersList;
