import "./ChooseMovie.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Movie/Movie.js";

export default function ChooseMovie(){
    
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        let promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then( response => {
            setMovies([...response.data]);
        })
    }, [])
    
    return (
        <div className="chooseMovie">
            <div className="select">Selecione o filme</div>
            <div className="movies">
                {movies.map( movie => <Movie key = {movie.id} id={movie.id} image={movie.posterURL}/>)}
            </div>
        </div>
    )
}