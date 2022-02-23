import React, {useState} from "react";

// export default props => {
// }


function Contador (props){
    const [numero, setNumero] = useState(props.inicial)

    
    const incremento = () => { 
        if (numero >= props.max){
            return alert("limite alcançado. 160")
        }
       setNumero(numero + props.passos );
        console.log(numero);
    }
    const decremento = () => {
        if (numero <= props.min){
            return alert("não possivel menor q 0")
        }
        setNumero(numero - props.passos);
        numero--; 
        console.log(numero);
    }

    return(
        <>
            <h2>{numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>
        </>
    );
} 

export default Contador;