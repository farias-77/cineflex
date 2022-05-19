import "./ChooseSession.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Day from "../Day/Day.js";
import Footer from "../Footer/Footer.js"


export default function ChooseSession(){
    
    const  { movieID }  = useParams();
    const [days, setDays] = useState([]);
    const [movieName, setMovieName] = useState("");
    const [movieBanner, setMovieBanner] = useState("");
    const [movie, setMovie] = useState();
    
    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);

        promise.then(response => {
            setMovie(response.data);
            setMovieBanner(response.data.posterURL)
            setMovieName(response.data.title)
            setDays([...response.data.days]);

        })
    }, []);

    return (
        <>
            <div className="chooseSession">
                <div className="select">Selecione o horário</div>
                {days.map(day => <Day key={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes}/>)}
            </div>
            {/* <Footer movieID={movieID} sessionID={false}/> */}
        </>
    )
}