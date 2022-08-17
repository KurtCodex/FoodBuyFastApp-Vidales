import './App.css';
import Navbar from './components/navbar';

const ButtonComponent = () => {

  return <button className='btnOrder'> Encargar! </button>
}

function App() {

  const producto = {nombre: "Tacos", precio: 1200, cantidad: 12, tiempo_entrega: 30};

  return (
    <div className="App" style={{fontSize: '20px', borderBotton:"1px solid red"}}>
      <Navbar/>
      <header className="App-header">
        <p>
          Hola estimado. 
          <br /> Su producto: {producto.nombre}.
          <br /> Tiene un precio de {producto.precio}.
          <br /> La cantidad es: {producto.cantidad}. 
          <br /> El tiempo de entrega estimado es: {producto.tiempo_entrega}
        </p>
        <ButtonComponent/>
      </header>
    </div>
  );
}


export default App;
