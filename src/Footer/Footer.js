import "./Footer.css";

export default function Footer({name, image}){

    return(
        <div className="footer">
            <div className="movieBanner"><img src={image} alt="movie banner" /></div>
            <div className="movieName"><h3>{name}</h3></div>
        </div>
    )
}