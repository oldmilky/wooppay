import s from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <p className={s.text}>
          © 2023 <span className={s.span}>W O O P P A Y.</span> Все права
          защищены.
        </p>
        <p className={s.text}>
          Автор проекта:{" "}
          <a
            className={s.span}
            href="https://rodya.kz/"
            target="_blank"
            rel="noreferrer"
          >
            rodya.kz
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
