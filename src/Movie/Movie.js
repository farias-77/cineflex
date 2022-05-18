import { Link } from "react-router-dom";
import "./Movie.css";

export default function Movie({id, image}){   
    return (
        <Link to={`/session/${id}`}>
            <div className="movie">
                <img src={image} alt="movie banner" />
            </div>
        </Link>
    )
}