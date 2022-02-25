import React, { useState } from 'react'

function Filho(props) {

    function geraNumero() {
        return Math.random();
    }


    return (
        <>
            <button onClick={function () {
                const n = geraNumero();
                props.funcao(n,"O valor é: ") 
            }}>
                executar
            </button>
        </>
    )
}

export default Filho;