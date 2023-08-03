import s from "./Benefits.module.scss";

function Benefits() {
  return (
    <section className={s.benefits}>
      <div className={s.container}>
        <h2 className={s.title}>Возможности Wooppay</h2>
        <p className={s.subtitle}>
          Wooppay позволяет оплачивать услуги и совершать переводы в любой точке
          мира
        </p>
        <p className={s.subtitle}>
          Возможность выплаты бонусов/кешбеков вашим клиентам на карты, баланс
          мобильного, кошелёк Wooppay
        </p>
        <p className={s.subtitle}>
          Размещайте свои товары и услуги на сайте Wooppay, Beemoney, Mobimoney
          и Smartbank
        </p>
      </div>
    </section>
  );
}

export default Benefits;
