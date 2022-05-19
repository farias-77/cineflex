import "./ChooseSeat.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Seat from "../Seat/Seat.js";
import StatusOption from "../StatusOption/StatusOption.js";
import Form from "../Form/Form.js";
import FooterSeat from "../FooterSeat/FooterSeat.js";

export default function ChooseSeat(){
    
    const { sessionId } = useParams();
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [cont, setCont] = useState(0);
    
    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        promise.then(response => {
            setSeats(response.data.seats);
        })
    }, [])

    useEffect(() => {
        seats.map(seat => seat.selected = false);
    }, [seats])

    
    ///////////////////////////// criar objeto para o post
    useEffect(() => {
        
        if(selectedSeats.length > 0 && cont < 1){
            setSelectedSeats(selectedSeats.map(seat => seat.id));
            setCont(cont + 1);
        }
    }, [selectedSeats]);

    useEffect(() => {

        if(cont === 1){
            console.log(selectedSeats)
            buyTickets(selectedSeats);
        }

    }, [cont]);
    
    function verifySelected(){
        setSelectedSeats(seats.filter(seat => seat.selected === true));
    }

    function filterSelected(seat){
        if(seat.selected === false){
            return false;
        }   
        return true
    }

    function buyTickets(seats){
        let tickets = {
            ids: selectedSeats,
            name: "Gabriel",
            cpf:"123456",
        }

        let promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", tickets);
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
                <Form text="Nome do comprador: " inputText="Digite seu nome..." />
                <Form text="CPF do comprador: " inputText="Digite seu CPF..." />
            </div>
            <Link to="/success"><button className="orangeButton" onClick={verifySelected}>Reservar assento(s)</button></Link>
            <FooterSeat sessionId={sessionId} />
        </div>
    )
}