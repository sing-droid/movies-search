import React, { useEffect } from "react";
import { useState } from "react";
import MovieList from "../movieList";


 const Home = ()=> {
    const [movies, setMovies] = useState([]);
    const getMovieRequest = async ()=> {
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=903261e2683f7f01673c55e0933062d6"

        const response = await fetch(url)
        const responsejson = await response.json()
        setMovies(responsejson.results)
        // console.log(movies)

    }
    useEffect(()=> {
        getMovieRequest()
    })

    return (
        <div>
            
            <MovieList movies = {movies} />
        </div>
    )
}
export default Home;