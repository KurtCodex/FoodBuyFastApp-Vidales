import Navbar from './components/Navbar';
import { Location } from './components/Location';
import { ItemListContainer } from './components/ItemListContainer';
import './styles/App.css';
import './styles/index.css';

function App() {
  return (
    <>
      <Navbar />
      <Location />
      <ItemListContainer />
    </>
  )
}

export default App;
