import React from 'react'
import './movieListcss.css';

const DescriptionView = (props) => {
    console.log(props);
  return (
    <div id='backDrop'>
 <img src={`https://image.tmdb.org/t/p/original/${props.res.poster_path}`} className = "card" /> 
 <h1> {props.res.title}</h1>
 <p>{props.res.overview}</p>
 <h4>Popularity : {props.res.popularity}</h4>
 <h5>Revenue : {props.res.revenue}</h5>
 <h5>Released Date : {props.res.release_date}</h5>
 <h5>Status : {props.res.status}</h5>

    </div>
  )
}

export default DescriptionView;