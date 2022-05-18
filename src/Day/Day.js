import "./Day.css";
import { Link } from "react-router-dom";

export default function Day({weekday, date, showtimes}){       
    return (
        <div className="day">
                <h4>{weekday} - {date}</h4>
                <div className="hourOptions">
                    {showtimes.map((showtime, index) => <Link key ={index} to={`/seats/${showtime.id}`}><div className="hour">{showtime.name}</div></Link>)}
                </div>
            </div>
    )
}