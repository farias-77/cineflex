import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ChooseSeat.css";
import Seat from "../Seat/Seat.js";

export default function ChooseSeat(){
    
    const { sessionID } = useParams();
    const [seats, setSeats] = useState([]);
    
    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);

        promise.then(response => {
            setSeats(response.data.seats);
        })
    }, [])

    console.log(seats)

    return (
        <div className="chooseSeat">
            <div className="select">Selecione o(s) assento(s)</div>
            <div className="seatOptions">
                {seats.map((seat) => <Seat name={seat.name} isAvailable={seat.isAvailable}/>)}
            </div>
            <div className="possibleStatus">
                <div className="">
                    <div className="status selected"></div>
                    <h4>Selecionado</h4>
                </div>
                <div className="">
                    <div className="status available"></div>
                    <h4>Disponível</h4>
                </div>
                <div className="">
                    <div className="status unavailable"></div>
                    <h4>Indisponível</h4>
                </div>
            </div>
        </div>
    )
}