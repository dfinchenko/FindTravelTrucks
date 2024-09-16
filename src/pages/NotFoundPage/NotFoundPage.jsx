import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <section className={css.container}>
      <p>Opps! Page not found!</p>
      <Link to="/">
        <Button btnText={"Home page"} />
      </Link>
    </section>
  );
}

export default NotFoundPage;
