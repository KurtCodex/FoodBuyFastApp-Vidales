import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from './CartWidget';
import logo from '../assets/imgLogo/logo.png'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-title">
                <img className='title-img-logo' src={logo} alt="FastBuyFoods" />
            </div>
            <div className="navbar-btns">
                <input className='input-search' type="text" name="" id="input-search" placeholder='Que quieres comer ?' />
                <div className='navbar-btn-search'>
                    <FontAwesomeIcon className='btn-search' icon={faMagnifyingGlass} />
                </div>
                <button className="navbar-btn">Almuerzo</button>
                <button className="navbar-btn">Cena</button>
                <CartWidget />
            </div>
        </div>
    );
};

export default Navbar;



