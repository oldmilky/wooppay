import s from "./Heading.module.scss";

function Heading() {
  return (
    <section className={s.heading}>
      <div className={s.container}>
        <h1 className={s.title}>Онлайн оплата различных услуг</h1>
        <h2 className={s.subtitle}>
          Для того, чтобы подключить или оплатить услугу, выберите ее в
          категории.{" "}
        </h2>
        <div className={s.wrap}>
          <button className={s.buttonCategories}>Категории</button>
          <button className={s.buttonAuthor}>Автор</button>
        </div>
      </div>
    </section>
  );
}

export default Heading;
