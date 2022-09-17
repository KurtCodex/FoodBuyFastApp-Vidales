import React from 'react'
import "../styles/Cart.css"
import { CContext } from "../context/CartContext";
import { useContext } from 'react';
import { CartItem } from './CartItem';

export const Cart = () => {
    const { itemsCart } = useContext(CContext);
    console.log(itemsCart);

    return (
        <>
            <div className='container-cart'>
                <div className='container-cart-items'>
                    {
                        itemsCart.map((e) => (
                            <CartItem item={e.item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
