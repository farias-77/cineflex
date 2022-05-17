import "./ChooseMovie.css";

import Movie from "../Movie/Movie.js";

export default function ChooseMovie(){
    return (
        <div className="chooseMovie">
            <div className="select">Selecione o filme</div>
            <div className="movies">
                <Movie />
            </div>
        </div>
    )
}