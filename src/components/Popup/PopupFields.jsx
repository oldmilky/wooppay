import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { detailsService } from "../../api/details.service";
import noImage from "../../assets/images/noImage.svg";
import { Loader } from "../Loader/Loader";
import s from "./Popup.module.scss";

function PopupFields({ active, setActive, service, loading, error }) {
  const dispatch = useDispatch();
  
  // Валидация
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Диспатч сервис деталей услуги
  useEffect(() => {
    if (service && !service.fields) {
      dispatch(detailsService(service.id));
    }
  }, [dispatch, service]);

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div
      className={active ? s.popupOpened : s.popup}
      onClick={() => setActive(false)}
    >
      <div className={s.content} onClick={e => e.stopPropagation()}>
        {loading ? (
          <Loader />
        ) : error ? (
          <span className={s.error}>{error}</span>
        ) : (
          <>
            <div className={s.wrap}>
              <img
                className={s.image}
                src={service.picture_url || noImage}
                alt={service.title}
              />
              <h1 className={s.title}>{service.title}</h1>
            </div>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              {service.fields.map(field => (
                <div key={field.id} className={s.field}>
                  <label className={s.fieldLabel}>{field.title}</label>
                  <Controller
                    name={`field_${field.id}`}
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                      minLength: 2,
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className={s.fieldInput}
                        placeholder="Заполните поле"
                      />
                    )}
                  />
                  {errors[`field_${field.id}`] && (
                    <span className={s.error}>
                      Это поле обязательно к заполнению, минимум 2 символа
                    </span>
                  )}
                </div>
              ))}
              <button type="submit" className={s.buttonSend}>
                Отправить
              </button>
            </form>
          </>
        )}
        <button className={s.cancel} onClick={() => setActive(false)}>x</button>
      </div>
    </div>
  );
}

export default PopupFields;
