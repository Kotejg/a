import React from 'react'

function ParImpar(props) {

    let num = props.num ? props.num : 0;

    return (
        <div>   
            <h4>O resultado é: </h4>
            {props.num % 2 == 0
            ? "par"
            : "impar"           
            }
        </div>
    )
}

export default ParImpar