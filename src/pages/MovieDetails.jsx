import React, { useEffect, useState, } from 'react'
import styles from "../styles/MovieDetails.module.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { get } from '../api/httpClient';
import { Loader } from '../components/Loader';


const MovieDetails = () => {
    const [loading, setLoading] = useState(true);
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);

    

    useEffect(()=>{
        setLoading(true)
        get("/movie/" + movieId).then(data=>{
            setLoading(false)

            setMovie(data);
        })
    }, [movieId])
    
    if(loading){
        return  <Loader/>;
                   
    }

    if(!movie){
        return null;

    }

    const imageUrl = "https://image.tmdb.org/t/p/w400" + movie.poster_path;
  
    return (
        <>
        <Link to={"/"}><h1 className={styles.title}>Peliculas</h1> </Link>
        <div className={styles.detailsContainer}>
        <img className={styles.image}
        src={imageUrl} alt={movie.title} />
        <div className={styles.col}>
            <p className={styles.movieDetails}> <strong>Titutlo: {movie.title}</strong> </p>
            <p> <strong>Genero:{movie.genres.map(genre=>genre.name).join(", ")}</strong> </p>
            <p> <strong>Puntuación {movie.vote_average}</strong></p>
            <p> <strong>Descripción: {movie.overview}</strong> </p>
            </div>

        </div>
        </>
    )
}

export default MovieDetails
