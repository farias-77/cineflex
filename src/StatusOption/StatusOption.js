import "./StatusOption.css";

export default function StatusOption({text, statusClass}){
    return (
        <div className="seatStatusOption">
            <div className={statusClass}></div>
            <h4>{text}</h4>
        </div>
    )
}