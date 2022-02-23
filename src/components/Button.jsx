import { props } from 'bluebird';
import './Button.css'

function ButtonMain (props){

    function cadastrar(){
        alert("Clicou");
    }


    return(
        <button className='btn' onClick={cadastrar}>
            {props.label}
        </button>
    );
}

export default ButtonMain