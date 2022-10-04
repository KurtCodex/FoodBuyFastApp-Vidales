import React, { useState, useContext } from 'react';
import { ItemCount, CContext } from "./index";

import '../styles/Cards.css';

export const ItemDetail = ({ image, name, price, reviews, average, item }) => {
    const [cantCart, setCantCart] = useState(1)
    const { addItem } = useContext(CContext);

    const onAdd = () => {
        addItem(item, cantCart)
    }

    return (
        <>
            <img className="img-detail" src={image} alt="" />
            <h1> {name} </h1>
            <h2> Precio por unidad: {price} </h2>
            <h2> Reseñas positivas: {reviews} </h2>
            <h2> Promedio de compra: {average}% </h2>
            <br />

            <ItemCount stock={6} initial={1} setCantCart={setCantCart} cantCart={cantCart} />

            <div className='container-button-addcart'>
                <button onClick={() => { onAdd() }} className='card-button-addcart'> Añadir al carrito!</button>
            </div>
        </>
    )
}
