import "./Form.css";

export default function Form ({text, inputText, info, setInfo}){
    return (
        <div className="form">
            <label forhtml="name">{text}</label>
            <input required placeholder={inputText} onChange={event => setInfo(event.target.value)} value={info}/>
        </div>
    )
}