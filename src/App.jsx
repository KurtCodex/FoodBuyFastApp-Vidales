import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

const ButtonComponent = () => {

  return <button id='saludar'> Hello </button>
}

function App() {

  const producto = {precio: 100, cantidad: 10, peso: 30};

  return (
    <div className="App" style={{fontSize: '20px', borderBotton:"1px solid red"}}>
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, your product has a cost of ${producto.precio}, its stock is {producto.cantidad} units, and it has {producto.peso} Kg for unit.
        </p>
        <ButtonComponent/>
      </header>
    </div>
  );
}


export default App;
