import React from 'react'
import "../styles/Cart.css"
import { CContext } from "../context/CartContext";
import { useContext } from 'react';
import { CartItem } from './CartItem';

export const Cart = () => {
    const { itemsCart, removeItem, clearAll } = useContext(CContext);
    console.log(itemsCart);

    return (
        <>
            <div className='container-cart'>
                <div className='container-clean-Cart'>
                    <button onClick={() => clearAll()} className='btn-clean-cart'> Vaciar carrito </button>
                </div>
                <div className='container-cart-items'>
                    {
                        itemsCart.map((e) => (
                            <CartItem item={e.item} quantity={e.quantity} removeItem={removeItem} clearAll={clearAll} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
