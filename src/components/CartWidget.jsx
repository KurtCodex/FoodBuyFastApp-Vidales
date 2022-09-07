import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
    return (
        <div className='navbar-cart'>
            <FontAwesomeIcon className='cart' icon={faCartShopping} />
        </div>
    )
}
