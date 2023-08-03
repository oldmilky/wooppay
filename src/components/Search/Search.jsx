import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchService } from "../../api/search.service";
import noImage from "../../assets/images/noImage.svg";
import search from "../../assets/images/search.svg";
import { LoaderMini } from "../Loader/Loader";
import s from "./Search.module.scss";

function Search() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  // Селекторы поиска
  const { results, loading, error } = useSelector(state => state.search);

  const handleSearch = () => {
    dispatch(searchService(searchQuery));
  };

  return (
    <div className={s.container}>
      {loading && <LoaderMini />}
      <div className={s.search}>
        <img className={s.searchIcon} src={search} alt="search" />
        <input
          className={s.input}
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
      <button className={s.button} onClick={handleSearch}>
        Найти
      </button>

      {error && (
        <>
          <p className={s.title}>Error: {error.message}</p>
        </>
      )}
      {results.length > 0 && (
        <div className={s.result}>
          {results.map(r => (
            <div key={r.id}>
              <div className={s.wrapper}>
                <img
                  className={s.image}
                  src={r.picture_url || noImage}
                  alt="searchImage"
                />
                <h1 className={s.title}>{r.title}</h1>
              </div>
              <p className={s.description}>{r.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
