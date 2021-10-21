import React, { } from "react";
import styles from "../styles/Search.module.css";
import { FcSearch } from "react-icons/fc";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export const Search = () => {
  const query = useQuery();
  const search = query.get("search");
  const history = useHistory();

 
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar peliculas.."
          value={search}
          autoFocus="autofocus"
          onChange={(e) => {
              const value = e.target.value;
             history.push("/?search=" + value);
            }}
        />
        <button className={styles.searchButton} type="submit">
          <FcSearch size={30} />
        </button>
      </div>
    </form>
  );
};
