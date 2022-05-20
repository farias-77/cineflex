import "./Form.css";

export default function Form ({text, inputText, info, setInfo}){
    return (
        <div className="form">
            <p>{text}</p>
            <input placeholder={inputText} onChange={event => setInfo(event.target.value)} value={info}/>
        </div>
    )
}