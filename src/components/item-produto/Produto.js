import React, {useState} from 'react'
import './Produto.css'
import  Logo from './abacaxi.png' 
import Icon from './favorito.png'
import Button from './components/Button/Button';

function Produto(props){
    let btn = "btn ";
    btn += props.verde ? 'verde' : ''; //aero funtion


return (
   
    <div class="product-card">
      <div class="badge-B"><img src={Icon} width="20px"/></div>
      <div class="product-tumb">
        <a href="#"><img src={Logo} alt="Logo"/></a>
      </div>
      <div class="product-details ">

        <h4>{props.nome}</h4>
        <p>{props.marca}</p>
        <div class="product-bottom-details text-center">
          <div class="product-price">
            {props.valor}
          </div>
        </div>
        <div className=''>
        <Button/>
        </div>
       
      </div>
    </div>
)}

export default Produto;