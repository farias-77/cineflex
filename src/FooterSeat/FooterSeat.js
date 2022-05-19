import "./FooterSeat.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FooterSeat({sessionId}){
    
    const [movie, setMovie] = useState({});
    const [aux, setAux] = useState(true);

    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        promise.then( response => {
            setMovie({...response.data});
            setAux(false);
        })
    }, []);
    
    return(
        <div className="footer">
            <div className="movieBanner"><img src={aux ? "" : movie.movie.posterURL} alt="movie banner" /></div>
            <div className="movieInfo">
                <div className="movieName">{aux ? "" : movie.movie.title}</div>
                <div className="movieName">{aux ? "" : movie.day.weekday} - {aux ? "" : movie.name}</div>
            </div>
        </div>
    )
}