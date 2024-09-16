import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.navMenuItem, isActive && css.active);
};

function Navigation() {
  return (
    <nav className={css.container}>
      <NavLink to={"/"} className={css.logo}>
        <Logo />
      </NavLink>
      <ul className={css.navMenu}>
        <li>
          <NavLink to={"/"} className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/catalog"} className={getNavLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
