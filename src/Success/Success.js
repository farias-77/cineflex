import "./Success.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Success({name, cpf, selectedSeats, sessionInfo, selectedSeatsId, setName, setCpf, setSelectedSeats, setSelectedSeatsId, setSessionInfo}){

    const [movie, setMovie] = useState({});
    const [aux, setAux] = useState(0);
    
    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionInfo}/seats`);
        promise.then((response) => {
            setMovie({...response.data});
            setAux(1);
        })

        let tickets = {
            ids: selectedSeatsId,
            name: name,
            cpf: cpf,
        }

        axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', tickets);
        
    }, []);
    
    function backHome(){
        setName("");
        setCpf("");
        setSelectedSeats([]);
        setSelectedSeatsId([]);
        setSessionInfo("");
    }

    return (
        <div className="success">
            <div className="select boldGreen">Pedido feito com sucesso!</div>
            <div className="requestInfo">
                <div className="infoType">Filme e sessão</div>
                <p>{aux === 0 ? "" : movie.movie.title}</p>
                <p>{aux === 0 ? "" : movie.day.date} {aux === 0 ? "" : movie.name}</p>
            </div>
            <div className="requestInfo">
                <div className="infoType">Ingressos</div>
                {selectedSeats.map((seat, index) => <p key={ index } >Assento { seat }</p>)}
            </div>
            <div className="requestInfo">
                <div className="infoType">Comprador</div>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </div>
            <Link to="/"><button onClick={backHome} className="orangeButton">Voltar para home</button></Link>
        </div>
    )
}