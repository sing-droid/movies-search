import React from "react";
import { useNavigate } from "react-router-dom";
import './movieListcss.css';
const CelebrityList  = (props) =>{
    const navigate = useNavigate();
    return (<div id="backDrop">
        {props.movies.map((movie)=>
        <img src={`https://image.tmdb.org/t/p/original/${movie.profile_path}`} id = {movie.id} className = "card" 
        onClick={()=>{

        
            navigate(`/description/celebrity/${movie.id}`, {state : {id:movie.id}})
        
         }} />
        )}
        </div>
    )

}
export default CelebrityList;