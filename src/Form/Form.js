import "./Form.css";

export default function Form ({text, inputText}){
    return (
        <div className="form">
            <p>{text}</p>
            <input placeholder={inputText}/>
        </div>
    )
}