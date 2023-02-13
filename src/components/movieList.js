import React from "react";
import './movieListcss.css';
import { Navigate, useNavigate } from 'react-router-dom';


const MovieList  = (props) =>{
    const  navigate = useNavigate();
    return (<div id="backDrop">
        {props.movies.map((movie)=>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} id = {movie.id} className = "card" 
         onClick={()=>{

         if(props.type == 'home' || props.type == 'trending'){
            navigate(`/description/home/${movie.id}`,{state : {id : movie.id}})
         }
         else if(props.type == 'tv'){
            navigate(`/description/tv/${movie.id}`,{state : {id : movie.id}})
         }
         else {
            navigate(`/description/celebrity/${movie.id}`,{state : {id : movie.id}})
         }
         }} />
        )}
        </div>
    )

}
export default MovieList;