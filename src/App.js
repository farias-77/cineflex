import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChooseMovie from "./ChooseMovie/ChooseMovie.js";
import ChooseSession from "./ChooseSession/ChooseSession.js";
import Header from "./Header/Header.js";
import ChooseSeat from "./ChooseSeat/ChooseSeat.js";
import Success from "./Success/Success.js";

export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ChooseMovie />} />
                <Route path="/session/:movieID" element={<ChooseSession />} />
                <Route path="/seats/:sessionID" element={<ChooseSeat />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>  
    )
}