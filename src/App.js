import './App.css';
// import Primeiro from './components/Primeiro';
// import Teste, {Componente1} from './components/Multi'
// import Titulo from './components/Titulo'
// import Button from './components/Button'
// import Contador from './components/Contador';
// import Propriedades from './components/propriedades/Propriedades';
// import Pessoa from './components/Pessoa/Pessoa'; 
// import Produto from './components/Produto/Produto.js'; 
//  import Produto from './components/item-produto/Produto'; 
// import Veiculo from './components/Veiculo/Veiculo';
// import Pai from './components/indireta/Pai'; 
// import Familia from './components/children/Familia';
// import Membro from './components/children/Membro';
// import ParImpar from './components/condicional/Parimpar';
// import ListaProduto from './components/lista/LIstaProduto';
// import Digite from './components/DigiteSeuNome';
// import CadastroNome from './components/classe/CadastroNome'
import Logado from './components/condicional/UsuarioLogado';


function App() {
  return (
    <div className="App ">

      {/* <ul>
    <Produto nome="Banana" valor="12,00" marca="Hortfrut" desc="Banana rica em potassio"/>
  </ul>  */}

      <div className='app2'>
        {/* <ParImpar num={2}/>
    <ParImpar num={3}/>
    <ParImpar num/>
  

   <Familia>
     <Membro nome="jeff" sobre="Bispo"/>
   </Familia> */}


        {/* <ListaProduto/> */}


        {/* <Digite/>

   <CadastroNome nome="jeff"/> */}

        <Logado usuario={{ nome: 'Jeff', email: 'jeff@gmail.com' }} /> 
        <hr/>
        <Logado usuario={{nome: 'Jonas' }}/> 
      </div>





      {/* <Pessoa nome="Jeff" idade="22" sexo="M" estado_civil="solteiro"/>
  <Pessoa nome="Nanda" idade="20" sexo="F" estado_civil="solteira"/> */}
      {/* <Contador inicial={100} passos={10} min={0} max={160}/> */}
      {/* <Propriedades nome="bispo"/>
  <Propriedades nome="Jeff"/> */}
    </div>
  );
}

export default App;
