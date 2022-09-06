import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import logobeer from '../assets/imgLogo/logo-beer.png';
import '../styles/Navbar.css'



export const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-title">
                <img className='title-img-logo' src={logobeer} alt="FastBuyFoods" />
            </div>
            <div className="navbar-btns">
                <input className='input-search' type="text" name="" id="input-search" placeholder='Que "pinta" hoy ?' />
                <div className='navbar-btn-search'>
                    <FontAwesomeIcon className='btn-search' icon={faMagnifyingGlass} />
                </div>
                <button className="navbar-btn">Tienda</button>
                <button className="navbar-btn">Locales</button>

                <button className="navbar-btn">
                    <Link to="/Contacts">
                        Contactos
                    </Link>
                </button>
                <CartWidget />
            </div>
        </div>
    )
}




