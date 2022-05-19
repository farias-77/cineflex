import "./ChooseSeat.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Seat from "../Seat/Seat.js";
import StatusOption from "../StatusOption/StatusOption.js";
import Form from "../Form/Form.js";
import Footer from "../Footer/Footer.js"

export default function ChooseSeat(){
    
    const { sessionID } = useParams();
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [cont, setCont] = useState(0);
    
    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);

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
            setSelectedSeats(selectedSeats.map(seat => seat.name));
            setCont(cont + 1);
        }
    }, [selectedSeats]);

    useEffect(() => {

        if(cont === 1){
            buyTickets(selectedSeats);
        }

    }, [cont]);
    
    function verifySelected(){
        setSelectedSeats(seats.filter(filterSelected));
    }

    function filterSelected(seat){
        if(seat.selected === false){
            return false;
        }   
        return true
    }

    function buyTickets(seats){
        let tickets = {
            ids: seats,
            name: "Gabriel",
            cpf:"123456",
        }

        //let promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", tickets);
        //promise.then(() => {alert('foi')});
        //promise.catch(() => {alert('nao foi')});
    }
    /////////////////////////////////////

    return (
        <div className="chooseSeat">
            <div className="select">Selecione o(s) assento(s)</div>
            <div className="seatOptions">
                {seats.map((seat, index) => <Seat key={index} seat={seat} />)}
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
            <Footer sessionID={sessionID}/>
        </div>
    )
}