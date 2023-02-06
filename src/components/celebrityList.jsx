import React from "react";
import './movieListcss.css';
const CelebrityList  = (props) =>{
    return (<div id="backDrop">
        {props.movies.map((movie)=>
        <img src={`https://image.tmdb.org/t/p/original/${movie.profile_path}`} id = {movie.id} className = "card" />
        )}
        </div>
    )

}
export default CelebrityList;