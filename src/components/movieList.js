import React from "react";

const MovieList  = (props) =>{
    return (<div>
        {props.movies.map((movie)=>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} id = {movie.id}  />
        )}
        </div>
    )

}
export default MovieList;