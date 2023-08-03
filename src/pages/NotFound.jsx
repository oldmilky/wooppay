import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header";
import s from "./Page.module.scss";

function NotFound() {
  return (
    <>
      <Header />
      <section className={s.notfound}>
        <h1 className={s.title}>Данная страница не найдена 404</h1>
        <NavLink to="/">
          <button className={s.home} to="/">
            На главную
          </button>
        </NavLink>
      </section>
    </>
  );
}

export default NotFound;
