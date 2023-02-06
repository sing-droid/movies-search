import React from "react";
import { useLocation } from "react-router-dom";
import Trendings from "../trendingMovies";

 const Trending = () =>  {
  const location = useLocation()
  const [query] = location.state
  return (
    <div>
        if(query != ""){
          console.log(query)
        }

        else {
        <Trendings />
  
        }
    </div>
  )
}

export default Trending;