import React from "react";
import { CartWidget, Link, FontAwesomeIcon, faMagnifyingGlass } from './index';
import logobeer from '../assets/imgLogo/logo-beer.png';

import '../styles/Navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to="/">
                <div className="navbar-title">
                    <img className='title-img-logo' src={logobeer} alt="FastBuyFoods" />
                </div>
            </Link>
            <div className="navbar-btns">
                <input className='input-search' type="text" name="" id="input-search" placeholder='Que "pinta" hoy ?' />
                <div className='navbar-btn-search'>
                    <FontAwesomeIcon className='btn-search' icon={faMagnifyingGlass} />
                </div>
                <Link to="/Categories/ipa">
                    <button className="navbar-btn" icon="">Cervezas IPA</button>
                </Link>
                <Link to="/Categories/ale">
                    <button className="navbar-btn" icon="">Cervezas ALE</button>
                </Link>
                <Link to="/Categories/stouts">
                    <button className="navbar-btn" icon="">Cervezas STOUT</button>
                </Link>
                <Link to="/Local">
                    <button className="navbar-btn">
                        Visitanos!
                    </button>
                </Link>
                <Link to="/Cart">
                    <CartWidget />
                </Link>

            </div>
        </div>
    )
}




