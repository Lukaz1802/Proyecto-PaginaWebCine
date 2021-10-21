import React, { useEffect, useState } from "react";
import MoviesCard from "./MovieCard";
import styles from "../styles/MoviesGrid.module.css";
import { get } from "../api/httpClient";
import { useQuery } from "../hooks/useQuery";



export const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/movie/popular";
    get(searchUrl).then((data) => {
      setMovies(data.results);
    });
  }, [search]);
  return (
    <div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};
