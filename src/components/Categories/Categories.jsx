import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesService } from "../../api/categories.service";
import { servicesService } from "../../api/services.service";
import Services from "../Services/Services";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import s from "./Categories.module.scss";

function Categories() {
  const dispatch = useDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // Селекторы категорий
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useSelector(state => state.categories);

  // Селекторы услуг
  const {
    services,
    loading: servicesLoading,
    error: servicesError,
  } = useSelector(state => state.services);

  // Диспатч сервис запроса
  useEffect(() => {
    dispatch(categoriesService());
  }, [dispatch]);

  // Установка 6 категории по умолчанию
  useEffect(() => {
    if (categories.length > 0) {
      handleCategorySelect(categories[5].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const handleCategorySelect = categoryId => {
    setSelectedCategoryId(categoryId);
    dispatch(servicesService(categoryId));
  };

  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <h2 className={s.title}>Выберите категорию услуги</h2>
        <div className={s.categories}>
          {categoriesLoading ? (
            <SkeletonLoader
              count={10}
              containerClassName={s.skeleton}
              width={180}
              height={50}
            />
          ) : (
            <>
              {categories.map(category => (
                <button
                  className={`${s.button} ${
                    category.id === selectedCategoryId ? s.active : ""
                  }`}
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <img
                    className={s.image}
                    src={category.picture_url}
                    alt={category.title}
                  />
                  {category.title}
                </button>
              ))}
            </>
          )}
          {categoriesError && (
            <p className={s.error}>Ошибка: {categoriesError}</p>
          )}
        </div>
        {selectedCategoryId && (
          <Services
            services={services}
            loading={servicesLoading}
            error={servicesError}
          />
        )}
      </div>
    </div>
  );
}

export default Categories;
