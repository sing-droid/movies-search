import React from 'react'
import './movieListcss.css';


const CelebrityView = (props) => {
    return (
        <div id='backDrop'>
     <img src={`https://image.tmdb.org/t/p/original/${props.res.profile_path}`} className = "card" /> 
     <h1> {props.res.name}</h1>
     <p>{props.res.biography}</p>
     <h4>Birthday : {props.res.birthday}</h4>
     <h5>Famous for : {props.res.known_for_department}</h5>
     <h5>Place of Birth : {props.res.place_of_birth}</h5>
     <h5>Popularity : {props.res.popularity}</h5>
    
        </div>
      )
}

export default CelebrityView