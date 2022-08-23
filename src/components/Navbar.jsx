import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-title">
                <h2>FastBUY-Foods</h2>
            </div>
            <div className="navbar-btns">
                <button className="navbar-btn">Almuerzo</button>
                <button className="navbar-btn">Cena</button>
                <div className='navbar-cart'>
                    <FontAwesomeIcon className='cart' icon={faCartShopping} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;



