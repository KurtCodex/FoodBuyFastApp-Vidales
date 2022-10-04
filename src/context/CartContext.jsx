import React, { createContext, useState } from 'react';
export const CContext = createContext();

export const CartContext = ({ children }) => {
    const [itemsCart, setItemCart] = useState([])

    const addItem = (item, quantity) => {
        const newItem = isInCart(item);
        if (newItem) {
            quantity = quantity + newItem.quantity;
            setItemCart(itemsCart.splice(itemsCart.findIndex(
                (e) => e.item === item), 1)
            )
        }
        setItemCart([...itemsCart, { item, quantity }])
    }

    const isInCart = (item) => {
        return itemsCart.find((e) => e.item.name === item.name);
    }

    const removeItem = (item) => {
        setItemCart(itemsCart.filter(e => e.item !== item))
    }

    const clearAll = () => {
        setItemCart([]);
    }

    const Total = () => {
        return itemsCart.reduce((valorAnt, valorAct) => valorAnt + (parseFloat((valorAct.item.price * valorAct.quantity)).toFixed(2) * 1), 0);
    }


    return (
        <>
            <CContext.Provider value={{ itemsCart, addItem, removeItem, clearAll, Total }}> {children} </CContext.Provider>
        </>
    )
}
