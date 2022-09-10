import { useState } from 'react';
import '../styles/Cards.css'
import { ItemCount } from "./ItemCount";


export const ItemDetail = ({ image, name, price, reviews, average, onAdd }) => {
    const [cantCart, setCantCart] = useState(0)

    return (
        <>
            <img className="img-detail" src={image} alt="" />
            <h1> {name} </h1>
            <h2> Precio por unidad: {price} </h2>
            {/* <h2> Reseñas positivas: {reviews} </h2>
            <h2> Promedio de compra: {average.toFixed(2) * 10}% </h2> */}
            <br />

            <ItemCount stock={6} initial={1} setCantCart={setCantCart} cantCart={cantCart} />
            <h3>
                cantidad a comprar: {cantCart}
            </h3>
        </>
    )
}
