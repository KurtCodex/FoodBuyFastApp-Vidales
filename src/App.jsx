import Navbar from './components/Navbar';
import { Cards } from './components/Cards';
import { Location } from './components/Location';
import { ItemListContainer } from './components/ItemListContainer';
import './styles/App.css';
import './styles/index.css';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido" />
      <Location />
      <Cards />
    </>
  )
}

export default App;
