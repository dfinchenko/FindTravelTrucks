import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<h3>Please wait loading page...</h3>}>
        {children}
      </Suspense>
    </div>
  );
}

export default Layout;
