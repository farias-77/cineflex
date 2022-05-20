import "./ChooseSeat.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Seat from "../Seat/Seat.js";
import StatusOption from "../StatusOption/StatusOption.js";
import Form from "../Form/Form.js";
import FooterSeat from "../FooterSeat/FooterSeat.js";

export default function ChooseSeat({ name, setName, cpf, setCpf, setSelectedSeats, setSelectedSeatsId , setSessionInfo}) {

    const { sessionId } = useParams();
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);
        promise.then(response => {
            setSeats(response.data.seats);
        })

        setSessionInfo(sessionId);
    }, []);

    useEffect(() => {
        seats.map(seat => seat.selected = false);
    }, [seats]);

    function verifySelected() {
        setSelectedSeatsId(seats.filter(seat => seat.selected === true).map(seat => seat.id));
        setSelectedSeats(seats.filter(seat => seat.selected === true).map(seat => seat.name));
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
            <div className="forms">
                <Form text="Nome do comprador: " inputText="Digite seu nome..." info={name} setInfo={setName} />
                <Form text="CPF do comprador: " inputText="Digite seu CPF..." info={cpf} setInfo={setCpf} />
            </div>
            <Link to="/success"><button onClick={verifySelected} className="orangeButton">Reservar assento(s)</button></Link>
            <FooterSeat sessionId={sessionId} />
        </div>
    )
}