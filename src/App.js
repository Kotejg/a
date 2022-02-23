import './App.css';
import Primeiro from './components/Primeiro';
import Teste, {Componente1} from './components/Multi'
// import Titulo from './components/Titulo'
// import Button from './components/Button'
import Contador from './components/Contador';



function App() {
  return (
    <div className="App">
      {/* <Titulo text="bem vindo" numero={2}/>
    <Button label="cadastrar"/>
    <Button label="comprar"/> */} 
  <Contador inicial={100} passos={10} min={0} max={160}/>
    </div>
  );
}

export default App;
