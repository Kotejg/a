import React, {useState} from 'react'
import './Veiculo.css'

function Veiculo(props){

return (
    <>
    <li className='item'>
        <h5>modelo: {props.modelo}</h5>
        <h5>marca: {props.marca}</h5>
        <h5>cor: {props.cor}</h5>
        <h5>ano:{props.ano}</h5>
        <h5>porta: {props.porta}</h5>
        <h5>combus: {props.combus}</h5>
        <h5>cambio: {props.cambio}</h5>
        <h5>tamanho aro: {props.tem_aro}</h5>
        <h5>potencia: {props.potencia}</h5>
        <h5>preco: {props.preco}</h5>
    </li>
    </>
)}

export default Veiculo