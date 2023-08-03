import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsService } from "../../api/details.service";
import noImage from "../../assets/images/noImage.svg";
import PopupFields from "../Popup/PopupFields";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import s from "./Services.module.scss";

function Services({ services, loading, error }) {
  const dispatch = useDispatch();
  const [popupFields, setPopupFields] = useState(false);

  // Селекторы деталей услуги
  const {
    service,
    loading: detailsLoading,
    error: detailsError,
  } = useSelector(state => state.details);

  const handleServiceClick = service => {
    dispatch(detailsService(service.id));
    setPopupFields(true);
  };

  return (
    <div className={s.services}>
      <ul className={s.wrap}>
        {loading ? (
          <SkeletonLoader
            count={5}
            className={s.skeleton}
            containerClassName={s.skeletonFlex}
            width={260}
            height={200}
          />
        ) : error ? (
          <p className={s.error}>Ошибка: {error}</p>
        ) : (
          <>
            {services.length === 0 ? (
              <p className={s.void}>Сервисы недоступны в данный момент</p>
            ) : (
              <>
                {services.map(service => (
                  <li
                    key={service.id}
                    className={s.item}
                    onClick={() => handleServiceClick(service)}
                  >
                    <img
                      className={s.itemImage}
                      src={service.picture_url || noImage}
                      alt={service.title}
                    />
                    <h3 className={s.itemTitle}>{service.title}</h3>
                  </li>
                ))}
              </>
            )}
          </>
        )}
      </ul>
      {popupFields && (
        <PopupFields
          active={popupFields}
          setActive={setPopupFields}
          service={service}
          loading={detailsLoading}
          error={detailsError}
        />
      )}
    </div>
  );
}

export default Services;
