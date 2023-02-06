import { ImportExportRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import MovieList from "./movieList";

const Tvs = () => {
    const [tv, setTv] = useState([])
    const tvMovieRequest = async () => {
        const url = "https://api.themoviedb.org/3/discover/tv?api_key=903261e2683f7f01673c55e0933062d6"
        const response = await fetch(url)
        const responseJson = await response.json()
        setTv(responseJson.results)
        // console.log(tv)
    }

    useEffect(() => {
        tvMovieRequest()
    }
    )
    return (
        <div>
            <MovieList movies = {tv} />
        </div>
    )
}
export default Tvs;