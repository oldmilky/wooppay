import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <NavLink className={s.logo} to="/">
          W O O P P A Y
        </NavLink>
        <div className={s.wrap}>
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;
