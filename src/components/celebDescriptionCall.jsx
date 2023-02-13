import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CelebrityView from './celebrityView';

const CelebDescriptionCall = () => {
    const location = useLocation();
    console.log(location);
    const {id} = location.state
    const [responsejson, setresponsejson] = useState([]);
    const getMovieRequest = async ()=> {
    const  url = `https://api.themoviedb.org/3/person/${id}?api_key=903261e2683f7f01673c55e0933062d6&language=en-US`

        const response = await fetch(url)
        const result = await response.json()
        console.log(responsejson.popularity);
        setresponsejson(result);
        

    }

    useEffect(()=> {
        
        getMovieRequest();
        
    }) 
  return (

    <div>
       <CelebrityView res = {responsejson}/> 
    </div>
  )
}

export default CelebDescriptionCall