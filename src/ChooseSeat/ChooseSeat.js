import "./ChooseSeat.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Seat from "../Seat/Seat.js";
import StatusOption from "../StatusOption/StatusOption.js";
import Form from "../Form/Form.js";
import FooterSeat from "../FooterSeat/FooterSeat.js";

export default function ChooseSeat({name , setName, cpf, setCpf, setSelectedSeats, setSessionInfo}){
    
    const { sessionId } = useParams();
    const [seats, setSeats] = useState([]);
    const [cont, setCont] = useState(0);
    const [selectedSeatsId, setSelectedSeatsId] = useState([]);
    
    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);
        promise.then(response => {
            setSeats(response.data.seats);
        })

        setSessionInfo(sessionId);
    }, [])

    useEffect(() => {
        seats.map(seat => seat.selected = false);
    }, [seats])

    useEffect(() => {
        if(selectedSeatsId.length > 0 && cont < 1){
            setSelectedSeatsId(selectedSeatsId.map(seat => seat.id));
            setSelectedSeats(selectedSeatsId.map(seat => seat.name));
            setCont(cont + 1);
        }
    }, [selectedSeatsId]);

    useEffect(() => {
        if(cont === 1){
            buyTickets(selectedSeatsId);
        }
    }, [cont]);
    
    function verifySelected(){
        setSelectedSeatsId(seats.filter(seat => seat.selected === true));
        setSelectedSeats(seats.filter(seat => seat.selected === true));
    }

    function buyTickets(){
        let tickets = {
            ids: selectedSeatsId,
            name: name,
            cpf:cpf,
        }

        //axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", tickets);
    }


    return (
        <div className="chooseSeat">
            <div className="select">Selecione o(s) assento(s)</div>
            <div className="seatOptions">
                {seats.length === 0 ? "" : seats.map((seat, index) => <Seat key={index} seat={seat} />)}
            </div>
            <div className="possibleStatus">
                <StatusOption text="Selecionado" statusClass="status selected" />
                <StatusOption text="Disponível" statusClass="status available" />
                <StatusOption text="Indisponível" statusClass="status unavailable" />
            </div>
            <form>
                <div className="forms">
                    <Form text="Nome do comprador: " inputText="Digite seu nome..." info={name} setInfo={setName} />
                    <Form text="CPF do comprador: " inputText="Digite seu CPF..." info={cpf} setInfo={setCpf} />
                </div>
            </form>
            <Link to="/success"><button className="orangeButton" onClick={verifySelected}>Reservar assento(s)</button></Link>
            <FooterSeat sessionId={sessionId} />
        </div>
    )
}