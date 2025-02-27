import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
function PageNav({ user }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <NavLink to="/product">product </NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
