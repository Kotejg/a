import React, {useState} from 'react'
import './Produto.css'

function Produto(props){

return (
  
    <li className='item'>
        <div className='nome'>{props.nome}</div>
        <div  className='marca'>{props.marca}</div>
        <div  className='valor'>R${props.valor}</div>
        <div  className='desc'>{props.desc}</div> 
        <button  className='btn-comprar'>Comprar</button>
    </li>
   
)}

export default Produto 