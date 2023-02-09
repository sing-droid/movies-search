import React, {  useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MovieList from "./movieList";

const SearchList = () => {
    const [search, setSearch] = useState([]);
    const location = useLocation()
    const {query} = location.state;
    const searchMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/search/multi?api_key=903261e2683f7f01673c55e0933062d6&language=en-US&query=${query}&page=1&include_adult=false`
        const response  = await fetch(url)
        const responsejson = await response.json()
        setSearch(responsejson.results)
        console.log(search)
    }
    useEffect(() => {
        searchMovieRequest()
    }
 )
 return (
    <div>
        <MovieList movies ={search} />
    </div>
 )
}
export default SearchList;