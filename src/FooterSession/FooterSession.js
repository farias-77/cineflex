import "./FooterSession.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FooterSession({movieId}){

    const [movieByMovieId, setMovieByMovieId] = useState({});
    const [aux, setAux] = useState(true);
    
    useEffect(() => {        
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
    
        promise.then(response => {
            setMovieByMovieId({...response.data});
            setAux(false);
        });
    }, []);

    return(
        <div className="footer">
            <div className="movieBanner"><img src={aux ? "[Loading...]" : movieByMovieId.posterURL} alt="movie banner" /></div>
            <div className="movieName"><h3>{aux ? "[Loading...]" : movieByMovieId.title}</h3></div>
        </div>
    )
}

    