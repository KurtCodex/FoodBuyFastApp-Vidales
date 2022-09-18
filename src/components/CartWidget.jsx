import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CContext } from "../context/CartContext";
import { useContext } from 'react';



export const CartWidget = () => {
    const { itemsCart } = useContext(CContext);
    return (
        <>
            {
                itemsCart.length !== 0 ? (<div className='navbar-cart'>
                    <FontAwesomeIcon className='cart' icon={faCartShopping} />
                </div>) : (<></>)

            }

        </>
    )
}
