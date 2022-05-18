import "./Seat.css";

export default function Seat({name, isAvailable}){
    
    if(name < 10){
        name = "0" + name;
    }
        
    return(
         !isAvailable ? <div className="seat unavailable">{name}</div> : <div className="seat">{name}</div>
    )
}