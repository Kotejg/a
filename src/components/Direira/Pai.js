import React from 'react'
import Filho from './Filho'

function Pai(props){
    let x = 40;
    let y = 50;

return (
<>
    <Filho a={x} b={y}/>
    <Filho a={x + 10} b={y - 10}/>
</>
)}

export default Pai