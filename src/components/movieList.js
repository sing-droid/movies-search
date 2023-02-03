import React from "react";
import './movieListcss.css';
const MovieList  = (props) =>{
    return (<div id="backDrop">
        {props.movies.map((movie)=>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} id = {movie.id} className = "card" />
        )}
        </div>
    )

}
export default MovieList;