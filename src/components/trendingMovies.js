import React, {  useEffect, useState } from "react";
import MovieList from "./movieList";

const Trendings = () => {
    const [trending, setTrending] = useState([]);
    const trendingMovieRequest = async () => {
        const url = "https://api.themoviedb.org/3/trending/all/day?api_key=903261e2683f7f01673c55e0933062d6"
        const response  = await fetch(url)
        const responsejson = await response.json()
        setTrending(responsejson.results)
        console.log(trending)
    }
    useEffect(() => {
        trendingMovieRequest()
    }
 )
 return (
    <div>
        <MovieList movies ={trending} />
    </div>
 )
}
export default Trendings;