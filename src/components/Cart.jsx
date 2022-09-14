import React from 'react'
import "../styles/Cart.css"
import { CContext } from "../context/CartContext";
import { useContext } from 'react';


export const Cart = () => {
    const { itemsCart } = useContext(CContext);
    console.log(itemsCart);

    return (
        <>
            <div className='container-cart'>
                <div className='container-cart-items'>
                    <p className='itemscart'> {JSON.stringify(itemsCart)}  </p>

                </div>
            </div>
        </>
    )
}
