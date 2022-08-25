import Navbar from './components/Navbar';
import { Cards } from './components/Cards';
import { Location } from './components/Location';
import './styles/App.css';
import './styles/index.css';

function App() {
  return (
    <>
      <Navbar />
      <Location />
      <Cards />
    </>
  )
}

export default App;
