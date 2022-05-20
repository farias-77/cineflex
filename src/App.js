import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import ChooseMovie from "./ChooseMovie/ChooseMovie.js";
import ChooseSession from "./ChooseSession/ChooseSession.js";
import Header from "./Header/Header.js";
import ChooseSeat from "./ChooseSeat/ChooseSeat.js";
import Success from "./Success/Success.js";

export default function App(){
    
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedSeatsId, setSelectedSeatsId] = useState([]);
    const [sessionInfo, setSessionInfo] = useState();
    
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ChooseMovie />} />
                
                <Route path="/session/:movieId" element={<ChooseSession />} />
                
                <Route path="/seats/:sessionId" element={<ChooseSeat name={name} setName={setName} cpf={cpf} setCpf={setCpf} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} setSessionInfo={setSessionInfo} selectedSeatsId={selectedSeatsId} setSelectedSeatsId={setSelectedSeatsId} />} />
                
                <Route path="/success" element={<Success sessionInfo={sessionInfo} name={name} setName={setName} cpf={cpf} setCpf={setCpf} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} selectedSeatsId={selectedSeatsId} setSelectedSeatsId={setSelectedSeatsId} setSessionInfo={setSessionInfo}/> } />
            </Routes>
        </BrowserRouter>  
    )
}