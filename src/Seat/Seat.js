import "./Seat.css";
import { useState, useEffect } from "react";

export default function Seat({seat}){
       
    const [seatClasses, setSeatClasses] = useState("seat")

    function unavailableSeat(){
        alert("Assento indisponível!");
    }

    function toggleSelected(){
        if(seatClasses === "seat"){
            setSeatClasses("seat selected");
            seat.selected = true;
        }else{
            setSeatClasses("seat");
            seat.selected = false;
        }
    }

    

    return(
         !seat.isAvailable ? <div onClick={unavailableSeat} className="seat unavailable">{seat.name < 10 ? "0"+ seat.name : seat.name}</div> : <div onClick={toggleSelected} className={seatClasses}>{seat.name < 10 ? "0"+ seat.name : seat.name}</div>
    )
}