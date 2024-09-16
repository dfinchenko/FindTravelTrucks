import Categories from "../Categories/Categories";
import css from "./CamperFeatures.module.css";

function CamperFeatures({
  camper: {
    transmission,
    AC,
    engine,
    kitchen,
    radio,
    bathroom,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  },
}) {
  return (
    <section className={css.wrap}>
      <Categories
        transmission={transmission}
        AC={AC}
        engine={engine}
        kitchen={kitchen}
        radio={radio}
        bathroom={bathroom}
      />
      <div className={css.vehicleDetails}>
        <h2 className={css.main}>Vehicle details</h2>
        <div className={css.line}></div>
        <ul className={css.detailsList}>
          <li className={css.item}>
            <div className={css.detailsListItem}>
              <p>Form</p>
              <p>{form}</p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.detailsListItem}>
              <p>Length</p>
              <p>{length}</p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.detailsListItem}>
              <p>Width</p>
              <p>{width}</p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.detailsListItem}>
              <p>Height</p>
              <p>{height}</p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.detailsListItem}>
              <p>Tank</p>
              <p>{tank}</p>
            </div>
          </li>
          <li className={css.item}>
            <div className={css.detailsListItem}>
              <p>Consumption</p>
              <p>{consumption}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CamperFeatures;
