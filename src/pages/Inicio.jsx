import React from 'react'
import { MoviesGrid } from '../components/MoviesGrid'
import { Search } from '../components/Search'
import style from "../styles/Inicio.module.css"
import { Link } from "react-router-dom";
import {StarRating} from '../components/StarRating'


const Inicio = () => {
    return (
        <div>
           <header>
           <Link to={"/"}><h1 className={style.title}>Peliculas</h1> </Link>
           </header>
           <main>
               <Search/>
               <StarRating />
               <MoviesGrid />
           </main>
        </div>
    )
}

export default Inicio
