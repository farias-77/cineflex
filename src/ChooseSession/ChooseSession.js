import "./ChooseSession.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Day from "../Day/Day.js";
import FooterSession from "../FooterSession/FooterSession.js"


export default function ChooseSession(){
    
    const  { movieId }  = useParams();
    const [days, setDays] = useState([]);
    
    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);

        promise.then(response => {
            setDays([...response.data.days]);
        })
    }, []);

    return (
        <>
            <div className="chooseSession">
                <div className="select">Selecione o horário</div>
                {days.map(day => <Day key={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes}/>)}
            </div>
            <FooterSession movieId={movieId} />
        </>
    )
}