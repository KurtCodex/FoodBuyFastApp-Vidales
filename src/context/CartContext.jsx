import React from 'react'
import { createContext, useState } from 'react';
export const CContext = createContext();

export const CartContext = ({ children }) => {
    const [itemsCart, setItemCart] = useState([])

    const addItem = (item, quantity) => {
        const newItem = isInCart(item);
        if (newItem) {
            quantity = quantity + newItem.quantity;
            setItemCart(itemsCart.splice(itemsCart.findIndex(
                (e) => e.item.id === item.id), 1)
            )
        }

        setItemCart([...itemsCart, { item, quantity }])
        console.log(itemsCart)
    }
    const isInCart = (item) => {
        return itemsCart.find((e) => e.item === item);
    }
    const removeItem = (itemId) => {
        setItemCart(itemsCart.filter(e => e.item.id !== itemId))
    }

    const clearAll = () => {
        setItemCart([]);
    }
    return (
        <>
            <CContext.Provider value={{ itemsCart, addItem, removeItem, clearAll }}> {children} </CContext.Provider>
        </>
    )
}
