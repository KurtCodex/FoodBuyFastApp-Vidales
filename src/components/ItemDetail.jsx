

import '../styles/Cards.css'
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ image, name, price, reviews, average }) => {


    return (
        <>
            <img className="img-detail" src={image} alt="" />
            <h1> {name} </h1>
            <h2> Precio por unidad: {price} </h2>
            <h2> Reseñas positivas: {reviews} </h2>
            <h2> Promedio de compra: {average.toFixed(2) * 10}% </h2>

            <ItemCount stock={6} initial={1} />

        </>
    )
}
