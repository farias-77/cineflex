import "./Success.css";

export default function Success(){
    return (
        <div className="success">
            <div className="select boldGreen">Pedido feito com sucesso!</div>
            <div className="requestInfo">
                <div className="infoType">Filme e sessão</div>
                <p>Enola Holmes</p>
                <p>24/06/2021</p>
            </div>
            <div className="requestInfo">
                <div className="infoType">Ingressos</div>
                <p>Assento 16</p>
                <p>Assento 17</p>
            </div>
            <div className="requestInfo">
                <div className="infoType">Comprador</div>
                <p>Nome: Cristiano Ronaldo</p>
                <p>CPF: siiiiiiu</p>
            </div>
            <button className="orangeButton">Voltar para home</button>
        </div>
    )
}