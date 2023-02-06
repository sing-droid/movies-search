import React, { useEffect, useState } from "react";
import CelebrityList from "./celebrityList";
const Celebrity = () => {
    const [celebrity, setCelebrity] = useState([])
    const celebrityMovieRequest = async () => {
        const url = "https://api.themoviedb.org/3/person/popular?api_key=903261e2683f7f01673c55e0933062d6"
        const response = await fetch(url)
        const responseJson = await response.json()
        setCelebrity(responseJson.results)
        // console.log(celebrity)
    }

    useEffect(() => {
        celebrityMovieRequest()
    }
    )
    return (
        <div>
            <CelebrityList movies = {celebrity} />
        </div>
    )
}
export default Celebrity;