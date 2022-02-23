import './Titulo.css'

function Titulo(props){
    return (
        <div>
        <h1>{props.text}</h1>
        <h4 className="titulo">Titulo com Css</h4>
        <h3>{props.numero}</h3>
        </div>  

       
    );
} 


export default Titulo;