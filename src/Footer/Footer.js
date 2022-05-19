import "./Footer.css";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Footer({sessionID}){

    const [movieBySession, setMovieBySession] = useState({});

    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);

        promise.then(response => {
            setMovieBySession({...response.data});
        })
    }, [])

    useEffect(() => {
        console.log(movieBySession);
    }, [movieBySession])

    return(
        <div className="footer">
            <div className="movieBanner"><img src={movieBySession.movie.posterURL} alt="movie banner" /></div>
            <div className="movieName"><h3>{movieBySession.movie.title}</h3></div>
            <div className="movieSession">{movieBySession.day.weekday} - {movieBySession.name}</div>
        </div>
    )
}

    