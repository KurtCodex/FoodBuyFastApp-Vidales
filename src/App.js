import logo from './logo.svg';
import './App.css';


const ButtonComponent = () => {
  
  return <button> Hola mundo</button>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <ButtonComponent/>
      </header>
    </div>
  );
}


export default App;
