import css from "./Button.module.css";

export default function Button({ btnText }) {
  return (
    <button className={css.btn} type="button">
      {btnText}
    </button>
  );
}
