import s from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={s.container}>
      <div className={s.loader} />
    </div>
  );
};

export const LoaderMini = () => {
  return (
    <div className={s.container}>
      <div className={s.loaderMini} />
    </div>
  );
};
