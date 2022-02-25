import React from 'react'

function Familia(props) {

    return (
        <>
        <h2>[Inicio familia]</h2>
        {props.children}
        <h2>[Fim familia]</h2>
        </>
    )
}

export default Familia